import {FC, useEffect, useState} from 'react';
import {Button, ButtonSize, ButtonVariant} from "../button";

interface IPinPad {
    onChange: (pin: string) => void
}

export const PinPad: FC<IPinPad> = ({ onChange }) => {
    const [padOrder, setPadOrder] = useState<string[][]>([]);

    useEffect(() => {
        const numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        const shuffledNumbers: string[] = shuffle(numbers);
        const newPadOrder: string[][] = [
            shuffledNumbers.slice(0, 5), // Première ligne
            shuffledNumbers.slice(5, 10), // Deuxième ligne
        ];
        setPadOrder(newPadOrder);
    }, []);

    const shuffle = (array: string[]): string[] => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const handlePadClick = (value: string): void => {
        onChange(value)
    };

    return (
        <div className="flex flex-col gap-0.5">
            {padOrder.map((row: string[], rowIndex: number) => (
                <div key={`row-${rowIndex}`} className="flex gap-0.5">
                    {row.map((value: string, colIndex: number) => (
                        <Button
                            key={`pad-${rowIndex}-${colIndex}`}
                            onClick={() => handlePadClick(value)}
                            variant={ButtonVariant.WHITE} size={ButtonSize.LG}
                        >
                            {value}
                        </Button>
                    ))}
                </div>
            ))}
        </div>
    );
};