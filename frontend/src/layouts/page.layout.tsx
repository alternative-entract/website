import { FC, ReactNode, useContext, useState } from "react";
import { Navbar, NavbarItemData } from "../components";
import { AuthContext } from "../utils/contexts/auth/context";
import {
    useNavigateToProduct,
    useNavigateToProfile,
} from "../features/navigation/useNavigateTo";

interface PageLayoutProps {
    children: ReactNode | ReactNode[];
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
    const { token, isLoading, logout } = useContext(AuthContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigateToProfile = useNavigateToProfile();
    const navigateToProduct = useNavigateToProduct();
    const url = window.location.href
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const isHome = url.includes("home")
    const renderLogos = () =>{
        if(isHome) {
            return(
                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <img
                        src="https://res.cloudinary.com/dgvuo8wbh/image/upload/v1685013352/file-upload/Kolabee-Logotype_e3ujcs.png"
                        className="h-16 mr-3"
                        alt="Kolabee Logo"
                    />
                    <img
                        src="https://res.cloudinary.com/dgvuo8wbh/image/upload/v1685013352/file-upload/Frise_2_je7ehr.png"
                        className="h-24 ml-3"
                        alt="Logos des financeurs"
                    />
                </div>
            );
        }
    }
    const renderNavbarItems = (): NavbarItemData[] => {
        if (!isLoading && token) {
            return [
                { label: "Catalogue produits", onClick: navigateToProduct },
                { label: "Profil", onClick: navigateToProfile },
                { label: "Se déconnecter", onClick: logout },
            ];
        }
        return [];
    };

    return (
        <div className="relative flex flex-col justify-between max-w-screen-xl mx-auto min-h-screen">
            <header>
                <Navbar
                    logo={{
                        src: "https://res.cloudinary.com/dgvuo8wbh/image/upload/v1685013352/file-upload/Logo_Alternative_Entr_Act_duv8s0.png",
                        alt: "Alternative Entr'Act Logo",
                    }}
                    items={renderNavbarItems()}
                    isMobileMenuOpen={isMobileMenuOpen}
                    toggleMobileMenu={toggleMobileMenu}
                />
            </header>
            <main className="flex overflow-y grow">{children}</main>
            <footer className="flex flex-col gap-2 z-20 p-4 md:p-6 bg-white mt-auto">
                {renderLogos()}
                <span className="block text-sm text-gray-500 sm:text-center">
                    © 2023{" "}
                    <a
                        href="/"
                        className="hover:underline"
                    >{`Alternative Entr'Act™`}</a>
                    . Tous droits réservés.
                </span>
            </footer>
        </div>
    );
};
