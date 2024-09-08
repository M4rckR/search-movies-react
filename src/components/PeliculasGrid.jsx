/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { getInfoPelicula } from "../helpers/getInfoPelicula"

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original';

export const PeliculasGrid = ({pelicula}) => {

  const [peliculas, setPeliculas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getPeliculas = async() => {
    try {
      const data = await getInfoPelicula(pelicula)
      setPeliculas(data.slice(0,10))
      setLoading(false)
      console.log(data);
    }
    catch(err){
      setError(err)
      setLoading(false)
    }
  }

  useEffect(() => {
    getPeliculas()
  }, [pelicula])

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar la información: {error.message}</p>; // Muestra el mensaje de error
  

  return (
    <section>
        {peliculas.length > 0?(
          peliculas.map(({id, title, backdrop_path,overview}) => (
            <div key={id}>
              <h5>{title}</h5>
              <p>{overview}</p>
              <img src={`${BASE_IMG_URL}${backdrop_path}`} alt={title} />
            </div>
          ))
        ):(
          <p>No se encontraron resultado</p>
        )
        }
        
    </section>
  )
}
