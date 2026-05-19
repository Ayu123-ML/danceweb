'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Youtube, Twitter, CheckCircle } from 'lucide-react'
import Team from '../components/Team'


interface TabContent {
    id: string
    title: string
    description: string
}

const danceTabs: TabContent[] = [
    {
        id: 'step1',
        title: 'Dance Step 01',
        description: 'Dramatically initiate our mission in 2002 with minimal initial investment, rapidly expanding operational capacity to over 6,000 students trained. Systematically scale our educational footprint over 23 years of sustained deployment, ensuring continuous market leadership in artistic and cultural development. Compellingly leverage the visionary expertise of Founder Tirthraj Trivedi to anchor value-driven educational portals.'
    },
    {
        id: 'step2',
        title: 'Dance Step 02',
        description: 'We launched our mission in 2002 with minimal initial investment, swiftly expanding our operational capacity to exceed 6,000 trained students. We have systematically enlarged our educational footprint over 23 years of continuous deployment, guaranteeing sustained market dominance in artistic and cultural development. We compellingly harness the visionary acumen of Founder Tirthraj Trivedi to secure value-driven educational gateways.'
    },
    {
        id: 'step3',
        title: 'Dance Step 03',
        description: 'Our endeavor began dramatically in 2002 with a paltry initial investment, rapidly increasing our operational capacity to over 6,000 students educated. We have methodically expanded our educational presence across 23 years of uninterrupted deployment, maintaining perpetual market preeminence in artistic and cultural development. We powerfully utilize the visionary expertise of Founder Tirthraj Trivedi to anchor value-driven educational platforms.'
    }
]

const features = [
    'Dance Practice',
    'Dance Growth',
    'Dance Training',
    'Dance Improvement'
]

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState('step1')

    const currentTab = danceTabs.find(tab => tab.id === activeTab) || danceTabs[0]

    return (
        <main>
            {/* Breadcrumb Section */}
            <section
                className="relative py-32 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/eventimg/international/19-3.JPG')" }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center">

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
                        <nav className="flex justify-center items-center gap-2 text-white/80">
                            <Link href="/" className="hover:text-primary-400 transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-primary-400">About Us</span>
                        </nav>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/gynmastic/poto1.JPG"
                                    alt="About Dynamice Children Academy"
                                    width={600}
                                    height={500}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            {/* Decorative Element */}
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-primary-500 rounded-2xl -z-10" />
                        </div>

                        {/* Content */}
                        <div>
                            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
                                About Us
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Founded in 2002
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Welcome to Dynamice Children Academy — a creative and inspiring platform dedicated to nurturing the talents, confidence, and overall development of children.
                                </p>
                                <p>
                                    At our academy, we believe that every child is unique and gifted with limitless potential. Through a combination of creativity, culture, performance, fitness, and personality development, we help children discover their strengths and express themselves with confidence.
                                </p>
                                <p>
                                    We offer training in a wide range of activities including Dance, Folk Dance, Drawing, Gymnastics, Drama & Public Speaking, Modelling, Garba, and Spiritual & Cultural Learning. Our programs are specially designed to encourage discipline, creativity, teamwork, stage confidence, communication skills, and personal growth in a positive and motivating environment.
                                </p>
                                <p>
                                    Over the years, Dynamice Children Academy has proudly participated in numerous cultural events, competitions, festivals, and national as well as international programs, earning appreciation for promoting children’s talent and Indian cultural values.
                                </p>
                                <p>
                                    More than just an academy, we are a family that believes in shaping confident, creative, disciplined, and culturally connected young individuals ready to shine in every field of life.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dance Technique Section */}
            <section
                className="py-20 bg-gray-50"
                style={{ backgroundImage: "url('/assets/img/bg/dance_bg_1.png')" }}
            >
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Content */}
                        <div>
                            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
                                Our Dance Technique
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                We&apos;re some simple steps for teaching dance
                            </h2>

                            {/* Tabs */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                {danceTabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === tab.id
                                            ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                                            : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-300'
                                            }`}
                                    >
                                        {tab.title}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {currentTab.description}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2 text-gray-700">
                                            <CheckCircle className="w-5 h-5 text-primary-500" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/aboutimg2.png"
                                alt="Dance Technique"
                                width={600}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Awards Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Vision */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Our vision is to enlighten countless young minds with the timeless culture, traditions, and spiritual essence of our nation, empowering them to carry India’s heritage with pride and authenticity across the world. We aspire to build a generation of children who not only learn our values but embody them—becoming global ambassadors of India’s rich legacy.
                                </p>
                                <p>
                                    Through immersive cultural education, value-driven learning, and expressive artistic platforms, we aim to nurture children into confident, compassionate, and culturally grounded individuals. We envision our academy as a place where the vibrance of Indian traditions merges seamlessly with the curiosity and creativity of young learners, shaping them into powerful voices of representation on international stages.
                                </p>
                                <p>
                                    By instilling deep-rooted respect for our heritage and providing opportunities for global exposure, we strive to make our children the shining symbols of India’s honour, authenticity, and artistic brilliance. Our vision is to see India celebrated across the globe through the talent, discipline, and cultural resonance of its youngest generation—children who make the world experience the beauty of our nation through their actions, performances, and values.
                                </p>
                            </div>
                        </div>


                        {/* Awards */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Awards & Recognition</h3>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Our journey is defined by a consistent pursuit of excellence, earning us prestigious recognition on both national and international stages. We take immense pride in being featured in the London Book of World Records, a testament to the dedication of our students and the visionary leadership that drives our academy. This global milestone reflects our commitment to setting high standards in artistic training and cultural representation.
                                </p>
                                <p>
                                    As a Government-Registered Institution and a Government-Approved Vocational Training Centre, we operate with the highest levels of credibility and trust. Our academy is also Trademark-Registered under the Government of India, further supported by certifications from IAF and EGAC for maintaining a high-quality management system. These credentials ensure that every student is part of a professionally recognized and secure educational environment.
                                </p>
                                <p>
                                    Beyond institutional excellence, we are proud members of CIOFF and IOV—the premier international organizations for folklore and folk art affiliated with UNESCO. This allows our students to represent India’s rich heritage on global platforms worldwide. Our mission has been celebrated by the press, with features in over 200 print media articles and 60+ news channels highlighting our impact.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Media Journey Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Recognized Globally, Celebrated Nationally</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Our Media Journey</h2>
                            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full" />
                        </div>
                        <div className="grid lg:grid-cols-3 gap-10 text-gray-600 leading-relaxed text-lg">
                            <p>
                                The media has played a pivotal role in documenting our academy's growth, sharing our story of cultural preservation with the world. We are profoundly grateful for the recognition received from respected media houses, whose coverage has highlighted our initiatives in over 200 print articles. These features celebrate our dedication to youth development and our contributions to the global artistic community.
                            </p>
                            <p>
                                Our mission has been further amplified through more than 60 electronic media and press news channels, bringing our vision into countless homes nationwide. This consistent national presence has been instrumental in establishing our academy as a trusted name for cultural education. By sharing our students&apos; accomplishments, these platforms have helped us inspire a new generation to embrace their heritage with pride.
                            </p>
                            <p>
                                Internationally, our efforts to spread Indian culture have been featured in over 50 articles and interviews across prominent global platforms. This overwhelming support from the international media has not only bolstered our credibility but has also motivated us to advance our mission with even greater passion. We continue to strive for excellence, honored by the global community&apos;s embrace of our journey.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Team /> */}
            <section className="bg-[#C9175D] text-white py-16 px-6 relative overflow-hidden h-full">


                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Company</h2>
                    <h3 className="text-3xl font-bold mt-2">Founder / Director</h3>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">


                    <div className="text-center">
                        <div className="bg-white rounded-3xl p-4 inline-block shadow-lg">
                            <img
                                src="/1.png"
                                alt="Tirthraj Trivedi"
                                className="rounded-2xl w-72 h-80 object-cover"
                            />
                        </div>

                        <h3 className="text-2xl font-bold mt-6">Tirthraj Trivedi</h3>
                        <p className="text-sm mt-2">
                            Founder & Director of Dynamice Children Academy
                            International Culture Representative & Performing Arts Mentor
                            World Record Holder | Expert in Dance, Acting, Modeling & Creative Education
                        </p>


                        <div className="flex justify-center gap-4 mt-6 text-xl">
                            {[
                                { icon: <Facebook size={20} />, url: 'https://www.facebook.com/navinvato/videos/-dynamic-children-academy-%E0%AA%97%E0%AB%81%E0%AA%9C%E0%AA%B0%E0%AA%BE%E0%AA%A4-%E0%AA%A8%E0%AB%80-%E0%AA%A8%E0%AA%82%E0%AA%AC%E0%AA%B0-1-kids-talent-hub%E0%AA%85%E0%AA%B9%E0%AB%80%E0%AA%82-%E0%AA%AC%E0%AA%BE%E0%AA%B3%E0%AA%95%E0%AB%8B-%E0%AA%AE%E0%AA%BE%E0%AA%A4%E0%AB%8D%E0%AA%B0-activ/4250374635282583/', label: 'Facebook' },
                                { icon: <Instagram size={20} />, url: 'https://www.instagram.com/dynamice_academy/', label: 'Instagram' },
                                { icon: <Twitter size={20} />, url: 'https://share.google/KaHmNCkLPfNC9II9L', label: 'Twitter' },
                                { icon: <Youtube size={20} />, url: 'https://www.youtube.com/@dynamicechildrenacademy617', label: 'YouTube' },
                            ].map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full hover:scale-110 transition-all duration-300 shadow-sm"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="text-sm leading-relaxed space-y-4">
                        <p>
                            Born and brought up in Himmatnagar, he comes from a humble family background where culture, tradition, and creativity became the foundation of his artistic journey. Inspired by Indian folk music, dance, and cultural values from an early age, he developed a deep passion for performing arts and cultural education.
                        </p>

                        <p>
                           He pursued his education in performing arts with dedication and professional training, shaping his expertise in dance, music, acting, and stage performance. Through years of hard work and creative excellence, he established himself as a mentor, performer, and cultural representative committed to nurturing young talent and promoting Indian culture globally.
                        </p>

                        <p>
                            With a vision to inspire the next generation through creativity and discipline, his academy has become a platform for students to explore dance, acting, modeling, and artistic expression. His team has proudly represented Indian culture at numerous national and international events, earning recognition, awards, and appreciation across the globe.
                        </p>
                    </div>

                </div>
            </section>

            <section className="py-20 bg-linear-to-r from-primary-600 to-primary-800">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Get Your Free Registration
                    </h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Start your dance journey with us today. Register for a free trial class and experience the magic of dance!
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>


        </main>
    )
}