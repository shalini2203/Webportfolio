/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Shalini Singh",
  title: "Hi all, I'm Shalini Singh",
  subTitle: emoji(
    "A B.Tech Computer Science Student having an experience of building Web applications with HTML, CSS, JavaScript."
  ),
  resumeLink:
    "",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shalini2203",
  linkedin: "https://www.linkedin.com/in/",
  gmail: "shaani.singh03@gmail.com",
  gitlab: "https://gitlab.com/shalini2203",
  facebook: "https://www.facebook.com/",
  medium: "https://medium.com/",
  stackoverflow: "https://stackoverflow.com/",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I AM AN ENGINEERING STUDENT PURSUING B.TECH III YEAR.",
  skills: [
    emoji(
      "⚡ Develop & Design highly interactive Front end / User Interfaces for your web ,desktop and mobile applications."
    ),
    emoji("⚡ Creative Design"),
    emoji(
      "⚡ Photoshop, Adobe XD"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: " Inderprastha Engineering College AKTU",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "B.Tech in Computer Science",
      duration: "September 2019 - April 2023",
      desc: "Membe of ACM Society.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "ACM WEB & Graph Society",
      company: "IPEC ACM",
      companylogo: require("./assets/images/harvardLogo.png"),
      date: "Jan 20121 – Present",
      desc: "Create. Design. Develop",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Web Pages",
  subtitle: "I can help you design web applications.",
  projects: [
    {
      image: require("./assets/images/Task2.png"),
      projectName: "Task 2",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://shalini2203.github.io/task2/TASK2.html"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Task3.png"),
      projectName: "Task 3",
      projectDesc: "",
      footerLink: [
        {
          name: "Web Page Design",
          url: "https://shalini2203.github.io/WebPageDesign/index.html"
        }
      ]
    },
    {
      image: require("./assets/images/Task4.png"),
      projectName: "Task 4",
      projectDesc: "",
      footerLink: [
        {
          name: "Web Page Design",
          url: "https://shalini2203.github.io/shalini-task4/rest.Html"
        }
      ]
    },{
      image: require("./assets/images/Task5.png"),
      projectName: "Task 5",
      projectDesc: "",
      footerLink: [
        {
          name: "Web Page Design",
          url: "https://shalini2203.github.io/tasks-5/boot.html"
        }
      ]
    },{
      image: "",
      projectName: "Task 6",
      projectDesc: "",
      footerLink: [
        {
          name: "Web Page Design",
          url: "https://shalini2203.github.io/t6-web/index"
        }
      ]
    },{
      image: require("./assets/images/Task7.png"),
      projectName: "Task 7",
      projectDesc: "",
      footerLink: [
        {
          name: "Web Page Design",
          url: "https://shalini2203.github.io/t7-web/"
        }
      ]
    },{
      image: "",
      projectName: "Task 9",
      projectDesc: "",
      footerLink: [
        {
          name: "Web Page Design",
          url: "https://shalini2203.github.io/shalini-task9/index.js"
        }
      ]
    }
  ],
  display: true// Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    
  ],
  display: false// Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
   blogCards: [
    
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "PROJECTS",
  subtitle: emoji(
    "My Engineering Projects"
  ),

  talks: [
  {
      title: "WebPageDesign",
      subtitle: "Task 3",
      slides_url: "https://shalini2203.github.io/WebPageDesign/index.html",
      event_url: "https://shalini2203.github.io/WebPageDesign/index.html"
    }, {
      title: "WebPageDesign",
      subtitle: "Task 3",
      slides_url: "https://shalini2203.github.io/WebPageDesign/index.html",
      event_url: "https://shalini2203.github.io/WebPageDesign/index.html"
    }, 
    
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9999765467",
  email_address: "shaani.singh03@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
