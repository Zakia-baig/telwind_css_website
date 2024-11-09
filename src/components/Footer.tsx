
import Link from "next/link";
export default function footer() {
    return (
        <div className="flex justify-center bg-gray-800 p-4">
            <ul className="flex flex-wrap space-x-4 text-white md:flex-row md:space-x-4">
                <li className="text-white font-bold px-4 py-2 hover:bg-gray-600 hover:text-white rounded"><Link href="/contect_us">Contact Us</Link></li>
                <li className="text-white font-bold px-4 py-2 hover:bg-gray-600 hover:text-white rounded"><Link href="/instagram">Instagram</Link></li>
                <li className="text-white font-bold px-4 py-2 hover:bg-gray-600 hover:text-white rounded"><Link href="/facebook">Facebook</Link></li>
                <li className="text-white font-bold px-4 py-2 hover:bg-gray-600 hover:text-white rounded"><Link href="/twitter">Twitter</Link></li>
                <li className="text-white font-bold px-4 py-2 hover:bg-gray-600 hover:text-white rounded"><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
        </div>
    );
}