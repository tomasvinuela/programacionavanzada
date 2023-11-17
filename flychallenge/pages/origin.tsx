import React, { useMemo, useState } from 'react';
import type { Viaje } from '../types';
import { GetStaticPaths, GetStaticProps } from 'next';
import api from '../api';
import { ParsedUrlQuery } from "querystring";
import styles from "../styles/App.module.css"

type Props = {
    viajes: Viaje[]
};

type Params = ParsedUrlQuery & {
    origin: string;
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({params}) => {
    const viajes = await api.viajes.list(params?.origin!);

    viajes.sort((a, b) => a.price - b.price)

    return {
        props: {
            viajes: viajes,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [], 
        fallback: 'blocking',
    };
};

const OriginPage: React.FC<Props> = ({viajes}) => {
    const [sort, setSort] = useState<"price" | "days">("price");
    const [limit, setLimit] = useState<number>(50)
    const matches = useMemo(() =>{
        const draft = [...viajes];
        return draft.sort((a, b) => a[sort] - b[sort]).slice(0, limit);
    }, [sort, viajes, limit]);
    
    
    
    return (
    <>
        <table>
            <thead>
                <tr>
                    <td>Destino</td>
                    <td
                    style={{color: sort == "days" ? "purple" : "inherit"}} 
                        onClick={() => setSort("days")}
                        >Dias
                    </td>
                    <td
                    style={{color: sort == "price" ? "purple" : "inherit"}} 
                        onClick={() => setSort("price")}
                        >Precio
                    </td>
                </tr>
            </thead>
            <tbody>
                {matches.map(viaje => (
                    <tr key={viaje.id} className={styles.simpleton}>
                        <td>{viaje.origin.destination}</td>
                        <td>{viaje.days}</td>
                        <td>{Number(viaje.price).toLocaleString('es-AR', {style: "currency", currency: 'ARS'})}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        {viajes.length > limit && <button onClick={() => setLimit(limit => limit + 50)}> Cargar más </button>}
    </>
    );
};

export default OriginPage;