import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function FounderSection() {
    return (
        <section className="bg-gradient-to-r from-pink-700 to-pink-600 text-white py-16 px-6 relative overflow-hidden h-full">

            {/* Title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Company</h2>
                <h3 className="text-3xl font-bold mt-2">Founder / Director</h3>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Left Side */}
                <div className="text-center">
                    <div className="bg-white rounded-3xl p-4 inline-block shadow-lg">
                        <img
                            src="/founder.jpg" // 👉 put your image inside /public folder
                            alt="Naresh Patel"
                            className="rounded-2xl w-72 h-80 object-cover"
                        />
                    </div>

                    <h3 className="text-2xl font-bold mt-6">Naresh Patel</h3>
                    <p className="text-sm mt-2">
                        Director Rangasagar Performing Arts <br />
                        International Culture Representative. <br />
                        World Record Holder.
                    </p>

                    {/* Social Icons */}
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

                {/* Right Side */}
                <div className="text-sm leading-relaxed space-y-4">
                    <p>
                        BORN AND BROUGHT UP– HIMMATNAGAR GUJARAT, BELONGS TO AN ORDINARY FARMER FAMILY WHO kept nature as his source of inspiration for folk music and dance. Fascinated with music from the beginning and he started singing bhajans folk songs and devotional songs.
                    </p>

                    <p>
                        Education and journey–Naresh has a Masters in Hindustani Music from J.G. College of Performing Arts, affiliated to Gujarat University, Ahmedabad. This is where he came in contact with teachers whom he owes for enhancing his passion.
                    </p>

                    <p>
                        Promotion of Indian culture in different countries –Naresh vision to promote Indian culture worldwide. His group has performed in 50+ international festivals and received multiple awards globally.
                    </p>
                </div>

            </div>
        </section>
    );
}