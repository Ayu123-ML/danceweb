'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface EventData {
    name: string
    images: string[]
    yearMonth: string
    flag: string
    country: string
    festivalName: string
}

interface InternationalGalleryProps {
    events: EventData[]
}

export default function InternationalGallery({ events }: InternationalGalleryProps) {
    // Initialized to null so no gallery is shown first
    const [activeTab, setActiveTab] = useState<string | null>(null)
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const galleryRef = useRef<HTMLDivElement>(null)

    const activeEvent = events.find(e => e.name === activeTab)

    // Auto-scroll when an event is selected
    useEffect(() => {
        if (activeTab && galleryRef.current) {
            galleryRef.current.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            })
        }
    }, [activeTab])

    return (
        <div className="space-y-12">
            {/* List View - Mockup Style */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100">
                                <th className="px-8 py-6 text-xl font-bold text-gray-700">Year/Month</th>
                                <th className="px-8 py-6 text-xl font-bold text-gray-700">Flags</th>
                                <th className="px-8 py-6 text-xl font-bold text-gray-700">Country</th>
                                <th className="px-8 py-6 text-xl font-bold text-gray-700">Festival Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map((event) => (
                                <tr 
                                    key={event.name}
                                    onClick={() => setActiveTab(event.name)}
                                    className={`group cursor-pointer transition-all duration-300 border-b last:border-0 border-gray-50 hover:bg-pink-50/30 ${
                                        activeTab === event.name ? 'bg-pink-50/50' : ''
                                    }`}
                                >
                                    {/* Year/Month Badge */}
                                    <td className="px-8 py-6">
                                        <div className={`inline-block px-4 py-2 rounded-sm text-white font-bold text-sm tracking-wider min-w-[140px] text-center shadow-md transition-transform group-hover:scale-105 ${
                                            activeTab === event.name ? 'bg-[#c9175d]' : 'bg-[#c9175d]/80'
                                        }`}>
                                            {event.yearMonth.toUpperCase()}
                                        </div>
                                    </td>

                                    {/* Flag */}
                                    <td className="px-8 py-6">
                                        <div className="relative w-12 h-8 shadow-sm rounded-sm overflow-hidden border border-gray-100">
                                            <Image 
                                                src={`https://flagcdn.com/w80/${event.flag.toLowerCase()}.png`}
                                                alt={`${event.flag} flag`}
                                                fill
                                                className="object-cover"
                                                unoptimized
                                            />
                                        </div>
                                    </td>

                                    {/* Country */}
                                    <td className="px-8 py-6">
                                        <span className="text-[#c9175d] font-bold tracking-widest text-sm">
                                            {event.country.toUpperCase()}
                                        </span>
                                    </td>

                                    {/* Festival Name */}
                                    <td className="px-8 py-6">
                                        <div className="max-w-md">
                                            <p className="text-gray-700 font-bold text-sm leading-relaxed uppercase tracking-tight">
                                                {event.festivalName}
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Gallery Section - Only show if an event is selected */}
            {activeTab && (
                <div 
                    ref={galleryRef}
                    className="pt-12 scroll-mt-24"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px flex-1 bg-gray-200"></div>
                        <h3 className="text-2xl font-bold text-gray-900 px-6 py-3 bg-gray-100 rounded-2xl">
                            Event Gallery: <span className="text-[#c9175d]">{activeEvent?.name}</span>
                        </h3>
                        <div className="h-px flex-1 bg-gray-200"></div>
                    </div>

                    {activeEvent && activeEvent.images.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
                            {activeEvent.images.map((imgSrc, index) => (
                                <figure
                                    key={`${activeEvent.name}-${index}`}
                                    className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
                                    onClick={() => setSelectedImage(imgSrc)}
                                >
                                    <div className="aspect-4/3 relative overflow-hidden">
                                        <Image
                                            src={imgSrc}
                                            alt={`${activeEvent.name} - Image ${index + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                            <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </figure>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-3xl p-20 text-center border-2 border-dashed border-gray-200">
                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-4xl">📸</span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">No Images Available</h4>
                            <p className="text-gray-500">We haven&apos;t added photos for this event yet. Check back soon!</p>
                        </div>
                    )}
                </div>
            )}

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center p-4 md:p-10 backdrop-blur-md"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 p-4 text-white/50 hover:text-white transition-all hover:rotate-90"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-12 h-12" />
                    </button>
                    <div
                        className="relative w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full max-w-7xl max-h-[85vh]">
                            <Image
                                src={selectedImage}
                                alt="Gallery preview"
                                fill
                                className="object-contain rounded-xl"
                                quality={95}
                                priority
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
