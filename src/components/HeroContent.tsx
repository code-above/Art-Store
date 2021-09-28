import HeroSection from '../../src/components/HeroSection'

export default function HeroContent() {
    return (
        <>
        <div className="mt-4 lg:mt-48 ">
            <h2 className="leading-none text-gray-600 text-2xl max-w-xs md:max-w-lg  md:text-5xl font-bold ml-12">Gettting the vitals on your prospects shouldn't be hard</h2>
             <h3 className="max-w-xs md:max-w-md leading-relaxed text-lg ml-12 mt-6 md:mt-16 text-gray-600">We help you find leads and give you a complete picture of their Form 5500 activity</h3>
            <button className="rounded-lg text-lg md:text-xl lg:text-2xl bg-blue-button text-white px-6 lg:px-16 py-3 ml-12 mt-12 ">Learn More</button>
        </div>
        </>
    )
}