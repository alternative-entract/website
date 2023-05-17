import Head from 'next/head'
import { Footer, Navbar } from "@/components";
import { FC, ReactElement } from "react";

interface PageLayoutProps {
    children: ReactElement | ReactElement[]
}

export const PageLayout: FC<PageLayoutProps> = ({children}) => {
    return (
        <div className="layout">
            <Head>
                <title>{`Alternative Entr'Act`}</title>
            </Head>
            <header>
                <Navbar />
            </header>
            <main className="main-container">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}