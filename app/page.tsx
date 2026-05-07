// app/page.js
import HeroScroll from '@/app/components/Hero'
import Team from '@/app/components/Team'
import UpcomingEvents from '@/app/components/UpcomingEvents'
import { Award, Users, Calendar, Music } from 'lucide-react'
// import Team from './components/Team'
import TextScroll from '@/app/components/Textscroll'
import Contactus from '@/app/components/Contectus'
import ProgramSection from './components/ProgramSection'
import Testimonial from './components/Testimonial'
import Country from './components/Country'
import Awards from './components/Awards'
import FounderSection from './components/Founder'
import Mission from './components/Mission'
import ImageGallery from './components/ImageGallery'

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* <HeroScroll /> */}
      <ImageGallery />
      <TextScroll />
      <ProgramSection />
      <Awards />
      <Country />
      {/* <UpcomingEvents /> */}
      <Mission />
      <Testimonial />
      {/* <FounderSection /> */}
      <hr className="text-white" />
      {/* <Team /> */}
      <Contactus />
    </div>
  )
}