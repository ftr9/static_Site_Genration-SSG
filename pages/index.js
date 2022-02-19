import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Posts from '../components/Posts';

export default function Home(props) {
  return (
    <div>
      <Posts posts={props.posts} />

    </div>
  )
}


export const getStaticProps = async () => {

  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postData = await posts.json();

  return {
    props: {
      posts: postData
    }
  }
}
