import {
	FloatingPortal,
	useFloating,
	useHover,
	useInteractions,
} from "@floating-ui/react";
import { FC, useState } from "react";

interface IIntputHints {
	requirements: string[];
}

export const InputHint: FC<IIntputHints> = ({ requirements }) => {
	const [isHintOpen, setIsHintOpen] = useState(false);

	const { refs, floatingStyles, context } = useFloating({
		open: isHintOpen,
		onOpenChange: setIsHintOpen,
		placement: "right-start",
	});

	const { getReferenceProps, getFloatingProps } = useInteractions([
		useHover(context),
	]);

	return (
		<>
			<div
				ref={refs.setReference}
				className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-gray-600 border-2 border-white rounded-full -top-2 -right-2"
				{...getReferenceProps()}
			>
				?
			</div>
			<FloatingPortal>
				{isHintOpen && (
					<div
						className="bg-white border border-gray-900 rounded-lg p-4 text-sm"
						ref={refs.setFloating}
						style={floatingStyles}
						{...getFloatingProps()}
					>
						<ul>
							{requirements.map((requirement, index) => (
								<li key={`${requirement}-${index}`}>{requirement}</li>
							))}
						</ul>
					</div>
				)}
			</FloatingPortal>
		</>
	);
};
