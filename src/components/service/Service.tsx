import { Paragraph } from "../Paragraph/Paragraph";
import Image from "next/image";
import { ServiceProps } from "./Service.props";
import styles from "./style.module.css"
import Link from "next/link";


export const Service = ({ children, link, img }: ServiceProps): JSX.Element => {
    return (
        <div className={styles.serviceBlock}>
            <div className={styles.serviceArrow}>
                <Link href={link ? link : '#'}>
                    <Image
                        priority
                        src="arrow45deg.svg"
                        width={25}
                        height={25}
                        alt="arrow"
                    />
                </Link>
            </div>
            <div className={styles.serviceText}>
                <Image
                    priority
                    src={img}
                    width={48}
                    height={48}
                    alt="arrow"
                />
                <Paragraph type='normal-text'>{children}</Paragraph>
            </div>
        </div>
    )
};