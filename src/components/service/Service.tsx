/* eslint-disable @next/next/no-img-element */
import { Paragraph } from "../Paragraph/Paragraph";
import Image from "next/image";
import { ServiceProps } from "./Service.props";
import styles from "./style.module.scss"
import Link from "next/link";
import cn from "classnames"
import { useState } from "react";


export const Service = ({ type, children, link, img, text, client_name, title }: ServiceProps): JSX.Element => {

    const [activeText, setActiveText] = useState(false)

    console.log(activeText)

    switch (type) {
        case 'card':
            return (
                <Link href={link ? link : '#'}>
                    <div className={styles.service}>
                        <div className={styles.serviceArrow}>
                            <Image
                                priority
                                src="/arrow45deg.svg"
                                width={25}
                                height={25}
                                alt="arrow"
                            />
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
                </Link>
            )
        case 'card-partners':
            return (
                <div className={styles.partners}>
                    <div className={styles.partnersCard}>
                        <div className={styles.partnersImage}>
                            <img
                                src={img}
                                alt="arrow"
                            />
                        </div>
                    </div>
                    <div className={cn({
                        [styles.partnersOpen]: activeText === true,
                        [styles.partnersText]: activeText === false
                    })}>
                        <Paragraph type='normal-text'>{children}</Paragraph>
                    </div>
                    <div className={styles.partnersLink}>
                        <Link href={link ? link : '#'} onClick={() => setActiveText(true)}>Подробнее
                            <Image
                                src='/arrowright.svg'
                                width={24}
                                height={24}
                                alt='arrow right'
                            />
                        </Link>
                    </div>
                    <span className={styles.partnersLine}></span>
                </div>
            )
        case 'card-review':
            return (
                <div className={styles.reviewBlock}>
                    <Paragraph type='normal-text'>{text}</Paragraph>
                    <button className={styles.reviewButton}>
                        Читать все
                        <Image
                            priority
                            src='/arrowdown.svg'
                            width={30}
                            height={30}
                            alt="arrow"
                        />
                    </button>
                    <div className={styles.reviewCredential}>
                        <Image
                            priority
                            src={img}
                            width={90}
                            height={90}
                            alt="client"
                        />
                        <div className={styles.reviewData}>
                            <span>{title}</span>
                            <span>{client_name}</span>
                        </div>
                    </div>
                </div>
            )
        case 'specific-card':
            return (
                <div className={styles.specific}>
                    <div className={styles.specificImage}>
                        <Image priority src={img} width={56} height={56} alt='image specific' />
                        <Paragraph type='normal-text'>{text}</Paragraph>
                    </div>
                    <div className={styles.specificDescription}>
                        <Paragraph type='sub-title-text-dull'>{children}</Paragraph>
                    </div>
                    <div className={styles.specificLink}>
                        <Link href={link ? link : '#'} onClick={() => setActiveText(true)}>Подробнее
                            <Image
                                src='/svg/left_tang.svg'
                                width={24}
                                height={24}
                                alt='arrow right'
                            />
                        </Link>
                    </div>
                </div>
            )
        case 'arsenal-card':
            return (
                <div className={styles.arsenal}>
                    <Image priority src={img} width={48} height={48} alt='arsenal icon'/>
                    <Paragraph type='normal-text'>{children}</Paragraph>
                    <Paragraph type='sub-title-text-normal'>{text}</Paragraph>
                </div>
            )

        default:
            return <>None type</>
    }
};