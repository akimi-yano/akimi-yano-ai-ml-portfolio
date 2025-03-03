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
          <AILoadingEffect />
        </div>
        <div className='text-left'>
          <h3 className={`font-pressStart text-xl text-white break-words  px-10 py-5`}>My career as an AI / ML Engineer</h3>
          <p className={`font-pressStart text-lg text-white break-words px-10`}>It has been  <span className={"text-yellow-500"}> my dream</span> to become an AI / ML Engineer.</p>
          <p className={`font-pressStart text-lg text-white break-words px-10`}>I have been living my dream of immersing myself with the AI/ ML every day by empowering people&apos;s lives through AI.</p>
          <p className={`font-pressStart text-lg text-white break-words px-10`}>It is my passion !</p>
        </div>
      </div>
    </div>
  );
}
