import Timeline from './timeline'

export default function About3() {
  return (
    <div id='about3' className='p-10 bg-black'>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 font-pressStart text-lg text-black break-words">
        <div>
          <Timeline/>
        </div>
        <div>
        <h3 className={`font-pressStart text-2xl px-10 py-5 text-white break-words`}>My AI/ML Learning Journey</h3>
          <p className={`font-pressStart text-base md:text-xl px-10 py-5 text-white break-words`}>My favorite part of being an Engineer is that when I show people an app I built with AI and witness people&apos;s mind-blown reactions !</p>
          <p className={`font-pressStart text-base md:text-xl px-10 py-5 text-white break-words`}>So I really enjoy learning by actually building projects !</p>
          <p className={`font-pressStart text-base md:text-xl px-10 py-5 text-white break-words`}>I have been learning a lot, and looking forward to learning even more !</p>
        </div>
      </div>
    </div>
  );
}