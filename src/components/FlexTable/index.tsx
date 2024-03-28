import React from 'react';
import styles from './styles.module.css';

export default function FlexTable({ children, width = '100%' }) {
  return (
    <div
      className="flexTable"
      style={{
        display: 'flex',
        width: width,
      }}
    >
      {children}
    </div>
  );
}
