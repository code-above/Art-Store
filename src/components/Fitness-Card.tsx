import Image from 'next/image'
import Link from 'next/Link'
import fitness from '../../src/assets/fitness.png'

export default function FitnessCard() {
    return (
        <div class="p-14">  
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <Image src={fitness} />
          <div class="px-6 py-4"> 
          <Link href="https://code-above.github.io/Fitness-Equipment/public/index.html">
            <div class="font-bold text-xl mb-2 cursor-pointer hover:ring-2 hover:ring-slate-500 hover:rounded-full ">Fitness Equipment </div>
        </Link>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fitness</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#equipment</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#exercise</span>
          </div>
        </div>
      </div>
    )
}