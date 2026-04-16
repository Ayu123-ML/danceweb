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
            <div className="absolute top-1/2 left-0 -translate-y-1/2 
                w-[300px] md:w-[500px] lg:w-[700px] 
                opacity-100 pointer-events-none z-10">
                <img
                    src="/aboutimg/DANCING-GIRL.png"
                    alt=""
                    className="w-full h-150 object-contain"
                />
            </div>

            <div className="absolute top-1/2 right-0 -translate-y-1/2 
                w-[300px] md:w-[500px] lg:w-[700px] 
                opacity-100 pointer-events-none z-10">
                <img
                    src="/aboutimg/DANCING-GIRL-right.png"
                    alt=""
                    className="w-full h-150 object-contain"
                />
            </div>


            <div className="container mx-auto px-4">
                {/* Program Tabs */}
                <div
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    role="tablist"
                    aria-label="Programs"
                >
                    {programs.map((program) => (
                        <button
                            key={program.id}
                            onClick={() => setActiveProgram(program.id)}
                            style={{
                                backgroundColor: activeProgram === program.id ? program.color : 'white',
                                borderColor: activeProgram === program.id ? program.color : '#e5e7eb',
                                color: activeProgram === program.id ? 'white' : '#374151',
                                boxShadow: activeProgram === program.id
                                    ? `0 10px 15px -3px ${program.color}40, 0 4px 6px -4px ${program.color}40`
                                    : '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
                            }}
                            className={`px-8 py-4 rounded-xl font-bold text-sm md:text-base border transition-all duration-300 whitespace-nowrap uppercase tracking-wider ${activeProgram === program.id
                                ? 'scale-105 shadow-xl'
                                : 'hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5'
                                }`}
                            role="tab"
                            aria-selected={activeProgram === program.id}
                        >
                            {program.name}
                        </button>
                    ))}
                </div>

                {/* Content Panel */}
                <div className="max-w-6xl mx-auto">
                    <div
                        className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500"
                        role="tabpanel"
                    >

                        <div className="flex flex-col lg:flex-row">
                            {/* Text Content */}
                            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    {currentProgram.title}
                                </h3>
                                <div className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    {currentProgram.description.split('\n\n').map((paragraph, idx) => (
                                        <p key={idx} className="mb-4 last:mb-0">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                                <div className="mt-8">
                                    {/* <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5">
                                        Learn More
                                    </button> */}
                                </div>
                            </div>

                            {/* Image */}
                            <div className="lg:w-1/2 relative">
                                <div className="aspect-4/3 lg:aspect-auto lg:h-full relative overflow-hidden">
                                    <Image
                                        src={currentProgram.image}
                                        alt={currentProgram.title}
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent lg:bg-linear-to-r lg:from-white lg:via-transparent lg:to-transparent" />
                                </div>
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