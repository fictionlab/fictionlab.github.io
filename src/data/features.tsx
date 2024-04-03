export type FeatureItem = {
  name: string;
  image: {
    src: string;
    width: number;
    height: number | string;
    hyperlink: string;
    style: object;
  };
  text: JSX.Element;
};

const FEATURES: FeatureItem[] = [
  {
    name: 'Leo Rover',
    image: {
      src: '/img/website_images/leo-rover.webp',
      width: 300,
      height: 'auto',
      hyperlink: '/docs/leo-rover/getting-started',
      style: { aspectRatio: '300/300' },
    },
    text: (
      <span>
        `Ready to go open-source 4x4 mobile robot. <br /> Weatherproof | ROS
        based | Built-in UI and video streaming`
      </span>
    ),
  },
  {
    name: 'Rapha Rover',
    image: {
      src: '/img/website_images/rapha-rover.webp',
      width: 300,
      height: 'auto',
      hyperlink: '/docs/rapha-rover/specification',
      style: { aspectRatio: '300/300' },
    },
    text: (
      <span>
        `Research-ready platform designed to streamline development of various
        robotic projects, including inspection, agriculture, construction, and
        more.`
      </span>
    ),
  },
];

export default FEATURES;
