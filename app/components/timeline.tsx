import TimeRight from './timeRight'
import TimeLeft from './timeLeft'

export default function Timeline() {
    return (
        <div className='antialiased bg-gray-100 text-gray-800'>
            <div className='relative container mx-auto px-6 flex flex-col space-y-8'>
                <div className='absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0'></div>
                <TimeLeft />
                <TimeRight />
                <TimeLeft />
                <TimeRight />
            </div>
        </div>
    );
}
