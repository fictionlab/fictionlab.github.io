import React from 'react';
import styles from './styles.module.css';

export default function FlexTableItem({ children, width }) {
  return (
    <div
      className="flexTableItem"
      style={{
        float: 'left',
        width: width,
      }}
    >
      {children}
    </div>
  );
}
