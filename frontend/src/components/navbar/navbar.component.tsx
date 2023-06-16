import { FC } from "react";
import { NavbarItemData } from "./navbar.types";
import { DesktopNavbarItem } from "./components/navbarItem.component";
import { Button, ButtonSize, ButtonVariant } from "../button";
import { BurgerMenuIcon } from "../icon";

export interface INavbar {
	logo: {
		src: string;
		alt: string;
	};
	items: NavbarItemData[];
	isMobileMenuOpen: boolean;
	toggleMobileMenu: () => void;
}

export const Navbar: FC<INavbar> = ({
	logo,
	items,
	isMobileMenuOpen,
	toggleMobileMenu,
}) => (
	<nav className="sticky bg-white w-full z-20 border-gray-200">
		<div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
			<a href="/" className="flex items-center">
				{logo && <img src={logo.src} className="h-40 mr-3" alt={logo.alt} />}
			</a>

			{items.length ? (
				<div className="md:hidden mr-3" data-testid="mobile-menu-button-parent">
					<Button
						variant={ButtonVariant.BLUE}
						size={ButtonSize.XL}
						onClick={toggleMobileMenu}
					>
						<span className="sr-only">Open main menu</span>
						<BurgerMenuIcon />
					</Button>
				</div>
			) : null}

			<div
				className={`${
					isMobileMenuOpen ? "block" : "hidden"
				} w-full md:block md:w-auto`}
				id="navbar-default"
				data-testid="mobile-menu-navbar-items"
			>
				<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
					{items.map((item, index) => (
						<DesktopNavbarItem
							key={`${item.label}-${index}`}
							label={item.label}
							onClick={item.onClick}
						/>
					))}
				</ul>
			</div>
		</div>
	</nav>
);
