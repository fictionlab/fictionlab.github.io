import React from 'react';
import styles from './styles.module.css';

export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  mobileColumns?: 1 | 2;
}

export default function FlexTableItem({
  children,
  style,
  mobileColumns,
}: DivProps) {
  let className;
  if (mobileColumns != 2) className = styles.flexTableItem1;
  else className = styles.flexTableItem2;
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
