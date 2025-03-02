import GitHubIcon from './icons/gitHubIcon'
import YoutubeIcon from './icons/youtubeIcon'
import OpenExternalLinkIcon from './icons/openExternalLinkIcon'
import PublicationIcon from './icons/publicationIcon'

export default function ProjectCard({ projectTitile, projectImagePath, projectDesc, projectTags, projectLinks, ...props }) {

    return (
        <div className="break-inside-avoid aspect-video p-8 rounded-3xl border border-black bg-black">
            <div>
                <h2 className={`font-pressStart text-xl m-1 text-white`}>{projectTitile}</h2>
            </div>
            <div className='py-5'>
                <img className='items-center' src={projectImagePath} alt={projectTitile} />
            </div>
            <div>
                <p className={`text-base m-1 text-white`}>{projectDesc}</p>
            </div>
            {/* <div>
                <ul className={`font-pressStart text-xs m-1 text-white`}>
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
                                    <div key={linkIndex} className="m-2"><a href={projectLink.url} target="_blank"><PublicationIcon /></a></div>) : projectLink.type === "website" ? (
                                        <div key={linkIndex} className="m-2"><a href={projectLink.url} target="_blank"><OpenExternalLinkIcon /></a></div>
                                    ) : <></>
                    ))}
                </div>
            </div>
        </div>
    );
}
