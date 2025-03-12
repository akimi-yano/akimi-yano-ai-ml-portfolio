

import Banner from './banner'
import About from './about'
import About1 from './about1'
import About2 from './about2'
import About3 from './about3'
import Skill from './skill'
import Project from './project'
import Contact from './contact'
import Education from './education'
import Experience from './experience'
import Parallax from './parallax'

export default function Content() {

  const projectNavId = 'project'
  const projectNavImage = 'assets/colorful_lego.jpg'
  const projectNavTitle = 'Projects'
  const projectNavDesc = 'A selection of my recent work in AI/ ML and fullstack development'

  const skillNavId = 'skill'
  const skillNavImage = 'assets/blue_lego.jpg'
  const skillNavTitle = 'Skills'
  const skillNavDesc = 'Some of my skills to highlight'
  
  const experienceNavId = 'experience'
  const experienceNavImage = 'assets/green_lego.jpg'
  const experienceNavTitle = 'Experience'
  const experienceNavDesc = 'Extensive work experience on building software with AI capability'
  
  const educationNavId = 'education'
  const educationNavImage = 'assets/yellow_lego.jpg'
  const educationNavTitle = 'Education'
  const educationNavDesc = 'Numerous upskilling courses, 2 masters degrees and bachelors abroad'
  
  const contactNavId = 'contact'
  const contactNavImage = 'assets/red_lego.jpg'
  const contactNavTitle = 'Contact Me'
  const contactNavDesc = 'Please feel free to reach out to me'

  return (
    <div className="py-10 bg-black">
      <Banner />
      <About />
      <About1 />
      <About2 />
      <About3 />

      <Parallax navId={projectNavId} navImage={projectNavImage} navTitle={projectNavTitle} navDesc={projectNavDesc}/>
      <Project />
      
      <Parallax navId={skillNavId} navImage={skillNavImage} navTitle={skillNavTitle} navDesc={skillNavDesc}/>
      <Skill />

      <Parallax navId={experienceNavId} navImage={experienceNavImage} navTitle={experienceNavTitle} navDesc={experienceNavDesc}/>
      <Experience />
      
      <Parallax navId={educationNavId} navImage={educationNavImage} navTitle={educationNavTitle} navDesc={educationNavDesc}/>
      <Education />
      
      <Parallax navId={contactNavId} navImage={contactNavImage} navTitle={contactNavTitle} navDesc={contactNavDesc}/>
      <Contact />
    </div>
  );
}
