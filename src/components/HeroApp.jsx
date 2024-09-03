import { BuscadorApp } from "./BuscadorApp"
import { NavApp } from "./NavApp"

export const HeroApp = () => {
  return (
    <header className="bg-gradient-to-r from-green-400 to-green-600">
        <NavApp/>
        <BuscadorApp/>
    </header>
  )
}
