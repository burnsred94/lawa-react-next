import { FunctionComponent } from "react"
import { LayoutProps } from "./layout.props"
import { Wraper } from "./styles/layout.style"



export const Layout = ({children}: LayoutProps): JSX.Element => {
    return(
        <Wraper>
        
        </Wraper>
    )
}


export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function witchLayoutComponent(props: T): JSX.Element {
        return(
            <Layout>
                <Component {...props}/>
            </Layout>
        )
    }
}