import { Dela_Gothic_One } from "next/font/google";
import Button from './button'

const delaGothicOne = Dela_Gothic_One({
    subsets: ['latin'],
    weight: "400",
    style: "normal",
    variable: "--font-delaGothicOne"
})

export default function Banner() {
    return (
        <div id='banner' className="flex justify-around p-10">
            <div className="grid-flow-col grid-rows-2 gap-1">
                <div className="grid grid-flow-col grid-rows-1 grid-cols-3 gap-1">
                    <div className="flex items-center h-96">
                        <h1 className={`font-pressStart english_quote`}>"I want to bring people sparking joy through the power of mind-blowing technology."</h1>
                    </div >
                    <div className="flex items-center h-96">
                        <img className='profile_img items-center' src="/assets/profile_img.jpg" alt="Profile Image" />
                    </div>
                    <div className="flex items-center h-96">
                        <h1 className={`${delaGothicOne.className} flex items-center japanese_quote`}>『みんながびっくりするようなテクノロジーでときめきを届けたい。』</h1>
                    </div>
                </div>
                <div className="flex justify-center h-32">
                    <h1 className={`font-pressStart job_title`}>Artificial Intelligence / Machine Learning Software Enginner</h1>
                </div>
                <div className="flex justify-center h-32 w-1/2 m-auto p-10">
                    <Button varient="filled">View Projects</Button>
                    <Button varient="outline">Get In Touch</Button>
                </div>
            </div>
        </div>
    )
}