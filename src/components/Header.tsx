import Link from "next/link";

export default function header() {
    return (
        <div className="flex justify-center bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center p-1">
        {/* Logo */}
        <h1 className="text-4xl font-serif font-semibold text-neutral-50 ">Zakia Baig</h1>
            <ul className="flex flex-wrap space-x-4 text-white md:flex-row md:space-x-4">
                <li><Link href="/" className="text-white font-bold px-4 py-2 hover:bg-gray-600 hover:text-white rounded">Home</Link></li>
                <li><Link href="/about-us" className="text-white font-bold px-4 py-2 hover:bg-gray-600 hover:text-white rounded">About Us</Link></li>
                <li><Link href="/contact-us" className="text-white font-bold px-4 py-2 hover:bg-gray-600 hover:text-white rounded">Contact Us</Link></li>
               
            </ul>
            </div>
        </div>
    );
}