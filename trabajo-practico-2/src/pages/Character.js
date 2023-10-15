import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character =  async () => {

    const id = getHash();
    const character = await getData(id);
    console.log (character)
    const view = `
        <div class="Characters-inner">
            <article class="Character-card">
                <h2>${character[0].name}</h2>
            </article>

            <article class="Characters-card">
                <h3>Symbolo:<span>"${character[0].symbol}" </span></ </h3>
                <h3>Nombre: <span> "${character[0].name}" </span></</h3>
                <h3>ID Nombre: <span>"${character[0].nameid}" </span></</h3>
                <h3>Rank: <span> "${character[0].rank}"</span></</h3>
                <h3>Precio USD:"${character[0].price_usd}" <span> </span></</h3>
                <h3>Porcentaje de cambio (24 horas):"${character[0].percent_change_24h}" <span> </span></</h3>
                <h3>Porcentaje de cambio (1 hora):"${character[0].percent_change_1h}" <span> </span></</h3>
                <h3>Porcentaje de cambio (7 dias):"${character[0].percent_change_7d}" <span> </span></</h3>
                <h3>Precio Bitcoin:"${character[0].price_btc}" <span> </span></</h3>
                <h3>Maximo alcanzado en el mercado:"${character[0].market_cap_usd}" <span> </span></</h3>
                <h3>Volumen 24:"${character[0].volume24}" <span> </span></</h3>
                <h3>Volumen 24a:"${character[0].volume24a}" <span> </span></</h3>
                <h3>Supply C:"${character[0].csupply}" <span> </span></</h3>
                <h3>Supply T:"${character[0].tsupply}" <span> </span></</h3>
                <h3>Supply M:"${character[0].msupply}" <span> </span></</h3>
            </article>
        </div> 
    `
    return view
};
export default Character;