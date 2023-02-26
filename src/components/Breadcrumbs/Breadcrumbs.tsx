import Link from "next/link"
import Image from "next/image"
import { BreadCrumbsProps } from "./Breadcrumbs.props"
import styles from "./style.module.scss"
import cn from "classnames"


export const Breadcrumbs = ({ data, ...props }: BreadCrumbsProps): JSX.Element => {



    return (
        <div className={styles.breadCrumbs}>
            <div>
                <Link href='/'>
                    Главная
                </Link>
            </div>

            {data.map((link, key) => (
                <div key={key} className={cn({
                    [styles.active] : data.length === (key + 1)
                })}>
                    <Image
                        priority
                        src='/svg/breadCrumbsArrow.svg'
                        width={24}
                        height={24}
                        alt='Arrow'
                    />
                    <Link href={link.path}>{link.title}</Link>
                </div>
            ))}
        </div>
    )
}