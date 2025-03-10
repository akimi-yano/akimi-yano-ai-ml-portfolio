import Timeline from './timeline'

export default function About3() {
  return (
    <div id='about3' className='p-10 bg-black'>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2">
        <div>
          <Timeline/>
        </div>
        <div>
        <h3 className={`font-pressStart text-xl text-white break-words`}>My AI/ML Learning Journey</h3>
          <p className={`font-pressStart text-xl text-white break-words`}>My favorite part of being an Engineer is that when I show people an app I built with AI and witness people&apos;s mind-blown reactions and smiles !</p>
          <p className={`font-pressStart text-xl text-white break-words`}>It is truly priceless !</p>
          <p className={`font-pressStart text-xl text-white break-words`}>I would love to collaborate for some exciting projects !</p>
        </div>
      </div>
    </div>
  );
}