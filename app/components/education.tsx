export default function Education() {
  return (
    <div id='education'  className="h-200 p-10">
      <div  className='full-container-title scrollspy'>
        <h2 className={`font-pressStart text-2xl m-5`}>Education</h2>
        <p className={`font-pressStart text-xl m-5`}>Completed coding bootcamp, 2 masters degrees and bachelors abroad</p>
      </div>
      <div className="full-container">
        <div className="m-5">
          <div className="m-5">
            <img style={{ paddingTop: "20px", height: "70px" }} src={'/assets/dojo.png'}></img>
          </div>
          <div className="m-5">
            <h5 className={`font-pressStart`}>Coding Dojo Bootcamp</h5>
            <h6>Computer Software Engineering - Triple Black Belt</h6>
            <h6>San Jose, CA | 2020</h6>
            <li>Achieved Black Belt status, the highest level of knowledge achievement, on all 3 curriculums</li>
            <li>Built, tested and deployed 3 full stack projects in Python Django, Java Spring Boot and JavaScript MERN</li>
            <li>Consistently executed beyond the curriculum by integrating self-taught technologies that applied machine learning, computer vision, and speech translation</li>
          </div>
        </div>

        <div className="m-5">
          <div className="m-5">
            <img style={{ paddingTop: "20px", height: "70px" }} src={'/assets/miis.png'}></img>
          </div>
          <div className="m-5">
            <h5 className={`font-pressStart`}>Middlebury Institute of International Studies at Monterey</h5>
            <h6>Master of Public Administration (MPA)</h6>
            <h6>Master in International Trade and Economics</h6>
            <h6>Monterey, CA | 2018</h6>
          </div>
        </div>

        <div className="m-5">
          <div className="m-5">
            <img style={{ paddingTop: "20px", height: "70px" }} src={'/assets/ritsumeikan.png'}></img>
          </div>
          <div className="m-5">
            <h5 className={`font-pressStart`}>Ritsumeikan University</h5>
            <h6>Bachelors in International Relations</h6>
            <h6>Kyoto, Japan | 2014</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
