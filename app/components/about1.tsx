import AILoadingEffect from './aiLoadingEffect'
import AIAnimation from './aiAnimation'
import AIAnimation2 from './aiAnimation2'
import AIAnimation3 from './aiAnimation3'
import SpriteAnimator from './spriteAnimator'

export default function About1() {
  return (
    <div id='about1' className='p-10 bg-black'>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2">
        <div>
          {/* <AILoadingEffect /> */}
        </div>
        <div className='text-left'>
          <h3 className={`font-pressStart text-2xl px-10 py-5 text-white break-words`}>My career as an AI / ML Engineer</h3>
          <p className={`font-pressStart text-base md:text-xl px-10 py-5 text-white break-words`}>It has been  <span className={"text-yellow-500"}> my dream</span> to become an AI / ML Engineer.</p>
          <p className={`font-pressStart text-base md:text-xl px-10 py-5 text-white break-words`}>I have been living my dream of immersing myself with the AI/ ML every day by empowering people&apos;s lives through AI.</p>
          <p className={`font-pressStart text-base md:text-xl px-10 py-5 text-white break-words`}>It is my passion !</p>
        </div>
      </div>
    </div>
  );
}
