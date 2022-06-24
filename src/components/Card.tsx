import Image from 'next/image'
import Link from 'next/Link'
import store from '../../src/assets/store.png'



export default function Card() {
    return (
        <div class="p-14">  
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <Image src={store} />
          <div class="px-6 py-4"> 
          <Link href="https://code-above.github.io/shopp-1/shopp-1/public/#chair-description">
            <div class="font-bold text-xl mb-2 cursor-pointer">Modern Furniture </div>
        </Link>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#furniture</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#shopping</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#modern</span>
          </div>
        </div>
      </div>


   
    )
}