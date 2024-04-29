import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl, { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import Features, { type FeatureItem } from '@site/src/data/features';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.bannerContainer)}>
        <div className={styles.bannerColumn}>
          <Heading as="h1">{siteConfig.title}</Heading>
          <Heading as="h3">{siteConfig.tagline}</Heading>
          <div className={styles.indexCtas}>
            <Link
              className="button button--primary"
              to="/docs/leo-rover/getting-started"
            >
              Get Started
            </Link>
          </div>
          <div className={styles.indexCtas}>
            <Link
              className="button button--primary"
              to="https://www.leorover.tech/shop"
            >
              Online shop
            </Link>
          </div>
        </div>
        <div className={clsx(styles.bannerLogo, styles.bannerColumn)}>
          <ThemedImage
            alt="Fictionlab logo"
            sources={{
              light: useBaseUrl('/img/branding/fictionlab_logo_white.svg'),
              dark: useBaseUrl('/img/branding/fictionlab_logo_gray.svg'),
            }}
            width="300px"
            height="auto"
            loading="eager"
            style={{ float: 'right', aspectRatio: '300/98' }}
          />
        </div>
      </div>
    </div>
  );
}

function Feature({
  feature,
  className,
}: {
  feature: FeatureItem;
  className?: string;
}) {
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <div className={clsx('col', className)}>
      <a href={feature.image.hyperlink}>
        <img
          className={styles.featureImage}
          alt={feature.name}
          width={Math.floor(feature.image.width)}
          height={feature.image.height}
          src={withBaseUrl(feature.image.src)}
          loading="eager"
          style={feature.image.style}
        />
      </a>
      <Heading as="h3" className={clsx(styles.featureHeading)}>
        {feature.name}
      </Heading>
      <p className="padding-horiz--md"> {feature.text} </p>
    </div>
  );
}

function FeaturesContainer() {
  const firstRow = Features.slice(0, 3);
  const secondRow = Features.slice(3);

  return (
    <div className="container text--center">
      <div className="row margin-top--lg margin-bottom--lg">
        {firstRow.map((feature, idx) => (
          <Feature feature={feature} key={idx} />
        ))}
      </div>
      <div className="row">
        {secondRow.map((feature, idx) => (
          <Feature
            feature={feature}
            key={idx}
            className={clsx('col--4', idx === 0 && 'col--offset-2')}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Fictionlab documentation`}
      description="Fictionlab documentation, tutorials & manuals for Leo, Rapha and Turtle Rovers. "
    >
      <HomepageHeader />
      <FeaturesContainer />
      <main></main>
    </Layout>
  );
}
