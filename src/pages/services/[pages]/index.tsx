import { Button, Headlines, Paragraph } from "@/components"
import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs"
import { Service } from "@/components/Service/Service"
import { withLayout } from "@/layout/Layout"
import cn from "classnames"
import { cases, dataPages, resultFirst, resultLast, reviews } from "@/mock/mock.data"
import Image from "next/image"
import { useRouter } from "next/router"
import styles from './style.module.scss'
import { useState } from "react"

const Page = ({ ...props }): JSX.Element => {
    const route = useRouter()
    const [activeReview, setActiveReview] = useState()
    const [active, setActive] = useState(0)
    const data = dataPages.find((item) => item.slug === (route.asPath.split('/').pop()))



    return (
        <main>
            <section className={styles.header}>
                <div className={styles.headerWrapper}>
                    <Headlines tag='h1'>{data?.title}</Headlines>
                </div>
            </section>
            <section className={styles.breadCrumb}>
                <div className={styles.breadCrumbWrapper}>
                    <Breadcrumbs data={[{ title: 'Услуги', path: '/' + route.asPath.split('/').splice(0, 2).join('') }, { title: data !== undefined ? data?.title : '', path: route.asPath }]} />
                </div>
            </section>
            <section className={styles.result}>
                <div className={styles.resultWrapper}>
                    <div className={styles.resultImages}>
                        <div className={styles.resultImagesLeft} />
                        <div className={styles.resultImagesRight} />
                    </div>
                    <div className={styles.resultList}>
                        <div className={styles.resultTitle}>
                            <Headlines tag="h2">
                                {data?.title}
                            </Headlines>
                        </div>
                        <div className={styles.resultList}>
                            <Paragraph type='normal-text'>
                                {data?.description}
                            </Paragraph>
                            <Button>Заказать услугу</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cn(styles.specifics, {
                [styles.specificsGridTheere]: data?.all_research.length !== undefined && data?.all_research.length < 4, 
                [styles.specificsGridAdaptive]: data?.all_research.length !== undefined && data?.all_research.length % 2 !== 0, 
            })}>
                {
                    data?.all_research.map((item, key) => (
                        <Service key={key} type='specific-card' link={item.link} img={item.image} text={item.title}>{item.description}</Service>
                    ))
                }
            </section>
            <section className={styles.process}>
                <div className={styles.processWrapper}>
                    <div className={styles.processFirst}>
                        <Headlines tag="h3">
                            Делаем мы
                        </Headlines>
                        <ul className={styles.processFirstItems}>
                            {data?.data_bp.first_list.map((listItem, key) => (
                                <li key={key}>{listItem}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.processNext}>
                        <Image priority src='/svg/dobble_arrow_right.svg' width={183} height={227} alt='dobble arrow' />
                    </div>
                    <div className={styles.processLast}>
                        <Headlines tag="h3">
                            Получаете вы
                        </Headlines>
                        <ul className={styles.processLastItems}>
                            {data?.data_bp.last_list.map((listItem, key) => (
                                <li key={key}>{listItem}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section className={styles.cases}>
                <div className={styles.casesTitle}>
                    <Headlines tag='h2'>Наши Кейсы</Headlines>
                    <Button>Смотреть все работы</Button>
                </div>
                <div className={styles.casesCards}>
                    {cases.map((item, key) => (
                        <div key={key} className={cn(styles.casesDefualt, {
                            [styles.casesActive]: key === active,
                            [styles.casesNonActive]: key !== active
                        })}>
                            <Service type='card-partners' img={item.img} link={item.link}>{item.title}</Service>
                        </div>
                    ))}
                </div>
                <div className={styles.casesSlider}>
                    {cases.slice(0, 3).map((item, key) => (
                        <button
                            className={cn(styles.casesButtonSlider, {
                                [styles.casesButtonSliderActive]: key === active
                            })}
                            key={key}
                            onClick={() => setActive(key)}
                        />
                    ))}
                </div>
            </section>
            <section className={styles.cases}>
                <div className={styles.casesTitle}>
                    <Headlines tag='h2'>Отзывы</Headlines>
                    <Button>Смотреть все Отзывы</Button>
                </div>
                <div className={styles.reviewCards}>
                    {reviews.map((item, key) => (
                        <div key={key} className={cn(styles.casesDefualt, {
                            [styles.casesActive]: key === activeReview,
                            [styles.casesNonActive]: key !== activeReview
                        })}>
                            <Service type='card-review' img={item.img} title={item.title} text={item.text} client_name={item.name_client} />
                        </div>
                    ))}
                </div>
                <div className={styles.casesSlider}>
                    {cases.slice(0, 3).map((item, key) => (
                        <button
                            className={cn(styles.buttonSliderBlock, {
                                [styles.buttonSliderBlockActive]: key === active
                            })}
                            key={key}
                            onClick={() => setActive(key)}
                        />
                    ))}
                </div>
            </section>
            <section className={styles.questions}>
                <div className={styles.questionsWrapper}>
                    <div>
                        <Headlines tag='h3'>Остались вопросы?</Headlines>
                        <Button>Обсудить проект</Button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default withLayout(Page)