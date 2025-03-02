import Image from 'next/image'

export default function Education() {
  return (
    <div id='education' className="text-black font-pressStart bg-white">
      <div className='py-10'>
        <div>
          <h2 className={`font-pressStart text-2xl px-10 py-5 text-black`}>Education</h2>
          <p className={`font-pressStart text-xl px-10 py-5 text-black`}>Completed coding bootcamp, 2 masters degrees and bachelors abroad</p>
        </div>
        <div>
          <div>
            <div className="px-10 py-5">
              <Image style={{ paddingTop: "20px", height: "70px" }} width='70' height='70' src={'assets/dojo.png'} alt='Coding Dojo'></Image>
            </div>
            <div>
              <h5 className={`font-pressStart px-10 py-5 text-black`}>Coding Dojo Bootcamp</h5>
              <h6 className="px-10 py-5 text-black">Computer Software Engineering - Triple Black Belt</h6>
              <h6 className="px-10 py-5 text-black">San Jose, CA | 2020</h6>
              <li className="px-10 py-5 text-black">Achieved Black Belt status, the highest level of knowledge achievement, on all 3 curriculums</li>
              <li className="px-10 py-5 text-black">Built, tested and deployed 3 full stack projects in Python Django, Java Spring Boot and JavaScript MERN</li>
              <li className="px-10 py-5 text-black">Consistently executed beyond the curriculum by integrating self-taught technologies that applied machine learning, computer vision, and speech translation</li>
            </div>
          </div>

          <div>
            <div className="px-10 py-5">
              <Image style={{ paddingTop: "20px", height: "70px" }} width='70' height='70' src={'assets/miis.png'} alt='Graduate School'></Image>
            </div>
            <div className="px-10 py-5">
              <h5 className={`font-pressStart px-10 py-5 text-black`}>Middlebury Institute of International Studies at Monterey</h5>
              <h6 className="px-10 py-5 text-black">Master of Public Administration (MPA)</h6>
              <h6 className="px-10 py-5 text-black">Master in International Trade and Economics</h6>
              <h6 className="px-10 py-5 text-black">Monterey, CA | 2018</h6>
            </div>
          </div>

          <div>
            <div className="px-10 py-5">
              <Image style={{ paddingTop: "20px", height: "70px" }} width='70' height='70' src={'assets/ritsumeikan.png'} alt='University'></Image>
            </div>
            <div className="px-10 py-5">
              <h5 className={`font-pressStart px-10 py-5 text-black`}>Ritsumeikan University</h5>
              <h6 className="px-10 py-5 text-black">Bachelors in International Relations</h6>
              <h6 className="px-10 py-5 text-black">Kyoto, Japan | 2014</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
