export default function TimeRight({ time, title, desc, image }) {
    return (
        <div className='relative z-10'>
            <div  className='h-24 w-24 content-center object-cover rounded-full shadow-md border-4 border-white bg-white absolute md:mx-auto md:right-0 md:left-0'>
            <img src={image} alt='Logo Image' className='scale-[0.9]'/>
            </div>  <div className='relative pl-28 pt-0 md:w-1/2 md:ml-auto md:pl-16'>
                <div className='absolute inset-0 left-10 h-4 w-4 transform rotate-45 bg-white top-11 left-26 md:left-14' aria-hidden='true'>
                </div>
                <div className='bg-white p-6 rounded-md shadow-md'>
                    <span className='font-bold text-indigo-600 text-sm'>{time}</span>
                    <h1 className="text-sm py-1">{title}</h1>
                    <p className='font-pressStart text-xs py-1 text-black break-words'>{desc}</p> 
                </div>
            </div>
        </div>
    );
}
