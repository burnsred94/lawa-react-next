import { HeaderProps } from "./Header.props"
import Image from "next/image"
import styles from "./style.module.scss"


export const Header = ({ ...props }: HeaderProps): JSX.Element => {
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <div className={styles.logo}>
                    <Image
                        priority
                        src="svg/logo.svg"
                        width={130}
                        height={30}
                        alt="Logo"
                    />
                </div>
                <div className={styles.headerContacts}>
                    <Image
                        priority
                        src="svg/mobile.svg"
                        width={24}
                        height={24}
                        alt="Mobile"
                    />
                    <a href="tel: +375 (29) 305-65-58">+375 (29) 305-65-58</a>
                </div>
                <div  className={styles.headerContacts}>
                    <Image
                        priority
                        src="svg/mail.svg"
                        width={24}
                        height={24}
                        alt="Mail"
                    />
                    <a href="mailto: hello@lawa.by">hello@lawa.by</a>
                </div>
                <div className={styles.headerBurger}>
                    <Image
                        priority
                        src="svg/burger.svg"
                        width={38}
                        height={24}
                        alt="Mail"
                    />
                </div>
            </div>
        </header>
    )
}