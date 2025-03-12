export default function Skill() {
    const skills = {
        "AI & ML": ["Pytorch", "Tensorflow", "Keras", "Scikit Learn", "GPT", "DallE", "Numpy", "Pandas", "Matplotlib", "Seaborn", "YOLO", "LLamaIndex", "LangChain"],
        "Engineering": ["React", ".NET Framework", "SQL", "AWS", "Google Cloud Platform (GCP)", "Azure", "Git", "Docker", "Linux", "OpenCV"],
        "Languages": ["Python", "Java", "C#", "JavaScript", "TypeScript", "HTML/CSS", "English", "Spanish", "Chinese", "Japanese", "French"],
    };

    return (
        <div className="bg-black">
            <div className="bg-black py-10 md:py-16">
                <div className="py-12 bg-black">
                    <div className="mx-auto px-10 bg-black">
                        {/* <h2 className="text-3xl font-bold text-center mb-8">Skills</h2> */}

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 font-pressStart justify-items-center">
                            {Object.entries(skills).map(([category, items]) => (
                                <div key={category} className="bg-white shadow-lg p-6 rounded-xl">
                                    <h3 className="text-xl font-semibold mb-4 text-black break-words">{category}</h3>
                                    <ul className="space-y-2">
                                        {items.map((skill) => (
                                            <li key={skill} className="text-gray-600 bg-gray-200 px-3 py-1 m-1 rounded-md text-sm inline-block break-words">
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
