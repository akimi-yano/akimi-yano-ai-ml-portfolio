export default function TimeLeft() {
    return (
        <div className='relative z-10'>
            <img src={'assets/profile_img.jpg'} alt='Profile Image' className='h-24 w-24 object-cover rounded-full shadow-md border-4 border-white absolute md:mx-auto md:right-0 md:left-0' />
            <div className='relative pl-28 pt-0 md:w-1/2 md:ml-auto md:pl-16 md:ml-0 md:mr-auto md:pl-0 md:pr-16'>
                <div className='absolute inset-0 left-10 h-4 w-4 transform rotate-45 bg-white top-11 left-26 md:left-14 md:left-auto md:right-14' aria-hidden='true'>
                </div>
                <div className='bg-white p-6 rounded-md shadow-md'>
                    <span className='font-bold text-indigo-600 text-sm tracking-wide'>Jan 2021</span>
                    <h1 className="text-2xl fond-bold pt-1">An Amazing Travel</h1>
                    <p className='pt-1'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p> 
                </div>
            </div>
        </div>
    );
}
