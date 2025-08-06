import styles from "./not-found.module.css";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {/* Ícone 404 animado */}
                <div className={styles.errorCodeContainer}>
                    <div className={styles.errorCodeBg}>404</div>
                    <div className={styles.errorCodeFront}>4🔍4</div>
                </div>

                {/* Título principal */}
                <h1 className={styles.title}>Página não encontrada</h1>

                {/* Descrição */}
                <p className={styles.description}>Ops! A página que você está procurando não existe ou foi movida para outro local.</p>
            </div>
        </div>
    );
}