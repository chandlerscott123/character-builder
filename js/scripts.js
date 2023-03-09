
const CHAR_RACE1= "Paladin";
const CHAR_RACE2="Dark Elf";
const CHAR_RACE3="High Elf";
const CHAR_RACE4="Alethi Lighteyes";

function foundInStrArray(input)
{
  const paladin = ["battle", "attack", "east", "hunt"];
  const paladinNum = 5;

  const highElf = ["learn", "reason", "north", "forage"];
  const highElfNum = 4;
  
  const darkElf = ["sleuth", "stealth", "west", "spell"];
  const darkElfNum = 3;

  const lightEyes = ["royal","barter","south","climb"];
  const lightEyesNum = 6;

  if(paladin.includes(input)){
    return paladinNum;
  }
  else if (highElf.includes(input)){
    return highElfNum;
  }
  else if (darkElf.includes(input)){
    return darkElfNum;
  }
  else if (lightEyes.includes(input)){
    return lightEyesNum;
  }
  else {
    return null;
  }
}

function setCharRaceNum(){


  let input1 = document.querySelector("input[name='scenario1']:checked").value;
  let input2 = document.querySelector("input[name='scenario2']:checked").value;
  let input3 = document.querySelector("input[name='scenario3']:checked").value;
  let input4 = document.querySelector("input[name='scenario4']:checked").value;

  let input1Val = foundInStrArray(input1);
  let input2Val = foundInStrArray(input2);
  let input3Val = foundInStrArray(input3);
  let input4Val = foundInStrArray(input4);

  let charRaceNum = input1Val + input2Val + input3Val + input4Val;

  console.log(charRaceNum);
  
  if (charRaceNum){
    return charRaceNum;
  }
  else 
  {
    window.alert("error");
  }

}

function setCharName()
{
  let charName = document.querySelector("input#char-name").value;
  return charName;
}

function setCharRace(charRaceNum){
  let charRace = "";
  if (charRaceNum<=12 && charRaceNum>8){
    charRace = CHAR_RACE2;
  }
  else if (charRaceNum>12 && charRaceNum<=16){
    charRace = CHAR_RACE3;
  }
  else if (charRaceNum>16 && charRaceNum<=21){
    charRace = CHAR_RACE1;
  }
  else if (charRaceNum>21)
  {
    charRace =CHAR_RACE4;
  }
  
  return charRace;

}

function displayChar(charRace){

  document.getElementById("charname-text").innerText = setCharName();
  console.log(charRace);
  const paladinBox = document.getElementById("paladin-box");
  const darkElfBox = document.getElementById("darkelf-box");
  const highElfBox = document.getElementById("highelf-box"); 
  const lightEyesBox = document.getElementById("lighteyes-box");

  if(charRace === CHAR_RACE1){
    unHideElement(paladinBox);
  }
  else if (charRace === CHAR_RACE2)
  {
    unHideElement(darkElfBox);
  }
  else if (charRace === CHAR_RACE3)
  {
    unHideElement(highElfBox);
  }
  else if (charRace === CHAR_RACE4){
    unHideElement(lightEyesBox);
  }
  else {
    alert("Fatal error");
  }

}

function hideElement(elem)
{
  elem.setAttribute("class", "hidden");
}

function unHideElement(elem){
  elem.removeAttribute("class", "hidden");
}1

function startGame(){
  let instrDiv = document.getElementById("instructions");
  let mainMenu = document.getElementById("main-menu");
  hideElement(mainMenu);
  unHideElement(instrDiv);
}

//
function fromZero(event){
  event.preventDefault();
  let instrDiv = document.getElementById("instructions");
  let scenarioOne = document.getElementById("scenario-1");
  hideElement(instrDiv);
  unHideElement(scenarioOne);
  setCharName();
  
}

function fromOne(event){
  let scenarioOne = document.getElementById("scenario-1");
  let scenarioTwo = document.getElementById("scenario-2");
  hideElement(scenarioOne);
  unHideElement(scenarioTwo);
  event.preventDefault();
}

function fromTwo(event){
  let scenarioTwo=document.getElementById("scenario-2");
  let scenarioThree=document.getElementById("scenario-3");

  hideElement(scenarioTwo);
  unHideElement(scenarioThree);
  event.preventDefault();
}

function fromThree(event){
  let scenarioThree=document.getElementById("scenario-3");
  let scenarioFour=document.getElementById("scenario-4");

  hideElement(scenarioThree);
  unHideElement(scenarioFour);
  event.preventDefault();

}

function fromFour(event) {

  let scenarioFour = document.getElementById("scenario-4");
  let charBox = document.getElementById("char-box");
  let charRaceNum = setCharRaceNum();
  let charRace = setCharRace(charRaceNum);
  hideElement(scenarioFour);
  displayChar(charRace);
  unHideElement(charBox);
  event.preventDefault();

}



window.addEventListener("load", function() {

  
  let startButton = document.getElementById("start-button");
  let nameForm = document.getElementById("nameform");
  let s1Form = document.getElementById("s1Input");
  let s2Form = document.getElementById("s2Input");
  let s3Form = document.getElementById("s3Input");
  let s4Form = document.getElementById("s4Input");
  
  startButton.addEventListener("click", startGame);
  nameForm.addEventListener("submit", fromZero);
  s1Form.addEventListener("submit", fromOne);
  s2Form.addEventListener("submit", fromTwo);
  s3Form.addEventListener("submit",fromThree);
  s4Form.addEventListener("submit",fromFour);


});