import Head from 'next/head'
import { Footer, Navbar } from "@/components";
import {FC, ReactNode} from "react";

interface PageLayoutProps {
    user?: any
    loading?: boolean
    children: ReactNode | ReactNode[]
}

export const PageLayout: FC<PageLayoutProps> = ({ user, loading = false, children}) => {
    return (
        <div className="text-gray-900">
            <Head>
                <title>{`Alternative Entr'Act`}</title>
            </Head>
            <div className="flex min-h-screen min-h-full flex-col justify-center bg-gray-100 max-w-screen-xl mx-auto">
                <header className="overflow-hidden">
                    <Navbar user={user} loading={loading} />
                </header>
                <main className="flex flex-grow place-content-center items-center overflow-scroll mt-8">
                    {children}
                </main>
                <footer className="overflow-hidden">
                    <Footer />
                </footer>
            </div>
        </div>
    )
}