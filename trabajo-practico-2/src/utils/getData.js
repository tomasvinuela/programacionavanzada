const API = 'https://api.coinlore.net/api/tickers/';

const getData = async (id) => {
    const apiURL = id ? `${'https://api.coinlore.net/api/ticker/?id='}${id}` : API;
    

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('Fetch Error..!!', error);
    };
    
};

export default getData;