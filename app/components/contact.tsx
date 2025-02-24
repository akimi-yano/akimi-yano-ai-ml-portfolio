export default function Contact() {
  return (
    <footer id='contact'  className="h-200 p-10">
      <div  className='full-container-title scrollspy'>
        <h2 className={`font-pressStart text-2xl m-5`}>Contact Me</h2>
        <p className={`font-pressStart m-5`}>Please feel free to reach out to me</p>
      </div>
      <div className='full-container center-align'>
        <div className="row"></div>
        <div style={{ flexWrap: "wrap" }} className='row valign-wrapper'>
          <div className="col s6 m3">
            <a className="tooltipped" data-position="bottom" data-tooltip="Email" href='mailto:akimi.mimi.yano@gmail.com' target='_blank' rel='noopener noreferrer'>
              {/* <FontAwesomeIcon icon='envelope' size='4x' color='black' /> */}
              <h6 className="black-text hide-on-large-only">Email</h6></a>
          </div>
          <div className="col s6 m3">
            <a className="tooltipped" data-position="bottom" data-tooltip="LinkedIn" href='https://linkedin.com/in/akimi-yano' target='_blank' rel='noopener noreferrer'>
              {/* <FontAwesomeIcon icon={['fab', 'linkedin']} size='4x' color='black' /> */}
              <h6 className="black-text hide-on-large-only">LinkedIn</h6></a>
          </div>
          <div className="col s6 m3">
            <a className="tooltipped" data-position="bottom" data-tooltip="Resume" href='https://drive.google.com/file/d/1htAD-EdDmFNqdtpsiVWqcPhiXCI7BvyF/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
              {/* <FontAwesomeIcon icon='file-pdf' size='4x' color='black' /> */}
              <h6 className="black-text hide-on-large-only">Resume</h6></a>
          </div>
          <div className="col s6 m3">
            <a className="tooltipped" data-position="bottom" data-tooltip="GitHub" href='https://github.com/akimi-yano' target='_blank' rel='noopener noreferrer'>
              {/* <FontAwesomeIcon icon={['fab', 'github']} size='4x' color='black' /> */}
              <h6 className="black-text hide-on-large-only">GitHub</h6></a>
          </div>
        </div>
        <div style={{ flexWrap: 'wrap' }} className="row valign-wrapper">
          <div className="col s6 m3">
            <a className="tooltipped" data-position="bottom" data-tooltip="YouTube" href='https://www.youtube.com/channel/UCG19n6miJUCUKhLILJYmODA/featured' target='_blank' rel='noopener noreferrer'>
              {/* <FontAwesomeIcon icon={['fab', 'youtube']} size='4x' color='black' /> */}
              <h6 className="black-text hide-on-large-only">YouTube</h6></a>
          </div>
          <div className="col s6 m3">
            <a className="tooltipped" data-position="bottom" data-tooltip="AI Competition" href='https://www.kaggle.com/akimiyano' target='_blank' rel='noopener noreferrer'>
              {/* <FontAwesomeIcon icon={['fab', 'kaggle']} size='4x' color='black' /> */}
              <h6 className="black-text hide-on-large-only">AI Competition</h6></a>
          </div>
          <div className="col s6 m3">
            <a className="tooltipped" data-position="bottom" data-tooltip="Twitter" href='https://twitter.com/akimiyanoai' target='_blank' rel='noopener noreferrer'>
              {/* <FontAwesomeIcon icon={['fab', 'twitter']} size='4x' color='black' /> */}
              <h6 className="black-text hide-on-large-only">Twitter</h6></a>
          </div>
          <div className="col s6 m3">
            <a className="tooltipped" data-position="bottom" data-tooltip="Medium" href='https://www.medium.com/@akimi.mimi.yano' target='_blank' rel='noopener noreferrer'>
              {/* <FontAwesomeIcon icon={['fab', 'medium-m']} size='4x' color='black' /> */}
              <h6 className="black-text hide-on-large-only">Medium</h6></a>
          </div>
        </div>
        <div >
          <div className={`font-pressStart`}>
            © 2025 Akimi Yano
          </div>
        </div>
      </div>
    </footer>
  );
}
