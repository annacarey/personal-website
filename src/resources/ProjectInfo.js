const projectInfo = [

	{
		id: 1,
		slug: "dreamscore",
		name: "DreamScore",
		shortDescription: "Your personal dream journal that reflects the mood beneath your subconscious",
		websiteURL: "https://www.mydreamscores.co/",
		longDescription: "DreamScore is your personal dream journal that allows you to track your mood by recording your daily dreams. The application allows you to write down your dream each morning and then feeds the text into Google’s Natural Language API, which uses machine learning to determine the emotional attitude of a text. Your entry is given a score (-1 as negative and +1 as positive) which shows your mood.",
		technologies: "React, Ruby on Rails, Redux, ActiveRecord, Google's Natural Language API, Google's Geocoding API, PostgreSQL, Heroku, Twilio, Bcrypt, JWT, Chron Jobs, Styled Components, Material UI, Flexbox",
		github: {
			main: "",
			frontend: "https://github.com/annacarey/mydreamscores-frontend",
			backend: "https://github.com/annacarey/mydreamscores-backend"
		},
		demoVideo: "https://www.youtube.com/embed/trBBewI8dcg",
		image: {
			imageURL: "https://github.com/annacarey/mydreamscores-backend/raw/master/public/images/screenshots/Home.png",
			position: "center"
		}
	},
	{
		id: 2,
		slug: "painterly",
		name: "Painterly",
		shortDescription: "Your personal dream journal that reflects the mood beneath your subconscious",
		websiteURL: "https://painterly-app.herokuapp.com/",
		longDescription: "Painterly is an application that aims to unleash your creativity by allowing you to create digital paintings using your computer mouse and save them to your profile and to a public gallery. You can also save paintings to collections.",
		technologies: "React, Ruby on Rails, ActiveRecord, Memoization, PostgreSQL, Heroku, Bcrypt, Styled Components, Flexbox",
		github: {
			main: "",
			frontend: "https://github.com/annacarey/painterly-frontend",
			backend: "https://github.com/annacarey/painterly-backend",
		},
		demoVideo: "https://www.youtube.com/embed/H101rx7oPP0",
		image: {
			imageURL: "https://github.com/annacarey/painterly-frontend/raw/master/public/images/screenshots/Homepage.png",
			position: "center"
		}
	},
	{
		id: 3,
		slug: "bestie",
		name: "Bestie",
		shortDescription: "Bestie, the Friend CRM, helps you stay in touch with the closest people in your life",
		websiteURL: "https://bestie-app.herokuapp.com/",
		longDescription: "Bestie (also known as the Friend CRM) helps you stay in touch with the closest people in your life. CRM stands for customer relationship management tool and this will be familiar to those in sales and marketing, who use these tools to help manage relationships with potential current customers and clients. Similarly, Bestie enables users to manage the relationships with friends and family.",
		technologies: "JavaScript, Ruby on Rails, ActiveRecord, Twilio, Heroku, PHP, PostgreSQL, Flexbox",
		github: {
			main: "",
			frontend: "https://github.com/annacarey/bestie-app-frontend",
			backend: "https://github.com/annacarey/bestie-app-backend",
		},
		demoVideo: "https://www.youtube.com/embed/DqGg3ela93s",
		image: {
			imageURL: "https://github.com/annacarey/bestie-app-frontend/blob/master/images/screenshots/Homepage.png?raw=true",
			position: "fixed"
		}
	},
	{
		id: 3,
		slug: "processing",
		name: "Processing Sketches",
		shortDescription: "Blurring the lines between programming and art making with Processing software",
		websiteURL: "https://processing.org/",
		longDescription: "One of my first entrypoints to programming was in 2013 when I learned about Processing software in an Arduino course I took in college. I fell in love with Processing because it brought together software and art in a way that made sense to me. I loved writing lines of coding and having them appear visually on the screen.",
		technologies: "Processing, Java",
		github: {
			main: "https://github.com/annacarey/processing_sketch",
			frontend: "",
			backend: "",
		},
		demoVideo: "",
		image: {
			imageURL: "https://github.com/annacarey/processing_sketch/raw/master/Processing_Demo.png",
			position: "center"
		}
	},
	{
		id: 4,
		slug: "graffiti",
		name: "Graffiti The Internet",
		shortDescription: "Immersive experience that brings the physical experience of spray painting graffiti into the digital world",
		websiteURL: "https://annajordancarey.files.wordpress.com/2015/05/mood-tagging-writeup.pdf",
		longDescription: "Graffiti the Internet began as a project called 'Mood Tagging', a virtual spray painting experience that maps is an immersive live painting installation. Mood Tagging consists of a spray paint can with a Force Sensitive Resistor (FSR) and a thermotropic crystal sheet that senses the user's temperature. When the user presses down on the nozzle, the user's temperature is mapped to his or her mood (like a mood ring) and a Microsoft Kinect records the hand movement, so digital spray paint appears on the screen above. The experience was created using Microsoft Kinect, Arduino, and Processing. The final iteration, 'Graffiti the Internet' is a live outdoor painting installation on a real window. The Microsoft Kinect receives the imagery from the window, so as the user is spray painting, the application processes each pixel of the image, filters out the colors that match the spray paint, and displays those pixels on a webpage. The project was created as part of Gray Area's Creative Coding Immersive during my fellowship in the Summer of 2015.",
		technologies: "Microsoft Kinect, Processing, Java, Arduino, Sensors",
		github: {
			main: "",
			frontend: "",
			backend: "",
		},
		demoVideo: "https://www.youtube.com/embed/Vuim43TKKg4",
		image: {
			imageURL: "http://img.youtube.com/vi/Vuim43TKKg4/0.jpg",
			position: "center"
		}
	},
	{
		id: 5,
		slug: "annajcarey",
		name: "Personal Website",
		shortDescription: "My website built from scratch",
		websiteURL: "https://www.annajcarey.com",
		longDescription: "When it was time to develop my website to showcase my experience and projects, I was excited to flex my programming skills to create a site that reflected my philosophy for both visual and code design: Make something beautiful, simple, and functional. The most interesting part of this project was building out the portfolio functionality. I am storing all of the info about each project in an array of objects, each containing the same kind of data (stored in ProjectInfo.js). I loop through the array and for each project, I create a route dynamically and render the PortfolioItem component, passing the entire project object down as a prop. This makes it seamless for me to add new projects to my portfolio as all I need to do is add a new object to the array in ProjectInfo.js with the appropriate data and then add a new nav box to the /portfolio page with the new link.",
		technologies: "React, Heroku",
		github: {
			main: "https://github.com/annacarey/personal-website",
			frontend: "",
			backend: "",
		},
		demoVideo: "",
		image: {
			imageURL: "https://github.com/annacarey/personal-website/blob/master/src/resources/images/jamesturrell.jpeg?raw=true",
			position: "center"
		}
	},
	{
		id: 6,
		slug: "stackedco",
		name: "Stacked Co",
		shortDescription: "Freelance consulting project for digital marketing agency",
		websiteURL: "https://www.stackedco.co",
		longDescription: "Stacked Co. is a digital marketing agency that has worked with clients such as Dior, Hello Fresh, and the Morning Brew. I partnered with the client to come up with wireframes, copy (drawing on my communications background), and images (using Photoshop) to create their website. The website is fully responsive. Media queries was a major learning from this project. I also developed skills in client management including working on a set timeline and incorporating feedback iteratively.",
		technologies: "React, Heroku",
		github: {
			main: "https://github.com/annacarey/stacked-co",
			frontend: "",
			backend: "",
		},
		demoVideo: "",
		image: {
			imageURL: "https://github.com/annacarey/stacked-co/blob/master/src/images/stacked-screenshot.png?raw=true",
			position: "center"
		}
	}    
	,
	{
		id: 7,
		slug: "scraper",
		name: "Scraper Learning",
		shortDescription: "Learning how to build an internet scraper",
		websiteURL: "N/A",
		longDescription: "Exploring different ways of building a scraper using Python, the first programming language I learned in college at UC Berkeley but have not been using recently. The IMDB example was very straightforward because they had consistent classnames. Instagram was much more complicated because they use Flexbox so their classnames are created dynamically. I used XML parsing to access the elements. I ended up creating a command line tool that allows you to input the tag name you want to search. The scraper then looks at the nine posts in the featured section and accumulates the comments into an array. As a next step, I will look at searching the comments for particular phrases like 'am or pm' or days of the week to see if I can determine if they include a schedule.",
		technologies: "Python",
		github: {
			main: "https://github.com/annacarey/scraper-learning",
			frontend: "",
			backend: "",
		},
		demoVideo: "",
		image: {
			imageURL: "https://github.com/annacarey/scraper-learning/blob/master/instagram-result.png?raw=true",
			position: "center"
		}
	}

]



export default projectInfo