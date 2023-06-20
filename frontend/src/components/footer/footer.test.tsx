import { render, screen } from "@testing-library/react";
import { Footer } from "./footer.component";

describe("Footer", () => {
    it("renders the children correctly", () => {
        const children = "This is the footer content";
        render(<Footer>{children}</Footer>);
        const footerElement = screen.getByText(children);
        expect(footerElement).toBeInTheDocument();
    });
});
