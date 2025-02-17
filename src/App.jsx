import { Post } from './components/Post';
import { Header } from "./components/Header";
import { Sidebar } from './components/Sidebar';

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://s2-oglobo.glbimg.com/BWNU2znR6SpZ21KXvjL_6Vjb_bw=/0x0:1170x1451/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/R/y/eDwk03QJyzb52G3OaOOg/whatsapp-image-2024-02-05-at-13.05.25.jpeg',
      name: "Neymar Junior",
      role: "Soccer Player"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content:'Acabei de assinar um contrato com o Santos, to de volta à Vila 🐋' },
      { type: 'link', content: '#EhTois'} 
    ],
    publishedAt: new Date('2025-01-28 08:37:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://media.contentapi.ea.com/content/dam/ea/f1/f1-24/common/driver-ratings/driver-small-portraits/7.png',
      name: "Charles Leclerc",
      role: "F1 Driver - Ferrari"
    },
    content: [
      { type: 'paragraph', content: 'Eai pessoal 👋'},
      { type: 'paragraph', content:'Bora para mais um ano de Ferrari com agora meu parceiro Lewis Hamilton' },
      { type: 'link', content: '#EssereFerrari'} 
    ],
    publishedAt: new Date('2025-01-26 09:45:00')
  }
]

import styles from "./App.module.css";

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
            {posts.map(post => {
              return (
                <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                />
              )
            })}
        </main>
      </div>
    </div>
  )
}
