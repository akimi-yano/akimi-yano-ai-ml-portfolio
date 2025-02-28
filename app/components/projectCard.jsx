// import LinkIcon from './icons/linkIcon'
import GitHubIcon from './icons/gitHubIcon'
import YoutubeIcon from './icons/youtubeIcon'
// import OpenExternalLinkIcon from './icons/openExternalLinkIcon'
import PublicationIcon from './icons/publicationIcon'

export default function ProjectCard({ projectTitile, projectImagePath, projectDesc, projectTags, projectLinks, ...props }) {

    return (
        <div className="break-inside-avoid aspect-video p-8 rounded-3xl border border-black bg-white dark:border-black dark:bg-black">
            {/* <div className="break-inside-avoid aspect-video p-8 rounded-3xl border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800"> */}
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
                <div className={`font-pressStart text-xs m-1 flex flex-row gap-10`}>
                    {projectLinks.map((projectLink, linkIndex) => (
                        projectLink.type === "github" ? (
                            <div key={linkIndex} className="m-2"><a href={projectLink.url} target="_blank"><GitHubIcon /></a></div>) : projectLink.type === "youtube" ? (
                                <div key={linkIndex} className="m-2"><a href={projectLink.url} target="_blank"><YoutubeIcon /></a></div>) : projectLink.type === "medium" ? (
                                    <div key={linkIndex} className="m-2"><a href={projectLink.url} target="_blank"><PublicationIcon /></a></div>) : <></>
                    ))}
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}
