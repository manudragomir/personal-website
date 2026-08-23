export const applicationFormUrl = "https://forms.gle/49axBpkCWSAMGNk56";
export const contactEmail = "dragomir.manualex@gmail.com";
export const mateiPopLinkedInUrl = "https://www.linkedin.com/in/matei-pop-a309602b2/";
export const iulianNistorLinkedInUrl = "https://www.linkedin.com/in/nistor-iulian-a81190370/";
export const danielBenceMukLinkedInUrl = "https://www.linkedin.com/in/daniel-bence-muk-922b452b9/";
export const emiliaSerbanLinkedInUrl = "https://www.linkedin.com/in/emilia-serban-634387350/";
export const razvanStanLinkedInUrl = "https://www.linkedin.com/in/razvan-andrei-stan-733689402/";
export const ianStefanCazacuLinkedInUrl = "https://www.linkedin.com/in/ian-stefan-cazacu-9b20aa366/";

export type StudentItem = {
  href?: string;
  label: string;
  results?: string[];
};

export type OverviewPoint = string | { text?: string; items: StudentItem[] };

export const hero = {
  title: "AI Olympiad Lab",
  subtitle: "Introducere în universul AI și pregătire pentru Olimpiada de Inteligență Artificială"
};

export const heroFacts: { label: string; tone: "sky" | "emerald" | "amber" | "rose" | "teal" | "violet"; href?: string }[] = [
  { label: "Cluj-Napoca", tone: "sky" },
  { label: "Septembrie 2026 – Mai 2027", tone: "emerald" },
  { label: "2 h 30 min / săptămână", tone: "amber" },
  { label: "600 lei / lună", tone: "rose" },
  { label: "Prima lecție gratuită", tone: "teal" },
  { label: "Burse disponibile", tone: "violet", href: "#burse" }
];

export const overviewSections: {
  title: string;
  text?: string;
  points?: OverviewPoint[];
  note?: string;
  link?: { href: string; label: string };
  linkBelow?: boolean;
}[] = [
  {
    title: "Ce este AI Olympiad Lab?",
    text: "Un program gândit pentru introducerea elevilor de liceu în universul AI-ului, oferind o pregătire structurată pentru Olimpiada de Inteligență Artificială.",
    points: [
      "Grupă de cel mult 15 elevi",
      "Format fizic",
      "Întâlniri săptămânale în Cluj-Napoca"
    ]
  },
  {
    title: "Cine coordonează?",
    text: "Programul este coordonat de Manu Dragomir, Machine Learning Engineer și doctorand în AI la UBB, cu experiență în pregătirea elevilor pentru Olimpiada de Inteligență Artificială.",
    link: { href: "/", label: "Despre mine →" },
    linkBelow: true
  },
  {
    title: "Cui se adresează?",
    points: [
      "Elevilor de liceu care sunt fascinați de AI și sunt curioși să afle cum funcționează",
      "Elevilor care caută un mediu de învățare și pregătire pentru Olimpiada de Inteligență Artificială"
    ]
  },
  {
    title: "Ce își propune programul?",
    points: [
      "Să dezvolte intuiții care să faciliteze înțelegerea AI-ului în profunzime — nu doar folosirea oarbă a unor modele",
      "Să creeze o comunitate de elevi pasionați de AI, care ulterior să colaboreze în cercetare sau să fondeze împreună startup-uri"
    ]
  },
  {
    title: "Experiență și rezultate",
    text: "Am pregătit elevi pentru Olimpiada de Inteligență Artificială în cadrul Centrului Județean de Excelență Cluj. Au participat la etapele naționale din 2025 și 2026 și la etape internaționale în 2026, unde au obținut mai multe medalii.",
    points: [
      {
        items: [
          {
            href: danielBenceMukLinkedInUrl,
            label: "Bence-Muk Daniel",
            results: [
              "ONIA 2026 — argint + lot național",
              "IOAI 2026 — bronz"
            ]
          },
          {
            href: iulianNistorLinkedInUrl,
            label: "Nistor Iulian",
            results: [
              "ONIA 2025 — bronz",
              "ONIA 2026 — bronz + lot național",
              "ROAI 2026 — bronz",
              "CEOAI 2026 — argint",
              "IOAI 2026 — bronz"
            ]
          },
          {
            href: mateiPopLinkedInUrl,
            label: "Pop Matei",
            results: [
              "ONIA 2025 — participare",
              "ONIA 2026 — bronz + lot național",
              "ROAI 2026 — aur",
              "IOAI 2026 — bronz"
            ]
          },
          {
            href: razvanStanLinkedInUrl,
            label: "Stan Razvan",
            results: ["ONIA 2026 — participare"]
          },
          {
            href: emiliaSerbanLinkedInUrl,
            label: "Șerban Emilia",
            results: ["ONIA 2026 — bronz"]
          },
          {
            href: ianStefanCazacuLinkedInUrl,
            label: "Ștefan-Cazacu Ian",
            results: ["ONIA 2025 — bronz", "ONIA 2026 — participare", "ROAI 2026 — bronz"]
          }
        ]
      }
    ]
  },
  {
    title: "Unde și când se desfășoară?",
    points: [
      "Cluj: regim fizic (locația urmează a fi stabilită)",
      "Începe la finalul lunii septembrie și se desfășoară până în luna mai"
    ],
    note: "Ziua și ora exactă a întâlnirii săptămânale urmează să fie stabilite."
  },
  {
    title: "Cum se desfășoară?",
    points: [
      "Lecții săptămânale de 2h30m",
      "Cursuri teoretice + Aplicații practice",
      "Teme și probleme cu feedback individual"
    ]
  },
  {
    title: "Cât costă?",
    text: "600 de lei pe lună. Există",
    link: { href: "#burse", label: "burse disponibile" },
    note: "Prima lecție este gratuită."
  }
];

export const scholarships = {
  social: {
    title: "Bursa Socială",
    purpose:
      "Bursa are ca scop facilitarea accesului la program pentru un elev de liceu care se află într-o situație socio-economică vulnerabilă.",
    coverage: "Bursa acoperă integral costul participării la program.",
    principle:
      "Punctajul final se calculează în proporție de 75% pe baza situației socio-economice și 25% pe baza performanței școlare anterioare.",
    criteria: [
      "venitul net lunar mediu pe membru de familie",
      "decesul unuia sau al ambilor părinți",
      "apartenența la o familie monoparentală cu probleme financiare",
      "situația de plasament",
      "numărul persoanelor aflate în întreținerea familiei"
    ],
    academicCriteria: [
      "rezultatele școlare anterioare foarte bune",
      "participările la olimpiade și concursuri"
    ],
    award:
      "Bursa va fi acordată candidatului care obține cel mai mare punctaj conform unei grile comunicate candidaților. În cazul egalității de punctaj, prioritate va avea candidatul cu venitul net lunar mediu pe membru de familie cel mai redus.",
    confidentiality:
      "Informațiile și documentele privind situația familială și financiară sunt confidențiale și vor fi utilizate exclusiv în scopul evaluării eligibilității pentru bursă."
  },
  involvement: {
    title: "Bursa de Implicare",
    coverage:
      "În fiecare lună, un elev din cadrul programului poate beneficia de Bursa de Implicare, în valoare de 600 lei, reprezentând echivalentul integral al taxei de participare pentru luna respectivă.",
    principle:
      "Bursa recompensează implicarea constantă în procesul de învățare, nu nivelul inițial de pregătire sau rezultatele obținute la concursuri.",
    criteria: [
      "participarea activă la întâlnirile săptămânale",
      "rezolvarea constantă a temelor și problemelor propuse",
      "efortul și progresul demonstrat pe parcursul lunii",
      "inițiativa: întrebări, explorarea unor soluții alternative și aprofundarea subiectelor",
      "contribuția pozitivă la activitatea grupei și disponibilitatea de a-i ajuta pe ceilalți"
    ],
    note: "Bursa nu este condiționată de obținerea celui mai mare punctaj, de existența unor rezultate anterioare la olimpiade sau de nivelul inițial al elevului.",
    award:
      "La finalul fiecărei luni, profesorul desemnează beneficiarul Bursei de Implicare, iar taxa achitată pentru luna respectivă, în valoare de 600 lei, este restituită integral."
  }
};

export const topics = [
  "Python pentru ML",
  "Matematică relevantă pentru AI",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Natural Language Processing",
  "Probleme de la olimpiadele de AI din anii anteriori"
];

export const outcomes = {
  intro: "La finalul programului, elevii vor putea:",
  points: [
    "să implementeze și să antreneze modele de Machine Learning",
    "să înțeleagă conceptele matematice din spatele algoritmilor studiați",
    "să lucreze cu NumPy, scikit-learn și PyTorch",
    "să construiască modele simple de Deep Learning",
    "să abordeze probleme de NLP și Computer Vision",
    "să rezolve structurat probleme de tip Olimpiada de AI"
  ]
};

export const howToApply = {
  steps: [
    "Completează formularul de înscriere (butonul Aplică de pe pagină).",
    "Termen limită: 20 septembrie 2026.",
    "Te voi contacta pe email cu pașii următori.",
    "Prima lecție este gratuită — o poți folosi ca să vezi dacă ți se potrivește programul."
  ],
  scholarshipNote:
    "Pentru Bursa Socială, aplici inițial prin același formular. Documentele justificative le vei trimite ulterior, când comunic grila de evaluare."
};

export const faq: {
  question: string;
  answer: string;
  link?: { href: string; label: string };
}[] = [
  {
    question: "Ce nivel este necesar?",
    answer:
      "Nu este necesară experiență anterioară în AI sau ML. Este util să ai deja ceva familiaritate cu programarea în orice limbaj (C/C++ etc.)."
  },
  {
    question: "Pot participa dacă nu am mai făcut Python?",
    answer:
      "Da. Primele săptămâni sunt rezervate pentru a învăța Python, gândite special pentru elevii care nu l-au folosit înainte. Ajută să ai deja noțiuni de bază de programare în orice limbaj pentru a înțelege mai ușor conceptele."
  },
  {
    question: "Pot participa dacă nu vreau neapărat la olimpiadă?",
    answer:
      "Da. Programul este o introducere în AI pentru liceeni. Pregătirea pentru olimpiadă e un obiectiv, nu o condiție: poți veni ca să înțelegi cum funcționează AI-ul, chiar dacă nu urmărești competiția."
  },
  {
    question: "Ce se întâmplă dacă lipsesc de la o întâlnire?",
    answer:
      "Poți recupera din materiale și din temele săptămânii. E important să anunți din timp și să revii la curent până la următoarea lecție — grupa e mică, iar prezența constantă contează."
  },
  {
    question: "Este necesar laptop?",
    answer: "Da, elevii trebuie să aducă un laptop la întâlnirile săptămânale."
  },
  {
    question: "Cum aplic pentru Bursa Socială?",
    answer:
      "Aplicația se face tot prin formularul de pe pagină. Documentele justificative vor fi cerute ulterior, atunci când va fi comunicată și grila de evaluare."
  },
  {
    question: "Unde pot cere mai multe informații?",
    answer: "Pentru mai multe informații, scrie-mi un email la adresa",
    link: { href: `mailto:${contactEmail}`, label: contactEmail }
  }
];

export const curriculum: { week: number; title: string }[] = [
  { week: 1, title: "Introduction to Machine Learning" },
  { week: 2, title: "Python Crash Course I: Basic syntax, variables, data types, and operators." },
  { week: 3, title: "Python Crash Course II: Conditional statements, loops, and functions." },
  { week: 4, title: "Python Crash Course III: Strings, lists and dictionaries." },
  { week: 5, title: "Python Crash Course IV: Tuples, sets, and file handling." },
  { week: 6, title: "Introduction to Vectors. Understanding Data as points in space (CSV, Plots, Numpy)" },
  { week: 7, title: "Classification I: train your first model - k Nearest Neighbors." },
  { week: 8, title: "Classification II: Decision Trees." },
  { week: 9, title: "Classification III: Random Forest + Feature Engineering." },
  { week: 10, title: "Classification IV: Boosting models: XGBoost, LightGBM, CatBoost." },
  { week: 11, title: "Recap Classification. Examples. Applications. Problems." },
  { week: 12, title: "Linear Regression." },
  { week: 13, title: "Gradient Descent I. Math intuition and gradient descent implementation." },
  { week: 14, title: "Gradient Descent II." },
  { week: 15, title: "Logistic Regression." },
  { week: 16, title: "Regression practical problems." },
  { week: 17, title: "Clustering. Dimensionality Reduction (UMAP, PCA, t-SNE)." },
  { week: 18, title: "Introduction to NLP. Tokenization, stop words, stemming, lemmatization." },
  { week: 19, title: "Word embeddings. Probabilistic models." },
  { week: 20, title: "NLP practical problems." },
  { week: 21, title: "Introduction to Neural Networks. Perceptron." },
  { week: 22, title: "Backpropagation I: More on Math and Calculus" },
  { week: 23, title: "Backpropagation II: Babysitting a neural network" },
  { week: 24, title: "Computer Vision with Torch" },
  { week: 25, title: "Recap. Examples. Applications. Problems." }
];
