import TimeRight from './timeRight'
import TimeLeft from './timeLeft'

export default function Timeline() {
    const step1_time = '2019 - 2024'
    const step1_title = 'AI/ML Applications'
    const step1_desc = 'I have been participating on Kaggle competitions which are competitions for Machine Learning. I have built an web app using my own model, which was so much fun ! I worked as a Software Engineer and integrated AI/ML functionalities into web apps.'
    const step1_img = 'assets/kaggle.png'

    const step2_time = '2024 Summer'
    const step2_title = 'AI/ML/LLM Projects'
    const step2_desc = 'I joined the AI/ML bootcamp and other online classes to brush up some fundamentals and started building more ML models from scratch.'
    const step2_img = 'assets/ucsd.png'

    const step3_time = '2024 Winter'
    const step3_title = 'Deep Learning & Computer Vision Projects'
    const step3_desc = 'Out of my curiousity for Computer Vision technology, I took part in the 6 different Deep Learning & Computer Vision programs which allowed me to also complete multiple Kaggle competitions for the ML models related to Computer Vision.'
    const step3_img = 'assets/opencv.png'

    const step4_time = '2025 - Present'
    const step4_title = 'Building More AI/ML Projects'
    const step4_desc = 'I have been continuously learning and building ! Please stay tuned for my future apps !'
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
