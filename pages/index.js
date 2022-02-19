import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Posts from '../components/Posts';

export default function Home() {
  return (
    <div>
      <Posts />
    </div>
  )
}
