// components/Header.js
import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css'; // Импортируйте стили

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>MusicApp</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/explore">
              Explore
            </Link>
          </li>
          <li>
            <Link href="/library">
              Library
            </Link>
          </li>
          <li>
            <Link href="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
