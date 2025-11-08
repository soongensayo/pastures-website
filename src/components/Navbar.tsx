'use client'

import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ArrowRight, Menu } from "lucide-react"
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import AppStoreButton from './AppStoreButton';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const menuItems = [
        { href: '/contact', label: 'Contact' },
        { href: '/about', label: 'About' },
        { href: '/faq', label: 'FAQ' },
    ]

    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link
                        href='/'
                        className="flex z-40 font-semibold">
                        <Image src="/pastureslogo1.png" alt="Logo" width={30} height={30} />
                        <span className='text-green-700'> pastures.</span>
                    </Link>

                    {/* todo: add mobile navbar */}

                    <div className='flex items-center space-x-4'>
                        <>
                            <AppStoreButton variant="compact" />
                            
                            {/* Menu Dropdown */}
                            <div className="relative" ref={menuRef}>
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    aria-label="Menu"
                                    aria-expanded={isMenuOpen}
                                    aria-haspopup="true"
                                >
                                    <Menu className="w-4 h-4 text-gray-600" />
                                </button>
                                
                                {/* Dropdown Menu */}
                                {isMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 animate-in fade-in-0 zoom-in-95 duration-100">
                                        {menuItems.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </>
                    </div>

                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar