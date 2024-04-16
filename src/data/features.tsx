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
      width: 1000,
      height: 1000,
      hyperlink: '/docs/leo-rover/getting-started',
      style: { width: 300, height: 'auto' },
    },
    text: (
      <span>
        Ready to go open-source 4x4 mobile robot. <br /> Weatherproof | ROS
        based | Built-in UI and video streaming
      </span>
    ),
  },
  {
    name: 'Rapha Rover',
    image: {
      src: '/img/website_images/rapha-rover.webp',
      width: 1000,
      height: 1000,
      hyperlink: '/docs/rapha-rover/specification',
      style: { width: 300, height: 'auto' },
    },
    text: (
      <span>
        Research-ready platform designed to streamline development of various
        robotic projects, including inspection, agriculture, construction, and
        more.
      </span>
    ),
  },
];

export default FEATURES;
