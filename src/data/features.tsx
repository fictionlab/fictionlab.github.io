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
        hyperlink: '/docs/robots/leo-rover',
      },
      text: (
        <p> Ready to go open-source 4x4 mobile robot. <br></br>
        Weatherproof | ROS based | Built-in UI and video streaming </p>
      ),
    },
    {
      name: 'Rapha Rover',
      image: {
        src: '/img/website_images/rapha-rover.webp',
        width: 300,
        height: 300,
        hyperlink: '/docs/robots/rapha-rover',
      },
      text: (
        <p> Research-ready platform designed to streamline development of various robotic projects, including inspection, agriculture, construction, and more. </p>
      ),
    },
];

export default FEATURES;