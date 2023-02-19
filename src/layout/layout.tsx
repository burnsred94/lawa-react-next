import { FunctionComponent } from "react"
import { Footer, Header } from "./index"
import { LayoutProps } from "./Layout.props"
import styles from "./style.module.css"



export const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <div className={styles.body}>
                {children}
            </div>
            <Footer className={styles.footer} />
        </div>
    )
}


export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function witchLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}