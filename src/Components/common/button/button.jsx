import styles from './button.module.css';
import clsx from "clsx";

const Button = ({children, variant='primary', elevated, size='medium', onClick}) => {
    return(
        <div onClick={onClick} className={clsx(styles.container, styles[variant], elevated ? styles.elevated : false, styles[size])}>
            {children}
        </div>
    )
}

export default Button;