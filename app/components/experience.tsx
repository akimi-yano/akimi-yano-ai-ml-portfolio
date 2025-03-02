import Image from 'next/image'

export default function Experience() {
  return (
    <div id='experience' className="h-200 text-black font-pressStart">
      <div>
        <h2 className={`font-pressStart text-2xl m-5`}>Experience</h2>
        <p className={`font-pressStart text-xl m-5`}>Extensive work experience on building software with AI capability</p>
      </div>

      <div className="flex flex-col">
        <div>
          <div className="m-5">
            <Image style={{ paddingTop: "20px", height: "70px" }} width='70' height='70' src={'assets/microsoft.png'} alt='Microsoft'></Image>
          </div>
          <div className="m-5">
            <h5 className={`font-pressStart text-xl`}>Software Engineer</h5>
            <h6>Microsoft Corporation</h6>
            <h6>Mountain View, CA | 05/2021 - 05/2024</h6>
            <div>
              <li>Microsoft Designer team: Worked on the Brand Kit feature. Integrated with AI technologies such as GPT and DallE to generate usersʼ brands such as logo image, fonts, colors and voice. Improved QoS metrics such as latency and success rate. React, JavaScript and TypeScript for frontend and C# for the backend.</li>
              <li>Microsoft Teams, PowerPoint team: Worked on an AI Speaker Coach feature to help people improve their public speaking skills. Refactored codebase from legacy system to a React-based application.</li>

            </div>
          </div>
        </div>

        <div>
          <div className="m-5">
            <Image style={{ paddingTop: "20px", height: "70px" }} width='70' height='70' src={'assets/microsoft.png'} alt='Microsoft Leap'></Image>
          </div>
          <div className="m-5">
            <h5 className={`font-pressStart text-xl`}>Software Engineer</h5>
            <h6>Microsoft Leap Apprenticeship Program</h6>
            <h6>Remote | 11/2020 - 05/2021</h6>
            <li>Internal tool team - AI Project: Built an email-to-case conversion pipeline for the CRM platform using Machine Learning with Microsoft AI Builder.</li>
            <li>Internal tool team: Designed and built a new rules engine for complex query evaluation on Microsoftʼs bulk order revenue processing CRM platform using Azure and Microsoft Power Automate.</li>
          </div>
        </div>

        <div>
          <div className="m-5">
            <Image style={{ paddingTop: "20px", height: "70px" }} width='70' height='70' src={'assets/curious_five.png'} alt='Curious Five'></Image>
          </div>
          <div className="m-5">
            <h5 className={`font-pressStart text-xl`}>Software Engineer</h5>
            <h6>Curious Five</h6>
            <h6>Remote | 03/2020 - 01/2021</h6>
            <li>Participated in the architectural designing stage of the project, discussing the with and without AI/ML functionalities. Investigated on what it would take to add AI/ML features. The Curious Five is a e-learning platform for kids to improve the customized learning through the power of AI.</li>
          </div>
        </div>

        <div>
          <div className="m-5">
            <Image style={{ paddingTop: "20px", height: "70px" }} width='70' height='70' src={'assets/just_one_penny.jpeg'} alt='JustOnePenny'></Image>
          </div>
          <div className="m-5">
            <h5 className={`font-pressStart text-xl`}>Software Engineer</h5>
            <h6>Just One Penny</h6>
            <h6>Remote | 03/2020 - 01/2021</h6>
            <li> Contributed to the backend and frontend features to build the fully functional website for Just One Penny who is a NPO to help users make a micro donation from just one penny.</li>
          </div>
        </div>

        <div>
          <div className="m-5">
            <Image style={{ paddingTop: "20px", height: "70px" }} width='70' height='70' src={'assets/finli.jpeg'} alt='Finli'></Image>
          </div>
          <div className="m-5">
            <h5 className={`font-pressStart text-xl`}>Software Engineer Intern</h5>
            <h6>Finli</h6>
            <h6>Remote| 07/2020 - present</h6>
            <li>Migrated and revamped the iOS/Android mobile app built on React Native for the Version 2 launch.</li>
            <li>Updated legacy documentation with clear, actionable step-by-step commands for Docker, PostgreSQL database and TablePlus, improving development environment setup process for new engineers.</li>
          </div>
        </div>

        <div>
          <div className="m-5">
            <Image style={{ paddingTop: "20px", height: "70px" }} width='70' height='70' src={'assets/dojo.png'} alt='Coding Dojo'></Image>
          </div>
          <div className="m-5">
            <h5 className={`font-pressStart text-xl`}>Software Engineering Teaching Assistant</h5>
            <h6>Coding Dojo</h6>
            <h6>Remote, CA | 08/2020 - present</h6>
            <li>Teaching and supporting students who are learning remotely through the Online Coding Bootcamp program.</li>
            <li>Providing mentorship and help across various tech stacks (Python Django, MERN, Java Spring/Spring Boot, Web Fundamentals).</li>
          </div>
        </div>

        <div>
          <div className="m-5">
            <Image style={{ paddingTop: "20px", height: "70px" }} width='70' height='70' src={'assets/google.png'} alt='Google'></Image>
          </div>
          <div className="m-5">
            <h5 className={`font-pressStart text-xl`}>Global Compliance, Hardware Technologies</h5>
            <h6>Google, LLC</h6>
            <h6>Mountain View, CA | 08/2019 - 01/2020</h6>
            <li>Shortened average supplier turnaround time (TAT) by 30% by evaluating performance through data analysis of task metadata such as end-to-end completion time and codified delay signals with Google Sheets functions.</li>
            <li>Identified bottlenecks and presented actionable visualizations to key stakeholders on a monthly basis, leading to reduced operational overhead.</li>
          </div>
        </div>

        <div>
          <div className="m-5">
            <Image style={{ paddingTop: "20px", height: "70px" }} width='70' height='70' src={'assets/huawei.png'} alt='Huawei'></Image>
          </div>
          <div className="m-5">
            <h5 className={`font-pressStart text-xl`}>Global Compliance, Hardware Technologies</h5>
            <h6>Huawei Technologies, Inc.</h6>
            <h6>Santa Clara, CA | 06/2018 - 08/2019</h6>
            <li>Successfully drove 100% of company (2,000+ employees) to complete technology compliance training using Microsoft Excel functions to track company progress and following up via automated and manual processes.</li>
            <li>Leveraged expertise to direct software / hardware engineers to comply with US and international regulations regarding hardware, software and technology.</li>
          </div>
        </div>

        <div>
          <div className="m-5">
            <Image style={{ paddingTop: "20px", height: "70px" }} width='70' height='70' src={'assets/un.svg'} alt='The UN'></Image>
          </div>
          <div className="m-5">
            <h5 className={`font-pressStart text-xl`}>Consultancy Work</h5>
            <h6>United Nations</h6>
            <h6>Switzerland, Rwanda, Kazakhstan, Japan | 08/2015 - 05/2018</h6>
            <li>Conducted Exploratory Data Analysis (EDA) on large datasets using R and Excel, deriving critical insights through data visualization and numerical analysis.</li>
            <li>Engaged with gov institutions across multiple countries to evaluate impact for government-funded projects.</li>
          </div>
        </div>
      </div>
    </div>
  );
}
