import GitHubIcon from './icons/gitHubIcon'
import YoutubeIcon from './icons/youtubeIcon'
import PublicationIcon from './icons/publicationIcon'
import EmailIcon from './icons/emailIcon'
import LinkedInIcon from './icons/linkedInIcon'
import DownloadIcon from './icons/downloadIcon'
import AwardIcon from './icons/awardIcon'
import XIcon from './icons/xIcon'

export default function Contact() {
  return (
    <footer id='contact' className="font-pressStart bg-black">
      <div className='py-10'>
        <div>
          <h2 className={`font-pressStart text-2xl px-10 py-5`}>Contact Me</h2>
          <p className={`font-pressStart px-10 py-5`}>Please feel free to reach out to me</p>
        </div>

        <div className="grid grid-cols-4 justify-items-stretch gap-5 px-10 py-5">
          <div className="flex justify-self-center">
            <a href='mailto:akimi.mimi.yano@gmail.com' target='_blank' rel='noopener noreferrer'>
              <div className="flex justify-self-center" >
                <EmailIcon />
              </div>
              <h6 className="flex justify-self-center black-text hide-on-large-only text-xs">Email</h6></a>
          </div>

          <div className="flex justify-self-center">
            <a href='https://linkedin.com/in/akimi-yano' target='_blank' rel='noopener noreferrer'>
              <div className="flex justify-self-center" >
                <LinkedInIcon />
              </div>
              <h6 className="flex justify-self-center black-text hide-on-large-only text-xs">LinkedIn</h6></a>
          </div>

          <div className="flex justify-self-center">
            <a href='https://drive.google.com/file/d/1pUicSdrNRSL8DaEbsm7iHoqQN0dg9akv/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
              <div className="flex justify-self-center" >
                <DownloadIcon />
              </div>
              <h6 className="flex justify-self-center black-text hide-on-large-only text-xs">Resume</h6></a>
          </div>

          <div className="flex justify-self-center">
            <a href='https://github.com/akimi-yano' target='_blank' rel='noopener noreferrer'>
              <div className="flex justify-self-center" >
                <GitHubIcon />
              </div>
              <h6 className="flex justify-self-center black-text hide-on-large-only text-xs">GitHub</h6></a>
          </div>

          <div className="flex justify-self-center">
            <a href='https://www.youtube.com/channel/UCG19n6miJUCUKhLILJYmODA/featured' target='_blank' rel='noopener noreferrer'>
              <div className="flex justify-self-center">
                <YoutubeIcon />
              </div>
              <h6 className="flex justify-self-center black-text hide-on-large-only text-xs">YouTube</h6></a>
          </div>

          <div className="flex justify-self-center">
            <a href='https://www.kaggle.com/akimiyano' target='_blank' rel='noopener noreferrer'>
              <div className="flex justify-self-center">
                <AwardIcon />
              </div>
              <h6 className="flex justify-self-center black-text hide-on-large-only text-xs">Kaggle</h6></a>
          </div>

          <div className="flex justify-self-center">
            <a href='https://x.com/akimiyanoai' target='_blank' rel='noopener noreferrer'>
              <div className="flex justify-self-center">
                <XIcon />
              </div>
              <h6 className="flex justify-self-center black-text hide-on-large-only text-xs">X</h6></a>
          </div>

          <div className="flex justify-self-center">
            <a href='https://www.medium.com/@akimi.mimi.yano' target='_blank' rel='noopener noreferrer'>
              <div className="flex justify-self-center" >
                <PublicationIcon />
              </div>
              <h6 className="flex justify-self-center black-text hide-on-large-only text-xs">Medium</h6></a>
          </div>
        </div>

        <div className="flex justify-self-center px-10 pb-5 pt-10">
          <div className={`font-pressStart`}>
            © 2025 Akimi Yano
          </div>
        </div>
      </div>
    </footer>
  );
}
