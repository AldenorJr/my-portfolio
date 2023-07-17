import styles from './styles.module.scss'
import { BsPenFill } from 'react-icons/bs'


export function About() {

    return (
        <main className={styles.main} data-aos="fade-right" id='about'>
            <div className={styles.me}>
                <h1>Hey!</h1>
                <p>
                    Eu sou Aldenor de Oliveira Junior, resido no Brasil. <br />
                    Eu sou completamente apaixonado por progamação, <br/>desde meus 14 anos venho me aprofudando na àrea. <br />
                    Sinta-se a vontade para entrar em contato comigo<br /> ou dar uma olhada no meus trabalhos e tecnologias abaixo.
                </p>
            </div>
            <div className={styles.formacao}>
                <h1>Universidade & Cursos</h1>
                <p>
                    Estou cursando Ciência da Computação<br/> em uma das melhores universidades <br/> do estado do Rio Grande do Norte <br/>
                    Tenho cursos em instituições cobiçadas <br/> e muito mais!
                </p>
                <div className={styles.logos}>
                    <img src="/logo-udemy.svg"/>
                    <img src="/Universidade-Potiguar.svg"/>
                </div>
            </div>
        </main>
    )


}