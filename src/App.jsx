import React from "react";
import Header from "./components/Header";
import Post from "./post";
import './global.css';
import styles from './App.module.css';
import Sidebar from "./components/Sidebar";

export default function App() {
  return <>
   <Header/>
   <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <Post 
         autor = 'klaercio' 
         resumo = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur illo officiis hic dignissimos nihil eaque dolores nobis impedit velit, necessitatibus incidunt rerum esse tempore voluptatem ducimus in alias reiciendis optio.'
        />
        <Post 
         autor = 'joaozim' 
         resumo = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur illo officiis hic dignissimos nihil eaque dolores nobis impedit velit, necessitatibus incidunt rerum esse tempore voluptatem ducimus in alias reiciendis optio.'
        />
      </main>
   </div>
  </>
}



