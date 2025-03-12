import Image from 'next/image'

export default function Banner() {
    return (
        <div id='banner' className="flex justify-around relative w-full bg-black">
            <div className="relative w-full grid md:bg-fixed bg-center bg-cover bg-no-repeat py-10"
                style={{ backgroundImage: "url('assets/banner_background.svg')" }}>
                <div className="grid-flow-col grid-rows-2">
                    <div className="grid grid-flow-col grid-rows-3 md:grid-rows-1 md:grid-cols-3">
                        <div className="flex items-center px-10 md:py-5">
                            <h1 className={`font-pressStart text-center font-bold text-white text-base break-words`}>&quot;I want to bring people sparking joy through the power of mind-blowing technology.&quot;</h1>
                        </div >
                        <div className="flex items-center px-10 md:py-5">
                            <Image className='rounded-full items-center m-auto' width={180} height={180} src={'assets/profile_img.jpg'} alt="Profile Image" />
                        </div>
                        <div className="flex items-center px-10 md:py-5">
                            <h1 className={`font-dotGothic16 text-center font-bold text-white text-xl break-words`}>『みんながびっくりするようなテクノロジーでときめきを届けたい。』</h1>
                        </div>
                    </div>
                    <div className="flex justify-center px-10 md:py-5">
                        <h1 className={`font-londrinaShadow text-center font-bold tracking-wide text-white text-4xl break-words`}>AI / ML Enginner</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}