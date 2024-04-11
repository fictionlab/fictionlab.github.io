import { Props as ThemedImageProps } from '@theme/ThemedImage';
import { ThemedComponent } from '@docusaurus/theme-common';
import ImageZoom, { ImageZoomProps } from '@site/src/components/ImageZoom';

export interface ThemedImageZoomProps
  extends ThemedImageProps,
    ImageZoomProps {}

export default function ThemedImageZoom(props: ThemedImageZoomProps) {
  const { sources, className: parentClassName, ...propsRest } = props;

  return (
    <ThemedComponent className={parentClassName}>
      {({ theme, className }) => (
        <ImageZoom src={sources[theme]} className={className} {...propsRest} />
      )}
    </ThemedComponent>
  );
}
