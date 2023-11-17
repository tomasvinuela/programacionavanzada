
import styles from '../styles/App.module.css'
import { GetStaticProps, NextPage } from 'next'
import api from '../api';
import { Vuelo } from '../types';
import Link from 'next/link';



type Props = {
  origins: Vuelo["origin"][];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const origins = await api.origin.list();

  return{
    props: {
      origins,
    },
  };
}

let lugarSalida: Map<string, string> = new Map();

lugarSalida.set("COR", "Cordoba");
lugarSalida.set("EPA", "España");
lugarSalida.set("MDZ", "Mendoza");
lugarSalida.set("BRC", "Brasil");


const Home: NextPage<Props> = ({origins}) => {
  console.log(origins)
  return (
    <div className={styles.grid}>
      {origins.map((origin) =>(
        <Link legacyBehavior key={origin} href={`/${origin}`}>
          <a id="link" className={styles.card}>
            <h2>{lugarSalida.get(origin)}</h2>
            <p>Elija esta opcion su usted reside en {lugarSalida.get(origin)}</p>
          </a>
        </Link>

      ))}
    </div>
  )
}
export default Home;