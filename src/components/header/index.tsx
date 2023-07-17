import style from './header.module.scss';
import { Link } from 'react-scroll';

export function Header() {

    return (
        <div className={style.headerContainer}>
            <h1>
                Aldenor Junior
            </h1>
            <nav className={style.about}>
                <Link 
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Sobre</Link>
                <Link
                    activeClass="active"
                    to="tecnologia"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Tecnologias
                </Link>
            </nav>

        </div>
    )
}