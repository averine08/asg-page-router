import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();

    return (
    <nav className="bg-gray-100 p-4 flex gap-4 shadow justify-center">
        <Link
        href="/"
        className={router.pathname === "/" ? "font-bold text-blue-950" : "hover:bg-amber-300 text-gray-600"}>
        Home
        </Link>

        <Link
        href="/contact"
        className={router.pathname === "/contact" ? "font-bold text-blue-950" : "hover:bg-amber-300 text-gray-600"}>
        Contact
        </Link>
    </nav>
    );
}