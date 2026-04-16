'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Youtube, CheckCircle } from 'lucide-react'
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
                                    src="/aboutimg1.png"
                                    alt="About RangSagar"
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
                                    Founded in 2002 by Director Tirthraj Trivedi with just 14 students, our academy has grown into a prestigious institution that has proudly trained more than 6,000 young learners. Guided by a strong vision to nurture India’s culture, traditions, and values in the next generation, we have become a trusted platform for children aged 4 to 14 years to learn, express, and shine.
                                </p>
                                <p>
                                    We are a Government-Registered Institution, a Government-Approved Vocational Training Centre, and a Trademark-Registered Academy under the Government of India. Our commitment to excellence is further strengthened by certifications from IAF and EGAC for maintaining a high-quality management system.
                                </p>
                                <p>
                                    Our academy has earned international recognition, marking its name in the London Book of World Records and becoming an esteemed member of CIOFF (International Council of Organizations of Folklore Festivals and Folk Arts) and IOV (International Organization of Folk Art). These affiliations allow our students to proudly represent India on global platforms.
                                </p>
                                <p>
                                    With a mission to instill cultural values, discipline, and artistic excellence, we provide world-class training and international-stage opportunities. We strive to shape ambitious, confident, and culturally enriched young minds who carry the pride and authenticity of India across the world.
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
                                The media has played a pivotal role in documenting our academy’s growth, sharing our story of cultural preservation with the world. We are profoundly grateful for the recognition received from respected media houses, whose coverage has highlighted our initiatives in over 200 print articles. These features celebrate our dedication to youth development and our contributions to the global artistic community.
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

            {/* CTA Section */}
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