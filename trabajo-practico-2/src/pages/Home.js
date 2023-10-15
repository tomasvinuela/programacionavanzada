import getData from '../utils/getData';

const Home =  async () => {

    const characters = await getData();
    console.log (characters)
    const view =  `
        <div class="Characters">
        ${characters.data.map(character => `
        <article class="Character-item">
            <a href="#/${character.id}/">
            <h2>${character.name}</h2>
            </a>
            <h4>Symbolo:"${character.symbol}" </span></ </h4>
            <h4>Nombre: "${character.name}" </span></</h4>
            <h4>ID Nombre: <span>"${character.nameid}" </span></</h4>
            <h4>Rank: <span> "${character.rank}"</span></</h4>
            <h4>Precio USD:"${character.price_usd}" <span> </span></</h4>
        </article>
                `).join('') }
        </div>  
            `
    return view;
}

export default Home;