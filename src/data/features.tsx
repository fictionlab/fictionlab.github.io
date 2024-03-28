export type FeatureItem = {
  name: string;
  image: {
    src: string;
    width: number;
    height: number;
    hyperlink: string;
  };
  text: JSX.Element;
};

const FEATURES: FeatureItem[] = [
  {
    name: 'Leo Rover',
    image: {
      src: '/img/website_images/leo-rover.webp',
      width: 300,
      height: 300,
      hyperlink: '/docs/leo-rover/specification',
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
      height: 300,
      hyperlink: '/docs/rapha-rover/specification',
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
