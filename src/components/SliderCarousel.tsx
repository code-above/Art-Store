import Image from 'next/image'
import cardcarousel from '../../src/assets/cardcarousel.png'
import React from "react";
import Carousel, {slidesToShowPlugin, arrowsPlugin} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import dynamic from 'next/dynamic';
import shopp1 from '../../src/assets/shopp1.png'
import clothingstoredemo from '../../src/assets/clothing-store-demo.png'
import store from '../../src/assets/store.png'
import Link from 'next/link'




export default function SliderCarousel() {
 const Carousel = dynamic(
    () => import ('@brainhubeu/react-carousel'),
  {
  ssr: false
  }
)

return (
    <div className="p-12 ">
      <Carousel 
    plugins={[
      'infinite',
      'arrows',
      {
        resolve: slidesToShowPlugin,
        options: {
        numberOfSlides: 3
      
    
        }
      }
    ]}
    >
      
      <div className="">
 
          <Image src={store} className=""
              layout="fill" 
          />
          
              <Link className="block"
           href="https://code-above.github.io/shopp-1/shopp-1/public/#chair-description/"><a className="z-30 rounded-full bg-purple-300 text-gray-600 text-sm hover:font-extra-bold relative p-4 ">E-commerce Furniture Template</a></Link>


      </div>
     




      <div className="">
          <Link className=""
           href="https://code-above.github.io/Clothing-Store/public/index.html"><a className="opacity-100 z-30  text-purple-button text-lg  hover:font-extra-bold hover:text-xl z-20 relative">E-commerce Furniture Template  </a></Link>
          <Image src={clothingstoredemo} className="absolute opacity-50 hover:opacity-100"
              layout="fill" />
      </div>






          <Image src={cardcarousel} />
        </Carousel>
  </div>

  );
};

 