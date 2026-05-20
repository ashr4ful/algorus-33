const IC = m => `
  <a href="${String(m?.fb || '').startsWith('http') ? m?.fb : 'https://' + m?.fb}"
     target="_blank"
     rel="noopener noreferrer"
     class="sb fb ${m?.fb?.trim() !== '' ? '' : 'disabled-link'}"
     aria-label="Facebook">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  </a>

  <a href="https://codeforces.com/profile/${String(m?.cf || '').trim()}"
     target="_blank"
     rel="noopener noreferrer"
     class="sb cf ${m?.cf?.trim() !== '' ? '' : 'disabled-link'}"
     aria-label="Codeforces">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5V9A1.5 1.5 0 0 1 1.5 7.5h3zm7.5-6A1.5 1.5 0 0 1 13.5 3v16.5A1.5 1.5 0 0 1 12 21H9a1.5 1.5 0 0 1-1.5-1.5V3A1.5 1.5 0 0 1 9 1.5h3zm7.5 9A1.5 1.5 0 0 1 21 12v7.5A1.5 1.5 0 0 1 19.5 21h-3A1.5 1.5 0 0 1 15 19.5V12a1.5 1.5 0 0 1 1.5-1.5h3z"/>
    </svg>
  </a>

  <a href="${String(m?.linkedin || '').startsWith('http') ? m?.linkedin : 'https://' + m?.linkedin}"
     target="_blank"
     rel="noopener noreferrer"
     class="sb li ${m?.linkedin?.trim() !== '' ? '' : 'disabled-link'}"
     aria-label="LinkedIn">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  </a>

  <a href="https://github.com/${String(m?.github || '').trim()}"
     target="_blank"
     rel="noopener noreferrer"
     class="sb gh ${m?.github?.trim() !== '' ? '' : 'disabled-link'}"
     aria-label="GitHub">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  </a>
`;
// ── MEMBERS DATA ──
// fields: n=name, id=studentID, foi=fields of interest[], t=filterTag, i=initials, g=gradient colors
let M = [
  {
    "n": "MD. IMRAN ALI",
    "ht": "RANGPUR",
    "hall": "Nawab Abdul Latif Hall",
    "s": "m",
    "photo": "",
    "id": "2510376101",
    "foi": [
      "AI & ML",
      "Cybersecurity"
    ],
    "t": "AI & ML",
    "i": "M",
    "fb": "facebook.com/dekha.hobe.abar.konodin",
    "linkedin": "",
    "cf": "",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "SAMIO AWAL USNO ",
    "ht": "",
    "hall": "Shahid Ziaur Rahman Hall",
    "s": "m",
    "photo": "images/members/2511076102.jpg",
    "id": "2511076102",
    "foi": [
      "AI & ML",
      "Data Science"
    ],
    "t": "AI & ML",
    "i": "S",
    "fb": "https://www.facebook.com/share/1Az1mgdLh7/",
    "linkedin": "https://www.linkedin.com/in/samio-awal-usno-b29416243?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "cf": "https://codeforces.com/profile/sam_usno33",
    "github": "https://github.com/samiousno02",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MD. SANJID OMAR YASIR CHOWDHURY",
    "ht": "DHAKA",
    "hall": "Shahid Habibur Rahman Hall",
    "s": "m",
    "photo": "images/members/2510676103.jpg",
    "id": "2510676103",
    "foi": [
      "AI & ML"
    ],
    "t": "AI & ML",
    "i": "M",
    "fb": "https://www.facebook.com/msoyc.msoyc",
    "linkedin": "https://www.linkedin.com/in/omar-yasir-754a27307?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "cf": "Ya_S_iR",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "AKHLASUR RAHMAN ",
    "ht": "JAMALPUR ",
    "hall": "Shahid Shamsuzzoha Hall",
    "s": "m",
    "photo": "images/members/2510576104.jpg",
    "id": "2510576104",
    "foi": [],
    "t": "",
    "i": "A",
    "fb": "https://www.facebook.com/share/1CcyzvWPQ8/",
    "linkedin": "",
    "cf": "",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "NIPUN BISWAS",
    "ht": "MAGURA",
    "hall": "Shahid Ziaur Rahman Hall",
    "s": "m",
    "photo": "images/members/2511076105.jpg",
    "id": "2511076105",
    "foi": [
      "CP & DSA"
    ],
    "t": "CP & DSA",
    "i": "N",
    "fb": "https://www.facebook.com/share/1ano1LAMEB/",
    "linkedin": "",
    "cf": "nipunbiswas1",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "FAHIMA ISHRAT MUKTI ",
    "ht": "PABNA",
    "hall": "Tapashi Rabeya Hall",
    "s": "f",
    "photo": "",
    "id": "2512276106",
    "foi": [
      "Web Dev"
    ],
    "t": "Web Dev",
    "i": "F",
    "fb": "https://www.facebook.com/fahima.ishrat.2025",
    "linkedin": "",
    "cf": "",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "HAMMAD AL HOSSAIN ",
    "ht": "CHATTOGRAM ",
    "hall": "Huseyn Shaheed Suhrawardy Hall",
    "s": "m",
    "photo": "images/members/2510976107.jpg",
    "id": "2510976107",
    "foi": [
      "Data Science",
      "Cybersecurity"
    ],
    "t": "Data Science",
    "i": "H",
    "fb": "https://www.facebook.com/share/18yVo9VFTY/",
    "linkedin": "https://www.linkedin.com/in/hammad-al-hossain-752b92389?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "cf": "2510976107reinhard ",
    "github": "https://github.com/s2510976107-oss",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MD. TAHSIN FUAD NABIL ",
    "ht": "NARAYANGANJ ",
    "hall": "Huseyn Shaheed Suhrawardy Hall",
    "s": "m",
    "photo": "",
    "id": "2510976109",
    "foi": [
      "AI & ML",
      "CP & DSA"
    ],
    "t": "AI & ML",
    "i": "M",
    "fb": "https://www.facebook.com/tahsin.nabil.7",
    "linkedin": "",
    "cf": "Nabil_2510976109",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MD ROHAN ROHMAN ",
    "ht": "KUSHTIA ",
    "hall": "Shahid Ziaur Rahman Hall",
    "s": "m",
    "photo": "",
    "id": "2511076110",
    "foi": [
      "App Dev",
      "Game Dev"
    ],
    "t": "App Dev",
    "i": "M",
    "fb": "https://www.facebook.com/share/18hZyjoCjo/",
    "linkedin": "",
    "cf": "",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MD.ROHAN ALI",
    "ht": "KUSHTIA",
    "hall": "Matihar Hall",
    "s": "m",
    "photo": "images/members/2510776111.jpg",
    "id": "2510776111",
    "foi": [
      "Web Dev",
      "CP & DSA"
    ],
    "t": "Web Dev",
    "i": "M",
    "fb": "https://www.facebook.com/share/1L2tE3hxve/",
    "linkedin": "",
    "cf": "rohan_35",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "SOHANUR RAHMAN SOHAN ",
    "ht": "CUMILLA ",
    "hall": "Shahid Habibur Rahman Hall",
    "s": "m",
    "photo": "",
    "id": "2510676112",
    "foi": [],
    "t": "",
    "i": "S",
    "fb": "https://www.facebook.com/profile.php?id=100080508649791",
    "linkedin": "",
    "cf": "",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MD. SULAIMAN ",
    "ht": "JAMALPUR ",
    "hall": "Matihar Hall",
    "s": "m",
    "photo": "",
    "id": "2510776114",
    "foi": [],
    "t": "",
    "i": "M",
    "fb": "https://www.facebook.com/mdsolaiman.solaiman.58958",
    "linkedin": "",
    "cf": "",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "RUHI AKHTER ",
    "ht": "NOAGAON",
    "hall": "Rahamatunnesa Hall",
    "s": "f",
    "photo": "",
    "id": "2512476116",
    "foi": [],
    "t": "",
    "i": "R",
    "fb": "https://www.facebook.com/ruhi.kabir.2024?mibextid=ZbWKwL",
    "linkedin": "",
    "cf": "2512476116",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "GAZI MANZURUL MAOLA",
    "ht": "NOAKHALI",
    "hall": "Syed Ameer Ali Hall",
    "s": "m",
    "photo": "",
    "id": "2510476117",
    "foi": [
      "Cybersecurity"
    ],
    "t": "Cybersecurity",
    "i": "G",
    "fb": "https://www.facebook.com/share/1D7kraCU2v/",
    "linkedin": "",
    "cf": "",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MOMEN SIDDIKY MILON",
    "ht": "TANGAIL",
    "hall": "Syed Ameer Ali Hall",
    "s": "m",
    "photo": "images/members/2510476118.jpg",
    "id": "2510476118",
    "foi": [],
    "t": "",
    "i": "M",
    "fb": "https://www.facebook.com/MominSiddikyMilon",
    "linkedin": "",
    "cf": "",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "ABDULLAH AL MOHIT ",
    "ht": "CUMILLA",
    "hall": "Shahid Habibur Rahman Hall",
    "s": "m",
    "photo": "images/members/2510676119.jpg",
    "id": "2510676119",
    "foi": [
      "AI & ML",
      "Cybersecurity"
    ],
    "t": "AI & ML",
    "i": "A",
    "fb": "https://www.facebook.com/abdullahal.mohit.3956",
    "linkedin": "",
    "cf": "almohit",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MD. JAHID HASAN ",
    "ht": "NAOGAON ",
    "hall": "Syed Ameer Ali Hall",
    "s": "m",
    "photo": "images/members/2510476120.jpg",
    "id": "2510476120",
    "foi": [
      "Web Dev",
      "AI & ML"
    ],
    "t": "Web Dev",
    "i": "M",
    "fb": "https://www.facebook.com/jahid.hasan.613286",
    "linkedin": "",
    "cf": "jahid03",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "SREE NIRNOY KUMAR ROY",
    "ht": "KUSHTIA ",
    "hall": "Shahid Ziaur Rahman Hall",
    "s": "m",
    "photo": "images/members/2511076121.jpg",
    "id": "2511076121",
    "foi": [
      "IoT & Robotics",
      "Game Dev"
    ],
    "t": "IoT & Robotics",
    "i": "S",
    "fb": "https://www.facebook.com/nirnoy.kumar.39",
    "linkedin": "",
    "cf": "Nirnoy_roy",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MD. SHARIFUL ISLAM",
    "ht": "SATKHIRA ",
    "hall": "Huseyn Shaheed Suhrawardy Hall",
    "s": "m",
    "photo": "",
    "id": "2510976122",
    "foi": [
      "Cybersecurity"
    ],
    "t": "Cybersecurity",
    "i": "M",
    "fb": "https://www.facebook.com/md.shariful.islam.181829",
    "linkedin": "",
    "cf": "sharifulislamff2004",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MD NOWSHAD CHOWDHURY",
    "ht": "CHATTOGRAM",
    "hall": "Shahid Habibur Rahman Hall",
    "s": "m",
    "photo": "",
    "id": "2510676123",
    "foi": [
      "CP & DSA"
    ],
    "t": "CP & DSA",
    "i": "M",
    "fb": "https://www.facebook.com/share/1FfyAYnVzS/",
    "linkedin": "",
    "cf": "",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MD. ABDULLAH",
    "ht": "CHANDPUR",
    "hall": "Madar Bux Hall",
    "s": "m",
    "photo": "",
    "id": "2510876124",
    "foi": [
      "CP & DSA"
    ],
    "t": "CP & DSA",
    "i": "M",
    "fb": "https://www.facebook.com/share/1B5mD1eMLA/",
    "linkedin": "",
    "cf": "abdullah_24_25",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "ARGHA PAUL",
    "ht": "CUMILLA",
    "hall": "Shahid Ziaur Rahman Hall",
    "s": "m",
    "photo": "images/members/2511076126.jpg",
    "id": "2511076126",
    "foi": [],
    "t": "",
    "i": "A",
    "fb": "https://www.facebook.com/share/17RboxcHrr/",
    "linkedin": "",
    "cf": "",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "ABDULLAH AL TAHSIN ",
    "ht": "FENI ",
    "hall": "Matihar Hall",
    "s": "m",
    "photo": "",
    "id": "2510776128",
    "foi": [
      "Web Dev",
      "AI & ML"
    ],
    "t": "Web Dev",
    "i": "A",
    "fb": "https://www.facebook.com/tahsin.bappi",
    "linkedin": "",
    "cf": "",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MD. SHAHORIA ISLAM",
    "ht": "BOGURA",
    "hall": "Shahid Ziaur Rahman Hall",
    "s": "m",
    "photo": "",
    "id": "2511076129",
    "foi": [
      "Cybersecurity",
      "CP & DSA"
    ],
    "t": "Cybersecurity",
    "i": "M",
    "fb": "https://www.facebook.com/share/18rWP13cNE/?mibextid=wwXIfr",
    "linkedin": "",
    "cf": "shahoria_25",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MD. AL ZAYED ",
    "ht": "FARIDPUR ",
    "hall": "Shahid Habibur Rahman Hall",
    "s": "m",
    "photo": "images/members/2510676130.jpg",
    "id": "2510676130",
    "foi": [
      "AI & ML",
      "Cybersecurity"
    ],
    "t": "AI & ML",
    "i": "M",
    "fb": "https://www.facebook.com/share/1GcbPZj2nP/",
    "linkedin": "https://www.linkedin.com/in/al-zayed-612a04379",
    "cf": "AL_ZAYED",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MD RIFAT UL ISLAM",
    "ht": "NATORE",
    "hall": "Syed Ameer Ali Hall",
    "s": "m",
    "photo": "",
    "id": "2510476132",
    "foi": [
      "Cybersecurity",
      "Cloud & DevOps"
    ],
    "t": "Cybersecurity",
    "i": "M",
    "fb": "https://www.facebook.com/rifat2510476132",
    "linkedin": "",
    "cf": "mdrifatuli217",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "IMTIAZ AHMED ",
    "ht": "PABNA",
    "hall": "Huseyn Shaheed Suhrawardy Hall",
    "s": "m",
    "photo": "images/members/2510976133.jpg",
    "id": "2510976133",
    "foi": [],
    "t": "",
    "i": "I",
    "fb": "https://www.facebook.com/imtiaz.ahmed.25027",
    "linkedin": "",
    "cf": "",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "SAMEEN YEASAR",
    "ht": "KHULNA",
    "hall": "Shahid Habibur Rahman Hall",
    "s": "m",
    "photo": "images/members/2510676134.jpg",
    "id": "2510676134",
    "foi": [],
    "t": "",
    "i": "S",
    "fb": "https://www.facebook.com/sameenyeasar25",
    "linkedin": "",
    "cf": "sameenyeasar25",
    "github": "github.com/sameenyeasar25",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "ASHRAFUL ISLAM",
    "ht": "CHANDPUR ",
    "hall": "Huseyn Shaheed Suhrawardy Hall",
    "s": "m",
    "photo": "images/members/2510976135.jpg",
    "id": "2510976135",
    "foi": [
      "AI & ML",
      "CP & DSA"
    ],
    "t": "AI & ML",
    "i": "A",
    "fb": "https://www.facebook.com/ashrafulislam.lll",
    "linkedin": "https://www.linkedin.com/in/ashraful-islam-80a8563a1?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "cf": "ashr4ful",
    "github": "ashr4ful ",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MHOMMAD RAFIQ ",
    "ht": "MYMENSINGH",
    "hall": "Shahid Shamsuzzoha Hall",
    "s": "m",
    "photo": "",
    "id": "2510576136",
    "foi": [
      "AI & ML"
    ],
    "t": "AI & ML",
    "i": "M",
    "fb": "https://www.facebook.com/share/17PHNdDXVe/",
    "linkedin": "",
    "cf": "Rafiq-01",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MD SEDRATUL MUNTAHAR ",
    "ht": "DHAKA",
    "hall": "Madar Bux Hall",
    "s": "m",
    "photo": "images/members/2510876137.jpg",
    "id": "2510876137",
    "foi": [
      "Full Stack",
      "AI & ML"
    ],
    "t": "Full Stack",
    "i": "M",
    "fb": "https://www.facebook.com/muntahar.29",
    "linkedin": "https://www.linkedin.com/in/md-sedratul-muntahar-b55262379",
    "cf": "",
    "github": "https://github.com/sedratul-29",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MD. HASIMUZZAMAN (JIM)",
    "ht": "NAOGAON",
    "hall": "Huseyn Shaheed Suhrawardy Hall",
    "s": "m",
    "photo": "",
    "id": "2510976138",
    "foi": [],
    "t": "",
    "i": "M",
    "fb": "https://www.facebook.com/profile.php?id=100051070152665",
    "linkedin": "https://www.linkedin.com/in/md-hasimuzzaman",
    "cf": "_jim_",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MD. MOBAROK HOSSAIN",
    "ht": "KUSHTIA",
    "hall": "Madar Bux Hall",
    "s": "m",
    "photo": "",
    "id": "2510876139",
    "foi": [],
    "t": "",
    "i": "M",
    "fb": "https://www.facebook.com/profile.php?id=100091566908423",
    "linkedin": "",
    "cf": "",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MD. HABIBUL ISLAM",
    "ht": "SATKHIRA",
    "hall": "Matihar Hall",
    "s": "m",
    "photo": "",
    "id": "2510776140",
    "foi": [],
    "t": "",
    "i": "M",
    "fb": "https://www.facebook.com/share/18paM87GzK/",
    "linkedin": "",
    "cf": "",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "RABIUS SUNNY",
    "ht": "NAOGAON",
    "hall": "Nawab Abdul Latif Hall",
    "s": "m",
    "photo": "images/members/2510376141.jpg",
    "id": "2510376141",
    "foi": [
      "AI & ML",
      "CP & DSA"
    ],
    "t": "AI & ML",
    "i": "R",
    "fb": "https://www.facebook.com/Rab1us.5unny",
    "linkedin": "https://www.linkedin.com/in/rabius-sunny-b58582389?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "cf": "R4b1us_5unny",
    "github": "https://github.com/rabiussunny-blank",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "ABDULLAHIL AZME",
    "ht": "RAJSHAHI",
    "hall": "Shahid Habibur Rahman Hall",
    "s": "m",
    "photo": "images/members/2510676142.svg",
    "id": "2510676142",
    "foi": [
      "CP & DSA"
    ],
    "t": "CP & DSA",
    "i": "A",
    "fb": "https://www.facebook.com/abdullahil.azme",
    "linkedin": "www.linkedin.com/in/abdullahil-azme",
    "cf": "A.Azme",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MD. YAKUB ALI",
    "ht": "",
    "hall": "Shahid Habibur Rahman Hall",
    "s": "m",
    "photo": "images/members/2510676143.svg",
    "id": "2510676143",
    "foi": [

    ],
    "t": "",
    "i": "Y",
    "fb": "",
    "linkedin": "",
    "cf": "",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "TOUFICK ALAHI BIPLOB",
    "ht": "THAKURGAON",
    "hall": "Bijoy-24 Hall",
    "s": "m",
    "photo": "images/members/2511276144.jpg",
    "id": "2511276144",
    "foi": [
      "CP & DSA"
    ],
    "t": "CP & DSA",
    "i": "T",
    "fb": "https://www.facebook.com/towfiq.alahi.biplob/directory_links",
    "linkedin": "",
    "cf": "",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "NABILA WASIM ORPY",
    "ht": "MYMENSINGH ",
    "hall": "",
    "s": "f",
    "photo": "",
    "id": "2512076145",
    "foi": [],
    "t": "",
    "i": "N",
    "fb": "https://www.facebook.com/profile.php?id=61579501231059",
    "linkedin": "",
    "cf": "",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MD. SIFAT HASAN NAFI",
    "ht": "NATORE",
    "hall": "Syed Ameer Ali Hall",
    "s": "m",
    "photo": "",
    "id": "2510476146",
    "foi": [],
    "t": "",
    "i": "M",
    "fb": "https://www.facebook.com/moh.siphata.hasana.naphi",
    "linkedin": "",
    "cf": "",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MAHMUDA CHOWDHURY ",
    "ht": "SYLHET ",
    "hall": "Rokeya hall",
    "s": "f",
    "photo": "",
    "id": "2512176147",
    "foi": [
      "AI & ML",
      "Data Science"
    ],
    "t": "AI & ML",
    "i": "M",
    "fb": "https://www.facebook.com/profile.php?id=61578199175951",
    "linkedin": "",
    "cf": "Mihu47 ",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "TARIFUZZAMAN TARIF ",
    "ht": "JASHORE",
    "hall": "Nawab Abdul Latif",
    "s": "m",
    "photo": "images/members/2510376148.jpg",
    "id": "2510376148",
    "foi": [
      "Web Dev",
      "App Dev"
    ],
    "t": "Web Dev",
    "i": "T",
    "fb": "https://www.facebook.com/share/1CgZurMvpK/",
    "linkedin": "",
    "cf": "Tarif48",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MD HANIF ALI",
    "ht": "MAGURA",
    "hall": "Syed Ameer Ali Hall",
    "s": "m",
    "photo": "images/members/2410476125.jpg",
    "id": "2410476125",
    "foi": [
      "Data Science",
      "CP & DSA"
    ],
    "t": "Data Science",
    "i": "M",
    "fb": "https://www.facebook.com/share/1Pfq2jSWc9/",
    "linkedin": "",
    "cf": "MDHANIF",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "MOSTOFA AL SHAIFE",
    "ht": "JASHORE",
    "hall": "Shahid Shamsuzzoha Hall",
    "s": "m",
    "photo": "images/members/2410576126.svg",
    "id": "2410576126",
    "foi": [
      "AI & ML",
      "CP & DSA"
    ],
    "t": "AI & ML",
    "i": "M",
    "fb": "https://www.facebook.com/share/1DAUTpY3xb/",
    "linkedin": "",
    "cf": "Mostofa_Al_Shaife",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "ABDULLAH ABRAR",
    "ht": "RAJBARI",
    "hall": "Shahid Habibur Rahman Hall",
    "s": "m",
    "photo": "",
    "id": "2410676429",
    "foi": [
      "Web Dev",
      "Cybersecurity"
    ],
    "t": "Web Dev",
    "i": "A",
    "fb": "https://www.facebook.com/abdullah.abrar.778137",
    "linkedin": "",
    "cf": "",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
  {
    "n": "HUMAIYARA REZA ",
    "ht": "GAIBANDHA ",
    "hall": "Begum Khaleda Zia Hall",
    "s": "f",
    "photo": "images/members/2412376146.jpg",
    "id": "2412376146",
    "foi": [],
    "t": "",
    "i": "H",
    "fb": "https://www.facebook.com/share/14fEriZzGx6/",
    "linkedin": "",
    "cf": "",
    "github": "",
    "g": [
      "#0d47a1",
      "#7b1fa2"
    ]
  },
];

const ALL = M.map(html).join('');
const grid = document.getElementById('mg');
const rc = document.getElementById('rc');

function foiTags(foi) { return foi.map(f => `<span class="foi">${f}</span>`).join(''); }

function html(m) {
  // Use <img> when photo path is set, otherwise show gradient + initials
  const avatarContent = m.photo
    ? `<img src="${m.photo}" alt="${m.n}" loading="lazy" onerror="this.parentNode.innerHTML=fallbackInit('${m.i}','${m.g[0]}','${m.g[1]}')">`
    : `<div class="ai-init" style="background:linear-gradient(135deg,${m.g[0]},${m.g[1]})">${m.i}</div>`;
  return `<div class="card" data-t="${m.t}" data-n="${m.n.toLowerCase()}" data-id="${m.id}" data-foi="${m.foi.join(' ').toLowerCase()}">
    <div class="cg"></div>
    <div class="id-tag">#${m.id}</div>
    <div style ="margin-top: .7rem" class="ar">
      <div class="ai">${avatarContent}</div>
    </div>
    <div class="cn2">${m.n}</div>

    ${m.ht ?
      `<div class="hometown">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>${m.ht}</div>` : ''
    }

    <div class="foi-wrap">${foiTags(m.foi)}</div>
    <div class="cd"></div>
    <div class="sc">${IC(m)}</div>
  </div>`;
}

// Fallback if image fails to load
function fallbackInit(initials, c1, c2) {
  return `<div class="ai-init" style="background:linear-gradient(135deg,${c1},${c2})">${initials}</div>`;
}



// IntersectionObserver for card reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target); } });
}, { threshold: .06 });

function mount(frag, count) {
  grid.innerHTML = frag || `<div class="no-res"><div class="nr-icon">🔍</div>No students found matching "<strong>${cs || cf}</strong>"<br><span style="font-size:9px;margin-top:8px;display:block">Try a different name, ID, or interest</span></div>`;
  grid.querySelectorAll('.card').forEach((c, i) => {
    c.style.animationDelay = (Math.min(i, 11) * .05 + .04) + 's';
    io.observe(c);
  });
  rc.innerHTML = count !== undefined ? `Showing <span>${count}</span> of <span>${M.length}</span> students` : '';
}

mount(ALL, M.length);

// ── FILTER ──
let cf = 'all', cs = '';
document.querySelector('.fb2').addEventListener('click', e => {
  const b = e.target.closest('.fbtn'); if (!b) return;
  document.querySelectorAll('.fbtn').forEach(x => x.classList.remove('active'));
  b.classList.add('active'); cf = b.dataset.f; apply();
});

// ── SEARCH (debounced, searches name + ID + field of interest) ──
let tid = 0;
const siEl = document.getElementById('si');
siEl.addEventListener('input', e => {
  clearTimeout(tid);
  tid = setTimeout(() => { cs = e.target.value.toLowerCase().trim(); apply(); }, 120);
});

// Hint chips auto-fill search
document.getElementById('hints')?.addEventListener('click', e => {
  const h = e.target.closest('.hint'); if (!h) return;
  siEl.value = h.dataset.q; cs = h.dataset.q; apply(); siEl.focus();
});

function apply() {

  if (cf === 'all' && !cs) {
    mount(ALL, M.length);
    return;
  }

  const q = cs.toLowerCase().trim();

  const res = M.filter(m => {

    // Match all FOI individually
    const foiMatch = (m.foi || []).some(f =>
      f.toLowerCase().includes(q)
    );

    // Filter button match
    const tagOk =
      cf === 'all' ||
      (m.foi || []).some(f =>
        f.toLowerCase() === cf.toLowerCase()
      ) ||
      (m.t || '').toLowerCase() === cf.toLowerCase();

    // Search match
    const searchOk =
      !q ||

      m.n.toLowerCase().includes(q) ||

      String(m.id).includes(q) ||

      (m.ht || '').toLowerCase().includes(q) ||

      (m.hall || '').toLowerCase().includes(q) ||

      (m.t || '').toLowerCase().includes(q) ||

      foiMatch;

    return tagOk && searchOk;
  });

  mount(res.map(html).join(''), res.length);
}

// ── MEMORIES ──

const MEMS = [
  {
    title: "First Group Photo",
    image: "images/group-photo.jpg",
    date: "31 August, 2025",
    cls: "ph-a mg1",
    label: "📸 Orientation Hall"
  },
  {
    title: "FARHAD HOSSEN Memorial Short pitch cricket tournament 2026",
    image: "images/tournament.jpg",
    date: "1 May, 2026",
    cls: "ph-c mg1",
    label: "🔥 Campus Garden"
  },
];

const memGrid = document.getElementById('memGrid');

const mio = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('vis');
      mio.unobserve(e.target);
    }
  });
}, { threshold: .06 });

memGrid.innerHTML = MEMS.map((m, i) => `
  <div class="mem-card ${m.cls}" style="animation-delay:${i * .07}s">
    
    <div 
      class="mem-img ${m.cls.replace('mg1', '').trim()}"
      style="
        background-image:url('${m.image}');
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;
      "
    >
      <div class="mem-img-inner">
        ${!m.image ?
    '<div class="cam">📷</div><div class="ph-label">${m.label}</div>' : ''
  }
      </div>
    </div>

    <div class="mem-overlay">
      <div class="mem-title">${m.title}</div>
      <div class="mem-date">${m.date}</div>
    </div>

  </div>
`).join('');

memGrid.querySelectorAll('.mem-card').forEach(c => mio.observe(c));

// ── CR DATA ──
const CR = [
  {
    name: "Shamio Awal Usno",
    id: "2511076102",
    role: "Class Representative",
    phone: "+880 1777-965285",
    photo: "./images/cr.jpg",
    bio: "Leading Batch 33 with dedication, bridging the gap between students and faculty since Day 1.",
    i: "U", g: ["#4a148c", "#1565c0"], s: "m",
    foi: ["Networking", "Cloud"]
  }
];

function buildCrCard(m) {
  const avatarContent = m.photo
    ? `<img src="${m.photo}" alt="${m.name}" loading="lazy">`
    : `<div class="ai-init" style="background:linear-gradient(135deg,${m.g[0]},${m.g[1]})">${m.i}</div>`;
  return `<div class="cr-card">
    <div class="cr-glow"></div>
    <div class="cr-badge">👑</div>
    <div class="ar">
      <div class="ai">${avatarContent}</div>
    </div>
    <div class="cr-role-tag">${m.role}</div>
    <div class="cr-name">${m.name}</div>
    <div class="cr-id">#${m.id}</div>
    <div class="cr-bio">${m.bio}</div>
    ${m.phone ? `<a class="cr-phone" href="tel:${m.phone.replace(/\s/g, '')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.94 2 2 0 0 1 3.59 2.77h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 21.73 17.5z"/></svg>${m.phone}</a>` : ''}
    <div class="cr-divider"></div>
    <div class="sc">${IC(m)}</div>
  </div>`;
}

const crGrid = document.getElementById('crGrid');
crGrid.innerHTML = CR.map(buildCrCard).join('');

const crio = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); crio.unobserve(e.target); } });
}, { threshold: .08 });
crGrid.querySelectorAll('.cr-card').forEach((c, i) => {
  c.style.animationDelay = (i * .12) + 's';
  crio.observe(c);
});

// ── NAVLINK SCROLL SPY ──
const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');
const sections = ['hero', 'members', 'cr', 'memories'];
const sectionEls = sections.map(id => document.getElementById(id)).filter(Boolean);

function updateActiveNav() {
  let current = 'hero';
  const scrollY = window.scrollY + 120;
  sectionEls.forEach(el => {
    if (el.offsetTop <= scrollY) current = el.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// Smooth scroll on click
navLinks.forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('navMobile').classList.remove('open');
    }
  });
});

// Burger toggle
document.getElementById('navBurger').addEventListener('click', () => {
  document.getElementById('navMobile').classList.toggle('open');
});

// ── PARTICLES ──
const cv = document.getElementById('pc');
const cx = cv.getContext('2d', { alpha: true });
let W, H, pts = [];
const N = 70, LK = 88, LK2 = LK * LK;
const C = ['rgba(0,229,255,', 'rgba(176,94,255,', 'rgba(79,195,247,', 'rgba(240,98,146,'];
function rz() { W = cv.width = innerWidth; H = cv.height = innerHeight }
let rt = 0;
window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(rz, 160); });
rz();
function mkP() { return { x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22, r: Math.random() * 1.3 + .3, a: Math.random() * .4 + .1, c: C[Math.random() * 4 | 0] }; }
for (let i = 0; i < N; i++)pts.push(mkP());
let running = !document.hidden;
document.addEventListener('visibilitychange', () => { running = !document.hidden; if (running) tick(); });
function tick() {
  cx.clearRect(0, 0, W, H);
  for (let i = 0; i < N; i++) {
    const p = pts[i]; p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) pts[i] = mkP();
    cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.283);
    cx.fillStyle = p.c + p.a + ')'; cx.fill();
  }
  const cols = Math.ceil(W / LK) | 0, rows = Math.ceil(H / LK) | 0, sz = cols * rows;
  const g2 = new Int16Array(sz * 6).fill(-1), cnt = new Uint8Array(sz);
  for (let i = 0; i < N; i++) {
    const gx = Math.min(cols - 1, pts[i].x / LK | 0), gy = Math.min(rows - 1, pts[i].y / LK | 0);
    const ci = gy * cols + gx, k = cnt[ci]; if (k < 6) { g2[ci * 6 + k] = i; cnt[ci]++; }
  }
  for (let gy = 0; gy < rows; gy++)for (let gx = 0; gx < cols; gx++) {
    const base = gy * cols + gx, bc = cnt[base];
    for (let di = 0; di < bc; di++) {
      const a = g2[base * 6 + di];
      for (let dj = di + 1; dj < bc; dj++)ln(a, g2[base * 6 + dj]);
      if (gx + 1 < cols) { const nb = base + 1; for (let dj = 0; dj < cnt[nb]; dj++)ln(a, g2[nb * 6 + dj]); }
      if (gy + 1 < rows) { const nb = base + cols; for (let dj = 0; dj < cnt[nb]; dj++)ln(a, g2[nb * 6 + dj]); }
      if (gx + 1 < cols && gy + 1 < rows) { const nb = base + cols + 1; for (let dj = 0; dj < cnt[nb]; dj++)ln(a, g2[nb * 6 + dj]); }
    }
  }
  if (running) requestAnimationFrame(tick);
}
function ln(a, b) {
  if (b < 0) return;
  const pa = pts[a], pb = pts[b], dx = pa.x - pb.x, dy = pa.y - pb.y, d2 = dx * dx + dy * dy;
  if (d2 < LK2) { cx.beginPath(); cx.moveTo(pa.x, pa.y); cx.lineTo(pb.x, pb.y); cx.strokeStyle = `rgba(79,195,247,${.028 * (1 - Math.sqrt(d2) / LK)})`; cx.lineWidth = .5; cx.stroke(); }
}
requestAnimationFrame(tick);