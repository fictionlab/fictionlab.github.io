import { useRef, ComponentProps, RefCallback } from 'react';
import mediumZoom, { Zoom } from 'medium-zoom';
import styles from './styles.module.css';

export interface ImageZoomProps extends ComponentProps<'img'> {
  caption?: string;
  allowZoom?: boolean;
}

export default function ImageZoom(props: ImageZoomProps): JSX.Element {
  const { allowZoom, caption, ...propsRest } = props;
  const zoomRef = useRef<Zoom | null>(null);

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
    if (node && allowZoom != false) {
      zoom.attach(node);
    } else {
      zoom.detach();
    }
  };

  return (
    <figure className={styles.figure}>
      <img {...propsRest} ref={attachZoom} />
      {caption && (
        <figcaption className={styles.figCaption}>{caption}</figcaption>
      )}
    </figure>
  );
}
