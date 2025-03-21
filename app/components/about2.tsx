export default function About2() {
  return (
    <div id='about2' className="text-black p-10 bg-white">
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2">
        <div>
          <h3 className={`font-pressStart text-2xl px-10 py-5 text-black break-words`}>My first end to end ML project from scratch</h3>
          <p className={`font-pressStart text-base md:text-xl px-10 py-5 text-black break-words`}>During the COVID 19 lockdown, I wanted to do something about it.</p>
          <p className={`font-pressStart text-base md:text-xl px-10 py-5 text-black break-words`}>So, I particiated in the Machine Learning model compention to predict the spread of the COVID 19.</p>
          <p className={`font-pressStart text-base md:text-xl px-10 py-5 text-black break-words`}>I built a web app using my model and deployed it to make it publicly available.</p>
          <p className={`font-pressStart text-base md:text-xl px-10 py-5 text-black break-words`}>Through this project, I reconfirmed my passion to build technology to serve people.</p>
        </div>
        <div>
          <img src='assets/kaggle-title.png' alt='kaggle-title-image' className='w-full 2xl:w-1/2 m-auto p-5'/>
          <img src='assets/coronavirus.gif' alt='coronavirus-project-gif' className='w-full 2xl:w-1/2 m-auto p-5'/>
        </div>
      </div>
    </div>
  );
}
