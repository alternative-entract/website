import { render, screen } from "@testing-library/react";
import { Breadcrumb } from "./breadcrumb.component";
import { BreadcrumbItemData } from "./breadcrumb.type";

describe("Breadcrumb", () => {
	const items: BreadcrumbItemData[] = [
		{ title: "Home", href: "#" },
		{ title: "Projects", href: "#" },
		{ title: "Flowbite" },
	];

	it("renders correctly", () => {
		render(<Breadcrumb items={items} />);

		const breadcrumb = screen.getByLabelText("Breadcrumb");
		expect(breadcrumb).toBeInTheDocument();

		const breadcrumbLinks = screen.getAllByRole("link");
		expect(breadcrumbLinks).toHaveLength(2);
		expect(breadcrumbLinks[0]).toHaveTextContent("Home");
		expect(breadcrumbLinks[0]).toHaveAttribute("href", "#");
		expect(breadcrumbLinks[1]).toHaveTextContent("Projects");
		expect(breadcrumbLinks[1]).toHaveAttribute("href", "#");

		const lastBreadcrumbItem = screen.getByText("Flowbite");
		expect(lastBreadcrumbItem).toBeInTheDocument();
	});
});
