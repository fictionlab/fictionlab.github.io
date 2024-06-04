import React from 'react';
import styles from './styles.module.css';

export default function FlexTable({ children, style }) {
  return (
    <div className={styles.flexTable} style={style}>
      {children}
    </div>
  );
}
