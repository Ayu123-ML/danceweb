import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function FounderSection() {
    return (
        <section className="bg-gradient-to-br from-pink-600 via-pink-500 to-pink-700 text-white py-20 px-6 relative overflow-hidden h-full">
            {/* Section Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight mb-2">Company</h2>
                <h3 className="text-3xl font-bold">Founder / Director</h3>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Side — Photo & Details */}
                <div className="text-center space-y-6">

                    {/* Rounded framed image */}
                    <div className="relative">
                        <div className="w-64 h-72 sm:w-72 sm:h-80 mx-auto bg-white rounded-3xl p-4 shadow-[0_0_25px_rgba(0,0,0,0.3)]">
                            <img
                                src="/founder.jpg"
                                alt="Naresh Patel"
                                className="rounded-2xl w-full h-full object-cover"
                            />
                        </div>

                        {/* Subtle decorative glow ring around image */}
                        <div className="absolute -inset-3 bg-white/20 rounded-3xl blur-xl -z-10 mx-auto"></div>
                    </div>

                    {/* Name and designation */}
                    <div>
                        <h3 className="text-2xl font-bold">Naresh Patel</h3>
                        <p className="text-sm font-light opacity-90 mt-2 leading-relaxed">
                            Director Rangasagar Performing Arts <br />
                            International Culture Representative. <br />
                            World Record Holder.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-4 mt-6">
                        {[
                            {
                                icon: <Facebook size={20} />,
                                url: "https://www.facebook.com/navinvato/videos/-dynamic-children-academy-%E0%AA%97%E0%AB%81%E0%AA%9C%E0%AA%B0%E0%AA%BE%E0%AA%A4-%E0%AA%A8%E0%AB%80-%E0%AA%A8%E0%AA%82%E0%AA%AC%E0%AA%B0-1-kids-talent-hub%E0%AA%85%E0%AA%B9%E0%AB%80%E0%AA%82-%E0%AA%AC%E0%AA%BE%E0%AA%B3%E0%AA%95%E0%AB%8B-%E0%AA%AE%E0%AA%BE%E0%AA%A4%E0%AB%8D%E0%AA%B0-activ/4250374635282583/",
                                label: "Facebook",
                            },
                            {
                                icon: <Instagram size={20} />,
                                url: "https://www.instagram.com/dynamice_academy/",
                                label: "Instagram",
                            },
                            {
                                icon: <Twitter size={20} />,
                                url: "https://share.google/KaHmNCkLPfNC9II9L",
                                label: "Twitter",
                            },
                            {
                                icon: <Youtube size={20} />,
                                url: "https://www.youtube.com/@dynamicechildrenacademy617",
                                label: "YouTube",
                            },
                        ].map((link, idx) => (
                            <a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full hover:scale-110 transition-all duration-300 shadow-sm"
                                aria-label={link.label}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                </div>

                {/* Right Side — Story Text */}
                <div className="text-sm font-light leading-relaxed space-y-5">
                    <p className="drop-shadow-sm">
                        BORN AND BROUGHT UP– HIMMATNAGAR GUJARAT, BELONGS TO AN ORDINARY FARMER FAMILY WHO kept nature as his source of inspiration for folk music and dance. Fascinated with music from the beginning and he started singing bhajans folk songs and devotional songs.
                    </p>

                    <p className="drop-shadow-sm">
                        Education and journey–Naresh has a Masters in Hindustani Music from J.G. College of Performing Arts, affiliated to Gujarat University, Ahmedabad. This is where he came in contact with teachers whom he owes for enhancing his passion.
                    </p>

                    <p className="drop-shadow-sm">
                        Promotion of Indian culture in different countries –Naresh vision to promote Indian culture worldwide. His group has performed in 50+ international festivals and received multiple awards globally.
                    </p>
                </div>

            </div>
        </section>
    );
}