import { render, fireEvent } from "@testing-library/react";
import { INavbar, Navbar } from "./navbar.component";

describe("Navbar", () => {
	const navbarProps: INavbar = {
		logo: {
			src: "logo.png",
			alt: "Logo",
		},
		items: [
			{ label: "Home", onClick: jest.fn() },
			{ label: "About", onClick: jest.fn() },
			{ label: "Contact", onClick: jest.fn() },
		],
		isMobileMenuOpen: false,
		toggleMobileMenu: jest.fn(),
	};

	it("renders the logo, title, and menu items", () => {
		const { logo, items } = navbarProps;

		const { getByAltText, getByText } = render(<Navbar {...navbarProps} />);

		const logoElement = getByAltText(logo.alt);
		expect(logoElement).toBeInTheDocument();
		expect(logoElement).toHaveAttribute("src", logo.src);

		items.forEach((item) => {
			const menuItem = getByText(item.label);
			expect(menuItem).toBeInTheDocument();
		});
	});

	it("calls the onClick function when menu item is clicked", () => {
		const { items } = navbarProps;

		const { getByText } = render(<Navbar {...navbarProps} />);

		items.forEach((item) => {
			const menuItem = getByText(item.label);
			fireEvent.click(menuItem);
			expect(item.onClick).toHaveBeenCalled();
		});
	});

	it("toggles the mobile menu when button is clicked", () => {
		const toggleMobileMenu = navbarProps.toggleMobileMenu;
		const { getByRole } = render(<Navbar {...navbarProps} />);

		const button = getByRole("button");
		fireEvent.click(button);
		expect(toggleMobileMenu).toHaveBeenCalledTimes(1);
	});

	it("renders the mobile menu when isMobileMenuOpen is true", () => {
		const { getByRole, getByText } = render(
			<Navbar {...navbarProps} isMobileMenuOpen={true} />
		);

		const button = getByRole("button");
		fireEvent.click(button);

		navbarProps.items.forEach((item) => {
			const menuItem = getByText(item.label);
			expect(menuItem).toBeInTheDocument();
		});
	});

	it("does not render the mobile menu when isMobileMenuOpen is false", () => {
		const { getByTestId } = render(
			<Navbar {...navbarProps} isMobileMenuOpen={false} />
		);

		const burgerMenu = getByTestId("mobile-menu-button-parent");
		expect(burgerMenu).toHaveClass("md:hidden");

		const burgerMenuPanel = getByTestId("mobile-menu-navbar-items");
		expect(burgerMenuPanel).toHaveClass("hidden");
	});
});
