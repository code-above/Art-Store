import Image from 'next/image'
import logo from '../../src/assets/codeabovelogo.png'
import LoginButton from '../../src/components/LoginButton'
import SignupButton from '../../src/components/SignupButton'
import MyWorkButton from '../../src/components/MyWorkButton'




export default function Header() {
return (
    <>
    <div className="container mx-auto flex justify-between items-center ">
        <div className=" w-1/5 ">
            <Image className=""
            src={logo}
            layout="responsive"   
             />
        </div>

        <div className="flex items-center">
            <LoginButton />
            <MyWorkButton />
            <SignupButton />
            
        </div>
    </div>

    </>
)
}