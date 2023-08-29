//Sacar titulo original(original_title), descripcion(overview) y la path del poster de la pelicula(poster_path)

const apikey = '8fa8fe67b5f6b84aedfe04b2350639db'

const peticion = fetch('https://api.themoviedb.org/3/movie/550?api_key=' + apikey)

peticion
    .then(resp => resp.json() )
    .then( (json) => {

        const titulo = json.original_title;
        const title = document.createElement('title');
        title = titulo
        document.body.appendChild(title)

        const descripcion = json.overview;
        const overview = document.createElement('overview');
        overview = descripcion
        document.body.appendChild(overview)
        
        comienzo = ''
        const {url} = comienzo + json.poster_path
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);



    })
    .catch(console.warn);
