export const BuscadorApp = () => {
  return (
    <>
        <section className="bg-[url('/background-hero.jpg')] bg-cover h-[430px] bg-no-repeat bg-center flex items-center">
            <div className="container mx-auto px-4 md:px-0 flex flex-col gap-4">
                <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold stroke-black str text-center">Buscador de Peliculas</h1>
                <form className="flex justify-center">
                    <input className="border-none outline-none py-2 px-2 w-72" type="text"/>
                </form>
            </div>
        </section>
        <section  className="min-h-[400px] bg-slate-200">

        </section>
    </>

  )
}
