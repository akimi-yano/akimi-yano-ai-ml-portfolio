export default function Course() {
  return (
    <div id='course'  className="h-96 p-10">
      <div className='full-container-title scrollspy'>
        <h2 className={`font-pressStart text-2xl m-5`}>Courses</h2>
        <p className={`font-pressStart m-5`}>Some of the courses I have completed</p>
      </div>

      <div className="full-container">

        <div className="row">
          <div className="col s12 m3 center-align">
            <img style={{ paddingTop: "20px", height: "70px" }} src={process.env.PUBLIC_URL + '/udemy.png'}></img>
          </div>
          <div className="col s12 m9">
            <h5>Udemy</h5>
            <h6>Machine Learning A-Z</h6>
            <h6>Intro to Linux Shell Scripting</h6>
            <h6>Learn The Linux Command Line: Basic Commands</h6>
            <h6>Responsive Design with NEW Materialize</h6>

          </div>
        </div>

        <div className="row">
          <div className="col s12 m3 center-align">
            <img style={{ paddingTop: "20px", height: "70px" }} src={process.env.PUBLIC_URL + '/dojo.png'}></img>
          </div>
          <div className="col s12 m9">
            <h5>Coding Dojo</h5>
            <h6>Python Stack</h6>
            <h6>MERN Stack</h6>
            <h6>Java Stack</h6>
            <h6>Web Fundamentals</h6>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m3 center-align">
            <img style={{ paddingTop: "20px", height: "70px" }} src={process.env.PUBLIC_URL + '/ucsc.png'}></img>
          </div>
          <div className="col s12 m9">
            <h5>UCSC Silicon Valley Extension</h5>
            <h6>Python for Programmers</h6>
            <h6>Python Programming for Beginner</h6>

          </div>
        </div>

        <div className="row">
          <div className="col s12 m3 center-align">
            <img style={{ paddingTop: "20px", height: "70px" }} src={process.env.PUBLIC_URL + '/mit.jpeg'}></img>
          </div>
          <div className="col s12 m9">
            <h5>Massachusetts Institute of Technology OpenCourseWare (MIT-OCW)</h5>
            <h6>Introduction to Computer Science and Programming in Python</h6>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m3 center-align">
            <img style={{ paddingTop: "20px", height: "70px" }} src={process.env.PUBLIC_URL + '/linkedIn.png'}></img>
          </div>
          <div className="col s12 m9">
            <h5>LinkedIn Learning</h5>
            <h6>Learning Python</h6>
            <h6>Python Essential Training</h6>
            <h6>Programming Foundations: Algorithms</h6>
            <h6>Programming Foundations: Object-Oriented Design</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
