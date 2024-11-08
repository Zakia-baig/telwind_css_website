<<<<<<< HEAD

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
=======
import Link from "next/link";

export function Footer(){
    return(
        <div className="footer">
          
            <ul className="footer-buttons">
                <li> <Link href="/contect"> Contect us </Link> </li>
                 <li> <Link href="/instagram">Instagram </Link> </li>
               <li> <Link href="/facebook">Facebook </Link> </li>
               <li> <Link href="/twitter">Twitter </Link> </li>
               <li> <Link href="/privacy">Privacy policy </Link> </li>
            </ul>
        </div>
    )
}

>>>>>>> 9eda366 (push my custom css code)
