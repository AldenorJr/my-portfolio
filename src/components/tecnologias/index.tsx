import styles from './styles.module.scss';
import { BoxTecnologia } from '../ui/box';
import { motion } from 'framer-motion';
import { useEffect, useLayoutEffect, useState, useRef } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

export function Tecnologias() {
    interface Dados {
        path: string;
        name: string;
        subMessages: string;
    }

    const [boxes, setBoxes] = useState<Dados[]>([
        {
            path: '/react.png',
            name: 'React',
            subMessages: 'Esse site além de ser feito em React, eu costumo usar a tecnologia React junto com o Next.js para o desenvolvimento front-end',
        },
        {
            path: '/vue-logo.png',
            name: 'Vue.js',
            subMessages: 'Juntamente com o React, o Vue é uma framework de front-end que eu costumo usar em projetos pessoais',
        },
        {
            path: '/java.png',
            name: 'Java',
            subMessages: 'Java foi a primeira linguagem que eu aprendi, e a que eu tenho mais afinidade, desde Spring Boot a Spigot',
        },
        {
            path: '/nodejs.svg',
            name: 'Node.js',
            subMessages: 'Eu tenho conhecimento principalmente na parte de back-end com node.js, usando o Express.js juntamente com o Prisma.io para criar APIs RestFull',
        },
        {
            path: '/js.svg',
            name: 'JavaScript',
            subMessages: 'Para criação de websites básicos ao avançado, usa-ló para fazer requests com Axios, entre muitas outras coisas eu já usei o Java Script',
        },
        {
            path: '/ts.png',
            name: 'TypeScript',
            subMessages: 'Apesar do JavaScript ser fantástico, eu ainda prefiro linguagens tipadas, exemplo disso é o Java, então a maioria dos meus projetos front-end usá-lo',
        },
        { 
            path: '/jwt.svg',
            name: 'Jwt.io',
            subMessages: 'Uso o para proporcionar um grau elevador de segurança e autenticação nos processos dos meus sites.',
        },
    ]);
    const carousel = useRef() as React.MutableRefObject<HTMLInputElement>;;
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
        console.log(width)
    }, []);

    return (
        <main className={styles.main} id='tecnologia'>
            <div className={styles.carousel} data-aos="fade-left">
                <h1>Tecnologias usadas por mim </h1>
                <motion.div className={styles.boxes}
                ref={carousel} 
                whileTap={{ cursor: 'grabbing' }} 
                drag="x"
                dragConstraints={{right: 0, left: -width}}
                initial={{x: 300}}
                animate={{x: 0}}
                transition={{duration: 1.0}}
                >
                    {boxes.map((box, index) => (
                        <motion.div className={styles.motion} key={index}>
                            <BoxTecnologia path={box.path} name={box.name} subMessage={box.subMessages} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </main>
    );
}