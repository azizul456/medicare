
import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
    return (
        <>
            <section className='header-top  bg-black p-2 text-white'>
                <div className='container mx-auto px-4 grid grid-cols-2 gap-4'>
                    <div className="flex py-3">
                        <span className="flex items-center">
                            <Link href={'mailto:support@medicare24bd.com'}>support@medicare24bd.com</Link>
                        </span>
                    </div>
                    <div className="flex items-center justify-end space-x-4">
                        <Link href="/signup" className="bg-gray-700 px-4 py-1 rounded-3xl hover:bg-gray-600">
                            Sign Up
                        </Link>
                        <Link href="/signin" className="bg-gray-700 px-4 py-1 rounded-3xl hover:bg-gray-600">
                            Sign In
                        </Link>
                        <button className="bg-gray-700 text-white px-4
                     py-1 rounded-3xl hover:bg-gray-600">
                            EN
                        </button>
                    </div>
                </div>
            </section>
            <header className="bg-white-600 text-dark p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold">
                        <Image src="https://medicare24bd.com/media/view/1" alt="logo" width={250} height={80} />
                    </Link>
                    <nav className="space-x-4">
                        <Link href='/'>Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/doctors">Doctors</Link>
                        <Link href="/site/medicines ">Medicines</Link>
                        <Link href="/hospitals ">hospitals</Link>
                        <Link href="/Blog">Blogs</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                </div>
            </header>
        </>
    );
}
