
import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
    return (
        <header className="bg-white-600 text-dark p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    <Image  src="https://medicare24bd.com/media/view/1" alt="logo" width={250} height={80} />
                </Link>
                <nav className="space-x-4">
                    <Link href='/'>Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/doctors">Doctors</Link>
                    <Link href="/medicines ">Medicines</Link>
                    <Link href="/hospitals ">hospitals</Link>
                    <Link href="/Blog">Blogs</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
}
