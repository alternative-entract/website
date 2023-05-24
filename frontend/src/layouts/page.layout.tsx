import {FC, ReactNode, useContext, useState} from "react";
import {Footer, Navbar, NavbarItemData} from "../components";
import {AuthContext} from "../contexts/auth/context";
import {useNavigateToProduct, useNavigateToProfile} from "../features/navigation/useNavigateTo";

interface PageLayoutProps {
    children: ReactNode | ReactNode[]
}

export const PageLayout: FC<PageLayoutProps> = ({ children}) => {
    const { user, isLoading, logout } = useContext(AuthContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigateToProfile = useNavigateToProfile()
    const navigateToProduct = useNavigateToProduct()

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const renderNavbarItems = (): NavbarItemData[] => {
        if (!isLoading && user) {
            return [
                { label: "Catalogue produits", onClick: navigateToProduct},
                { label: "Profil", onClick: navigateToProfile },
                { label: "Se déconnecter", onClick: logout }
            ]
        }
        return []
    }

    return (
        <div className="text-gray-900">
            <div className="flex min-h-screen min-h-full flex-col justify-center bg-white max-w-screen-xl mx-auto">
                <header className="overflow-hidden">
                    <Navbar
                        title="Alternative Entr'Act™"
                        logo={{
                            src: "https://flowbite.com/docs/images/logo.svg",
                            alt: "Gesmip Logo"
                        }}
                        items={renderNavbarItems()}
                        isMobileMenuOpen={isMobileMenuOpen}
                        toggleMobileMenu={toggleMobileMenu}
                    />
                </header>
                <main className="flex flex-grow place-content-center items-center overflow-auto mt-8">
                    {children}
                </main>
                <footer className="overflow-hidden">
                    <Footer>
                        © 2023 <a href="/" className="hover:underline">{`Alternative Entr'Act™`}</a>. Tous droits réservés.
                    </Footer>
                </footer>
            </div>
        </div>
    )
}