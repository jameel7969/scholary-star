import React from 'react'
import Hero from '../components/Hero'
import CategoryGrid from '../components/CategoryGrid'
import CourseListItem from '../components/CourseListItem'
import MentorCard from '../components/MentorCard'
import TestimonialCard from '../components/TestimonialCard'
import SectionTitle from '../components/SectionTitle'
import AboutSection from '../components/AboutSection'
import WhyChoose from '../components/WhyChoose'
import FaqImg from '../components/faq/faq-img'
import faqImg from '../assets/faq-img.png'
import av1 from '../assets/hero-author-1.png'
import av2 from '../assets/hero-author-2.png'
import av3 from '../assets/hero-author-3.png'
import av4 from '../assets/hero-author-4.png'
import KpiStrip from '../components/KpiStrip'
import Instructors from '../components/Instructors'
import NewsUpdates from '../components/NewsUpdates'
import CourseRequest from '../components/CourseRequest'

const Home = () => {

  return (
    <div className='min-h-screen pb-10 space-y-10'>
      <Hero />
      <CategoryGrid />
      <AboutSection />
      <WhyChoose />

      <FaqImg
        imageSrc={faqImg}
        avatars={[{ src: av1 }, { src: av2 }, { src: av3 }, { src: av4 }]}
      />
      <KpiStrip />

      <Instructors />
      <NewsUpdates />
      {/* <CourseRequest /> */}
    </div>
  )
}

export default Home
