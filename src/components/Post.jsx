import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css'
import { Comment } from './Comment';
import { Avatar } from './avatar';
import { useState } from 'react';


export function Post({ author, publishedAt, content }){
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    const [comments, setComments] = useState([
        'Post muito legal meu fera!'
    ])

    const [newCommentText, setNewCommentText] = useState('');

    function handleNewCommentChange(){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleCreateNewComment (){

        event.preventDefault();
        setComments([...comments, newCommentText])
        setNewCommentText('');
    }

    function deleteComment (commentToDelete){
        const commentsWithtoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete; //como remover itens de um state ao atualizar o state para um novo valor sem esse comentario na lisa
        })
        setComments(commentsWithtoutDeletedOne)
    }

    function handleNewCommentInvalid (){
        event.target.setCustomValidity("Este campo é obrigatório!");
    }

    const isNewCommentEmpty = newCommentText.length == 0;

    return(
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} datetime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type=='link'){
                        return (
                            <p key={line.content}>
                                <a href="">{line.content}</a>
                            </p>
                        )
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea
                    name="comment"
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required //filtra para que esse campo esteja preenchido, diferente de vazio
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (<Comment 
                    key={comment} 
                    content={comment} 
                    onDeleteComment={deleteComment}
                    />
                )
                })}
            </div>
        </article>
    )
}