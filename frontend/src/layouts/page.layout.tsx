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
            <div className="flex flex-col justify-center bg-white max-w-screen-xl mx-auto">
                <header className="overflow-hidden">
                    <Navbar
                        logo={{
                            src: "https://res.cloudinary.com/dgvuo8wbh/image/upload/v1685013352/file-upload/Logo_Alternative_Entr_Act_duv8s0.png",
                            alt: "Alternative Entr'Act Logo"
                        }}
                        items={renderNavbarItems()}
                        isMobileMenuOpen={isMobileMenuOpen}
                        toggleMobileMenu={toggleMobileMenu}
                    />
                </header>
                <main className="flex mt-32">
                    {children}
                </main>
                <footer className="overflow-hidden">
                    <Footer>
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <div className="flex items-center mb-4 sm:mb-0">
                                <img src="https://res.cloudinary.com/dgvuo8wbh/image/upload/v1685013352/file-upload/Kolabee-Logotype_e3ujcs.png" className="h-16 mr-3" alt="Kolabee Logo"/>
                            </div>
                            <div className="flex items-center mb-4 sm:mb-0">
                                <img src="https://res.cloudinary.com/dgvuo8wbh/image/upload/v1685013352/file-upload/Frise_2_je7ehr.png" className="h-24 ml-3" alt="Logos des financeurs"/>
                            </div>
                        </div>
                        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">{`Alternative Entr'Act™`}</a>. Tous droits réservés.</span>
                    </Footer>
                </footer>
            </div>
        </div>
    )
}