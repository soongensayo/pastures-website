import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server"
import { ArrowRight } from "lucide-react"
import Image from 'next/image'; 

const Navbar = () => {
    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link
                        href='/'
                        className="flex z-40 font-semibold">
                        <Image src="/pastureslogo1.png" alt="Logo" width={30} height={30}/>
                        <span className='text-green-700'> pastures.</span>
                    </Link>

                    {/* todo: add mobile navbar */}

                    <div className='hidden items-center space-x-4 sm:flex'>
                        <>
                            

                            <RegisterLink
                                className={buttonVariants({
                                    size: 'sm'
                                })}>
                                Email to learn more <ArrowRight className='ml-1.5 h-5 w-5'/>
                            </RegisterLink>
                            


                        </>
                    </div>

                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar