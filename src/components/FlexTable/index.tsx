import React from 'react';
import styles from './styles.module.css';

export default function FlexTable({ children, width = '100%' }) {
  return (
    <div
      className={styles.flexTable}
      style={{
        width: width,
      }}
    >
      {children}
    </div>
  );
}
