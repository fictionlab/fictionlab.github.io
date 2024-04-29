import { Props as ThemedImageProps } from '@theme/ThemedImage';
import { ThemedComponent } from '@docusaurus/theme-common';
import ImageZoom, { ImageZoomProps } from '@site/src/components/ImageZoom';

export interface ThemedImageZoomProps extends ThemedImageProps, ImageZoomProps {
  caption?: string;
  allowZoom?: boolean;
  figStyle?: object;
}

export default function ThemedImageZoom(props: ThemedImageZoomProps) {
  const { sources, className: parentClassName, ...propsRest } = props;

  return (
    <ThemedComponent className={parentClassName}>
      {({ theme }) => <ImageZoom src={sources[theme]} {...propsRest} />}
    </ThemedComponent>
  );
}
