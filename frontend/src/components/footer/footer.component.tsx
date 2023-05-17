import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="py-3 mt-4 bg-light">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <Link href="" className="nav-link px-2 text-muted">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="" className="nav-link px-2 text-muted">
                        Features
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="" className="nav-link px-2 text-muted">
                        Pricing
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="" className="nav-link px-2 text-muted">
                        FAQs
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="" className="nav-link px-2 text-muted">
                        About
                    </Link>
                </li>
            </ul>
            <p className="text-center text-muted">
                © {new Date().getFullYear()} ApproAlternative
            </p>
        </footer>
    );
};