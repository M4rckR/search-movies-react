import { useState } from "react"
import { InputBusqueda } from "./InputBusqueda"
import { PeliculasGrid } from "./PeliculasGrid"
export const BuscadorApp = () => {

  const [peliculaItem, setPeliculaItem] = useState([])

  const onAddPelicula = (newPelicula) => {
    if(peliculaItem.includes(newPelicula)) return;
    console.log(newPelicula);
    setPeliculaItem([newPelicula, ...peliculaItem])
  }

  return (
    <>
        <section className="bg-[url('/background-hero.jpg')] bg-cover h-[430px] bg-no-repeat bg-center flex items-center">
            <div className="container mx-auto px-4 md:px-0 flex flex-col gap-4">
                <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold stroke-black str text-center">Buscador de Peliculas</h1>
                {/* Aqui puse el buscador en otro componente */}
                <InputBusqueda onNewPelicula={onAddPelicula}/>
            </div>
        </section>
        <section  className="min-h-[400px] bg-slate-200 p-1">
          <div className="container mx-4 md:mx-auto mt-6">
            { peliculaItem.map((pelicula, index)=> (
              <PeliculasGrid
                key = {index}
                pelicula={pelicula}
              />
            ))
            }
          </div>
        </section>
    </>

  )
}
