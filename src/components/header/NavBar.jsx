import { Carrito } from "./Carrito"
export const NavBar = () => {
    return (
        <header>
            <nav className="nav">
                <ul className="nav-menu">
                    <li><a className="nav-link" href="#">Inicio</a></li>
                    <li><a className="nav-link" href="#">Celulares</a></li>
                    <li><a className="nav-link" href="#">Computadoras</a></li>
                    <li><a className="nav-link" href="#">Tablets</a></li>
                </ul>
            </nav>
        </header>
    )
}


