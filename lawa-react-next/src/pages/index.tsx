import Head from 'next/head'
import { Button, Paragraph, Headlines } from '@/components'
import styles from "../styles/Home.module.scss"
import Image from 'next/image'
import cn from 'classnames'
import { social, service, approach, cases, reviews, partners } from '../mock/mock.data'
import { Attributes, useEffect, useRef, useState } from 'react'
import { Form } from '@/components/Form/Form'
import { Service } from '@/components/service/Service'
import { withLayout } from '@/layout/layout'
import axios from 'axios'
import { MainPage } from '@/interfaces/main-page.interface'
import { ImageObject } from '@/interfaces/image.interface'
import { loaderImage } from '@/utils/image-loader/image-loader.utlis'
import { mutationStructureMainPage } from '@/lib/dataStructures'
import { URL_MAIN_PAGE } from '@/constants/constants'



function Home({ page }: HomeProps) {
  const [active, setActive] = useState(0)
  const [activeReview, setActiveReview] = useState(0)

  console.log(page)
 
  const data = mutationStructureMainPage(page)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.header}>
          <div className={styles.headerWrapper}>
            <div className={styles.headerText}>
              <Headlines tag='h1'>
                {data && data.title}
              </Headlines>
              <Paragraph type='sub-title-text-dull'>
                {data && data.sub_title}
              </Paragraph>
              <Button>Связаться с нами</Button>
            </div>
            <div className={styles.headerImages}>

              <Image loader={
                () => loaderImage(data.header_image)} src={process.env.NEXT_PUBLIC_DOMAIN + data.header_image} alt="lawa" width={450} height={450} />
            </div>
            <div className={styles.headerSocial}>
              <div className={styles.headerSocialWrapper}>
                <div className={styles.headerSocialItems}>
                  {social.map((social, key) => (
                    <div key={key} className={styles.headerSocialItem}>
                      <Image src={social.img} alt="Social Icon" width={17} height={17} />
                      <a href={social.link}></a>
                    </div>
                  ))}
                </div>
                <div className={styles.headerSocialTime}>
                  <span>Время работы:</span>
                  <span>
                    {data && data.time_work}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.service}>
          <div className={styles.serviceWrapper}>
            <div className={styles.serviceTitle}>
              <Headlines tag='h2'>
                {data && data.title_services}
              </Headlines>
            </div>
            <div className={styles.serviceItems}>
              {service.map((item, key) => (
                <Service type='card' key={key} img={item.img} link={`services/${item.link}`}>{item.text}</Service>
              ))}
            </div>
            <div className={styles.serviceButton}>
              <Button>Смотреть все</Button>
            </div>
          </div>
        </section>
        <section className={styles.approach}>
          <div className={styles.approachImages}>
            <Image
              loader={() => loaderImage(data.approach_image)}
              src={process.env.NEXT_PUBLIC_DOMAIN + data.approach_image}
              alt="lawa"
              width={495}
              height={506}
            />
          </div>
          <div className={styles.approachList}>
            <Headlines tag='h2'>{data.title_approach}</Headlines>
            <ul className={styles.approachListItems}>
              {data && data.approach_list.map((item, key) => (
                <li key={key} className={styles.approachListItem}>
                  <Image
                    loader={() => loaderImage(item.img)}
                    src={process.env.NEXT_PUBLIC_DOMAIN + item.img}
                    width={40}
                    height={40}
                    alt={item.title}
                  />
                  <Paragraph type='normal-text'>{item.title}</Paragraph>
                  <span>
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
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
        <section className={styles.slogan}>
          <div className={styles.sloganWrapper}>
            <Headlines tag='h4'>{data.slogan}</Headlines>
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
        <section className={styles.trust}>
          <div className={styles.trustWrapper}>
            <div className={styles.casesTitle}>
              <Headlines tag='h2'>Нам доверяют</Headlines>
            </div>
          </div>
          <div className={styles.trustBlocks}>
            <button className={styles.trustButtonLeft}>
              <Image src='svg/arrow-left.svg' alt='arrow' width={24} height={24} priority />
            </button>
            {
              partners.map((item, key) => (
                <div key={key} className={styles.trustImage}>
                  <Image
                    src={item.url}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                  />
                </div>
              ))
            }
            <button className={styles.trustButtonRight}>
              <Image src='svg/arrow-right.svg' alt='arrow' width={24} height={24} priority />
            </button>
          </div>
        </section>
        <section className={styles.form}>
          <div className={styles.formWrapper}>
            <div className={styles.formWrapperImage}>
              <Image src='/images/message.png' width={650} height={650} alt='message' />
            </div>
            <div className={styles.formWrapperFields}>
              <Headlines tag='h3'>Думаешь, крутой продукт обязательно стоит дорого?</Headlines>
              <Paragraph type='sub-title-text-dull'>Мы умеем и любим решать сложные задачи. Давай обсудим проект!</Paragraph>
              <Form />
            </div>
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
    </>
  )
}


export const getStaticProps = async () => {
  const { data: page } = await axios.get<HomeProps>(process.env.NEXT_PUBLIC_DOMAIN + URL_MAIN_PAGE);
  return {
    props: {
      page
    }
  };
};

export interface HomeProps extends Record<string, unknown> {
  page: MainPage
}


export default withLayout(Home)