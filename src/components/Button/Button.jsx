import styles from './Button.module.css';

function Button({textBtn}) {

    return (
        <button className={`${styles.button} ${styles.accent}`}>{textBtn}</button>
    );
}

export default Button;