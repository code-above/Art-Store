import Image from 'next/image'
import html from '../../src/assets/html.png'
import css from '../../src/assets/css.png'
import tailwind from '../../src/assets/tailwind.png'
import js from '../../src/assets/js.png'
import react from '../../src/assets/react.png'
import next from '../../src/assets/nextjs.png'
import alpine from '../../src/assets/alpine.png'
import splide from '../../src/assets/splide.png'
import github from '../../src/assets/github.png'
import git from '../../src/assets/git.png'








export default function AboutSection() {

    return (
        <section className="px-12  mb-12 md:mb-0 grid grid-rows-2 container mx-auto block">
          <div className=" md:ml-0 lg:ml-0">
    <div className="">
            <h2 className="font-bold text-4xl text-slate-800 pb-2 ">About Me</h2>
            <div className="bg-beige py-4 "></div>
            <p className="text-slate-700 md:text-lg my-6">Hi, i'm Sonia Gill. I'm a front-end developer from Toronto. I spend my time on personal projects and learning more about the dev world and how to improve my skills. I am passionate about building accessible, user-friendly websites, and web applications. My skills include HTML, CSS (TailwindCSS), Javascript(ES6), React, Next, Alpine, GIT and Github. However, I am constantly learning and open to new technologies. If you think i'd be a great fit for your team feel free to <b> <u>contact </u></b> me so we can chat. </p>
            
            <p2 className="text-slate-700 md:text-lg">As both a Flight Attendant and a self-taught developer, I am a fast, efficient and resourceful learner. My stengths include problem solving and adapting to required changes quickly. My favouite and most comforting office space for coding is in the clouds &#9729;&#65039; (literally)! My background has not been the traditional route but I've loved the journey every step of the way   </p2>
   
        </div>
 </div>

            <div className="grid-flow-row ">
                <h2 className="text-2xl font-bold md:text-4xl text-slate-800 mt-12 mb-8"> Skills</h2>
                    <ul className="bg-beige py-12 px-12">
                    <div className="flex justify-center items-center">
                        <li className="mr-4">
                            <Image className="" src={html} layout="intrinsic" width={70} height={70}/>
                        </li>
                        <li  className="mr-4">
                             <Image className="" src={css} layout="intrinsic" width={70} height={70} />
                        </li>
                        <li  className="mr-4">
                             <Image className="" src={tailwind} layout="intrinsic" width={70} height={70}/>
                         </li>
                         <li  className="mr-4">
                             <Image className="" src={js} layout="intrinsic" width={80} height={80} />
                        </li>
                        <li  className="mr-4">
                             <Image className="" src={react} layout="intrinsic" width={70} height={70} />
                         </li>
                         <li  className="mr-4">
                             <Image className="" src={next} layout="intrinsic" width={70} height={70} />
                         </li>
                         <li  className="mr-4">
                             <Image className="" src={alpine} layout="intrinsic" width={70} height={70} />
                         </li>
                         <li  className="mr-4">
                             <Image className="" src={splide} layout="intrinsic" width={70} height={70} />
                         </li>
                         <li  className="mr-4">
                             <Image className="" src={github} layout="intrinsic" width={70} height={70} />
                         </li>
                         <li  className="mr-4">
                             <Image className="" src={git} layout="intrinsic" width={70} height={70} />
                         </li>


                 </div>
                  </ul>
            </div>

        </section>
    )
} 