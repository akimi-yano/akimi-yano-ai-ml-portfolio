import Image from 'next/image'

export default function Banner() {
    return (
        <div id='banner' className="flex justify-around">
            <div className="grid-flow-col grid-rows-2 gap-1">
                <div className="grid grid-flow-col grid-rows-1 grid-cols-3 gap-1">
                    <div className="flex items-center h-96">
                        <h1 className={`font-pressStart english_quote`}>&quot;I want to bring people sparking joy through the power of mind-blowing technology.&quot;</h1>
                    </div >
                    <div className="flex items-center h-96">
                        <Image className='profile_img items-center' src="/assets/profile_img.jpg" alt="Profile Image" />
                    </div>
                    <div className="flex items-center h-96">
                        <h1 className={`font-dotGothic16 flex items-center japanese_quote`}>『みんながびっくりするようなテクノロジーでときめきを届けたい。』</h1>
                    </div>
                </div>
                <div className="flex justify-center h-96">
                    <h1 className={`font-londrinaShadow job_title`}>Artificial Intelligence / Machine Learning Software Enginner</h1>
                </div>
            </div>
        </div>
    )
}