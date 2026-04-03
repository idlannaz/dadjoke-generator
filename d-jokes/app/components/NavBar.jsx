import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-100">
            <div className="flex space-x-4">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
                            Home
                        </Link>
                    </li>
                </ul>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/saved-jokes" className="text-xl font-bold text-gray-800 hover:text-gray-600">
                            Saved Jokes
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex space-x-4">
                {/* Login and Logout buttons */}
            </div>
        </nav>
    );
}