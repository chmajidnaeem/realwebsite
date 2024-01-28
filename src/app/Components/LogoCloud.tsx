"use client"
import Image from "next/image"
export default function LogoCloud(){
    return(
        <>
          <div className="bg-gradient-to-r from-indigo-200 to-white-500  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-4xl font-semibold leading-8 text-indigo-900">Trusted by the world’s most innovative teams</h2>
          <div className="mx-auto  mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-10 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">

            <Image className="col-span-2 max-h-55 w-full object-contain contrast-125 lg:col-span-1" src="/logo1.jpeg" alt="Transistor" width="208" height="48" />
            <Image className="col-span-2 max-h-55 w-full object-contain contrast-125 lg:col-span-1" src="/Hamdard.png" alt="Reform" width="158" height="48" />
            <Image className="col-span-2 max-h-55 w-full object-contain contrast-125 lg:col-span-1" src="/Martin.jpg" alt="Tuple" width="158" height="48" />
            <Image className="col-span-2 max-h-55 w-full object-contain contrast-125 sm:col-start-2 lg:col-span-1" src="/Kaizen.jpeg" alt="SavvyCal" width="146" height="158" />
            <Image className="col-span-2 col-start-2 max-h-90 w-full contrast-125 object-contain sm:col-start-auto lg:col-span-1" src="/Royal.jpg" alt="Statamic" width="158" height="48" />


          </div>
        </div>
      </div>
    
        </>
    )
}