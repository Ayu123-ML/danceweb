'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Program {
    id: string
    name: string
    title: string
    description: string
    image: string
    color: string
}

const programs: Program[] = [
    {
        id: 'service',
        name: 'SERVICE',
        title: 'Service',
        description: 'We provide professional dance services for events, programs, and training, tailored to match the theme, audience, and occasion. Our services combine creativity, discipline, and performance excellence to deliver memorable experiences.',
        image: '/serviceimg.png',
        color: '#E31E24'
    },
    {
        id: 'dance',
        name: 'DANCE',
        title: 'Dance',
        description: 'At our academy, we inspire children aged 4 to 14 years to discover the joy of movement through a warm, friendly, and encouraging environment. Our teaching style is simple, engaging, and child-friendly, making every session fun, comfortable, and easy to follow—even for complete beginners.\n\nWe offer a wide variety of dance genres to help young dancers explore their unique style and creativity. From Bollywood, Hip-Hop, Contemporary, Folk, Classical, Garba, and Semi-Classical to fun freestyle sessions, our curriculum ensures every child gets the chance to learn something new and exciting. Each class is designed to boost confidence, flexibility, discipline, and self-expression.\n\nOur instructors understand the needs of each age group and use interactive techniques, storytelling, and step-by-step guidance so children learn effortlessly while enjoying every moment. Along with technique, we focus on teamwork, positivity, and building a strong foundation in rhythm and coordination.\n\nJoin us and let your child explore the world of dance in a safe, happy, and creative space.',
        image: '/bollywoodnc/dance_img.jpg',
        color: '#B0CB1F'
    },
    {
        id: 'gymnastics',
        name: 'GYMNASTICS',
        title: 'Gymnastics',
        description: 'At our academy, we provide a joyful, energetic, and supportive environment for children aged 4 to 12 years to learn, grow, and thrive through gymnastics. Our friendly mentors follow an easy and engaging teaching style, ensuring that every child feels comfortable, confident, and excited to participate.\n\nWe offer training across various forms and genres of gymnastics, including basic tumbling, balance skills, flexibility training, rhythmic movements, coordination exercises, and beginner-level artistic gymnastics. Each session is structured to build a strong foundation while keeping learning playful and enjoyable.\n\nSafety is our top priority. Our academy follows strict safety protocols, with well-trained instructors supervising every activity. We use well-maintained, high-quality equipment designed specifically for young learners, ensuring a secure and worry-free experience for parents and children alike.\n\nWhether your child is just beginning or ready to advance, we focus on step-by-step training, motivating them to discover their potential with positivity and discipline.\n\nJoin us to give your child an exciting opportunity to develop strength, flexibility, confidence, and lifelong fitness habits—all in a safe, friendly, and inspiring space!',
        image: '/aboutimg/gymnastic-img.png',
        color: '#EF7F1A'
    },
    {
        id: 'drama',
        name: 'DRAMA SPEAKING',
        title: 'Drama & Speaking',
        description: 'At our Children’s Academy, we specialize in Drama and Public Speaking for children aged 4 to 14 years, creating a warm, friendly, and encouraging environment where every child feels free to express themselves. Our programs are designed to nurture creativity, build confidence, and help young minds develop strong communication skills.\n\nThrough interactive sessions, children explore voice modulation, storytelling, dialogues, stage presence, and expressive movement. We believe learning should be engaging and practical, which is why our curriculum includes theatre visits, curated movie screenings, role-play activities, and hands-on performance workshops that bring real-world experiences into the classroom.\n\nAdding to this enriching journey, we host celebrity guests, industry professionals, and field experts who conduct exclusive masterclasses—offering children rare exposure and inspiring guidance.\n\nWith expert mentors and a positive, child-friendly atmosphere, we aim to shape confident speakers, expressive performers, and thoughtful young individuals ready to shine on any stage.\n\nJoin us and let your child discover the power of expression.',
        image: '/homeimg/Drama-Speaking.png',
        color: '#008DD2'
    },
    {
        id: 'modeling',
        name: 'MODELING',
        title: 'Modeling',
        description: 'We create structured, child-friendly art experiences that model creativity, confidence, and self-expression. By providing thoughtfully curated materials and guided activities, we ensure children not only enjoy the process but also understand the concepts behind each creation. Our theme-based and seasonal art modules—ranging from festive décor to nature-inspired crafts—help children connect abstract ideas with real-world experiences.',
        image: '/modeling/modeling_img.jpg',
        color: '#CB5499'
    },
    {
        id: 'drawing',
        name: 'DRAWING',
        title: 'Drawing',
        description: 'Our curriculum covers a wide range of art genres and techniques, including basic drawing, sketching, shading, color theory, character drawing, creative craftwork, and theme-based artwork. Each session is designed to strengthen creativity, focus, and fine motor skills while allowing children to express their individuality.\n\nWe provide well-maintained, safe, and high-quality art equipment, ensuring that every child enjoys a smooth and engaging learning experience. To keep creativity alive throughout the year, we offer seasonal and festival-based art activities—from making Diwali lanterns to Christmas ornaments and vibrant summer crafts. These hands-on projects help children learn about culture, nature, and real-world concepts through the joyful medium of art.\n\nWith dedicated guidance and a warm atmosphere, our academy helps children discover their artistic potential and build a love for creativity that lasts a lifetime.',
        image: '/homeimg/image.png',
        color: '#6A5ACD'
    },
    {
        id: 'spiritual',
        name: 'SPIRITUAL',
        title: 'Spiritual',
        description: 'In today’s fast-paced world, where western influences are rapidly shaping young lifestyles, our Children’s Academy is committed to preserving the essence of Indian culture, spirituality, and tradition. Designed for children aged 4 to 14 years, our programs blend engaging learning with meaningful values that stay for life.\n\nWe introduce children to the richness of our heritage through interactive storytelling, soulful bhajans, cultural activities, and thought-provoking sessions that encourage mindfulness, kindness, and emotional awareness. Each class is crafted to help children understand the roots of our traditions while developing confidence, discipline, and a positive outlook.\n\nOur approach is modern yet deeply connected to our cultural identity. Through creative formats—songs, stories, festivals, meditation, and value-based activities—we ensure that learning spirituality becomes joyful, relatable, and inspiring for every child.\n\nAt our academy, we believe that strong cultural grounding shapes strong individuals. By nurturing both intellect and inner values, we aim to guide children towards becoming compassionate, confident, and culturally aware citizens of tomorrow.',
        image: '/homeimg/spritualimg.png',
        color: '#E31E24'
    }
]

interface ThreetypeProps {
    activeProgram: string
    setActiveProgram: (id: string) => void
}

export default function Stats({ activeProgram, setActiveProgram }: ThreetypeProps) {

    const currentProgram = programs.find(p => p.id === activeProgram) || programs[0]

    return (
        <section className="relative py-16 md:py-24 bg-linear-to-b from-gray-50 to-white overflow-hidden">
            {/* Decorative Side Images */}
            {/* <div className="absolute top-1/2 left-0 -translate-y-1/2 
                w-[300px] md:w-[500px] lg:w-[700px] 
                opacity-100 pointer-events-none z-10">
                <img
                    src="/aboutimg/DANCING-GIRL.png"
                    alt=""
                    className="w-full h-150 object-contain"
                />
            </div> */}

            {/* <div className="absolute top-1/2 right-0 -translate-y-1/2 
                w-[300px] md:w-[500px] lg:w-[700px] 
                opacity-100 pointer-events-none z-10">
                <img
                    src="/aboutimg/DANCING-GIRL-right.png"
                    alt=""
                    className="w-full h-150 object-contain"
                />
            </div> */}


            <div className="w-full px-5 md:px-10">
                {/* Program Tabs */}
                <div className="w-full overflow-x-auto pb-4 mb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <div
                        className="flex flex-row justify-start md:justify-center items-center gap-[10px] md:gap-[15px] px-4 min-w-max md:min-w-0 mx-auto font-sans"
                        role="tablist"
                        aria-label="Programs"
                    >
                        {programs.map((program) => {
                            const isActive = activeProgram === program.id;
                            return (
                                <button
                                    key={program.id}
                                    onClick={() => setActiveProgram(program.id)}
                                    style={{
                                        backgroundColor: program.color,
                                        borderRadius: '25px',
                                        padding: '10px 20px',
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                    }}
                                    className={`
                                        text-white text-sm md:text-base font-bold whitespace-nowrap uppercase tracking-wider
                                        border-none transition-all duration-300 ease-in-out
                                        hover:scale-105 hover:brightness-110
                                        ${isActive ? 'scale-105 opacity-100' : 'opacity-70'}
                                    `}
                                    role="tab"
                                    aria-selected={isActive}
                                >
                                    {program.name}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Content Panel */}
                <div className="w-full mx-auto">
                    <div
                        className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden transition-all duration-500 w-full"
                        role="tabpanel"
                    >
                        <div className="flex flex-col md:flex-row w-full min-h-[500px]">
                            {/* Text Content */}
                            <div className="w-full md:w-[60%] lg:w-[50%] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                                <h3 className="text-[32px] md:text-[36px] lg:text-[40px] font-extrabold text-gray-900 mb-6 leading-tight">
                                    {currentProgram.title}
                                </h3>
                                <div className="text-gray-600 leading-[1.8] text-base md:text-lg">
                                    {currentProgram.description.split('\n\n').map((paragraph, idx) => (
                                        <p key={idx} className="mb-6 last:mb-0">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Image */}
                            <div className="w-full md:w-[40%] lg:w-[50%] relative min-h-[400px] md:min-h-auto">
                                <Image
                                    src={currentProgram.image}
                                    alt={currentProgram.title}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 50vw"
                                />
                                {/* Optional gradient overlay for modern look */}
                                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/20 via-transparent to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-1/2 left-0 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-30" />
                <div className="absolute -z-10 bottom-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50" />
            </div>
        </section>
    )
}