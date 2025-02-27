import LinkIcon from './icons/linkIcon'

export default function ProjectCard({ projectTitile, projectImagePath, projectDesc, projectTags, projectLinks, ...props }) {

    return (
        <div className="break-inside-avoid aspect-video p-8 rounded-3xl border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
            {/* <div className="mb-8 flex items-center gap-4"> */}
                <div>
                    <h2 className={`font-pressStart text-l m-1`}>{projectTitile}</h2>
                </div>
                <div>
                    <img className='items-center' src={projectImagePath} alt={projectTitile} />
                </div>
                <div>
                    <p className={`text-base m-1`}>{projectDesc}</p>
                </div>
                {/* <div>
                <ul className={`font-pressStart text-xs m-1`}>
                    {projectTags.map((projectTag, tagIndex) => (
                        <li key={tagIndex}>{projectTag}</li>
                    ))}
                </ul>
            </div> */}
                <div className="flex justify-center">
                    <ul className={`font-pressStart text-xs m-1`}>
                        {projectLinks.map((projectLink, linkIndex) => (
                            <li key={linkIndex}> <LinkIcon href={projectLink}></LinkIcon></li>
                        ))}
                    </ul>
                </div>
            {/* </div> */}
        </div>
    );
}
