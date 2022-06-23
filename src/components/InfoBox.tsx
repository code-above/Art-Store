import Image from 'next/Image'
import clock from '../../src/assets/clock.png'
import responsive from '../../src//assets/responsive.png'
import dynamic from '../../src/assets/dynamic.png'





export default function InfoBox() {

    return (
        <div className="justify-center items-center px-12 md:px-24">
        <div className="px-8 container justify-center rounded-3xl block w-3/4 md:w-full  md:flex my-24 bg-beige"> 
            
          <div className="md:grid grid-cols-3 py-10">
            <div className="py-6 px-16 md:px-4 ">
                <Image
                    src={clock}
                    />
                <h3 className="font-bold pb-2 text-slate-700">Save yourself time</h3>
                    <p className="max-w-xs font-md md:pb-0 text-slate-500">You have enough on your plate, let me help with your design with fast load times</p>
            </div>

            <div className="py-6 px-16 md:px-4 ">
                <Image
                    src={responsive}
                    />
                     <h3 className="font-bold pb-2 text-slate-700">Responsive</h3>
                    <p className=" max-w-xs font-md md:pb-0 text-slate-500">I'll make sue your content looks fabulous on all devices</p>
            </div>

             <div className="py-6 px-16 md:px-4">
                <Image
                    src={dynamic}
                    />
                     <h3 className="font-bold text-slate-700 pb-2">Dynamic</h3>
                    <p className=" max-w-xs font-md md:pb-0 text-slate-500 ">You can choose static content, or you can choose to have more interactivity enhacing the user experience</p>
             </div>
          </div>
        </div>
        </div>
    )
}