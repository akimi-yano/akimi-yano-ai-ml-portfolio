export default function Project() {
  return (
    <div id='project'  className="h-96 p-10">

      <div id="projects-title">
        <h2 className={`font-pressStart`}>Projects</h2>
        <p >Here are some of the projects I have built.</p>
      </div>

      <div id='project_container' >
        <div style={{ flexWrap: "wrap" }} >
          <div id='project1'>
            <h4 className={`font-pressStart`}>Coronavirus Forecast Center</h4>
          </div>
          <p>World-map of predicted spread of confirmed cases and fatalities of COVID-19 in 180+ countries using machine learning.</p>
          <ul style={{ padding: "4vh 0" }}>
            <li>• Built and trained multiple Light Gradient Boosting Model (LGBM) with Python, Pandas, Numpy, Matplotlib, Seaborn, Kaggle dataset, and Jupyter Notebook to generate prediction data over the next 30 days.</li>
            <li>• Enabled real-time prediction of the spread of the virus by deploying Java backend service using serverless Azure Functions to provide application access.</li>
            <li>• Demonstrated accuracy of predictions through visual graphical comparison of real vs. predicted data using JavaScript, Mapbox GLJS, and Recharts.</li>
          </ul>
          <div >
            <div className='col s4'>
              {/* <a className="tooltipped" data-position="bottom" data-tooltip="Website" href='https://akimi-yano.github.io/coronavirus-prediction/#/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon='external-link-alt' size="4x" color="black" /></a> */}
              <h6 className="hide-on-large-only">Website</h6>
            </div>
            <div className='col s4'>
              {/* <a className="tooltipped" data-position="bottom" data-tooltip="Video" href='https://youtu.be/_MbivAzbbWI' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']} size="4x" color="black" /></a> */}
              <h6 className="hide-on-large-only">Video</h6>
            </div>
            <div className='col s4'>
              {/* <a className="tooltipped" data-position="bottom" data-tooltip="GitHub" href='https://github.com/akimi-yano/coronavirus-prediction' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="black" /></a> */}
              <h6 className="hide-on-large-only">GitHub</h6>
            </div>
          </div>
        </div>
        <div className="col s12 m6 center-align">
          <img className="proj-gif" src={process.env.PUBLIC_URL + '/gifs/coronavirus.gif'} alt='Project GIF' />
        </div>
      </div>

      <div className="divider grey darken-1"></div>

      <div style={{ flexWrap: "wrap" }} className="row valign-wrapper">
        <div className="col s12 m6">
          <div id='project2' className="scrollspy">
            <h4 className={`font-pressStart`}>Face Labo - Interactive Computer Vision</h4>
          </div>
          <p>Machine learning / computer vision app counting how often a person blinks or whether they are sleepy from media files.</p>
          <ul style={{ padding: "4vh 0" }}>
            <li>• Applied computer vision techniques using Python, OpenCV, NumPy and numerical calculations of dots placed on facial features to determine whether users are winking, sleepy, blinking, etc. with 85% accuracy.</li>
            <li>• Designed interactive experience with Python and Django web app to display visual alerts and image signaling in response to triggered events, allowing users to experience CV technology through exciting UI output.</li>
          </ul>
          <div className='row center-align'>
            <div className='col s4'>
              {/* <a className="tooltipped" data-position="bottom" data-tooltip="Website" href='http://54.183.232.224/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon='external-link-alt' size="4x" color="black" /></a> */}
              <h6 className="hide-on-large-only">Website</h6>
            </div>
            <div className='col s4'>
              {/* <a className="tooltipped" data-position="bottom" data-tooltip="Video" href='https://youtu.be/keb4yA6N1Lc' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']} size="4x" color="black" /></a> */}
              <h6 className="hide-on-large-only">Video</h6>
            </div>
            <div className='col s4'>
              {/* <a className="tooltipped" data-position="bottom" data-tooltip="GitHub" href='https://github.com/akimi-yano/ml_project' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="black" /></a> */}
              <h6 className="hide-on-large-only">GitHub</h6>
            </div>
          </div>
        </div>
        <div className="col s12 m6 center-align">
          <img className="proj-gif" src={process.env.PUBLIC_URL + '/gifs/facelabo.gif'} alt='Project GIF' />
        </div>
      </div>

      <div className="divider grey darken-1"></div>

      <div style={{ flexWrap: "wrap" }} className="row valign-wrapper">
        <div className="col s12 m6">
          <div id='project3' className="scrollspy">
            <h4 className={`font-pressStart`}>ice candi - Multilingual Video Chat</h4>
          </div>
          <p>Multilingual peer-to-peer video chat application with live speech-to-text translation.</p>
          <ul style={{ padding: "4vh 0" }}>
            <li>• Delivered seamless video chat experience through implementing WebRTC negotiation mechanism using Firestore database and JavaScript and React web application.</li>
            <li>• Empowered users to communicate through humanized face-to-face / audial interaction to overcome language barriers using real-time speech-to-text translation between 8 languages powered by Azure Speech Translation.</li>
          </ul>
          <div className='row center-align'>
            <div className='col s4'>
              {/* <a className="tooltipped" data-position="bottom" data-tooltip="Website" href='https://fir-rtc-bf5c0.web.app/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon='external-link-alt' size="4x" color="black" /></a> */}
              <h6 className="hide-on-large-only">Website</h6>
            </div>
            <div className='col s4'>
              {/* <a className="tooltipped" data-position="bottom" data-tooltip="Video" href='https://youtu.be/QaJl8ayN62E' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']} size="4x" color="black" /></a> */}
              <h6 className="hide-on-large-only">Video</h6>
            </div>
            <div className='col s4'>
              {/* <a className="tooltipped" data-position="bottom" data-tooltip="GitHub" href='https://github.com/akimi-yano/multilingual-video-chat' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="black" /></a> */}
              <h6 className="hide-on-large-only">GitHub</h6>
            </div>
          </div>
        </div>
        <div className="col s12 m6 center-align">
          <img className="proj-gif" src={process.env.PUBLIC_URL + '/gifs/ic.gif'} alt='Project GIF' />
        </div>
      </div>

      <div className="divider grey darken-1"></div>

      <div style={{ flexWrap: "wrap" }} className="row valign-wrapper">
        <div className="col s12 m6">
          <div id='project4' className="scrollspy">
            <h4 className={`font-pressStart`}>Donut Alert with Raspberry Pi</h4>
          </div>
          <p>Real-time face recognition and text notification system using Raspberry Pi and  Intel NCS 2.</p>
          <ul style={{ padding: "4vh 0" }}>
            <li>• Programmed Raspberry Pi to take live camera data and pass through a face detection/recognition model.</li>
            <li>• Trained and ran face detection/recognition model with Intel’s Movidius Neural Compute Stick 2 to speed up face detection/recognition by 200+%.</li>
            <li>• Leveraged Twilio and Amazon S3 to notify the user in real-time with a text and photo when unauthorized individuals appeared on the camera.</li>
          </ul>
          <div className='row center-align'>
            <div className='col s4'>
              <a className="tooltipped" data-position="bottom" data-tooltip="Medium" href='https://link.medium.com/sdbXPqjL67' target='_blank' rel='noopener noreferrer'>
                {/* <FontAwesomeIcon icon={['fab', 'medium-m']} size='4x' color='black' /> */}
                <h6 className="black-text hide-on-large-only">Medium</h6>
              </a>
            </div>
            <div className='col s4'>
              {/* <a className="tooltipped" data-position="bottom" data-tooltip="Video" href='https://www.youtube.com/watch?v=5vqkS9ZKlRo' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']} size="4x" color="black" /></a> */}
              <h6 className="hide-on-large-only">Video</h6>
            </div>
            <div className='col s4'>
              {/* <a className="tooltipped" data-position="bottom" data-tooltip="GitHub" href='https://github.com/akimi-yano/iot_ml_project' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="black" /></a> */}
              <h6 className="hide-on-large-only">GitHub</h6>
            </div>
          </div>
        </div>
        <div className="col s12 m6 center-align">
          <img className="proj-gif" src={process.env.PUBLIC_URL + '/gifs/donut.gif'} alt='Donut GIF' />
        </div>
      </div>

      <div className="divider grey darken-1"></div>



      <div className="divider grey darken-1"></div>

      <div style={{ flexWrap: "wrap" }} className="row valign-wrapper">
        <div className="col s12 m6">
          <div id='project6' className="scrollspy">
            <h4 className={`font-pressStart`}>Climbing Training System Analysis</h4>
          </div>
          <p>Analyzed data from Moon Board rock climbing training system, and identified the easiest Moon Board problems at each difficulty level using Python</p>
          <ul style={{ padding: "4vh 0" }}>
            <li>• Built with Python, Jupyter notebook, Anaconda</li>
          </ul>
          <div className='row center-align'>
            <div className='col s4'>
              <a className="tooltipped" data-position="bottom" data-tooltip="Report" href='https://drive.google.com/open?id=1npccW930XvvozNk889DIkrJqdSbG1_-4' target='_blank' rel='noopener noreferrer'>
                {/* <FontAwesomeIcon icon='file-pdf' size='4x' color='black' /> */}
              </a>
              <h6 className="hide-on-large-only">Report</h6>
            </div>
            <div className='col s4'>
            </div>
            <div className='col s4'></div>
          </div>
        </div>
        <div className="col s12 m6 center-align">
          <img style={{ height: "300px", width: "auto", border: "1px solid gray" }} className="proj-gif" src={process.env.PUBLIC_URL + '/my_first_project.png'} alt='Project GIF' />
        </div>
      </div>

    </div >
  );
}


