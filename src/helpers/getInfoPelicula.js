export const getInfoPelicula = async(peliculaQuery) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=aa93ecba59d0173333058375019e3d9d&language=es-ES&query=${peliculaQuery}&page=1`
    const respuesta = await fetch(url);
    const data = await respuesta.json()
    const results = await data.results
    return results
  }