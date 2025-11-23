//  Questions array
const questions = [
    {
    tip: "Hackers do more than guessing passwords—they use cracking tools like brute force, substitution, and Caesar Cipher. Weak passwords are the easiest way in. If your password is predictable, the attacker can break it in seconds. A strong password is your first and strongest line of defense.",
    scenario: "The hacker intercepted the weak password 'mypassword' and is applying Caesar Cipher shifts. After two shifts he reached: 'obqbttxpse'. He is getting close to breaking it.",
    question: "Which password is the strongest?",
    type: "mcq",
    options: ["mypassword2024", "12345678!", "T!gr9#2024Power"],
    correctAnswer: "T!gr9#2024Power",
    explanation: "It is long, complex, and contains uppercase, lowercase, numbers, and symbols—making it extremely hard to crack."
  },

  {
    tip: "80% of corporate attacks start with phishing emails. Hackers imitate IT support or HR with urgent messages like 'Reset Now' to trick you into clicking. They use fake domains, logos, and official tone. One click on a fake link can give attackers full access.",
    scenario: "Two emails claim to be from IT about a login attempt. One is fake.",
    question: "Which email is from the hacker?",
    type: "mcq",
    options: ["Email A", "Email B"],
    correctAnswer: "Email A",
    explanation: "Email A uses a suspicious domain and urgent language—common signs of phishing."
  },

  {
    tip: "Social engineering often happens through calls. Attackers pretend to be HR or IT and confidently ask for 'a small code'. Sharing verification codes gives them instant access. No legitimate department will ever ask for it.",
    scenario: "A caller pretending to be HR asks: 'Give me the code you just received so I can update your file.' Your SMS clearly says: 'Do NOT share this code.'",
    question: "Should you give him the code?",
    type: "mcq",
    options: ["Yes", "No"],
    correctAnswer: "No",
    explanation: "Verification codes must never be shared. Anyone asking for it is attempting account takeover."
  },

  {
    tip: "Email spoofing is when hackers send messages that look like they came from your manager. They change one small part of the domain. Many financial breaches happened because employees trusted these fake emails.",
    scenario: "Two emails seem to be from your manager. One is fake.",
    question: "Which email is from the hacker?",
    type: "mcq",
    options: ["Email A", "Email B"],
    correctAnswer: "Email A",
    explanation: "The domain 'company-co.com' is fake. Attackers add words or hyphens to trick employees."
  },

  {
    tip: "Malware often spreads through suspicious attachments. Attackers disguise harmful .exe files as .pdf or .zip. Opening them allows malware to install and infect your device.",
    scenario: "You receive an attachment: 'Updated_Salary_List2024.pdf.exe'.",
    question: "Should you open the file?",
    type: "mcq",
    options: ["Yes", "No"],
    correctAnswer: "No",
    explanation: "The file is an .exe disguised as a .pdf—common malware technique."
  },

  {
    tip: "Fake software update pop-ups appear on untrusted websites. These downloads often contain malware. Real updates never appear from random sites.",
    scenario: "A website shows a popup saying: 'Update Chrome now!'",
    question: "Should you click download?",
    type: "mcq",
    options: ["Yes", "No"],
    correctAnswer: "No",
    explanation: "Updates must come from official sources only. Website pop-ups are unsafe."
  },

  {
    tip: "Physical security matters. Tailgating happens when a stranger follows an employee through a secure door. Allowing them inside puts the whole company at risk.",
    scenario: "Someone behind you says: 'Hold the door, I forgot my badge.'",
    question: "Should you let him in?",
    type: "mcq",
    options: ["Yes", "No"],
    correctAnswer: "No",
    explanation: "Never allow entry without a valid badge. It may be an intruder."
  },

  {
    tip: "Cloud accounts are targeted because attackers only need your login—not your device. Ignoring suspicious login alerts lets attackers enter your cloud files unnoticed.",
    scenario: "You receive: 'New login from unknown location.'",
    question: "Should you ignore this alert?",
    type: "mcq",
    options: ["Yes", "No"],
    correctAnswer: "No",
    explanation: "A suspicious login must be reported immediately to prevent unauthorized access."
  },

  {
    tip: "Attackers drop infected USBs in offices hoping employees will plug them in. The moment a USB is connected, malware can activate and infect the network.",
    scenario: "You find a USB labeled 'Employee Photos'.",
    question: "What should you do?",
    type: "mcq",
    options: ["Plug it in", "Give it to IT", "Check it at home"],
    correctAnswer: "Give it to IT",
    explanation: "Only IT can safely inspect unknown devices. Plugging it in is dangerous."
  },

  {
    tip: "Attackers sometimes pretend to be IT employees and ask for your laptop. Without ID, they could install malware or copy files. Always verify their identity.",
    scenario: "A man says he's from IT and asks for your laptop—but has no ID.",
    question: "Should you give him the laptop?",
    type: "mcq",
    options: ["Yes", "No"],
    correctAnswer: "No",
    explanation: "No ID = no access. He could be an attacker attempting physical compromise."
  },

  {
    tip: "Domain manipulation is a common trick. Attackers replace 'm' with 'rn' because it looks similar. Employees often miss this detail.",
    scenario: "You receive an email from: finance@cornpany.com",
    question: "Is this the real company domain?",
    type: "mcq",
    options: ["Yes", "No"],
    correctAnswer: "No",
    explanation: "The domain is fake—'cornpany' uses (rn) instead of (m)."
  },

  {
    tip: "Ransomware encrypts your files and demands money to unlock them. It spreads through malicious links or infected attachments.",
    scenario: "Your screen shows: 'Your files are encrypted. Pay $3000.'",
    question: "What type of attack is this?",
    type: "mcq",
    options: ["Spyware", "Ransomware", "Adware"],
    correctAnswer: "Ransomware",
    explanation: "Ransomware always demands payment to restore files."
  },

  {
    tip: "HTTP websites are not secure. They do not encrypt your data, allowing attackers to intercept everything you enter.",
    scenario: "You open a login page with: http://secure-login.com",
    question: "Is this connection secure?",
    type: "mcq",
    options: ["Yes", "No"],
    correctAnswer: "No",
    explanation: "HTTP lacks encryption—your credentials can be stolen."
  },

  {
    tip: "Reporting incidents quickly reduces damage. Delays allow attacks to spread. IT can only help if they know early.",
    scenario: "You clicked a link and your screen behaves strangely.",
    question: "What should you do?",
    type: "mcq",
    options: ["Ignore it", "Report to IT immediately"],
    correctAnswer: "Report to IT immediately",
    explanation: "Fast reporting helps contain the threat before it spreads."
  },

  {
    tip: "Leaving your device unlocked exposes sensitive data. Anyone walking by could access emails, files, or systems. Many breaches start from an unlocked computer.",
    scenario: "You leave your laptop unlocked to grab a coffee.",
    question: "Is this safe?",
    type: "mcq",
    options: ["Yes", "No"],
    correctAnswer: "No",
    explanation: "Unlocked devices are easy targets for unauthorized access."
  }
];

console.log()

// 2) cached element + Variables 
const cells =document.querySelectorAll('.cell')
const begin =document.querySelector('#begin')
const hackerPosEl =document.querySelector('#hackerPos')
const defenderPosEl =document.querySelector('#defenderPos')
const currentStageEl =document.querySelector('#currentStage')
const resetBtn =document.querySelector('#resetBtn')
const popupBg =document.querySelector('#popupBg')
const tipPopup =document.querySelector('#tipPopup')
const tipText =document.querySelector('#tipText')
const scenarioPopup =document.querySelector('#scenarioPopup')
const scenarioText =document.querySelector('#scenarioText')
const questionPopup =document.querySelector('#questionPopup')
const questionText =document.querySelector('#questionText')
const ansArea =document.querySelector('#ansArea')
const feedbackPopup =document.querySelector('#feedbackPopup')
const feedbackText =document.querySelector('#feedbackText')
const nextBtn =document.querySelector('#nextBtn')
const closeBtn =document.querySelector('#closeBtn')


let currentStage=1;
let hackerPos=0;
let defenderPos=0;
let popupStep=1;
let currentpQustion=null;
let hasAnswered=false;
let gameOver=false;

// 3) Functions

init();

function init(){}

function updateInfo(){}

function traclCells(){}