import React from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import './global.css';
import styles from './App.module.css';
import Sidebar from "./components/Sidebar";

export default function App() {

  const posts = [
    {
        id: 1,
        autor: {
            avatarUrl: 'https://github.com/klaercio.png',
            name: 'Klaércio',
            cargo: 'Web Developer'
        },
        content: [
            { type: 'paragraph', content:'Fala galeraa 👋' },
            { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2022-12-11 13:43:00')
    },
    {
        id: 2,
        autor: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Diego',
            cargo: 'CTO at RocketSeat'
        },
        content: [
            { type: 'paragraph', content:'Salve pessoal! 👋' },
            { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2022-12-11 12:53:00')
    },
]

  return <>
   <Header/>
   <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {posts.map(post => (
          <Post
            autor = {post.autor}
            content = {post.content}
            publishedAt = {post.publishedAt}
          />
        ))}
      </main>
   </div>
  </>
}



