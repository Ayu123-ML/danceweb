// components/Footer.js
import Link from 'next/link'
import Image from "next/image";
import {
    Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin,
    Send, ArrowRight, Heart
} from 'lucide-react'

const Footer = () => {
    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'National', path: '/journey/national' },
        { name: 'International', path: '/journey/international' },
        { name: 'Blogs', path: '/blog' },
        { name: 'Contact Us', path: '/contact' },
    ]

    const danceForms = [
        'BollyWood',
        'Folk Dance',
        'Contemporary',
        'Patrotic',
        'Religious',
        'Western',
    ]

    const contactInfo = [
        { icon: <MapPin size={16} />, text: 'VAIKUNTH COMPLEX, NR RASPAN ARCADE, NIKOL.' },
        { icon: <MapPin size={16} />, text: '204, CENTRE POINT, INDIA COLONY ROAD, BAPUNAGAR.' },
        { icon: <Phone size={16} />, text: '+91 91738 78750' },
        { icon: <Phone size={16} />, text: '+91 72280 53232' },
        { icon: <Mail size={16} />, text: 'dynamicechildrenacademy@gmail.com' },
    ]

    const socialLinks = [
        { icon: <Facebook size={16} />, url: 'https://www.facebook.com/navinvato/videos/-dynamic-children-academy-%E0%AA%97%E0%AB%81%E0%AA%9C%E0%AA%B0%E0%AA%BE%E0%AA%A4-%E0%AA%A8%E0%AB%80-%E0%AA%A8%E0%AA%82%E0%AA%AC%E0%AA%B0-1-kids-talent-hub%E0%AA%85%E0%AA%B9%E0%AB%80%E0%AA%82-%E0%AA%AC%E0%AA%BE%E0%AA%B3%E0%AA%95%E0%AB%8B-%E0%AA%AE%E0%AA%BE%E0%AA%A4%E0%AB%8D%E0%AA%B0-activ/4250374635282583/', label: 'Facebook' },
        { icon: <Instagram size={16} />, url: 'https://www.instagram.com/dynamice_academy/', label: 'Instagram' },
        { icon: <Twitter size={16} />, url: 'https://share.google/KaHmNCkLPfNC9II9L', label: 'Twitter' },
        { icon: <Youtube size={16} />, url: 'https://www.youtube.com/@dynamicechildrenacademy617', label: 'YouTube' },
    ]

    return (
        <footer className="bg-gray-900 text-white">
            <div className="section-padding">
                <div className="container mx-auto">
                    {/* Single-line layout for desktop, stacked for mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-y-12 gap-x-16 items-center mb-12">

                        {/* 2. Logo with short description */}
                        <div className="flex flex-col gap-4">
                            <Image
                                src="/logodance.png"
                                alt="Dynamice Children Academy"
                                width={200}
                                height={50}
                                className="w-[180px] h-auto object-contain"
                            />
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Premier dance academy dedicated to excellence in dance education since 2005.
                                We nurture talent and passion through comprehensive training programs.
                            </p>
                        </div>

                        {/* 3. Quick Links */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300">Quick Links</h3>
                            <ul className="space-y-2">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.path}
                                            className="text-xs text-gray-400 hover:text-white transition flex items-center gap-2"
                                        >
                                            <ArrowRight size={12} className="text-primary-500" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 4. Dance Forms */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300">Dance Forms</h3>
                            <ul className="space-y-2">
                                {danceForms.map((form) => (
                                    <li key={form}>
                                        <a href="#" className="text-xs text-gray-400 hover:text-white transition flex items-center gap-2">
                                            <span className="w-1 h-1 bg-primary-500 rounded-full"></span>
                                            {form}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 5. Class Timings */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300">Class Timings</h3>
                            <ul className="space-y-3 text-xs text-gray-400">
                                <li>
                                    <span className="block font-semibold text-gray-300 mb-0.5">Weekdays</span>
                                    7 AM - 9 PM
                                </li>
                                <li>
                                    <span className="block font-semibold text-gray-300 mb-0.5">Weekends</span>
                                    8 AM - 8 PM
                                </li>
                            </ul>
                        </div>

                        {/* Combined Get In Touch Sections */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-16 xl:col-span-2 lg:col-span-3 sm:col-span-2">
                            {/* 6. Get In Touch 1 */}
                            <div className="flex flex-col">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300">Get In Touch</h3>

                                <div className="space-y-4 mt-6">
                                    {/* Address 1 */}
                                    <div className="flex items-start gap-2">
                                        <div className="text-primary-500 mt-0.5 shrink-0"><MapPin size={16} /></div>
                                        <p className="text-xs text-gray-400 break-words leading-relaxed">
                                            VAIKUNTH COMPLEX, NR RASPAN ARCADE, NIKOL.
                                        </p>
                                    </div>

                                    {/* Phone and Email */}
                                    <div className="flex items-start gap-2">
                                        <div className="text-primary-500 mt-0.5 shrink-0"><Phone size={16} /></div>
                                        <p className="text-xs text-gray-400 break-words leading-relaxed">+91 91738 78750</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="text-primary-500 mt-0.5 shrink-0"><Phone size={16} /></div>
                                        <p className="text-xs text-gray-400 break-words leading-relaxed">+91 72280 53232</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="text-primary-500 mt-0.5 shrink-0"><Mail size={16} /></div>
                                        <p className="text-xs text-gray-400 break-words leading-relaxed">dynamicechildrenacademy@gmail.com</p>
                                    </div>

                                    {/* Social Icons */}
                                    <div className="flex space-x-2 w-full pt-1">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.url}
                                                className="p-1.5 bg-gray-800 hover:bg-primary-600 rounded transition duration-300 text-gray-300 hover:text-white"
                                                aria-label={social.label}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* 7. Get In Touch 2 */}
                            <div className="flex flex-col">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300">Get In Touch</h3>

                                <div className="space-y-4 mt-6">
                                    {/* Address 2 */}
                                    <div className="flex items-start gap-2">
                                        <div className="text-primary-500 mt-0.5 shrink-0"><MapPin size={16} /></div>
                                        <p className="text-xs text-gray-400 break-words leading-relaxed">
                                            204, CENTRE POINT, INDIA COLONY ROAD, BAPUNAGAR.
                                        </p>
                                    </div>

                                    {/* Phone and Email */}
                                    <div className="flex items-start gap-2">
                                        <div className="text-primary-500 mt-0.5 shrink-0"><Phone size={16} /></div>
                                        <p className="text-xs text-gray-400 break-words leading-relaxed">+91 91738 78750</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="text-primary-500 mt-0.5 shrink-0"><Phone size={16} /></div>
                                        <p className="text-xs text-gray-400 break-words leading-relaxed">+91 72280 53232</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <div className="text-primary-500 mt-0.5 shrink-0"><Mail size={16} /></div>
                                        <p className="text-xs text-gray-400 break-words leading-relaxed">dynamicechildrenacademy@gmail.com</p>
                                    </div>

                                    {/* Social Icons */}
                                    <div className="flex space-x-2 w-full pt-1">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.url}
                                                className="p-1.5 bg-gray-800 hover:bg-primary-600 rounded transition duration-300 text-gray-300 hover:text-white"
                                                aria-label={social.label}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 1. Newsletter */}
                        <div className="flex flex-col">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center shrink-0">
                                        <Send className="h-4 w-4" />
                                    </div>
                                    <h3 className="text-base font-bold">Subscribe</h3>
                                </div>
                                <p className="text-xs text-gray-400">Get updates on new courses</p>
                            </div>
                            <form className="flex flex-col gap-4 mt-6">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-white text-xs placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                                />
                                <button
                                    type="submit"
                                    className="bg-primary-600 hover:bg-primary-700 text-white text-xs py-2 px-8 rounded transition flex items-center justify-center gap-5  w-full"
                                >
                                    Subscribe <ArrowRight size={14} />
                                </button>
                            </form>
                        </div>

                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-800 pt-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-xs text-gray-500 text-center md:text-left">
                                &copy; {new Date().getFullYear()} Dynamice Children Academy. All rights reserved.
                            </p>
                            <div className="text-center">
                                <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                                    Made with <Heart size={12} className="text-red-500 fill-current" /> by Dynamice Team
                                </p>
                            </div>
                            <div className="flex items-center space-x-4 text-xs">
                                <a href="#" className="text-gray-500 hover:text-white transition">Privacy Policy</a>
                                <a href="#" className="text-gray-500 hover:text-white transition">Terms of Service</a>
                                <a href="#" className="text-gray-500 hover:text-white transition">Refund Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer