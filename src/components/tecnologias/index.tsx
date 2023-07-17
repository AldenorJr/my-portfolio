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
          path: "/react.png",
          name: "React",
          subMessages: "Tecnologia principal utilizada no site, juntamente com o Next.js para o desenvolvimento front-end."
        },
        {
          path: "/vue-logo.png",
          name: "Vue.js",
          subMessages: "Além do React, também utilizo o Vue.js em projetos pessoais como outra framework de front-end."
        },
        {
          path: "/java.png",
          name: "Java",
          subMessages: "Minha primeira linguagem de programação e aquela com a qual tenho maior afinidade. Trabalho com Spring Boot e Spigot."
        },
        {
          path: "/nodejs.svg",
          name: "Node.js",
          subMessages: "Principalmente relacionado ao back-end, usando o Express.js e o Prisma.io para criar APIs RestFull."
        },
        {
          path: "/js.svg",
          name: "JavaScript",
          subMessages: "Utilizado desde a criação de websites básicos até projetos avançados, incluindo o uso do Axios para fazer requests."
        },
        {
          path: "/ts.png",
          name: "TypeScript",
          subMessages: "Prefiro linguagens tipadas, como o Java, então a maioria dos meus projetos front-end é feita com TypeScript."
        },
        { 
          path: "/jwt.svg",
          name: "Jwt.io",
          subMessages: "Uso o JWT para garantir um alto grau de segurança e autenticação nos processos dos meus sites."
        }
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