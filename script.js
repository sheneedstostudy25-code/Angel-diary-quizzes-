ANGEL DIARY QUIZZES
  -------------------
  1) Put your image paths/URLs in the image field for each result/card.
  2) Replace MONETAG_DIRECT_LINK with your actual Monetag Direct Link.
  3) IMPORTANT: Direct links are ad/monetization links. Test the exact
     visitor experience before publishing the site.
*/

const MONETAG_DIRECT_LINK = "PASTE_YOUR_MONETAG_DIRECT_LINK_HERE";

/*
  IMAGE PLACEHOLDERS:
  You can use local files like "images/jungwon.jpg"
  or full image URLs.
*/

const quizzes = [
  {
    id: "enhypen-husband",
    number: "01",
    title: "Your ENHYPEN Husband Is... Who?",
    short: "Your choices reveal which ENHYPEN member best matches your relationship vibe.",
    image: "Image/Enhypen.jpg",
    intro: "Choose what feels most like you. Your result is a fan-made compatibility match, not a prediction of a real relationship.",
    questions: [
      {
        q: "Your ideal date sounds like...",
        options: [
          ["A quiet café + deep conversation", "jungwon"],
          ["A late-night drive + good food", "jay"],
          ["A spontaneous adventure", "jake"],
          ["A winter walk + cozy dessert", "sunghoon"],
          ["A fun day full of jokes", "sunoo"],
          ["A concert, dance or activity together", "niki"],
          ["A creative day with music and conversation", "heeseung"]
        ]
      },
      {
        q: "When you like someone, you usually...",
        options: [
          ["Stay calm and slowly get closer", "jungwon"],
          ["Show it through practical little things", "jay"],
          ["Make them laugh and keep things easy", "jake"],
          ["Act composed even when you're nervous", "sunghoon"],
          ["Give obvious cute hints", "sunoo"],
          ["Challenge them and tease them", "niki"],
          ["Connect through shared interests", "heeseung"]
        ]
      },
      {
        q: "Pick a relationship green flag.",
        options: [
          ["Patient and dependable", "jungwon"],
          ["Protective and thoughtful", "jay"],
          ["Warm and reassuring", "jake"],
          ["Respectful and steady", "sunghoon"],
          ["Affectionate and expressive", "sunoo"],
          ["Playful and energetic", "niki"],
          ["Supportive and creative", "heeseung"]
        ]
      },
      {
        q: "Your perfect weekend is...",
        options: [
          ["A peaceful reset with someone close", "jungwon"],
          ["Good food and a carefully planned day", "jay"],
          ["Going somewhere new", "jake"],
          ["A stylish café + movie night", "sunghoon"],
          ["Shopping, photos and snacks", "sunoo"],
          ["Doing something active", "niki"],
          ["Music, hobbies and late-night talks", "heeseung"]
        ]
      },
      {
        q: "What makes you fall for someone?",
        options: [
          ["Their calm confidence", "jungwon"],
          ["Their effort and loyalty", "jay"],
          ["Their warmth", "jake"],
          ["Their quiet charm", "sunghoon"],
          ["Their bright personality", "sunoo"],
          ["Their passion", "niki"],
          ["Their mind and creativity", "heeseung"]
        ]
      },
      {
        q: "Choose your couple aesthetic.",
        options: [
          ["Soft neutrals + candid photos", "jungwon"],
          ["Black outfits + elegant dinners", "jay"],
          ["Denim + travel snapshots", "jake"],
          ["Winter coats + city nights", "sunghoon"],
          ["Pink details + cute dates", "sunoo"],
          ["Streetwear + chaotic selfies", "niki"],
          ["Headphones + studio nights", "heeseung"]
        ]
      }
    ],
    results: {
      jungwon: {
        name: "JUNGWON", image: "Image/jungwon.jpg", score: 96,
        text: "You matched with Jungwon's calm, dependable relationship energy. Your choices suggest you value patience, consistency and a partner who can be both gentle and quietly confident."
      },
      jay: {
        name: "JAY", image: "Image/jay.jpg", score: 94,
        text: "You matched with Jay's thoughtful, practical energy. You seem drawn to effort, loyalty, good taste and someone who shows care through actions."
      },
      jake: {
        name: "JAKE", image: "Image/jake.jpg", score: 95,
        text: "You matched with Jake's warm, easygoing energy. You want a relationship that feels comfortable, affectionate and full of little adventures."
      },
      sunghoon: {
        name: "SUNGHOON", image: "Image/sunghoon.jpg", score: 97,
        text: "You matched with Sunghoon's composed, elegant energy. Your answers point toward someone who likes quiet chemistry, respect and a little mysterious charm."
      },
      sunoo: {
        name: "SUNOO", image: "Image/sunoo.jpg", score: 95,
        text: "You matched with Sunoo's bright and affectionate energy. You seem to want warmth, expressive affection, fun conversations and a relationship that feels alive."
      },
      niki: {
        name: "NI-KI", image: "Image/niki.jpg", score: 93,
        text: "You matched with Ni-Ki's playful, energetic energy. You probably need someone who keeps you laughing, challenges you and brings movement into your life."
      },
      heeseung: {
        name: "HEESEUNG", image: "Image/heeseung.jpg", score: 94,
        text: "You matched with Heeseung's creative, thoughtful energy. Your choices suggest you value talent, shared interests and conversations that go beyond small talk."
      }
    }
  },

  {
    id: "cortis-boyfriend",
    number: "02",
    title: "Which CORTIS Member Would Fall for You?",
    short: "Find the CORTIS personality vibe your choices click with most.",
    image: "",
    intro: "A playful fan-made compatibility quiz based on public-facing member personas and group content. It is not a claim about anyone's private dating preferences.",
    questions: [
      {
        q: "Your ideal boyfriend energy is...",
        options: [
          ["Creative + leader-like", "martin"],
          ["Cool + confident", "james"],
          ["Warm + dependable", "juhoon"],
          ["Quiet + thoughtful", "seonghyeon"],
          ["Playful + energetic", "keonho"]
        ]
      },
      {
        q: "Pick a first-date plan.",
        options: [
          ["Create something together", "martin"],
          ["Explore a cool new place", "james"],
          ["Food + a long conversation", "juhoon"],
          ["Museum, bookstore or café", "seonghyeon"],
          ["Arcade or something chaotic", "keonho"]
        ]
      },
      {
        q: "What wins you over?",
        options: [
          ["Ambition", "martin"],
          ["Confidence", "james"],
          ["Reliability", "juhoon"],
          ["Quiet intelligence", "seonghyeon"],
          ["Humor", "keonho"]
        ]
      },
      {
        q: "Your texting style?",
        options: [
          ["Ideas, links and random thoughts", "martin"],
          ["Short but confident replies", "james"],
          ["Checking in and making plans", "juhoon"],
          ["Long replies when the topic is interesting", "seonghyeon"],
          ["Memes. Mostly memes.", "keonho"]
        ]
      },
      {
        q: "Pick your couple aesthetic.",
        options: [
          ["Creative studio dates", "martin"],
          ["City nights", "james"],
          ["Cozy everyday romance", "juhoon"],
          ["Quiet café mornings", "seonghyeon"],
          ["Best-friends-to-lovers chaos", "keonho"]
        ]
      }
    ],
    results: {
      martin: {name:"MARTIN", image:"", score:96, text:"Your choices clicked with Martin's creative, driven vibe. You seem attracted to ambition, ideas and someone who has a strong sense of direction."},
      james: {name:"JAMES", image:"", score:95, text:"You matched with James' cool, confident vibe. You like someone with presence, self-assurance and a little edge."},
      juhoon: {name:"JUHOON", image:"", score:97, text:"You matched with Juhoon's warm, dependable vibe. You value consistency, genuine care and a relationship that feels safe but never boring."},
      seonghyeon: {name:"SEONGHYEON", image:"", score:94, text:"You matched with Seonghyeon's quieter, thoughtful vibe. Your choices suggest you love depth, subtle chemistry and meaningful conversations."},
      keonho: {name:"KEONHO", image:"", score:96, text:"You matched with Keonho's playful energy. You need someone who can turn an ordinary day into a story worth retelling."}
    }
  },

  {
    id: "sunghoon-date",
    number: "03",
    title: "Would Sunghoon Date You? Are You His Type?",
    short: "A playful compatibility test inspired by public-facing traits. No crystal ball required.",
    image: "Image/sunghoon.jpg",
    intro: "This is entertainment, not a factual prediction of Sunghoon's private preferences. We use broad public-facing traits and your answers to create a fictional compatibility result.",
    questions: [
      {
        q: "Your strongest relationship trait is...",
        options: [
          ["I stay calm under pressure", "calm"],
          ["I am affectionate and expressive", "warm"],
          ["I am independent", "independent"],
          ["I am playful once I am comfortable", "playful"],
          ["I am loyal and consistent", "loyal"]
        ]
      },
      {
        q: "Someone you like is being quiet. You...",
        options: [
          ["Give them space without making it weird", "calm"],
          ["Gently check if they're okay", "warm"],
          ["Keep doing your own thing", "independent"],
          ["Send a silly message to make them smile", "playful"],
          ["Stay nearby and let them know you're there", "loyal"]
        ]
      },
      {
        q: "Pick a date vibe.",
        options: [
          ["Elegant dinner + city lights", "calm"],
          ["Dessert café + cute photos", "warm"],
          ["Solo-friendly activity together", "independent"],
          ["Ice skating + playful competition", "playful"],
          ["Movie night + comfort food", "loyal"]
        ]
      },
      {
        q: "Your biggest green flag?",
        options: [
          ["I don't create unnecessary drama", "calm"],
          ["I communicate affection", "warm"],
          ["I have my own goals", "independent"],
          ["I can make someone laugh", "playful"],
          ["I show up consistently", "loyal"]
        ]
      },
      {
        q: "Pick the energy you bring into a relationship.",
        options: [
          ["Quiet confidence", "calm"],
          ["Soft warmth", "warm"],
          ["Strong individuality", "independent"],
          ["Fun and spontaneity", "playful"],
          ["Steady comfort", "loyal"]
        ]
      },
      {
        q: "Your ideal relationship feels...",
        options: [
          ["Peaceful and mature", "calm"],
          ["Sweet and affectionate", "warm"],
          ["Independent but close", "independent"],
          ["Like best friends who flirt", "playful"],
          ["Stable and deeply trusting", "loyal"]
        ]
      }
    ],
    results: {
      calm: {name:"THE QUIET CHEMISTRY", image:"", score:96, text:"Your answers fit a composed, low-drama relationship style. In this fictional compatibility test, your strongest match is calm chemistry: comfortable silence, mutual respect and understated flirting."},
      warm: {name:"THE SOFT MATCH", image:"", score:91, text:"You're the warm type. Your affection is obvious in the best way, and your ideal relationship has reassurance, sweetness and plenty of little moments."},
      independent: {name:"THE COOL MATCH", image:"", score:94, text:"You're independent without being distant. Your result suggests the strongest chemistry would come from two people who have their own lives but genuinely choose each other."},
      playful: {name:"THE FLIRTY MATCH", image:"", score:93, text:"You bring playful energy. Your fictional match thrives on teasing, inside jokes and turning ordinary moments into something fun."},
      loyal: {name:"THE STEADY MATCH", image:"", score:98, text:"Loyalty is your superpower. Your result points toward a relationship built around trust, consistency and knowing someone has your back."}
    }
  },

  {
    id: "katseye-vibe",
    number: "04",
    title: "Which KATSEYE Member Matches Your Vibe?",
    short: "Find the KATSEYE energy that fits your personality and aesthetic.",
    image: "",
    intro: "A fan-made vibe quiz using broad public-facing characteristics and group content. It is not an identity claim about the members.",
    questions: [
      {
        q: "Your main-character energy is...",
        options: [
          ["Confident and polished", "daniela"],
          ["Warm and approachable", "lara"],
          ["Quietly cool", "manon"],
          ["Playful and bold", "sophia"],
          ["Creative and expressive", "megan"],
          ["Elegant and focused", "yoonchae"]
        ]
      },
      {
        q: "Pick your dream weekend.",
        options: [
          ["Dance, friends and getting dressed up", "daniela"],
          ["A cozy hangout with people I love", "lara"],
          ["City exploring with a killer outfit", "manon"],
          ["Trying something new with friends", "sophia"],
          ["Making art/content and taking photos", "megan"],
          ["Quiet reset + practicing a skill", "yoonchae"]
        ]
      },
      {
        q: "Choose an outfit vibe.",
        options: [
          ["Glam + statement pieces", "daniela"],
          ["Soft + effortless", "lara"],
          ["Model-off-duty", "manon"],
          ["Sporty + fun", "sophia"],
          ["Experimental + artsy", "megan"],
          ["Clean + elegant", "yoonchae"]
        ]
      },
      {
        q: "What do people notice first?",
        options: [
          ["My confidence", "daniela"],
          ["My friendliness", "lara"],
          ["My aura", "manon"],
          ["My energy", "sophia"],
          ["My creativity", "megan"],
          ["My calmness", "yoonchae"]
        ]
      },
      {
        q: "Your dream social media feed is...",
        options: [
          ["Glam edits + performance clips", "daniela"],
          ["Friends + soft lifestyle moments", "lara"],
          ["Fashion + cinematic photos", "manon"],
          ["Funny videos + adventures", "sophia"],
          ["Art, moodboards and unusual finds", "megan"],
          ["Minimal photos + polished details", "yoonchae"]
        ]
      }
    ],
    results: {
      daniela: {name:"DANIELA", image:"", score:97, text:"You give confident, expressive and performance-ready energy. You probably walk into a room with your own soundtrack playing."},
      larax: {name:"LARA", image:"", score:95, text:"Your vibe is warm, easygoing and naturally magnetic. You make people feel comfortable while still having your own style."},
      manon: {name:"MANON", image:"", score:96, text:"You give cool, composed and effortlessly stylish energy. Your aesthetic does not need to shout to be noticed."},
      sophia: {name:"SOPHIA", image:"", score:94, text:"You bring playful confidence and social energy. You seem like the friend who can turn a normal plan into an entire event."},
      meyla: {name:"MEGAN", image:"", score:93, text:"Your vibe is creative, expressive and a little unpredictable. You like having your own point of view rather than following the template."},
      yoonchae: {name:"YOONCHAE", image:"", score:95, text:"You give a polished, focused and quietly elegant vibe. Your energy feels thoughtful, composed and intentional."}
    }
  },

  {
    id: "enhypen-type",
    number: "05",
    title: "Which ENHYPEN Member's Type Are You?",
    short: "See which ENHYPEN personality style best fits your answers.",
    image: "Image/Enhypen.jpg",
    intro: "This is a fan-made entertainment quiz. It does not claim to know or reproduce any member's private ideal type.",
    questions: [
      {
        q: "Which quality describes you best?",
        options: [
          ["Calm and sincere", "jungwon"],
          ["Independent and passionate", "jay"],
          ["Friendly and positive", "jake"],
          ["Composed and elegant", "sunghoon"],
          ["Bright and expressive", "sunoo"],
          ["Confident and energetic", "niki"],
          ["Creative and thoughtful", "heeseung"]
        ]
      },
      {
        q: "What do you bring to a relationship?",
        options: [
          ["Stability", "jungwon"],
          ["Effort", "jay"],
          ["Warmth", "jake"],
          ["Maturity", "sunghoon"],
          ["Affection", "sunoo"],
          ["Excitement", "niki"],
          ["Understanding", "heeseung"]
        ]
      },
      {
        q: "Choose a compliment you'd secretly love.",
        options: [
          ["You're so reassuring.", "jungwon"],
          ["You know exactly what you want.", "jay"],
          ["You're so easy to be around.", "jake"],
          ["You have such an aura.", "sunghoon"],
          ["You make everything brighter.", "sunoo"],
          ["You're seriously cool.", "niki"],
          ["You're fascinating to talk to.", "heeseung"]
        ]
      },
      {
        q: "Your relationship red flag?",
        options: [
          ["Overthinking", "jungwon"],
          ["Being too stubborn", "jay"],
          ["Avoiding difficult conversations", "jake"],
          ["Hiding feelings", "sunghoon"],
          ["Taking things personally", "sunoo"],
          ["Getting bored easily", "niki"],
          ["Overanalyzing everything", "heeseung"]
        ]
      },
      {
        q: "Pick the kind of person you naturally notice.",
        options: [
          ["Kind and grounded", "jungwon"],
          ["Ambitious and capable", "jay"],
          ["Warm and genuine", "jake"],
          ["Stylish and composed", "sunghoon"],
          ["Expressive and fun", "sunoo"],
          ["Passionate and confident", "niki"],
          ["Smart and creative", "heeseung"]
        ]
      }
    ],
    results: {
      jungwon: {name:"JUNGWON'S TYPE", image:"Image/jungwon.jpg", score:96, text:"Your answers lean toward sincerity, stability and quiet confidence. In this fan-made quiz, that puts you closest to a personality style associated with grounded, dependable chemistry."},
      jay: {name:"JAY'S TYPE", image:"Image/jay.jpg", score:94, text:"You're independent, passionate and action-oriented. Your strongest compatibility vibe is someone who values effort, loyalty and people with their own goals."},
      jake: {name:"JAKE'S TYPE", image:"Image/jake.jpg", score:95, text:"You give warm, friendly and genuine energy. Your result suggests your biggest strength is making a relationship feel comfortable and natural."},
      sunghoon: {name:"SUNGHOON'S TYPE", Image:"image/sunghoon.jpg", score:97, text:"You give composed, elegant and slightly mysterious energy. Your answers suggest you value subtle chemistry, confidence and mutual respect."},
      sunoo: {name:"SUNOO'S TYPE", image:"Image/sunoo.jpg", score:96, text:"You're expressive, affectionate and bright. Your result points toward chemistry built on communication, warmth and making each other feel seen."},
      niki: {name:"NI-KI'S TYPE", image:"Image/niki.jpg", score:93, text:"You're energetic, confident and passionate. Your strongest match is someone who enjoys playful competition, movement and a little chaos."},
      heeseung: {name:"HEESEUNG'S TYPE", Image:"image/heeseung.jpg", score:95, text:"You're thoughtful, creative and interesting to talk to. Your result suggests your strongest quality is having depth beyond first impressions."}
    }
  }
];

let currentQuiz = null;
let currentQuestion = 0;
let answers = [];

function safeImage(image, alt) {
  if (!image) {
    return `<div class="image-placeholder">♡ IMAGE SPACE<br><small>${alt}</small></div>`;
  }
  return `<img src="${image}" alt="${alt}" loading="lazy">`;
}

function showHome() {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("home").classList.add("active");
  window.scrollTo({top:0, behavior:"smooth"});
}

function renderHome() {
  const grid = document.getElementById("quizGrid");
  grid.innerHTML = quizzes.map(q => `
    <article class="quiz-card" onclick="startQuiz('${q.id}')">
      <div class="card-image">${safeImage(q.image, q.title)}</div>
  
