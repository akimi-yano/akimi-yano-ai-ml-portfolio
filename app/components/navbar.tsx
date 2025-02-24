export default function NavBar() {
    return (
        <div id='navbar'>
            {/* <ul id='project-dropdown' className='dropdown-content'>
                <li><a className={`font-pressStart`} href="#project1">1. Coronavirus Prediction</a></li>
                <li><a className={`font-pressStart`} href="#project2">2. Face Labo</a></li>
                <li><a className={`font-pressStart`} href="#project3">3. ice candi</a></li>
                <li><a className={`font-pressStart`} href="#project4">4. Donut Alert</a></li>
                <li><a className={`font-pressStart`} href="#project5">5. Who's That Pokémon?</a></li>
                <li><a className={`font-pressStart`} href="#project6">6. Climbing Data Analysis</a></li>
            </ul> */}
            <nav>
                <div className={`font-londrinaShadow flex justify-center items-center p-1`} >
                    <div className={`font-londrinaShadow flex justify-between items-center p-1`}>
                        <a href="#" className={`font-londrinaShadow`} style={{ marginLeft: "1vw" }}>
                            <h5 className={`font-londrinaShadow text-2xl font-bold`} style={{ display: "inline-block" }}>Akimi Yano</h5>
                        </a>
                        <ul className={`font-londrinaShadow flex items-center grid grid-cols-7 gap-4`}>
                            <li className={`flex items-center`} >
                                <a className={`flex items-center font-londrinaShadow text-2xl font-bold`} href="#about">About</a>
                            </li>
                            <li className={`flex items-center`}>
                                <a className={`flex items-center font-londrinaShadow text-2xl font-bold`} style={{ outline: 'none' }} href='#projects-title' data-target='project-dropdown'>Projects</a>
                            </li>
                            <li className={`flex items-center`}>
                                <a className={`flex items-center font-londrinaShadow text-2xl font-bold`} href="#skill">Skills</a>
                            </li>
                            <li className={`flex items-center`}>
                                <a className={`flex items-center font-londrinaShadow text-2xl font-bold`} href="#education">Education</a>
                            </li>
                            <li className={`flex items-center`}>
                                <a className={`flex items-center font-londrinaShadow text-2xl font-bold`} href="#experience">Experience</a>
                            </li>
                            <li className={`flex items-center`}>
                                <a className={`flex items-center font-londrinaShadow text-2xl font-bold`} href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};