import NavBar from './navbar'
import MobileNav from './mobilenav'

import Banner from './banner'
import About from './about'
import About1 from './about1'
import About2 from './about2'
import About3 from './about3'
import About4 from './about4'
import About5 from './about5'
import Skill from './skill'
import Project from './project'
import Contact from './contact'
import Education from './education'
import Experience from './experience'
import Course from  './course'
import Blog from './blog'

export default function Content() {
  return (
    <div>
      {/* <NavBar/>
      <MobileNav/> */}

      <Banner/>
      <About/>
      <About1/>
      <About2/>
      <About3/>
      {/* <About4/>
      <About5/> */}
      {/* <Project/>
      <Skill/>
      <Education/>    
      <Experience/>
      <Course/>
      <Blog/>
      <Contact/> */}
    </div>
  );
}
