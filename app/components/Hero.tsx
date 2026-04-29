// app/page.tsx
import Image from 'next/image';

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8">
            <div className="max-w-7xl w-full mx-auto">
                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* LEFT SIDE - Small Cards */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 aspect-square flex flex-col items-center justify-center p-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-800">Fast & Accurate</h3>
                                <p className="text-sm text-gray-500 text-center mt-1">Real-time scoring</p>
                            </div>
                            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 aspect-square flex flex-col items-center justify-center p-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-800">Pro Training</h3>
                                <p className="text-sm text-gray-500 text-center mt-1">Improve your aim</p>
                            </div>
                        </div>
                    </div>

                    {/* CENTER - Main Featured Card */}
                    <div className="lg:col-span-6">
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            <div className="relative aspect-square w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                                <div className="relative w-full h-full max-w-[400px] max-h-[400px] mx-auto">
                                    <img
                                        src="https://images.unsplash.com/photo-1580674684085-7617fbf156e0?w=800&h=800&fit=crop"
                                        alt="Dartboard target"

                                        className="object-contain"

                                    />
                                </div>
                            </div>
                            <div className="p-6 text-center border-t border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-800">Bullseye Precision</h2>
                                <p className="text-gray-500 mt-1">Master your aim with our advanced dartboard system</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - Small Cards */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 aspect-square flex flex-col items-center justify-center p-4">
                                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-800">Live Stats</h3>
                                <p className="text-sm text-gray-500 text-center mt-1">Track your progress</p>
                            </div>
                            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 aspect-square flex flex-col items-center justify-center p-4">
                                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-3">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-800">Practice Modes</h3>
                                <p className="text-sm text-gray-500 text-center mt-1">Multiple challenges</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Optional: Bottom supporting cards for extra balance on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6 mt-6">
                    <div className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-semibold">Multiplayer</h4>
                            <p className="text-xs text-gray-500">Challenge friends online</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                            <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-semibold">Leaderboards</h4>
                            <p className="text-xs text-gray-500">Compete worldwide</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}