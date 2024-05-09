import React, { useState } from 'react';
import styles from './styles.module.css';

export interface FusionEmbedProps {
    url: string;
    embedTitle: string;
    loading?: 'lazy' | 'eager';
    img?: string;
    alt?: string;
    img_width?: number;
    img_height?: number;
  }

export default function FusionEmbed( props: FusionEmbedProps ) {

    const url = props.url;
    const loading = props.loading || 'lazy';
    const img = props.img || '/img/misc/cube.webp';
    const alt = props.alt || 'placeholder for 3D model';
    const img_width = props.img_width || 1920;
    const img_height = props.img_height || 1080;
    const title = props.embedTitle || "3D CAD model";
    const [buttonClicked, setButtonClicked] = useState(false);
    const [imageHide, setImageHide] = useState(false);
    const [iframeLoaded, setiframeLoaded] = useState(false);

    if( props.img ) {
        if( !props.img_width )
            throw 'No image width specified!'
        if( !props.img_height )
            throw 'No image height specified!'
    }

    
    const handleButtonClick = () => {
        setButtonClicked(true);
        setImageHide(false);
      };

    const handleIframeLoad = () => {
        setTimeout(() => {
            setiframeLoaded(true);
        }, 1000);
        setTimeout(() => {
            setImageHide(true);
        }, 2000);
    }
    
    return (
        <div className={styles.embedContainer}>
            <div className={styles.embed}>
            {buttonClicked && (
                <iframe
                    className={`${styles.iframe} ${iframeLoaded ? styles.iframeVisible : ''}`}
                    src={url + '?mode=embed'}
                    title={title}
                    allowFullScreen={true}
                    onLoad={handleIframeLoad}
                />
            )}
            {!imageHide && (
                <a
                    className={styles.a}
                    onClick={handleButtonClick}
                >
                    <img
                        loading={loading}
                        className={`${styles.image} ${iframeLoaded ? styles.imageHidden : ''}`}
                        src={img}
                        alt={alt}
                        width={img_width}
                        height={img_height}
                    />
                    <span className={`${styles.text} ${iframeLoaded ? styles.imageHidden : ''}`}>
                        Click to load 3D model
                    </span>
                </a>
            )}
            </div>
        </div>
    );
}