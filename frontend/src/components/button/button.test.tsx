import { fireEvent, render } from "@testing-library/react";
import { Button, IButton } from "./button.component";
import { ButtonSize, ButtonVariant } from "./button.types";

describe("Button", () => {
    const defaultProps: IButton = {
        size: ButtonSize.XL,
        variant: ButtonVariant.AMBER,
        onClick: jest.fn(),
        children: "Click me",
    };

    it("renders button correctly", () => {
        const { getByText } = render(<Button {...defaultProps} />);
        const buttonElement = getByText("Click me");

        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.tagName).toBe("BUTTON");
        expect(buttonElement).toHaveClass(
            "bg-amber-500",
            "text-white",
            "px-6",
            "py-3.5"
        );
        expect(buttonElement).toHaveTextContent("Click me");
    });

    it("calls onClick callback when clicked", () => {
        const onClick = jest.fn();
        const { getByText } = render(
            <Button {...defaultProps} onClick={onClick} />
        );
        const buttonElement = getByText("Click me");

        fireEvent.click(buttonElement);

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
