export default function NavBar() {
    return (
        <div id='navbar'>
            <ul id='project-dropdown' className='dropdown-content'>
                <li><a className={`font-pressStart`} href="#project1">1. Coronavirus Prediction</a></li>
                <li><a className={`font-pressStart`} href="#project2">2. Face Labo</a></li>
                <li><a className={`font-pressStart`} href="#project3">3. ice candi</a></li>
                <li><a className={`font-pressStart`} href="#project4">4. Donut Alert</a></li>
                <li><a className={`font-pressStart`} href="#project5">5. Who's That Pokémon?</a></li>
                <li><a className={`font-pressStart`} href="#project6">6. Climbing Data Analysis</a></li>
            </ul>
            <nav>
                <div className={`font-pressStart`} >
                    <a href="#" className={`font-pressStart`} style={{ marginLeft: "1vw" }}>
                        <h5 className={`font-pressStart`} style={{ display: "inline-block" }}>Akimi Yano</h5>
                    </a>
                    <ul className={`font-pressStart`}>
                        <li>
                            <a className={`font-pressStart`} href="#about">About</a>
                        </li>
                        <li>
                            <a className={`font-pressStart`} style={{ outline: 'none' }} href='#projects-title' data-target='project-dropdown'>Projects</a>
                        </li>
                        <li><a className={`font-pressStart`} href="#skill">Skills</a></li>
                        <li><a className={`font-pressStart`} href="#education">Education</a></li>
                        <li><a className={`font-pressStart`} href="#experience">Experience</a></li>
                        <li><a className={`font-pressStart`} href="#course">Courses</a></li>
                        <li><a className={`font-pressStart`} href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};