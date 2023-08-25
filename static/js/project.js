// Populate the individual HMTL page for a project
function createPage(project) {
    // The element with all the information of the project
    const body = document.getElementById('container-' + project['folder']);

    if (body == null) { //avoid errors
        return;
    }

    const title = body.querySelector('.title');
    title.textContent = project['name'];

    const date = body.querySelector('.date');
    date.textContent = project['date'];

    if ('github' in project) {
        const github = document.createElement('a');
        github.href = project['github'];
        github.textContent = "Github";
        github.target = "_blank";
        github.className = "github";
        body.querySelector('.links').appendChild(github);
    }

    if ('devpost' in project) {
        const devpost = document.createElement('a');
        devpost.href = project['devpost'];
        devpost.textContent = "Devpost";
        devpost.target = "_blank";
        devpost.className = "devpost";
        body.querySelector('.links').appendChild(devpost);
    }

    if (project['photos'].length > 1) {
        const arrows = body.querySelector('arrows');
    }

    // let htmlIndicator = '';
    // let htmlInner = '';
    // project['photos'].forEach(photo => {
    //     htmlIndicator += '<li data-target="#myCarousel" data-slide-to="loop.index0"';
    //     htmlInner += '<div><img src=' + photo + 'alt="project-photo" style="width:100%;"></div>';
    // });
    // const indicators = body.querySelector('carousel-indicators');
    // indicators.innerHTML = htmlIndicator + htmlInner;

    let htmlImages = '';
    project['photos'].forEach(photo => {
        htmlImages += '<div class="item"> <img src="{{photo}}" alt="project-photo" style="width:100%;"> </div>';
    });
    const indicators = body.querySelector('carousel-inner');
    indicators.innerHTML = htmlImages;
}

// Array of all project objects
projects = [
    // {
    //   "name": "NGordnet (Wordnet)",
    //   "link": "nogordnet",
    //   "date": "March 2023",
    //   "short": "An implementation of Wordnet, a large lexical database of semantic relations between words.",
    //   "weight": 10,
    //   "photos": [
    //     "projects/ngordnet/img.jpg"
    //   ]
    // },
    {
      "name": "Scheme Interpreter",
      "folder": "scheme",
      "link": "projects/scheme/scheme.html",
      "date": "November 2022",
      "short": "An interpreter for a subset of the Scheme language.",
      "weight": 9,
      "photos": [
        "projects/scheme/img.jpg"
      ]
    },
    {
      "name": "Ants Vs. SomeBees",
      "folder": "ants",
      "link": "projects/ants/ants.html",
      "date": "October 2022",
      "short": "A tower defense game inspired by PopCap Games' Plants Vs. Zombies.",
      "weight": 8,
      "photos": [
        "projects/ants/img.jpg"
      ]
    },
    {
      "name": "Personal Library",
      "folder": "personal-library",
      "link": "projects/personal-library/personal-library.html",
      "date": "December 2021",
      "short": "An online library containing a personalized selection list of books and movies each user creates by searching about any book or movie.",
      "weight": 7,
      "photos": [
        "projects/personal-library/home.jpg",
        "projects/personal-library/img.jpg",
        "projects/personal-library/search.jpg",
        "projects/personal-library/results.jpg",
        "projects/personal-library/movie.jpg"
      ],
      "github": "https://github.com/rachelxiao907/congenial-broccolis"
    },
    {
      "name": "Journalify",
      "folder": "journalify",
      "link": "projects/journalify/journalify.html",
      "date": "October 2022",
      "short": "Created at Cal Hacks 9.0 Hackathon, a tool for you to soundtrack your day based on your journal log.",
      "weight": 6,
      "photos": [
        "projects/journalify/home.jpg",
        "projects/journalify/start.jpg",
        "projects/journalify/entry.jpg",
        "projects/journalify/result.jpg",
        "projects/journalify/model.jpg"
      ],
      "github": "https://github.com/rachelxiao907/Journalify",
      "devpost": "https://devpost.com/software/journalify"
    },
    {
      "name": "Cats",
      "folder": "cats",
      "link": "projects/cats/cats.html",
      "date": "September 2022",
      "short": "A program that measures typing speed and also implements typing autocorrect. This project is inspired by typeracer.",
      "weight": 5,
      "photos": [
        "projects/cats/img.jpg"
      ]
    },
    {
      "name": "Space Invaders",
      "folder": "space-invaders",
      "link": "projects/space-invaders/space-invaders.html",
      "date": "May 2021",
      "short": "A version of the game Space Invaders in Processing.",
      "weight": 4,
      "photos": [
        "projects/space-invaders/home.jpg",
        "projects/space-invaders/features.jpg",
        "projects/space-invaders/img.jpg"
      ],
      "github": "https://github.com/rachelxiao907/APCSFinalProject"
    },
    {
      "name": "Four Toppings",
      "folder": "four-toppings",
      "link": "projects/four-toppings/four-toppings.html",
      "date": "March 2022",
      "short": "A virtual boba tea shop game where users experience running their own boba shop by taking orders, selling boba, manging inventory, and more.",
      "weight": 3,
      "photos": [
        "projects/four-toppings/home.jpg",
        "projects/four-toppings/counter.jpg",
        "projects/four-toppings/img.jpg",
        "projects/four-toppings/shop.jpg"
      ],
      "github": "https://github.com/rachelxiao907/Four-Toppings"
    },
    {
      "name": "Guess Who",
      "folder": "guess-who",
      "link": "projects/guess-who/guess-who.html",
      "date": "June 2022",
      "short": "A web application that allows two players to compete in a game of Guess Who.",
      "weight": 2,
      "photos": [
        "projects/guess-who/img.jpg"
      ],
      "github": "https://github.com/rachelxiao907/MISTR"
    },
    {
      "name": "StoryForge",
      "folder": "storyforge",
      "link": "projects/storyforge/storyforge.html",
      "date": "November 2021",
      "short": "A collaborative storytelling and blog web application.",
      "weight": 1,
      "photos": [
        "projects/storyforge/img.jpg"
      ],
      "github": "https://github.com/rachelxiao907/redacted"
    }
  ]

createPage({
    "name": "Scheme Interpreter",
    "folder": "scheme",
    "link": "projects/scheme/scheme.html",
    "date": "November 2022",
    "short": "An interpreter for a subset of the Scheme language.",
    "weight": 9,
    "photos": [
      "projects/scheme/img.jpg"
    ]
  });

// Make a page for each project
projects.forEach(card => {
    createPage(card); //each card has its own detailed page
});