

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

export default function Content() {
  return (
    <div className="py-10 bg-black">
      <Banner />
      <About />
      <About1 />
      <About2 />
      <About3 />
      <Project />
      <Skill />
      <Experience />
      <div className="border border-gray-500 size-1"></div>
      <Education />
      <Contact />
    </div>
  );
}
