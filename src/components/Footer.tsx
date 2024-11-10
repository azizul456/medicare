import Image from "next/image";
import Link from "next/link";
export default function Footer() {
    return (

        <section className="py-20 bg-slate-100">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap lg:mb-10 -mx-4">
                    <div className="w-full lg:w-1/4 px-4 mb-12 lg:mb-0">
                        <a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none" href="/">
                            <Image src="https://medicare24bd.com/media/view/1" alt="logo" width={122} height={37} />
                        </a>
                        <p className="mt-4 mb-6 text-sm text-secondary">
                        support@medicare24bd.com
                        Bangladesh office
                        House 180, Road 19, Dakkhin Banasree, Khilgaon, Dhaka. Bangladesh.
                        Australia office
                        30 Corbet Street, Weir Views, Melbourne, VIC-3338, Australia.
                        </p>
                        
                    </div>
                    <div className="w-full lg:w-2/3 px-4">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full flex-grow sm:w-auto px-4 mb-8 sm:mb-12 xl:mb-0">
                                <h3 className="mb-5 text-lg font-bold font-heading text-blueGray-800">Information</h3>
                                <ul>
                                    <li className="mb-3"><Link href={'/about'}>About Us</Link></li>
                                    <li className="mb-3"><Link href={'/contactus'}>Contact us</Link></li>
                                    <li className="mb-3"><Link href={'/privacy-policy'}>Privacy Policy</Link></li>
                                    <li className="mb-3"><Link href={'/Terms-Conditions'}>Terms & Conditions</Link></li>
                                </ul>
                            </div>
                            <div className="w-full flex-grow sm:w-auto px-4 mb-8 sm:mb-12 xl:mb-0">
                                <h3 className="mb-5 text-lg font-bold font-heading text-blueGray-800">UI Components</h3>
                                <ul>
                                    <li className="mb-3"><Link href={'/'}>home</Link></li>
                                    <li className="mb-3"><Link href={'/'}>home</Link></li>
                                    <li className="mb-3"><Link href={'/'}>home</Link></li>
                                    <li className="mb-3"><Link href={'/'}>home</Link></li>
                                    
                                </ul>
                            </div>
                            <div className="w-full flex-grow sm:w-auto px-4 mb-8 sm:mb-12 xl:mb-0">
                                <h3 className="mb-5 text-lg font-bold font-heading text-blueGray-800">Support</h3>
                                <ul>
                                    <li className="mb-3"><Link href={'/'}>home</Link></li>
                                    <li className="mb-3"><Link href={'/'}>home</Link></li>
                                    <li className="mb-3"><Link href={'/'}>home</Link></li>
                                    <li className="mb-3"><Link href={'/'}>home</Link></li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-sm lg:text-center text-secondary">&copy; {new Date().getFullYear()} • Medicare 24 • All Rights Reserved</p>
                </div>
            </div>
        </section>
    );
}
