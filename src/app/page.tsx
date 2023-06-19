'use client';

import styles from './page.module.css';
import Landing from './landing';
import NavBar from './navbar';

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Landing />
    </main>
  )
}
