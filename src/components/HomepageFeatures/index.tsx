import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Pesquisa',
    Svg: require('@site/static/img/pequisa3.svg').default,
    description: (
      <>
        Pesquisas Sobre Padrões de Projetos.
        <br />
        <Link to="/docs/pesquisa">Saiba mais</Link>
      </>
    ),
  },
  {
    title: 'TCC',
    Svg: require('@site/static/img/tcc.svg').default,
    description: (
      <>
        Padrões de Projetos back-web.
        <br />
        <Link to="/docs/tcc">Saiba mais</Link>
      </>
    ),
  },
  {
    title: 'Sobre o Aluno',
    Svg: require('@site/static/img/sobre.svg').default,
    description: (
      <>
        Aluna MBA. Formada em Análise e Desenvolvimento de Sistemas.
        <br />
        <Link to="/docs/sobre">Saiba mais</Link>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
