import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bottom-0 left-0 z-20 w-full p-4 shadow md:flex md:items-center md:justify-center md:p-6">
            <span className="text-sm text-gray-500 sm:text-center">© 2023 <Link href="/" className="hover:underline">{`Alternative Entr'Act™`}</Link>. Tous droits réservés.
            </span>
        </footer>
    );
};