console.log('Hello World!');
let score = {
 correct: 0,
 incorrect: 0
};



/*  {
    question: 'What is my name?',
    options: ['Dembele', 'Desmond', 'Emmanuel', 'Eugene'],
    answer: 'Dembele',
    answered: false
  },
  {
    question: 'What level am I?',
    options: ['100L', '200L', '300L', '400L'],
    answer: '100L',
    answered: false
  },
  {
   question: 'Which State am I from?',
    options: ['Anambra','Imo', 'Abia', 'Enugu'],
    answer: 'Anambra',
    answered: false
  }
  */
  let List = [
  {
  question: 'Which type of crystal lattice is observed in NaCl?',
  options: [
    'Face-centered cubic',
    'Body-centered cubic',
    'Hexagonal close packed',
    'Simple cubic'
  ],
  answer: 'Face-centered cubic',
  answered: false
}

];


let currentQuestion = 0;
let general = document.querySelector('.overallContent');

const questionParagraph = document.querySelector('.Js-question');
const questionInput = document.querySelector('.Js-inputs');


function loadQuestion() {
  questionInput.innerHTML = '';

  const current = List[currentQuestion];
  questionParagraph.textContent = current.question;

  current.options.forEach(option => {
    const label = document.createElement('label');
    label.classList.add('inputLabel');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'answer';
    input.value = option;
    input.classList.add('radioInputs');

    label.append(input, option);
    questionInput.append(label, document.createElement('br'));
  });

  const mainDiv = document.createElement('div');
  mainDiv.classList.add('container');

  const checkBtn = document.createElement('button');
  checkBtn.classList.add('leftButton')
  checkBtn.textContent = 'Check';

  const nextBtn = document.createElement('button');
  nextBtn.classList.add('rightButton')
  nextBtn.textContent = 'Next';
  nextBtn.disabled = true;

checkBtn.addEventListener('click', () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  nextBtn.disabled = false;

  if (!selected) {
    alert('Select an option first');
    return;
  }

  // 🔒 STOP double scoring
  if (List[currentQuestion].answered) {
    return;
  }

  if (selected.value === List[currentQuestion].answer) { 
    
    alert('Bravo👏🏿');
    signal(currentQuestion);
    
    
    score.correct++;
    console.log(score);
    console.log(selected);
  } else {
    
    alert('Wrong ❌ ')
    signal(currentQuestion);


/*
if (selected.value === List[currentQuestion].answer) {
  score.correct++;
  alert('Bravo👏🏿');
  
} else {
  score.incorrect++;
  alert('Wrong ❌');
}*/

    score.incorrect++;
    console.log(score);
  }

  // mark as answered
  List[currentQuestion].answered = true;

  // optional UX improvement
  document.querySelectorAll('input[name="answer"]').forEach(input => {
    input.disabled = true;
  });
});
  nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < List.length) {
      loadQuestion();
    } else {
      questionParagraph.textContent = 'Quiz completed 🎉';
      result();
      questionInput.innerHTML = '';
    }
  });

  mainDiv.append(checkBtn, nextBtn);
  questionInput.append(mainDiv);
  
}
loadQuestion();

/*function signal() {
  const selected = document.querySelector('input[name="answer"]:checked');

  // highlight correct answer
  const correctInput = Array.from(document.querySelectorAll('input[name="answer"]'))
    .find(input => input.value === List[currentQuestion].answer);

  if (correctInput) {
   
    
    correctInput.parentElement.style.backgroundColor = 'green';
  }

  // highlight wrong selection if user picked incorrectly
  if (selected && selected.value !== List[currentQuestion].answer) {
    selected.parentElement.style.backgroundColor = 'red';
  }

  console.log(selected);
}
*/
function signal(questionIndex) {
  const selected = document.querySelector('input[name="answer"]:checked');

  const correctInput = Array.from(
    document.querySelectorAll('input[name="answer"]')
  ).find(input =>
    input.value === List[questionIndex].answer
  );

  if (correctInput) {
    correctInput.parentElement.style.backgroundColor = 'green';
  }

  if (selected && selected.value !== List[questionIndex].answer) {
    selected.parentElement.style.backgroundColor = 'red';
  }
}
function result(){
  let winScore = document.querySelector('.js-score');
  let looseScore = document.querySelector('.js-loss');
  
  winScore.innerHTML = `correct: ${score.correct}`;
  looseScore.innerHTML = `Incorrect: ${score.incorrect}`;
}

List.push(
{
  question: 'Which of the following gases exhibits the strongest deviation from ideal gas behavior at high pressure?',
  options: [
    'Helium',
    'Oxygen',
    'Carbon dioxide',
    'Hydrogen'
  ],
  answer: 'Carbon dioxide',
  answered: false
},
{
  question: 'In the Born-Haber cycle for NaCl, which of the following steps is exothermic?',
  options: [
    'Sublimation of Na(s)',
    'Ionization of Na(g)',
    'Formation of Cl2(g) from Cl(s)',
    'Formation of NaCl(s) from Na+(g) and Cl-(g)'
  ],
  answer: 'Formation of NaCl(s) from Na+(g) and Cl-(g)',
  answered: false
},
{
  question: 'Which of the following acids is strongest in aqueous solution?',
  options: [
    'HF',
    'HCl',
    'HBr',
    'HI'
  ],
  answer: 'HI',
  answered: false
},
{
  question: 'Which hybridization is present in the carbon atoms of benzene?',
  options: [
    'sp',
    'sp2',
    'sp3',
    'sp3d'
  ],
  answer: 'sp2',
  answered: false
},
{
  question: 'The rate-determining step in the nitration of benzene involves which intermediate?',
  options: [
    'Benzyl carbocation',
    'Nitronium ion',
    'Arenium ion',
    'Nitro radical'
  ],
  answer: 'Arenium ion',
  answered: false
},
{
  question: 'Which is the major product of the reaction between 1-butene and HBr in the presence of peroxide?',
  options: [
    '1-bromobutane',
    '2-bromobutane',
    'Butane',
    '2-methylbutane'
  ],
  answer: '1-bromobutane',
  answered: false
},
{
  question: 'Which of the following molecules exhibits hydrogen bonding?',
  options: [
    'CH4',
    'NH3',
    'CO2',
    'C2H6'
  ],
  answer: 'NH3',
  answered: false
},

{
  question: 'Which of the following compounds has the highest boiling point?',
  options: [
    'CH3CH2OH',
    'CH3OCH3',
    'CH4',
    'CH3CH3'
  ],
  answer: 'CH3CH2OH',
  answered: false
},
{
  question: 'Which species is the strongest oxidizing agent?',
  options: [
    'MnO4- in acidic medium',
    'Cr2O7^2- in basic medium',
    'Fe^3+',
    'Cl2'
  ],
  answer: 'MnO4- in acidic medium',
  answered: false
},
{
  question: 'Which of the following is an example of a coordination compound?',
  options: [
    'K2Cr2O7',
    '[Cu(NH3)4]SO4',
    'NaCl',
    'CaCO3'
  ],
  answer: '[Cu(NH3)4]SO4',
  answered: false
},
{
  question: 'Which of the following compounds shows cis-trans isomerism?',
  options: [
    '2-butene',
    '2-methylpropane',
    '1-butyne',
    'Cyclopropane'
  ],
  answer: '2-butene',
  answered: false
},
{
  question: 'The half-life of a first-order reaction is 20 minutes. How long will it take for 75% of the reactant to react?',
  options: [
    '20 min',
    '40 min',
    '60 min',
    '80 min'
  ],
  answer: '40 min',
  answered: false
},
{
  question: 'Which element has the highest electron affinity?',
  options: [
    'Fluorine',
    'Chlorine',
    'Oxygen',
    'Bromine'
  ],
  answer: 'Chlorine',
  answered: false
},
{
  question: 'Which of the following molecules is nonpolar despite having polar bonds?',
  options: [
    'CO2',
    'H2O',
    'NH3',
    'HF'
  ],
  answer: 'CO2',
  answered: false
},
{
  question: 'Which of the following acids will produce the highest concentration of H+ in solution?',
  options: [
    'HCl 0.1M',
    'H2SO4 0.1M (first ionization)',
    'HNO3 0.1M',
    'HF 0.1M'
  ],
  answer: 'H2SO4 0.1M (first ionization)',
  answered: false
},
{
  question: 'Which orbital is being filled in the first row transition metals?',
  options: [
    '3d',
    '4s',
    '4p',
    '3p'
  ],
  answer: '3d',
  answered: false
},
{
  question: 'Which type of isomerism is shown by butanol and methoxypropane?',
  options: [
    'Structural isomerism',
    'Geometrical isomerism',
    'Optical isomerism',
    'Conformational isomerism'
  ],
  answer: 'Structural isomerism',
  answered: false
},
{
  question: 'Which is the correct order of increasing acidity?',
  options: [
    'HF < HCl < HBr < HI',
    'HI < HBr < HCl < HF',
    'HCl < HF < HBr < HI',
    'HF < HBr < HCl < HI'
  ],
  answer: 'HI < HBr < HCl < HF', 
  answered: false
},
{
  question: 'The complex [Fe(CN)6]4- is classified as which type according to Werner’s theory?',
  options: [
    'Ionization',
    'Linkage',
    'Primary valence',
    'Secondary valence'
  ],
  answer: 'Secondary valence',
  answered: false
},
{
  question: 'Which of the following reactions is an example of nucleophilic substitution?',
  options: [
    'CH3Br + OH- → CH3OH + Br-',
    'CH4 + Cl2 → CH3Cl + HCl',
    'C2H4 + H2 → C2H6',
    'CH3CH2OH → CH2=CH2 + H2O'
  ],
  answer: 'CH3Br + OH- → CH3OH + Br-',
  answered: false
},
{
  question: 'Which of the following molecules exhibits resonance?',
  options: [
    'NO3-',
    'NH3',
    'CH4',
    'H2O'
  ],
  answer: 'NO3-',
  answered: false
},
{
  question: 'Which type of intermolecular force is dominant in CH3CH3?',
  options: [
    'Hydrogen bonding',
    'Dipole-dipole',
    'London dispersion',
    'Ion-dipole'
  ],
  answer: 'London dispersion',
  answered: false
},
{
  question: 'Which element has the lowest first ionization energy?',
  options: [
    'Sodium',
    'Magnesium',
    'Aluminum',
    'Potassium'
  ],
  answer: 'Potassium',
  answered: false
},
{
  question: 'Which of the following compounds is aromatic?',
  options: [
    'Cyclobutadiene',
    'Cyclooctatetraene',
    'Benzene',
    'Cyclohexene'
  ],
  answer: 'Benzene',
  answered: false
},
{
  question: 'Which of the following species is diamagnetic?',
  options: [
    'O2',
    'CO',
    'N2',
    'NO'
  ],
  answer: 'N2',
  answered: false
},
{
  question: 'Which of the following ions is tetrahedral?',
  options: [
    'NH4+',
    'BF4-',
    'ClO4-',
    'All of the above'
  ],
  answer: 'All of the above',
  answered: false
},
{
  question: 'Which is the oxidizing agent in the reaction: 2Fe2+ + Cl2 → 2Fe3+ + 2Cl-',
  options: [
    'Fe2+',
    'Cl2',
    'Fe3+',
    'Cl-'
  ],
  answer: 'Cl2',
  answered: false
},
{
  question: 'Which of the following molecules is chiral?',
  options: [
    'CH3CHClCH3',
    'CH3CH2CH3',
    'CH2Cl2',
    'CCl4'
  ],
  answer: 'CH3CHClCH3',
  answered: false
},
{
  question: 'Which of the following compounds can form hydrogen bonds with water?',
  options: [
    'CH4',
    'CH3OH',
    'C2H6',
    'CO2'
  ],
  answer: 'CH3OH',
  answered: false
},
{
  question: 'Which of the following is a paramagnetic species?',
  options: [
    'O2',
    'N2',
    'CO2',
    'CH4'
  ],
  answer: 'O2',
  answered: false
},
{
  question: 'Which of the following acids is triprotic?',
  options: [
    'H2SO4',
    'H3PO4',
    'HCl',
    'HNO3'
  ],
  answer: 'H3PO4',
  answered: false
},
{
  question: 'Which reaction represents an elimination reaction?',
  options: [
    'CH3CH2Br + KOH → CH2=CH2 + H2O + Br-',
    'CH3CH2Br + H2O → CH3CH2OH + HBr',
    'CH3CH2OH + HBr → CH3CH2Br + H2O',
    'CH4 + Cl2 → CH3Cl + HCl'
  ],
  answer: 'CH3CH2Br + KOH → CH2=CH2 + H2O + Br-',
  answered: false
},
{
  question: 'Which of the following salts is soluble in water?',
  options: [
    'BaSO4',
    'AgCl',
    'Na2CO3',
    'PbI2'
  ],
  answer: 'Na2CO3',
  answered: false
},
{
  question: 'Which is the limiting reagent in the reaction: 2H2 + O2 → 2H2O if 4 moles H2 react with 1 mole O2?',
  options: [
    'H2',
    'O2',
    'H2O',
    'None'
  ],
  answer: 'O2',
  answered: false
},
{
  question: 'Which of the following molecular geometries is linear?',
  options: [
    'CO2',
    'NH3',
    'H2O',
    'CH4'
  ],
  answer: 'CO2',
  answered: false
},
{
  question: 'Which of the following compounds is an aldehyde?',
  options: [
    'CH3COCH3',
    'CH3CHO',
    'CH3CH2OH',
    'CH3COOH'
  ],
  answer: 'CH3CHO',
  answered: false
},
{
  question: 'Which of the following reactions is an example of free radical substitution?',
  options: [
    'CH4 + Cl2 → CH3Cl + HCl',
    'C2H4 + H2 → C2H6',
    'CH3CH2OH → CH2=CH2 + H2O',
    'CH3COOH + NaOH → CH3COONa + H2O'
  ],
  answer: 'CH4 + Cl2 → CH3Cl + HCl',
  answered: false
},
{
  question: 'Which of the following ions is square planar?',
  options: [
    'Ni(CN)4^2-',
    'Cu(NH3)4^2+',
    'Fe(CO)5',
    'Co(NH3)6^3+'
  ],
  answer: 'Ni(CN)4^2-',
  answered: false
},
{
  question: 'Which of the following is the most acidic hydrogen?',
  options: [
    'Hydrogen in CH4',
    'Hydrogen in CH3COOH',
    'Hydrogen in H2O',
    'Hydrogen in NH3'
  ],
  answer: 'Hydrogen in CH3COOH',
  answered: false
},
{
  question: 'Which type of reaction is represented by A + B → AB?',
  options: [
    'Combination',
    'Decomposition',
    'Single displacement',
    'Double displacement'
  ],
  answer: 'Combination',
  answered: false
},
{
  question: 'Which of the following gases is paramagnetic?',
  options: [
    'O2',
    'N2',
    'CO2',
    'CH4'
  ],
  answer: 'O2',
  answered: false
},
{
  question: 'Which of the following elements has the highest electronegativity?',
  options: [
    'Oxygen',
    'Fluorine',
    'Nitrogen',
    'Chlorine'
  ],
  answer: 'Fluorine',
  answered: false
},
{
  question: 'Which of the following compounds is an ether?',
  options: [
    'CH3CH2OH',
    'CH3OCH3',
    'CH3CH2CH3',
    'CH3COOH'
  ],
  answer: 'CH3OCH3',
  answered: false
},
{
  question: 'Which of the following reactions is a redox reaction?',
  options: [
    'Zn + HCl → ZnCl2 + H2',
    'CH4 + Cl2 → CH3Cl + HCl',
    'CH3COOH + NaOH → CH3COONa + H2O',
    'BaSO4 → Ba2+ + SO4^2-'
  ],
  answer: 'Zn + HCl → ZnCl2 + H2',
  answered: false
}
);