import { useState } from "react"

export const InputBusqueda = ({onNewPelicula}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChangue = ({target}) => {
        setInputValue(target.value)
        console.log(target.value);
    }

    const onSubmit = () => {
        event.preventDefault()
        const newInputValue = inputValue.trim()
        if(newInputValue.length <= 1) return
        onNewPelicula(newInputValue)
        setInputValue('')
    }
    

    return (
        <form className="flex justify-center" onSubmit={onSubmit}>
            <input 
                className="border-none outline-none py-2 px-2 w-72" 
                type="text"
                placeholder="Buscar peliculas"
                value={inputValue}
                onChange={onInputChangue}
            />
        </form>
    )
}
