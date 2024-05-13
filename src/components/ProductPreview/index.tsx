import React from 'react';
import styles from './styles.module.css';

export interface ProductPreviewProps {
  shopUrl: string;
  imageSrc: string;
  width: number;
  height: number;
  alt: string;
  title?: string;
  price?: number;
  description?: string;
}

export default function ProductPreview(props: ProductPreviewProps) {
  const link = props.shopUrl;
  const title = props.title;
  const description = props.description;
  const price = props.price;
  const image = props.imageSrc;

  return (
    <a href={link} className={styles.ButtonContainer}>
      <div className={styles.ImageContainer}>
        <img
          loading="eager"
          className={styles.Image}
          src={image}
          alt="00188 MEB cover for Leo Rover"
          width="1000"
          height="750"
        />
      </div>
      <div className={styles.TextContainer}>
        <div className={styles.Title}>{title}</div>
        {price ? <div className={styles.Price}>Price: {price} EUR</div> : ''}
        {description ? (
          <div className={styles.Description}>{description}</div>
        ) : (
          ''
        )}
      </div>
    </a>
  );
}
