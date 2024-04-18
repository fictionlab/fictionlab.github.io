import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import type {Props as LinkProps} from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';

export interface LinkButtonProps extends LinkProps {
  icon?: string;
  description?: string;
}


export default function LinkButton( props:LinkButtonProps ) {

  function get_icon( props:LinkButtonProps ) {
    if ( props.icon )
      return props.icon;
    if( isInternalUrl( props.to ) )
      return '📝';
    else
      return '🔗'
  }

  function get_description( props:LinkButtonProps ) {
    if( props.description )
      return props.description;
    else
      return props.to;
  }

  var text:string;

  if( !props.description )
    text = props.to;
  else
    text = props.description;

  return (
    <Link to={props.to} className={styles.ButtonContainer}>
        <div className={styles.IconContainer}>
            {get_icon( props )}
        </div>
        <div className={styles.TextContainer}>
          {get_description( props )}
        </div>
        <div className={styles.ArrowContainer}>
          <i className={styles.Arrow}> </i>
        </div>
    </Link>
  );
}