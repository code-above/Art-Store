import HeroSection from '../src/components/HeroSection'
import Header from '../src/components/Header'
import HeroContent from '../src/components/HeroContent'
import MainSection from '../src/components/MainSection'
import AboutSection from '../src/components/AboutSection'
import ContactSection from '../src/components/ContactSection'
import Footer from '../src/components/Footer'
import SliderCarousel from '../src/components/SliderCarousel'
import hero from '../src/assets/hero.jpg'
import Image from 'next/image'
import bg from '../src/assets/bg.jpg'
import Card from '../src/components/Card'
import ClothingCard from '../src/components/Clothing-Card'
import ArtCard from '../src/components/Art-Card'
import FitnessCard from '../src/components/Fitness-Card'
import PatioCard from '../src/components/PatioCard'
import NikeCard from '../src/components/NikeCard'
import ShoesCard from '../src/components/ShoesCard'







export default function Home() {



  return (
  <div className="font-manrope  mx-auto relative overflow-x-hidden"> 
      <div className=" absolute opacity-25 transform scale-150 z-0 min-w-full">
          <Image src={bg}
          className=""
            width={1800}
            height={600}
            layout="fixed"
            /> 
      </div>
      <Header/>
        <HeroSection /> 
        <MainSection />
        <AboutSection />


        <div className="flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card  />
            <ClothingCard />
            <ArtCard />
            <FitnessCard />
            <PatioCard />
            <NikeCard />
            <ShoesCard />

        </div>




        <ContactSection />
   
      <Footer />
   </div>
  )
}
 