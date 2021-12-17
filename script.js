function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "default.css";
    document.getElementById('github').style.fill="black";
    document.getElementById('codesandbox').style.fill="black";
    document.getElementById('codepen').style.fill="black";
  }

  if (mode === "blue") {
    document.getElementById("theme-style").href = "blue.css";
    document.getElementById('github').style.fill="white";
    document.getElementById('codesandbox').style.fill="white";
    document.getElementById('codepen').style.fill="white";
  }

  if (mode === "green") {
    document.getElementById("theme-style").href = "green.css";
    document.getElementById('github').style.fill="black";
    document.getElementById('codesandbox').style.fill="black";
    document.getElementById('codepen').style.fill="black";
  }

  if (mode === "purple") {
    document.getElementById("theme-style").href = "purple.css";
    document.getElementById('github').style.fill="white";
    document.getElementById('codesandbox').style.fill="black";
    document.getElementById('codepen').style.fill="white";
  }
  localStorage.setItem("theme", mode);
}

let theme = localStorage.getItem("theme");

// Fetching the theme from the local storage if available
if (theme) setTheme(theme);
else setTheme("light");

let themeDots = document.getElementsByClassName("theme-dot");

for (let theme = 0; themeDots.length > theme; theme++) {
    themeDots[theme].addEventListener("click", function () {
        let mode = this.dataset.mode;
        setTheme(mode);
    });
}

class Project {
  constructor({
                projectName,
                projectDescription,
                projectImage,
                codeLink,
                demoLink
              }) {
    this.title = this.createHeadingTag({
      headingType: "h6",
      className: "post-title",
      text: projectName
    });

    this.description = this.createParaTag({
      className: "post-intro",
      text: projectDescription
    });

    this.demo = this.createAttributeTag({
      href: demoLink,
      text: "Live Demo"
    });

    this.code = this.createAttributeTag({
      href: codeLink,
      text: "Source Code"
    });

    this.projectImage = this.createImageTag({
      className: "thumbnail",
      src: projectImage,
      alt: projectName
    });

    this.sourceCodeDiv = this.createDiv({
      className: "source-code",
      childElements: [this.demo, this.code]
    });

    this.cardHeaderDiv = this.createDiv({
      className: "post-preview",
      childElements: [this.title, this.description, this.sourceCodeDiv]
    });

    this.cardComponent = this.createDiv({
      className: "post",
      childElements: [this.projectImage, this.cardHeaderDiv]
    });
  }

  createAttributeTag({ href = "", target = "_blank", text }) {
    const tagDocument = document.createElement("a");
    tagDocument.href = href;
    tagDocument.target = target;
    const tagTextElement = document.createTextNode(text);
    tagDocument.appendChild(tagTextElement);
    return tagDocument;
  }

  createParaTag({ className = null, text = "" }) {
    const paraElement = document.createElement("p");
    if (className) paraElement.className = className;

    const paraText = document.createTextNode(text);
    paraElement.appendChild(paraText);
    return paraElement;
  }

  createDiv({ className = null, childElements = [] }) {
    const divElement = document.createElement("div");
    if (className) divElement.className = className;
    childElements.forEach(element => {
      divElement.appendChild(element);
    });
    return divElement;
  }

  createHeadingTag({ headingType = "h1", className = null, text = "" }) {
    const headingTag = document.createElement(headingType);
    if (className) headingTag.className = className;
    const headingText = document.createTextNode(text);
    headingTag.appendChild(headingText);
    return headingTag;
  }

  createImageTag({ className = null, src = "", alt = "" }) {
    const imageTag = document.createElement("img");
    if (className) imageTag.className = className;
    imageTag.src = src;
    imageTag.alt = alt;
    return imageTag;
  }

  createProjectCard() {
    return this.cardComponent;
  }
}

const projects = [
  {
    projectName: "LinkedIn Clone",
    projectDescription:
      "LinkedIn clone built by using React,Redux & Firebase,It is a highly scalable, low cost and high performant clone application.",
    projectImage: "images/LinkedInClone.png",
    codeLink: "https://github.com/atulpatill/linkedin-clone",
    demoLink: "https://linkedin-clone-ea9b2.web.app/"
  },{
    projectName: "Google Clone",
    projectDescription:
      "Clone of Google Official WebApp made by using React & Context API for State management",
    projectImage: "images/GoogleClone.png",
    codeLink: "https://github.com/atulpatill/Google-Clone",
    demoLink: "https://google-reactjs-clone.netlify.app/"
  },{
    projectName: "SuperChat",
    projectDescription:
      "SuperChat is highly scalable, low cost and high performant chat application built by using React and Firebase.",
    projectImage: "images/SuperChat.png",
    codeLink: "https://github.com/atulpatill/SuperChat",
    demoLink: "https://superchat-roc.netlify.app/"
  },{
    projectName: "Movies-App",
    projectDescription:
      "Movie-App is a movie listing application. In addition to exploring and searching the listed movies, you can also see the Information of perticular movie.",
    projectImage: "images/MovieApp.png",
    codeLink: "https://github.com/atulpatill/movie-app",
    demoLink: "https://favmovie-app.netlify.app/"
  },
  {
    projectName: "FireGram",
    projectDescription:
      "Firegram is Photo Uploading Application like photo gallery app build by with React & Firebase, In this app you can upload images so that other users of the site can see the updates.",
    projectImage: "images/Firegram.png",
    codeLink: "https://github.com/CodeOpsTechnologies/talent-board-fe",
    demoLink: "https://talent.awsug.in/"
  },
  {
    projectName: "CRUD-App",
    projectDescription:
      "CRUD App made by using React,Json Server & hosted by using Heroku.",
    projectImage: "images/crud.png",
    codeLink: "https://github.com/atulpatill/crud-app",
    demoLink: "https://userinfo-fix.herokuapp.com/"
  },
  {
    projectName: "Emoji Interpreter",
    projectDescription:
      "I struggle with understanding the emojis. Do you too? If yes, then see this library of emojis with meaning.",
    projectImage: "images/Emoji.png",
    codeLink: "https://github.com/atulpatill/Emoji-Interpreter",
    demoLink: "https://hb381.csb.app/"
  },
  {
    projectName: "Portfolio with Theme Changer",
    projectDescription:
      "Designed & Built the Portfolio using HTML CSS and Vanilla JavaScript to show case the Professional Journey.",
    projectImage: "images/portfolio.png",
    codeLink: "https://github.com/atulpatill/portfolio-atul-patil",
    demoLink: ""
  },
  {
    projectName: "My Old Portfolio",
    projectDescription:
      "A Component library portfolio Made by using HTML & CSS.",
    projectImage: "images/old.png",
    codeLink: "https://github.com/atulpatill/neogcamp-lesson-3-live",
    demoLink: "https://atulpatil.netlify.app/"
  },
  {
    projectName: "Banana Translator-Minionese",
    projectDescription:
      "Are you a fan of minions? Did you know that the gibberish they say is an actual language. Use the translator to convert your text from English to Minion speak or Banana language.",
    projectImage: "images/Bananaspeak.png",
    codeLink: "https://github.com/atulpatill/neogcamp-banana-speak",
    demoLink: "https://speak-banana-translate.netlify.app/"
  },
  {
    projectName: "Cheunh translator",
    projectDescription:
      "Are you a fan of star wars? Did you know that Cheunh was the official language of the Chiss. This is the translator to convert your text from English to Star wars Cheunh language.",
    projectImage: "images/Cheunhtranslator.png",
    codeLink: "https://github.com/atulpatill/neogcamp-cheunh-translator",
    demoLink: "https://cheunha-translator-app.netlify.app/"
  },
  {
    projectName: "Books You Must Read",
    projectDescription:
      "Do you read books? You would find some good recommendations for all the genre. Made using ReactJS with love.",
    projectImage: "images/Books.png",
    codeLink: "https://github.com/atulpatill/books-recommendation",
    demoLink: "https://fhq6m.csb.app/"
  },
  {
    projectName: "RAMAYANA Quiz",
    projectDescription:
      "Built by using CLI, The Ramayana Quiz.Play and see your score!",
    projectImage: "images/ramayana1.png",
    codeLink: "https://github.com/atulpatill/ramayan-quiz-app-mark2",
    demoLink: "https://replit.com/@AtulPatil2/ramayana-quiz-app?embed=1&output=1"
  },
  {
    projectName: "How Well Do You Know Me?",
    projectDescription:
      "A CLI app built with nodeJS. You can send this to your friends and find out who really knows you.",
    projectImage: "images/knowme1.png",
    codeLink: "https://github.com/atulpatill/Know-me--Mark1/tree/master",
    demoLink: "https://replit.com/@AtulPatil2/how-much-you-know-me?embed=1&output=1#index.js"
  },
  {
    projectName: "Cash Register Manager",
    projectDescription:
      "It takes two inputs, bill amount and cash given by customer for that bill amount. And this app will tell how many notes of 2000,500,100,20,10,5,1 have to be return to customer.",
    projectImage: "images/cash.png",
    codeLink: "https://github.com/atulpatill/Mark-10-level-0",
    demoLink: "https://cash-register-mk10-lvl0.netlify.app/"
  },
  {
    projectName: "Fun with Triangles",
    projectDescription:
      "This app is all about Traingles and quiz on triangles You just have to enter your values in respective fields.",
    projectImage: "images/Triangle.png",
    codeLink: "https://github.com/atulpatill/Mark-12",
    demoLink: "https://know-fun-triangles.netlify.app/"
  },
  {
    projectName: "Palidrome Birthday",
    projectDescription:
      "This app will tell you, Is your birthday a palindrome? If not then will also tell you that you missed by how many days?..",
    projectImage: "images/palindrome.png",
    codeLink: "https://github.com/atulpatill/Mark-13",
    demoLink: "https://birthday-palindrome-app.netlify.app/"
  },
  {
    projectName: "Gym Website",
    projectDescription:
      "Gym admission website where you can fill your form, Built by using HTML & CSS.",
    projectImage: "images/gym.png",
    codeLink: "https://github.com/atulpatill/Gym-Website",
    demoLink: "https://atul-fitness.netlify.app/"
  },
  {
    projectName: "Stocks Profit/Loss",
    projectDescription:
      "This app is all about stocks trading...Check how much profit or loss you are making in stocks by using this app, You just have to enter your values in respective fields.",
    projectImage: "images/stocks.png",
    codeLink: "https://github.com/atulpatill/Mark-14",
    demoLink: "https://stock-checkup-app.netlify.app/"
  },
  {
    projectName: "Food Delivery Website",
    projectDescription:
      "Food Delivery Website built by using HTML& CSS.",
    projectImage: "images/food.png",
    codeLink: "https://github.com/atulpatill/Food-Delivery-Website",
    demoLink: "https://karmyogi-food-panda.netlify.app/"
  },
  {
    projectName: "Lucky Birthday",
    projectDescription:
      "This app will tell you, Is your birthday lucky or not. You just have to enter your birth date and lucky number in respective fields.",
    projectImage: "images/lucky.png",
    codeLink: "https://github.com/atulpatill/Mark-11",
    demoLink: "https://check-birthday-luck-mk11.netlify.app/"
  },
];

const createCards = () => {
  projects.map(project => {
      const projectCard = new Project({
        projectName: project.projectName,
        projectDescription: project.projectDescription,
        projectImage: project.projectImage,
        codeLink: project.codeLink,
        demoLink: project.demoLink
      }).createProjectCard();
      document.getElementById("post-wrapper-id").appendChild(projectCard);
    }
  );
};
createCards();

