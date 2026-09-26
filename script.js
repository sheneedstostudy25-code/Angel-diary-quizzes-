// =====================================================
// ANGEL DIARY QUIZZES
// =====================================================

const MONETAG_DIRECT_LINK = "PASTE_YOUR_MONETAG_DIRECT_LINK_HERE";

const quizzes = [
    {
        id: "enhypen-husband",
        number: "01",
        title: "Which ENHYPEN Member Is Your Husband?",
        short: "Answer a few questions and discover your ENHYPEN match.",
        image: "Image/Enhypen.jpg",
        questions: [
            {
                q: "Your ideal date sounds like...",
                options: [
                    ["A quiet café + deep conversation", "jungwon"],
                    ["Late-night drive + good food", "jay"],
                    ["A spontaneous adventure", "jake"],
                    ["A winter walk + cozy dessert", "sunghoon"],
                    ["A fun day full of jokes", "sunoo"],
                    ["A concert or exciting activity", "niki"],
                    ["A creative day with music", "heeseung"]
                ]
            },
            {
                q: "When you like someone, you usually...",
                options: [
                    ["Stay calm and slowly get closer", "jungwon"],
                    ["Show it through thoughtful actions", "jay"],
                    ["Become playful and affectionate", "jake"],
                    ["Act cool but secretly care a lot", "sunghoon"],
                    ["Make them laugh", "sunoo"],
                    ["Tease them constantly", "niki"],
                    ["Have deep conversations", "heeseung"]
                ]
            },
            {
                q: "Pick your relationship vibe:",
                options: [
                    ["Soft and peaceful", "jungwon"],
                    ["Elegant power couple", "jay"],
                    ["Best friends who fell in love", "jake"],
                    ["Quiet luxury romance", "sunghoon"],
                    ["Cute and playful", "sunoo"],
                    ["Chaotic but exciting", "niki"],
                    ["Deep and artistic", "heeseung"]
                ]
            },
            {
                q: "Your biggest green flag is...",
                options: [
                    ["Kindness", "jungwon"],
                    ["Reliability", "jay"],
                    ["Warmth", "jake"],
                    ["Confidence", "sunghoon"],
                    ["Emotional openness", "sunoo"],
                    ["Passion", "niki"],
                    ["Intelligence", "heeseung"]
                ]
            },
            {
                q: "Choose a perfect evening:",
                options: [
                    ["Movie night at home", "jungwon"],
                    ["Fancy dinner", "jay"],
                    ["Exploring a new place", "jake"],
                    ["Snowy evening together", "sunghoon"],
                    ["Games and snacks", "sunoo"],
                    ["Dancing and music", "niki"],
                    ["Listening to music together", "heeseung"]
                ]
            }
        ],
        results: {
            jungwon: {
                name: "JUNGWON",
                image: "Image/Jungwon.jpg",
                text: "Your match has a calm, caring and quietly confident energy."
            },
            jay: {
                name: "JAY",
                image: "Image/Jay.jpg",
                text: "Your match gives dependable, thoughtful and sophisticated energy."
            },
            jake: {
                name: "JAKE",
                image: "Image/Jake.jpg",
                text: "Your match has warm, friendly and playful relationship energy."
            },
            sunghoon: {
                name: "SUNGHOON",
                image: "Image/Sunghoon.jpg",
                text: "Your match gives elegant, composed and quietly romantic energy."
            },
            sunoo: {
                name: "SUNOO",
                image: "Image/Sunoo.jpg",
                text: "Your match brings bright, affectionate and fun energy."
            },
            niki: {
                name: "NI-KI",
                image: "Image/Niki.jpg",
                text: "Your match has energetic, playful and passionate energy."
            },
            heeseung: {
                name: "HEESEUNG",
                image: "Image/Heeseung.jpg",
                text: "Your match has creative, thoughtful and emotionally deep energy."
            }
        }
    },

    {
        id: "cortis",
        number: "02",
        title: "Which CORTIS Member Would Fall for You?",
        short: "Find the CORTIS personality vibe that matches yours.",
        image: "",
        questions: [
            {
                q: "Your ideal first date is...",
                options: [
                    ["Coffee and talking", "one"],
                    ["A fun adventure", "two"],
                    ["Watching movies", "three"],
                    ["Shopping together", "four"],
                    ["Trying something completely new", "five"]
                ]
            },
            {
                q: "Your personality is closest to...",
                options: [
                    ["Calm and caring", "one"],
                    ["Funny and outgoing", "two"],
                    ["Quiet and mysterious", "three"],
                    ["Confident and stylish", "four"],
                    ["Creative and energetic", "five"]
                ]
            },
            {
                q: "Pick your dream date location:",
                options: [
                    ["Cute café", "one"],
                    ["Amusement park", "two"],
                    ["Cinema", "three"],
                    ["Luxury restaurant", "four"],
                    ["Concert", "five"]
                ]
            }
        ],
        results: {
            one: { name: "YOUR CORTIS MATCH", text: "You give a soft, calm and comforting relationship vibe." },
            two: { name: "YOUR CORTIS MATCH", text: "You give playful, energetic and adventurous energy." },
            three: { name: "YOUR CORTIS MATCH", text: "You give mysterious, quiet and intriguing energy." },
            four: { name: "YOUR CORTIS MATCH", text: "You give confident, elegant and magnetic energy." },
            five: { name: "YOUR CORTIS MATCH", text: "You give creative, spontaneous and exciting energy." }
        }
    },

    {
        id: "sunghoon",
        number: "03",
        title: "Would Sunghoon Date You? Are You His Type?",
        short: "A fan-made compatibility quiz based on public-facing personality vibes.",
        image: "Image/Sunghoon.jpg",
        questions: [
            {
                q: "Your relationship style is...",
                options: [
                    ["Calm and loyal", "a"],
                    ["Playful and teasing", "b"],
                    ["Independent but affectionate", "c"],
                    ["Very romantic", "d"]
                ]
            },
            {
                q: "Pick your ideal weekend:",
                options: [
                    ["Quiet day together", "a"],
                    ["Going somewhere fun", "b"],
                    ["Doing our own hobbies", "c"],
                    ["Cute date night", "d"]
                ]
            },
            {
                q: "What matters most in a relationship?",
                options: [
                    ["Trust", "a"],
                    ["Humor", "b"],
                    ["Respect for space", "c"],
                    ["Romance", "d"]
                ]
            },
            {
                q: "Your vibe is...",
                options: [
                    ["Elegant and calm", "a"],
                    ["Cute and chaotic", "b"],
                    ["Cool and independent", "c"],
                    ["Soft and romantic", "d"]
                ]
            }
        ],
        results: {
            a: { name: "HIGH COMPATIBILITY", text: "Your answers give a calm, loyal and composed compatibility vibe." },
            b: { name: "PLAYFUL COMPATIBILITY", text: "Your answers suggest a fun and teasing relationship dynamic." },
            c: { name: "COOL COMPATIBILITY", text: "You give independent, confident and low-pressure relationship energy." },
            d: { name: "ROMANTIC COMPATIBILITY", text: "Your answers give soft, affectionate and romantic energy." }
        }
    },

    {
        id: "katseye",
        number: "04",
        title: "Which KATSEYE Member Matches Your Vibe?",
        short: "Find the KATSEYE personality aesthetic that fits you.",
        image: "",
        questions: [
            {
                q: "Your aesthetic is...",
                options: [
                    ["Soft and dreamy", "daniela"],
                    ["Bold and glamorous", "lara"],
                    ["Cool and effortless", "manon"],
                    ["Sweet and elegant", "sophia"],
                    ["Playful and energetic", "megan"],
                    ["Fresh and youthful", "yoonchae"]
                ]
            },
            {
                q: "Choose a night out:",
                options: [
                    ["Cute café", "daniela"],
                    ["Fancy party", "lara"],
                    ["Fashion event", "manon"],
                    ["Dinner with friends", "sophia"],
                    ["Concert", "megan"],
                    ["Late-night shopping", "yoonchae"]
                ]
            },
            {
                q: "Your strongest energy is...",
                options: [
                    ["Bright", "daniela"],
                    ["Confident", "lara"],
                    ["Mysterious", "manon"],
                    ["Warm", "sophia"],
                    ["Fun", "megan"],
                    ["Charming", "yoonchae"]
                ]
            }
        ],
        results: {
            daniela: { name: "DANIELA VIBE", text: "You give bright, expressive and confident energy." },
            lara: { name: "LARA VIBE", text: "You give glamorous, bold and powerful energy." },
            manon: { name: "MANON VIBE", text: "You give cool, effortless and mysterious energy." },
            sophia: { name: "SOPHIA VIBE", text: "You give warm, elegant and graceful energy." },
            meyla: { name: "MEGAN VIBE", text: "You give playful, energetic and fun energy." },
            yoonchae: { name: "YOONCHAE VIBE", text: "You give fresh, youthful and charming energy." }
        }
    },

    {
        id: "enhypen-type",
        number: "05",
        title: "Which ENHYPEN Member's Type Are You?",
        short: "Which ENHYPEN personality style matches your vibe?",
        image: "Image/Enhypen.jpg",
        questions: [
            {
                q: "People usually notice your...",
                options: [
                    ["Calm personality", "jungwon"],
                    ["Confidence", "jay"],
                    ["Friendly energy", "jake"],
                    ["Elegant vibe", "sunghoon"],
                    ["Cute personality", "sunoo"],
                    ["Bold energy", "niki"],
                    ["Intelligence", "heeseung"]
                ]
            },
            {
                q: "Your biggest personality trait is...",
                options: [
                    ["Caring", "jungwon"],
                    ["Determined", "jay"],
                    ["Warm", "jake"],
                    ["Composed", "sunghoon"],
                    ["Expressive", "sunoo"],
                    ["Competitive", "niki"],
                    ["Creative", "heeseung"]
                ]
            },
            {
                q: "Pick your signature vibe:",
                options: [
                    ["Soft confidence", "jungwon"],
                    ["Rich-girl energy", "jay"],
                    ["Boyfriend energy", "jake"],
                    ["Ice prince energy", "sunghoon"],
                    ["Sunshine energy", "sunoo"],
                    ["Cool rebel energy", "niki"],
                    ["Artist energy", "heeseung"]
                ]
            }
        ],
        results: {
            jungwon: { name: "JUNGWON'S TYPE", image: "Image/Jungwon.jpg", text: "Your vibe matches calm, caring and quietly confident energy." },
            jay: { name: "JAY'S TYPE", image: "Image/Jay.jpg", text: "Your vibe matches confident, thoughtful and sophisticated energy." },
            jake: { name: "JAKE'S TYPE", image: "Image/Jake.jpg", text: "Your vibe matches warm, friendly and affectionate energy." },
            sunghoon: { name: "SUNGHOON'S TYPE", image: "Image/Sunghoon.jpg", text: "Your vibe matches elegant, calm and composed energy." },
            sunoo: { name: "SUNOO'S TYPE", image: "Image/Sunoo.jpg", text: "Your vibe matches bright, expressive and affectionate energy." },
            niki: { name: "NI-KI'S TYPE", image: "Image/Niki.jpg", text: "Your vibe matches energetic, confident and playful energy." },
            heeseung: { name: "HEESEUNG'S TYPE", image: "Image/Heeseung.jpg", text: "Your vibe matches creative, intelligent and thoughtful energy." }
        }
    }
];

let currentQuiz = null;
let currentQuestion = 0;
let answers = [];

function imageHTML(src, alt) {
    if (!src) {
        return `<div class="image-placeholder">♡ IMAGE SPACE</div>`;
    }

    return `<img src="${src}" alt="${alt}" loading="lazy"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="image-placeholder" style="display:none;">♡ IMAGE SPACE</div>`;
}

function renderHome() {
    const grid = document.getElementById("quizGrid");

    if (!grid) {
        console.error("quizGrid was not found in index.html");
        return;
    }

    grid.innerHTML = quizzes.map(quiz => `
        <article class="quiz-card" data-id="${quiz.id}">
            <div class="card-image">
                ${imageHTML(quiz.image, quiz.title)}
            </div>

            <div class="card-number">${quiz.number}</div>

            <h2>${quiz.title}</h2>

            <p>${quiz.short}</p>

            <button class="start-button" onclick="startQuiz('${quiz.id}')">
                TAKE QUIZ ♡
            </button>
        </article>
    `).join("");
}

function startQuiz(id) {
    currentQuiz = quizzes.find(q => q.id === id);

    if (!currentQuiz) return;

    currentQuestion = 0;
    answers = [];

    showQuizScreen();
}

function showQuizScreen() {
    let screen = document.getElementById("angelQuizScreen");

    if (!screen) {
        screen = document.createElement("div");
        screen.id = "angelQuizScreen";
        document.body.appendChild(screen);
    }

    screen.style.display = "block";

    renderQuestion();
    screen.scrollIntoView({ behavior: "smooth" });
}

function renderQuestion() {
    const screen = document.getElementById("angelQuizScreen");
    const question = currentQuiz.questions[currentQuestion];

    screen.innerHTML = `
        <div class="angel-quiz-box">
            <button class="back-button" onclick="closeQuiz()">← Back</button>

            <div class="quiz-progress">
                QUESTION ${currentQuestion + 1} / ${currentQuiz.questions.length}
            </div>

            <h1>${currentQuiz.title}</h1>

            <h2>${question.q}</h2>

            <div class="answer-list">
                ${question.options.map((option, index) => `
                    <button class="answer-button"
                        onclick="chooseAnswer('${option[1]}')">
                        ${option[0]}
                    </button>
                `).join("")}
            </div>
        </div>
    `;
}

function chooseAnswer(answer) {
    answers.push(answer);

    if (currentQuestion < currentQuiz.questions.length - 1) {
        currentQuestion++;
        renderQuestion();
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        showResult();
    }
}

function showResult() {
    const counts = {};

    answers.forEach(answer => {
        counts[answer] = (counts[answer] || 0) + 1;
    });

    const winner = Object.keys(counts).sort(
        (a, b) => counts[b] - counts[a]
    )[0];

    const result = currentQuiz.results[winner];

    const screen = document.getElementById("angelQuizScreen");

    screen.innerHTML = `
        <div class="angel-result-box">

            <div class="result-label">♡ YOUR RESULT ♡</div>

            ${result.image ? `
                <div class="result-image">
                    ${imageHTML(result.image, result.name)}
                </div>
            ` : ""}

            <p class="result-small">YOUR ANGEL DIARY MATCH IS...</p>

            <h1>${result.name}</h1>

            <p class="result-text">${result.text}</p>

            <p class="fan-note">
                Fan-made entertainment result. This does not represent
                the private preferences or relationships of real people.
            </p>

            <button class="start-button" onclick="closeQuiz()">
                TRY ANOTHER QUIZ ♡
            </button>
        </div>
    `;

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeQuiz() {
    const screen = document.getElementById("angelQuizScreen");

    if (screen) {
        screen.style.display = "none";
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
    renderHome();
});
