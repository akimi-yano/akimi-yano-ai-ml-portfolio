import TimeRight from './timeRight'
import TimeLeft from './timeLeft'

export default function Timeline() {
    const step1_time = '2019 - 2024'
    const step1_title = 'AI Applications'
    const step1_desc = 'Integrated AI functionalities into apps. Built ML models during Kaggle competitions.'
    const step1_img = 'assets/kaggle.png'

    const step2_time = '2024 Summer'
    const step2_title = 'AI Projects from Scratch'
    const step2_desc = 'Built more ML models from scratch during AI/ML bootcamp.'
    const step2_img = 'assets/ucsd.png'

    const step3_time = '2024 Winter'
    const step3_title = 'Vision AI Projects'
    const step3_desc = 'Built even more Deep Learning (DL) models focusing on Vision AI during DL/CV programs.'
    const step3_img = 'assets/opencv.png'

    const step4_time = '2025 - Present'
    const step4_title = 'Building More AI Projects'
    const step4_desc = 'Continuously learning and building more AI. Please stay tuned for my future apps!'
    const step4_img = 'assets/google_colab.png'

    return (
        <div className='antialiased text-gray-800'>
            <div className='relative container mx-auto px-6 flex flex-col space-y-8'>
                <div className='absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0'></div>
                <TimeLeft time={step1_time} title={step1_title} desc={step1_desc} image={step1_img}/>
                <TimeRight time={step2_time} title={step2_title} desc={step2_desc} image={step2_img}/>
                <TimeLeft time={step3_time} title={step3_title} desc={step3_desc} image={step3_img}/>
                <TimeRight time={step4_time} title={step4_title} desc={step4_desc} image={step4_img}/>
            </div>
        </div>
    );
}
