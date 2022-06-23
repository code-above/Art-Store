import HeroSection from '../../src/components/HeroSection'



export default function HeroContent() {
    return (
        <>
        <div className="mt-24 md:mt-12 lg:mt-12  relative z-20 ">
            <h2 className="leading-none text-slate-900 text-4xl max-w-xs md:max-w-lg md:text-5xl font-bold ml-12">Hi, &#128075; I'm Sonia and I love turning your custom designs into something real</h2>


             <h3 className="max-w-xs md:max-w-md text-xl ml-12 mt-10 lg:mb-2 text-slate-600 font-semi-bold mb-4">I want you to love your brand and I work with you to achieve the results you want</h3>
             <div className="my-5">
            <button className="hover:ring-slate-300 hover:ring-offset-2 hover:ring-2 font-bold md:text-xl lg:text-xl bg-beige text-slate-700 px-12 lg:px-16 py-4 ml-12 rounded-full  ">Learn More</button>
            </div>
        </div>
        </>
    )
}