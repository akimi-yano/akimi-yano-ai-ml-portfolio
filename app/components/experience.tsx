export default function Experience() {
  return (
    <div id='experience'  className="h-200 p-10">
      <div  className='full-container-title scrollspy'>
        <h2 className={`font-pressStart text-2xl m-5`}>Experience</h2>
        <p className={`font-pressStart text-xl m-5`}>Extensive work experience on data analsys</p>
      </div>
      <div className="full-container">
        <div className="row">
          <div className="m-5">
            <img style={{ paddingTop: "20px", height: "70px" }} src={'assets/finli.jpeg'}></img>
          </div>
          <div className="m-5">
            <h5 className={`font-pressStart`}>Software Engineer Intern</h5>
            <h6>Finli</h6>
            <h6>Sunnyvale, CA | 07/2020 - present</h6>
            <li>Migrated and revamped the iOS/Android mobile app built on React Native for the Version 2 launch.</li>
            <li>Updated legacy documentation with clear, actionable step-by-step commands for Docker, PostgreSQL database and TablePlus, improving development environment setup process for new engineers.</li>
          </div>
        </div>
        <div className="row">
          <div className="m-5">
            <img style={{ paddingTop: "20px", height: "70px" }} src={'assets/dojo.png'}></img>
          </div>
          <div className="m-5">
            <h5 className={`font-pressStart`}>Software Engineering Teaching Assistant</h5>
            <h6>Coding Dojo</h6>
            <h6>Sunnyvale, CA | 08/2020 - present</h6>
            <li>Teaching and supporting students who are learning remotely through the Online Coding Bootcamp program.</li>
            <li>Providing mentorship and help across various tech stacks (Python Django, MERN, Java Spring/Spring Boot, Web Fundamentals).</li>
          </div>
        </div>
        <div className="row">
          <div className="m-5">
            <img style={{ paddingTop: "20px", height: "70px" }} src={'assets/google.png'}></img>
          </div>
          <div className="m-5">
            <h5 className={`font-pressStart`}>Global Compliance, Hardware Technologies</h5>
            <h6>Google, LLC</h6>
            <h6>Sunnyvale, CA | 08/2019 - 01/2020</h6>
            <li>Shortened average supplier turnaround time (TAT) by 30% by evaluating performance through data analysis of task metadata such as end-to-end completion time and codified delay signals with Google Sheets functions.</li>
            <li>Identified bottlenecks and presented actionable visualizations to key stakeholders on a monthly basis, leading to reduced operational overhead.</li>
          </div>
        </div>

        <div className="row">
          <div className="m-5">
            <img style={{ paddingTop: "20px", height: "70px" }} src={'assets/huawei.png'}></img>
          </div>
          <div className="m-5">
            <h5 className={`font-pressStart`}>Global Compliance, Hardware Technologies</h5>
            <h6>Huawei Technologies, Inc.</h6>
            <h6>Santa Clara, CA | 06/2018 - 08/2019</h6>
            <li>Successfully drove 100% of company (2,000+ employees) to complete technology compliance training using Microsoft Excel functions to track company progress and following up via automated and manual processes.</li>
            <li>Leveraged expertise to direct software / hardware engineers to comply with US and international regulations regarding hardware, software and technology.</li>

          </div>
        </div>

        <div className="row">
          <div className="m-5">
            <img style={{ paddingTop: "20px", height: "70px" }} src={'assets/un.svg'}></img>
          </div>
          <div className="m-5">
            <h5 className={`font-pressStart`}>Consultancy Work</h5>
            <h6>United Nations</h6>
            <h6>Switzerland, Rwanda, Kazakhstan, Japan | 08/2015 - 05/2018</h6>
            <li>Conducted Exploratory Data Analysis (EDA) on large datasets using R and Excel, deriving critical insights through data visualization and numerical analysis.</li>
            <li>Engaged with gov institutions across multiple countries to evaluate impact for government-funded projects.</li>


          </div>
        </div>
      </div>
    </div>
  );
}
