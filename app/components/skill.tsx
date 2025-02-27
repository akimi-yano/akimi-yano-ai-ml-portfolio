export default function Skill() {
    const skills = {
        "Programming Languages": ["Python", "JavaScript", "C++"],
        "Frameworks & Libraries": ["React", "Next.js", "TensorFlow", "PyTorch"],
        "Tools": ["Git", "Docker", "Linux", "PostgreSQL"],
        "Machine Learning": ["Scikit-Learn", "YOLO", "Transformers"],
    };

    return (
        <div id='skill' className="h-200 p-10 text-black font-pressStart">
            <div>
                <h2 className={`font-pressStart text-2xl m-5`}>Skills</h2>
                <p className={`font-pressStart text-xl m-5`}>Some of my skills to highlight:</p>
            </div>

            <section className="py-12 bg-gray-100">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category} className="bg-white shadow-lg p-6 rounded-xl">
                                <h3 className="text-xl font-semibold mb-4 text-gray-800">{category}</h3>
                                <ul className="space-y-2">
                                    {items.map((skill) => (
                                        <li key={skill} className="text-gray-600 bg-gray-200 px-3 py-1 rounded-md text-sm inline-block">
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className={`m-10`}>
                <div>
                    <div>
                        <h5 className={`font-pressStart text-xl m-5`}>AI & Machine Learning</h5>
                    </div>
                    <div>
                        <h6 className={`text-lg m-5`}>Pytorch, Tensorflow, Keras, Scikit Learn, GPT, DallE</h6>
                    </div>
                </div>
                <div>
                    <div>
                        <h5 className={`font-pressStart text-xl m-5`}>Data Science</h5>
                    </div>
                    <div>
                        <h6 className={`text-lg m-5`}>Numpy, Pandas, Matplotlib, Seaborn </h6>
                    </div>
                </div>
                <div>
                    <div>
                        <h5 className={`font-pressStart text-xl m-5`}>Computer Vision</h5>
                    </div>
                    <div>
                        <h6 className={`text-lg m-5`}>OpenCV, YOLO</h6>
                    </div>
                </div>
                <div>
                    <div>
                        <h5 className={`font-pressStart text-xl m-5`}>Programming Languages</h5>
                    </div>
                    <div>
                        <h6 className={`text-lg m-5`}>Python, Java, JavaScript, TypeScript, C#, HTML/ CSS</h6>
                    </div>
                </div>
                <div>
                    <div>
                        <h5 className={`font-pressStart text-xl m-5`}>Front End</h5>
                    </div>
                    <div >
                        <h6 className={`text-lg m-5`}>ReactJS, React Native, jQuery, Axios, Bootstrap, Mapbox, Materialize, Material-UI</h6>
                    </div>
                </div>
                <div>
                    <div>
                        <h5 className={`font-pressStart text-xl m-5`}>Web Servers & Frameworks</h5>
                    </div>
                    <div>
                        <h6 className={`text-lg m-5`}>Django, Flask, Spring Boot, Node.js, Express.js, Gunicorn, Nginx, Apache Tomcat, Apache HTTP Server</h6>
                    </div>
                </div>
                <div>
                    <div>
                        <h5 className={`font-pressStart text-xl m-5`}>Web Libraries</h5>
                    </div>
                    <div>
                        <h6 className={`text-lg m-5`}>WebRTC, Socket.IO</h6>
                    </div>
                </div>
                <div>
                    <div>
                        <h5 className={`font-pressStart text-xl m-5`}>Cloud Services</h5>
                    </div>
                    <div>
                        <h6 className={`text-lg m-5`}>AWS EC2, Google Cloud Functions, Firebase, Azure Cloud Functions</h6>
                    </div>
                </div>
                <div>
                    <div>
                        <h5 className={`font-pressStart text-xl m-5`}>Databases</h5>
                    </div>
                    <div>
                        <h6 className={`text-lg m-5`}>MySQL, PostgreSQL, Cloud Firestore, MongoDB</h6>
                    </div>
                </div>
                <div>
                    <div>
                        <h5 className={`font-pressStart text-xl m-5`}>Concepts & Patterns</h5>
                    </div>
                    <div>
                        <h6 className={`text-lg m-5`}>RESTful / CRUD, API Design, AJAX</h6>
                    </div>
                </div>

                <div>
                    <div >
                        <h5 className={`font-pressStart text-xl m-5`}>Software Engineering</h5>
                    </div>
                    <div>
                        <h6 className={`text-lg m-5`}>Git, Linux, Docker</h6>
                    </div>
                </div>
                <div>
                    <div>
                        <h5 className={`font-pressStart text-xl m-5`}>Designing</h5>
                    </div>
                    <div>
                        <h6 className={`text-lg m-5`} >Photoshop, Illustrator</h6>
                    </div>
                </div>
                <div>
                    <div>
                        <h5 className={`font-pressStart text-xl m-5`}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              >Spoken Languages</h5>
                    </div>
                    <div>
                        <h6 className={`text-lg m-5`}>English, Spanish, Chinese, Japanese, French, Portuguese</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
