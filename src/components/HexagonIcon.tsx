import Image from 'next/Image'
import hexagon from '../../src/assets/hexagon.png'


export default function HexagonIcon() {

    return (
        <>
        <Image 
            src={hexagon}
            height={2000}
            width={1800}
          
        />
        </>
    )
}