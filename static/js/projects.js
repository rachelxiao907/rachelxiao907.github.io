// Pass in an object that has the information about a project to create its card on the projects page
function createCard(project) {
    const template = document.querySelector('#card-template');
    const card = template.content.cloneNode(true);

    const image = card.querySelector('img.card-image'); //a div also has this class name
    image.src = project['photos'][0];

    const titles = card.querySelectorAll('.card-title');
    titles.forEach(title => {
        title.textContent = project['name'];
    });

    const readMores = card.querySelectorAll('.read-more');
    readMores.forEach(readMore => {
        readMore.href = project['link'];
    });

    if ('github' in project) {
        const github = document.createElement('a');
        github.href = project['github'];
        github.textContent = " | Github";
        github.target = "_blank";
        github.className = "github";
        card.querySelector('.links').appendChild(github);
    }

    const date = card.querySelector('.status');
    date.textContent = project['date'];

    const description = card.querySelector('.description');
    description.textContent = project['short'];

    return card;
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

// The element where the cards are appended
const container = document.getElementById('cards-container');

// Make a card for each project
projects.forEach(card => {
    const cardElement = createCard(card);
    container.appendChild(cardElement);
});