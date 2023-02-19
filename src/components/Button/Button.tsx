import { ButtonProps } from "./Button.props"
import styles from "./style.module.css"


export const Button = ({className, children, ...props}: ButtonProps): JSX.Element => {
    return <button 
    className={styles.button}
    {...props}>{children}</button>
}