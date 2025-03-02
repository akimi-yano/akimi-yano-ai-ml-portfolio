import ProjectCard from './projectCard'

export default function Project() {

  const sportsClassificationTitle = "Sports Image Classification"
  const sportsClassificationImagePath = "assets/sports_classification_image.jpg"
  const sportsClassificationDesc = (
    <>
      This project creates a machine learning model to classify images into multiple sports categories using{" "}
      <span style={{ color: "pink" }}>TensorFlow/Keras</span>. The number of sports&apos; categories is 73. The model obtained an {" "} <span style={{ color: "red" }}>accuracy score of 0.91921</span> on a test set.
    </>
  );
  const sportsClassificationTags = ["#Tensorflow", "#Keras", "#Deep Learning", "#Machine Learning", "#Artificial Intelligence"]
  const sportsClassificationLinks = [{ "type": "github", "url": "https://github.com/akimi-yano/Sports_Image_Classification" }]

  const kenyanCuisineClassificationTitle = "Kenyan Cuisine Image Classification"
  const kenyanCuisineClassificationImagePath = "assets/KenyanFood13-transformed.png"
  const kenyanCuisineClassificationDesc = (
    <>
      This project creates a machine learning model that classifies Kenyan cuisines&apos; images into 13 different categories using {" "}
      <span style={{ color: "lightblue" }}>Pytorch</span>. The model obtained an {" "} <span style={{ color: "red" }}>accuracy score of 0.80801</span> on a test set.
    </>
  );
  const kenyanCuisineClassificationTags = ["#Pytorch", "#Scikit Learn", "#Deep Learning", "#Machine Learning", "#Artificial Intelligence"]
  const kenyanCuisineClassificationLinks = [{ "type": "github", "url": "https://github.com/akimi-yano/Kenyan_Cuisine_Image_Classification" }]

  const lungXRayClassificationTitle = "Lung X-Ray Classification"
  const lungXRayClassificationImagePath = "assets/Normal-2.png"

  const lungXRayClassificationDesc = (
    <>
      This project creates a machine learning model that classifies the lung X-Ray images into 3 categories: COVID, Pneumonia, or a healthy lung, using {" "}
      <span style={{ color: "green" }}>Tensorflow and Keras</span>. The model achieved the  {" "} <span style={{ color: "red" }}>Training Accuracy of 0.9561 and the Validation Accuracy of 0.9241</span>.

    </>
  );
  const lungXRayClassificationTags = ["#Tensorflow", "#Keras", "#Deep Learning", "#Machine Learning", "#Artificial Intelligence"]
  const lungXRayClassificationLinks = [{ "type": "github", "url": "https://github.com/akimi-yano/Lung_X-Ray_Classification" }]

  const longTermMemoryForLLMTitle = "Long Term Memory & Search Mechanism for Large Language Model (LLM)"
  const longTermMemoryForLLMImagePath = "assets/long_term_memory_for_llm.jpg"
  const longTermMemoryForLLMDesc = (
    <>
      I read the research paper and source code for MemoryBank: Enhancing Large Language Models with Long-Term Memory and implemented the Memory Retrieval Mechanism discussed in the paper.
      For the Large Language Model (LLM), I utilized {" "}<span style={{ color: "yellow" }}>GPT-3.5 Turbo</span>, and for the Retrieval-Augmented Generation (RAG), I used {" "}
      <span style={{ color: "yellow" }}>LlamaIndex</span> and the {" "}<span style={{ color: "yellow" }}>text-embedding-ada model</span>. I was able to verify that the Memory Retrieval Mechanism worked, and that the LLM assistant remembered our past converstations.
    </>
  );
  const longTermMemoryForLLMTags = ["#Tensorflow", "#Keras", "#Deep Learning", "#Machine Learning", "#Artificial Intelligence"]
  const longTermMemoryForLLMLinks = [{ "type": "github", "url": "https://github.com/akimi-yano/ReproPaper-MemoryBank-SiliconFriend" }]

  // const maskDetectionTitle = "(Mask Detection Comparing Different Versions of YOLO)"
  // const maskDetectionImagePath = "/assets/under_construction.jpg"
  // const maskDetectionDesc = "TODO: Upgrade version and push the code."
  // const maskDetectionTags = ["#YOLO", "#Object Detection", "#Machine Learning", "#Artificial Intelligence"]
  // const maskDetectionLinks = [{ "type": "github", "url": "https://github.com/akimi-yano/Sports_Image_Classification" }]

  // const segmentationTFTitle = "(Image Segmentation Project Tensorflow)"
  // const segmentationTFImagePath = "/assets/under_construction.jpg"
  // const segmentationTFDesc = "Add Image Segmentation Project"
  // const segmentationTFTags = ["#Tensorflow", "#Keras", "#Segmentation", "#Machine Learning", "#Artificial Intelligence"]
  // const segmentationTFLinks = [{ "type": "github", "url": "https://github.com/akimi-yano/Sports_Image_Classification" }]

  // const segmentationPTTitle = "(Image Segmentation Project Pytorch)"
  // const segmentationPTImagePath = "/assets/under_construction.jpg"
  // const segmentationPTDesc = "Add Image Segmentation Project"
  // const segmentationPTTags = ["#Pytorch", "#Segmentation", "#Machine Learning", "#Artificial Intelligence"]
  // const segmentationPTLinks = [{ "type": "github", "url": "https://github.com/akimi-yano/Sports_Image_Classification" }]

  // const objectDetectionTFTitle = "(Object Detection Project Tensorflow)"
  // const objectDetectionTFImagePath = "/assets/under_construction.jpg"
  // const objectDetectionTFDesc = "Add Image Segmentation Project"
  // const objectDetectionTFTags = ["#Tensorflow", "#Keras", "#Object Detection", "#Machine Learning", "#Artificial Intelligence"]
  // const objectDetectionTFLinks = [{ "type": "github", "url": "https://github.com/akimi-yano/Sports_Image_Classification" }]

  // const objectDetectionPTTitle = "(Object Detection Project Pytorch)"
  // const objectDetectionPTImagePath = "/assets/under_construction.jpg"
  // const objectDetectionPTDesc = "Add Image Segmentation Project"
  // const objectDetectionPTTags = ["#Pytorch", "#Object Detection", "#Machine Learning", "#Artificial Intelligence"]
  // const objectDetectionPTLinks = [{ "type": "github", "url": "https://github.com/akimi-yano/Sports_Image_Classification" }]

  // const genAITitle = "(Generative AI Project)"
  // const genAIImagePath = "/assets/under_construction.jpg"
  // const genAIDesc = "Add Generative AI Project"
  // const genAITags = ["#Generative AI", "#Deep Learning", "#Machine Learning", "#Artificial Intelligence"]
  // const genAILinks = [{ "type": "github", "url": "https://github.com/akimi-yano/Sports_Image_Classification" }]

  const covidForecastTitle = "Coronavirus Forecast Center"
  const covidForecastImagePath = "assets/coronavirus.gif"
  const covidForecastDesc = (
    <>
      Built the end-to-end web app with a World-map of predicted spread of confirmed cases and fatalities of COVID-19 in 180+ countries using machine learning. I built the prediction model using {" "}<span style={{ color: "orange" }}>LGBM model</span> and backend API in {" "}<span style={{ color: "orange" }}>Java</span> and frontend in {" "}<span style={{ color: "orange" }}>JavaScript with React</span>.
    </>
  )
  const covidForecastTags = ["#Scikit Learn", "#Machine Learning", "#Artificial Intelligence"]
  const covidForecastLinks = [{ "type": "website", "url": "https://akimi-yano.github.io/coronavirus-prediction/#/about" }, { "type": "youtube", "url": "https://www.youtube.com/watch?v=_MbivAzbbWI&ab_channel=AkimiYano" }, { "type": "github", "url": "https://github.com/akimi-yano/coronavirus-prediction" }]

  const multilingualVideoChatTitle = "ice candi - Multilingual Video Chat"
  const multilingualVideoChatImagePath = "assets/ic.gif"
  const multilingualVideoChatDesc = (
    <>
      Multilingual peer-to-peer video chat application with live speech-to-text translation. Delivered a seamless video chat experience by implementing {" "}<span style={{ color: "purple" }}>WebRTC</span> negotiation mechanism using the {" "}<span style={{ color: "purple" }}>Firestore database</span>and  {" "}<span style={{ color: "purple" }}>React</span> React web app.
      Empowered users to communicate through a humanized face-to-face/ audial interaction and overcome language barriers using real-time speech-to-text translation between  {" "}<span style={{ color: "purple" }}>8 languages </span>powered by {" "}<span style={{ color: "purple" }}>Azure Speech Translation API</span>.
    </>
  )
  const multilingualVideoChatTags = ["#Translation", "#React", "#Cloud", "#Machine Learning", "#Artificial Intelligence"]
  const multilingualVideoChatLinks = [{ "type": "website", "url": "https://fir-rtc-bf5c0.web.app/" }, { "type": "youtube", "url": "https://www.youtube.com/watch?v=QaJl8ayN62E&ab_channel=AkimiYano" }, { "type": "github", "url": "https://github.com/akimi-yano/multilingual-video-chat" }]

  const computerVisionTitle = "Face Labo - Interactive Computer Vision"
  const computerVisionImagePath = "assets/facelabo.gif"
  const computerVisionDesc = (
    <>
      Machine learning/ computer vision app counting how often a person blinks or whether they are sleepy from media files. Applied computer vision techniques using {" "}<span style={{ color: "brown" }}>OpenCV</span> and {" "}<span style={{ color: "brown" }}>NumPy</span> and numerical calculations of dots placed on facial features to determine whether users are winking, sleepy, blinking, etc. Realized interactive experience on a {" "}<span style={{ color: "brown" }}>Python Django web app</span> through a display of visual alert and image signaling in response to a triggered event to allow users to experience computer vision technology through exciting UI output.
    </>
  )
  const computerVisionTags = ["#OpenCV", "Python", "Django", "#Machine Learning", "#Artificial Intelligence"]
  const computerVisionLinks = [{ "type": "website", "url": "http://54.183.232.224/" }, { "type": "youtube", "url": "https://www.youtube.com/watch?v=keb4yA6N1Lc&ab_channel=AkimiYano" }, { "type": "github", "url": "https://github.com/akimi-yano/ml_project" }]

  const ioTTitle = "Donut Alert with Raspberry Pi"
  const ioTImagePath = "assets/donut.gif"
  const ioTDesc = (
    <>
      Real-time face recognition and text notification system using  {" "}<span style={{ color: "blue" }}>Raspberry Pi</span>  and {" "}<span style={{ color: "blue" }}> Intel NCS 2</span>. Programmed Raspberry Pi to take live camera data and pass through a face detection/recognition model. Trained and ran face detection/recognition model with {" "}<span style={{ color: "blue" }}>Intel&apos;s Movidius Neural Compute Stick 2</span> to speed up face detection/recognition by 200+%. Leveraged {" "}<span style={{ color: "blue" }}>Twilio</span>  and {" "}<span style={{ color: "blue" }}>Amazon S3 </span>to notify the user in real-time with a text and photo when unauthorized individuals appeared on the camera.
    </>
  )
  const ioTTags = ["#Raspberry Pi", "Python", "#Machine Learning", "#Artificial Intelligence"]
  const ioTLinks = [{ "type": "medium", "url": "https://medium.com/@akimi.mimi.yano/building-a-donut-alert-system-with-raspberry-pi-da47b3f8ce36" }, { "type": "youtube", "url": "https://www.youtube.com/watch?v=5vqkS9ZKlRo&ab_channel=AkimiYano" }, { "type": "github", "url": "https://github.com/akimi-yano/iot_ml_project" }]

  return (
    <div id='project' className="font-pressStart bg-white">
      <div className='py-10'>
        <div id="projects-title" className="text-black">
          <h2 className={`font-pressStart text-2xl px-10 py-5 text-black`}>Projects</h2>
          <p className={`font-pressStart px-10 py-5 text-black`}>A selection of my recent work in AI/ ML and fullstack development.</p>
        </div>
        <div className="box-border columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 px-0 sm:px-10 py-5">
          <ProjectCard projectTitile={sportsClassificationTitle} projectImagePath={sportsClassificationImagePath} projectDesc={sportsClassificationDesc} projectTags={sportsClassificationTags} projectLinks={sportsClassificationLinks} />
          <ProjectCard projectTitile={kenyanCuisineClassificationTitle} projectImagePath={kenyanCuisineClassificationImagePath} projectDesc={kenyanCuisineClassificationDesc} projectTags={kenyanCuisineClassificationTags} projectLinks={kenyanCuisineClassificationLinks} />
          <ProjectCard projectTitile={lungXRayClassificationTitle} projectImagePath={lungXRayClassificationImagePath} projectDesc={lungXRayClassificationDesc} projectTags={lungXRayClassificationTags} projectLinks={lungXRayClassificationLinks} />
          <ProjectCard projectTitile={longTermMemoryForLLMTitle} projectImagePath={longTermMemoryForLLMImagePath} projectDesc={longTermMemoryForLLMDesc} projectTags={longTermMemoryForLLMTags} projectLinks={longTermMemoryForLLMLinks} />
          {/* <ProjectCard projectTitile={maskDetectionTitle} projectImagePath={maskDetectionImagePath} projectDesc={maskDetectionDesc} projectTags={maskDetectionTags} projectLinks={maskDetectionLinks} />
        <ProjectCard projectTitile={segmentationTFTitle} projectImagePath={segmentationTFImagePath} projectDesc={segmentationTFDesc} projectTags={segmentationTFTags} projectLinks={segmentationTFLinks} />
        <ProjectCard projectTitile={segmentationPTTitle} projectImagePath={segmentationPTImagePath} projectDesc={segmentationPTDesc} projectTags={segmentationPTTags} projectLinks={segmentationPTLinks} />
        <ProjectCard projectTitile={objectDetectionTFTitle} projectImagePath={objectDetectionTFImagePath} projectDesc={objectDetectionTFDesc} projectTags={objectDetectionTFTags} projectLinks={objectDetectionTFLinks} />
        <ProjectCard projectTitile={objectDetectionPTTitle} projectImagePath={objectDetectionPTImagePath} projectDesc={objectDetectionPTDesc} projectTags={objectDetectionPTTags} projectLinks={objectDetectionPTLinks} />
        <ProjectCard projectTitile={genAITitle} projectImagePath={genAIImagePath} projectDesc={genAIDesc} projectTags={genAITags} projectLinks={genAILinks} /> */}
          <ProjectCard projectTitile={covidForecastTitle} projectImagePath={covidForecastImagePath} projectDesc={covidForecastDesc} projectTags={covidForecastTags} projectLinks={covidForecastLinks} />
          <ProjectCard projectTitile={multilingualVideoChatTitle} projectImagePath={multilingualVideoChatImagePath} projectDesc={multilingualVideoChatDesc} projectTags={multilingualVideoChatTags} projectLinks={multilingualVideoChatLinks} />
          <ProjectCard projectTitile={computerVisionTitle} projectImagePath={computerVisionImagePath} projectDesc={computerVisionDesc} projectTags={computerVisionTags} projectLinks={computerVisionLinks} />
          <ProjectCard projectTitile={ioTTitle} projectImagePath={ioTImagePath} projectDesc={ioTDesc} projectTags={ioTTags} projectLinks={ioTLinks} />
        </div>
      </div>
    </div >
  );
}


