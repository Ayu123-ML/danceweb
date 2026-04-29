'use client';

export default function VisionMission() {
    return (
        <section className="w-full py-16 bg-[#f5f5f5]">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT IMAGE */}
                <div className="flex justify-center">
                    <img
                        src="/Mission.png" // place your image in /public folderclass="w-full py-16 bg-[#f5f5f5]"
                        alt="Target"
                        className="w-[320px] md:w-[420px] object-contain"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className="space-y-6">

                    {/* VISION */}
                    <div>
                        <h2 className="text-orange-500 text-2xl font-bold mb-2">
                            VISION
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            To create a world in which exchange of art is free from all restrictions
                            and make the world a better place by helping the society become more
                            tolerant, open and empathetic through cultural exchanges.
                        </p>
                    </div>

                    {/* MISSION */}
                    <div>
                        <h2 className="text-sky-400 text-2xl font-bold mb-3">
                            MISSION
                        </h2>
                        <ul className="text-gray-600 space-y-2 list-disc pl-5">
                            <li>To provide opportunities for students seeking self-fulfillment through performing arts.</li>
                            <li>To generate a sense of appreciation for performing arts through cultural exchanges.</li>
                            <li>To develop love for a country by indulging in its culture.</li>
                            <li>To sustain and enhance a supportive, caring and responsible community among students, society and citizens.</li>
                            <li>To provide positive, life-changing experiences through music for all.</li>
                            <li>Catering opportunities to visit the whole world to broaden their cultural experience.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}