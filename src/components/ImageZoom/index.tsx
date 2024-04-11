import { useRef, ComponentProps, RefCallback } from 'react';
import mediumZoom, { Zoom } from 'medium-zoom';
import styles from './styles.module.css';

export interface ImageZoomProps extends ComponentProps<'img'> {
  caption: string;
}

export default function ImageZoom(props: ImageZoomProps): JSX.Element {
  const { ...propsRest } = props;
  const zoomRef = useRef<Zoom | null>(null);
  const figureCaption = propsRest.caption;

  function getZoom() {
    if (zoomRef.current === null) {
      zoomRef.current = mediumZoom({
        background: 'var(--plugin-image-zoom-background-color)',
      });
    }

    return zoomRef.current;
  }

  const attachZoom: RefCallback<HTMLImageElement> = (node) => {
    const zoom = getZoom();

    if (node) {
      zoom.attach(node);
    } else {
      zoom.detach();
    }
  };

  if (figureCaption) {
    propsRest.caption = undefined;
    return (
      <figure className={styles.figure}>
        <img {...propsRest} ref={attachZoom} />
        <figcaption className={styles.figCaption}>{figureCaption}</figcaption>
      </figure>
    );
  } else
    return <img className={styles.image} {...propsRest} ref={attachZoom} />;
}
