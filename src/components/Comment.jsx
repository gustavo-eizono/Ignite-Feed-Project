import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './avatar';

export function Comment({ content, onDeleteComment }){
    function handleDeleteComment (){
        console.log("deletar");
        onDeleteComment(content);
    }
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://startse-uploader.s3.us-east-2.amazonaws.com/medium_Texto_do_seu_paragrafo_3_5d9584fd88.jpg" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Cristiano Ronaldo</strong>
                            <time title="14 de janeiro às 08:18" datetime="2025-01-14 08:18:00">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}