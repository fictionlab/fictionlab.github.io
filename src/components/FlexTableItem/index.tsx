import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function FlexTableItem({ children, width = '50%' }) {
  return (
    <div
      className={styles.flexTableItem}
      style={{
        width: width,
      }}
    >
      {children}
    </div>
  );
}
