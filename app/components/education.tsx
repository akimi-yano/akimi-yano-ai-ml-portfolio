import Image from 'next/image'

export default function Education() {
  return (
    <div className="text-black font-pressStart bg-white">
      <div className='py-10 md:py-16'>
        <div className='text-black font-pressStart bg-white'>

          <div>
            <div className="px-10 py-5">
              <Image style={{ paddingTop: "20px", height: "70px" }} width='70' height='70' src={'assets/opencv.png'} alt='OpenCV'></Image>
            </div>
            <div>
              <h5 className={`font-pressStart px-10 py-5 text-black break-words`}>Open CV University Bootcamp</h5>
              <h6 className="px-10 py-5 text-black break-words">Computer Vision and Deep Learning</h6>
              <h6 className="px-10 py-5 text-black break-words">San Diego (Remote), CA | 2025</h6>
              <li className="px-10 py-5 text-black break-words">Completed all the following corses with honer and certified within 100 days of enrollment: 1)Fundamentals of Computer Vision & Image Processing in Python; 2) Mastering OpenCV with Python; 3) Deep Learning with PyTorch 2.x; 4) Computer Vision & Deep Learning Applications; 5) Deep Learning with TensorFlow and Keras; 6) AI Art Generation for Everyone; 7) Advanced AI Art Generation </li>
              <li className="px-10 py-5 text-black break-words">Participated in Kaggle competitions and built multiple machine learning models for computer vision problems</li>
              <li className="px-10 py-5 text-black break-words">Deepened my understanding on PyTorch, Tensorflow, OpenCV, and image processing/ computer vision techniques</li>
            </div>
          </div>

          <div>
            <div className="px-10 py-5">
              <Image style={{ paddingTop: "20px", height: "70px" }} width='70' height='70' src={'assets/ucsd.png'} alt='UCSD'></Image>
            </div>
            <div>
              <h5 className={`font-pressStart px-10 py-5 text-black break-words`}>UCSD Machine Learning Engineering Bootcamp</h5>
              <h6 className="px-10 py-5 text-black break-words">AI/ML Engineering</h6>
              <h6 className="px-10 py-5 text-black break-words">San Diego (Remote), CA | 2025</h6>
              <li className="px-10 py-5 text-black break-words">Completed all the curriculum portion within the first month of my enrollment</li>
              <li className="px-10 py-5 text-black break-words">Built, tested and deployed an end-to-end ML model app for classifying footwork techniques for rock climbing</li>
              <li className="px-10 py-5 text-black break-words">Deepened my understanding on Pytorch, Tenworflow and Scikit-Learn</li>
            </div>
          </div>

          <div>
            <div className="px-10 py-5">
              <Image style={{ paddingTop: "20px", height: "70px" }} width='70' height='70' src={'assets/dojo.png'} alt='Coding Dojo'></Image>
            </div>
            <div>
              <h5 className={`font-pressStart px-10 py-5 text-black break-words`}>Coding Dojo Bootcamp</h5>
              <h6 className="px-10 py-5 text-black break-words">Computer Software Engineering - Triple Black Belt</h6>
              <h6 className="px-10 py-5 text-black break-words">San Jose, CA | 2020</h6>
              <li className="px-10 py-5 text-black break-words">Achieved Black Belt status, the highest level of knowledge achievement, on all 3 curriculums</li>
              <li className="px-10 py-5 text-black break-words">Built, tested and deployed 3 full stack projects in Python Django, Java Spring Boot and JavaScript MERN</li>
              <li className="px-10 py-5 text-black break-words">Consistently executed beyond the curriculum by integrating self-taught technologies that applied machine learning, computer vision, and speech translation</li>
            </div>
          </div>

          <div>
            <div className="px-10 py-5">
              <Image style={{ paddingTop: "20px", height: "70px" }} width='70' height='70' src={'assets/miis.png'} alt='Graduate School'></Image>
            </div>
            <div className="px-10 py-5">
              <h5 className={`font-pressStart px-10 py-5 text-black break-words`}>Middlebury Institute of International Studies at Monterey</h5>
              <h6 className="px-10 py-5 text-black break-words">Master of Public Administration (MPA)</h6>
              <h6 className="px-10 py-5 text-black break-words">Master in International Trade and Economics</h6>
              <h6 className="px-10 py-5 text-black break-words">Monterey, CA | 2018</h6>
            </div>
          </div>

          <div>
            <div className="px-10 py-5">
              <Image style={{ paddingTop: "20px", height: "70px" }} width='70' height='70' src={'assets/ritsumeikan.png'} alt='University'></Image>
            </div>
            <div className="px-10 py-5">
              <h5 className={`font-pressStart px-10 py-5 text-black break-words`}>Ritsumeikan University</h5>
              <h6 className="px-10 py-5 text-black break-words">Bachelors in International Relations</h6>
              <h6 className="px-10 py-5 text-black break-words">Kyoto, Japan | 2014</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
