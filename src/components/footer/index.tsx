import styles from './footer.module.scss'

export function Footer() {

    return (
        <div className={styles.main}>
            <div className={styles.contatos}>
                <div className={styles.email}>
                    <h1>Email:</h1>
                    <p>aldenorjr500@yahoo.com.br</p>
                </div>
                <div className={styles.discord}>
                    <h1>Discord:</h1>
                    <p>ynexusxz</p>
                </div>
                <div className={styles.zap}>
                    <h1>Numero:</h1>
                    <p>(84) 99661-7957</p>
                </div>
            </div>
            <div className={styles.info}>
                <p>© 2019-2023 Aldenor de Oliveira Junior</p>
                <a href="https://github.com/AldenorJr/my-portfolio" target="_blank">Website Source Code</a>
            </div>
        </div>
    )
}