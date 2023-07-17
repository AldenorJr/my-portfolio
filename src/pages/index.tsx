import styles from '../styles/style_home.module.scss'
import { Header } from '../components/header';
import { About } from '../components/about'
import {Tecnologias} from '../components/tecnologias'
import Head from 'next/head';
import { FaDiscord } from 'react-icons/fa';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { Footer } from '@/components/footer';

export default function Home() {

    return (
        <>
            <Head>
                <title>Aldenor Jr - Portfolio</title>
            </Head>
            <div className={styles.home}>
                <Header/>
                <main className={styles.main}>
                    <div className={styles.body}>
                        <div className={styles.image}>
                            <img className={styles.me} src='/fotominha.png' alt="Minha foto"/>
                        </div>
                        <h1>
                            Aldenor de Oliveira Junior
                        </h1>
                        <h2>
                            Estudante, programador e entusiasta
                        </h2>
                        <div className={styles.redesocias}>
                            <a href="https://github.com/AldenorJr" target="_blank"><AiFillGithub color="#fff" size={32} /></a>
                            <a href="https://www.linkedin.com/in/aldenoroliveira/" target="_blank"><AiFillLinkedin color="#fff" size={32}/></a>
                            <a href="https://github.com/AldenorJr" target="_blank"><FaDiscord color="#fff" size={32}/></a>
                            <a href="https://www.instagram.com/aldenoroliveira__/" target="_blank"><BsInstagram color='#fff' size={32}/></a>
                        </div>
                    </div>
                </main>
                <About/>
                <Tecnologias/>
                <Footer/>
            </div>
        </>
    )
}