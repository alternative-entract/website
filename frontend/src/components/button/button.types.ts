export enum ButtonVariant {
    BLUE = "bg-blue-500 text-white hover:bg-blue-400 focus:ring-blue-300",
    AMBER = "bg-amber-500 text-white hover:bg-yellow-500 focus:ring-amber-300",
    BLACK = "bg-black text-white hover:bg-zinc-800 focus:ring-black-300",
    WHITE = "bg-yellow-50 text-gray-500 hover:bg-amber-100 focus:ring-transparent",

}

export enum ButtonSize {
    LG = "text-base px-4 py-2.5",
    XL = "text-base px-6 py-3.5 w-100",
}

export type ButtonType = "button" | "submit" | "reset";
