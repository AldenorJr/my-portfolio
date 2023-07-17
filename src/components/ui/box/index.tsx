import styles from "./styles.module.scss";

interface boxProps {
    path: string;
    name: string;
    subMessage: string;
}

export function BoxTecnologia({path, name, subMessage, ...rest}: boxProps) {
    return (
        <div className={styles.boxMain} {...rest}>
            <h1>{name}</h1>
            <img src={path} alt="" />
            <p>{subMessage}</p>
        </div>
    )
}