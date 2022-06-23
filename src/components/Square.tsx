import Image from 'next/Image'
import dp from '../../src/assets/dp.jpg'


export default function Square() {

    return (
        <>
            <div className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96" >
                <div className="rounded-2xl">
            <Image class="rounded-lg shadow-2xl" src={dp} layout="responsive" height={370} width={300} />
                </div>
            </div>
        </>
    )
}