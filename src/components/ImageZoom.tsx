import { useRef, ComponentProps, RefCallback } from 'react';
import mediumZoom, { Zoom } from 'medium-zoom';

export interface ImageZoomProps extends ComponentProps<'img'> {}

export default function ImageZoom(props: ImageZoomProps): JSX.Element {
  const { ...propsRest } = props;
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

    if (node) {
      zoom.attach(node);
    } else {
      zoom.detach();
    }
  };

  return <img {...propsRest} ref={attachZoom} />;
}
