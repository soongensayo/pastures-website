import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <MaxWidthWrapper>
                <div className="py-10">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div className="flex items-center space-x-2">
                            <Image src="/pastureslogo1.png" alt="Logo" width={24} height={24}/>
                            <span className="text-lg font-semibold text-green-600">pastures.</span>
                        </div>
                        
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                            <Link 
                                href="/privacy" 
                                className="hover:text-green-600 transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link 
                                href="/contact" 
                                className="hover:text-green-600 transition-colors"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <p className="text-center text-sm text-gray-500">
                            © {new Date().getFullYear()} Pastures. All rights reserved. 
                            <span className="block mt-1">
                                Connect with your thoughts, experiences, and the Word of God.
                            </span>
                        </p>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}

export default Footer 