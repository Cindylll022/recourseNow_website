import { Link } from "react-router-dom"
import { navLists } from "../constants"
import { logoImg } from "../utils"

const Navbar = () => {
  return (
    <header className = "w-full my-8 sm:mx-10 mx-5 flex justify-stretch">
        <nav className = "flex w-full">
            <img src = {logoImg} alt = "recourseNow" width = {50} height = {50} className = "ml-5"/>

            <div className = "flex flex-1 justify-end max-sm:hidden">
                {
                    navLists.map((nav) => (
                        <Link to={nav.url} key = {nav.id} className = "px-5 text-md cursor-pointer text-white hover:text-blue-300">
                            {nav.page}
                        </Link>
                    ))
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar