import style from './header.module.scss';
import { useState } from 'react'

export function Header() {

    return (
        <div className={style.headerContainer}>
            <h1>
                Aldenor Junior
            </h1>
            <nav className={style.about}>
                <a>Sobre</a>
                <a>Tecnologias</a>
            </nav>

        </div>
    )
}