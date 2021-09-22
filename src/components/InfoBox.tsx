import Image from 'next/Image'
import clock from '../../src/assets/clock.svg'
import icon2 from '../../src/assets/icon2.png'
import icon from '../../src/assets/icon.png'



export default function InfoBox() {

    return (
        <div className="justify-center rounded-3xl bg-blue-600 block md:flex my-32 mx-12 bg-gradient-to-b from-blue-400 to-blue-600"> 
            
          <div className="md:grid grid-cols-3 text-white py-12">
            <div className="px-16 md:px-4">
                <Image
                    src={clock}
                    />
                <h3 className="font-bold">Lorem Ipsum</h3>
                    <p className="pb-8 md:pb-0 max-w-xs font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="px-16 md:px-4 pt-3">
                <Image
                    src={icon2}
                    />
                     <h3 className="font-bold pt-4">Lorem Ipsum</h3>
                    <p className=" max-w-xs font-thin pb-8 md:pb-0 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

             <div className="pt-3 px-16 md:px-4">
                <Image
                    src={icon}
                    />
                     <h3 className="font-bold pt-6">Lorem Ipsum</h3>
                    <p className=" max-w-xs font-thin pb-8 md:pb-0 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             </div>
          </div>
        </div>
    )
}