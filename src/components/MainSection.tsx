import Square from '../../src/components/Square'
import InfoBox from '../../src/components/InfoBox'

export default function MainSection() {

    
    return (
        <>
        <section className="px-12 md:px-8 lg:px-12 relative mt-24 md:mt-48 container mx-auto ">
            <div className="max-w-xs lg:max-w-sm text-gray-rgba  md:pr-0 pt-24 md:pt-12">
                <h3 className=" leading-snug text-lg md:text-2xl lg:text-3xl font-bold mb-6 text-slate-700 "> Web Developer</h3>
                <h4 className="pr-8 text-lg md:text-xl text-slate-500 leading-2">I am passionate about creating visually appealing, user friendly web applications that are interactive and crafted to your liking.</h4>
            </div>
             <div className="-inset-y-16 md:ml-8 lg:mr-6 absolute right-5 lg:right-20 md:-inset-y-60 lg:bottom-5"> 
                <Square />
             </div>
        </section>

        <section>
            <div>
                <InfoBox />
            </div>
        </section>
</>
    )
}
