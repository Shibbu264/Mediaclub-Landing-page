
const databaseURL = "https://database-f696d-default-rtdb.firebaseio.com/";


firebase.initializeApp({
  databaseURL: databaseURL
});


  let ab
  let fmcimg =document.getElementById("fmcimg")
let nextques=document.getElementById("nextques")
let viewpoll=document.getElementById("viewpoll")
 ab=true
viewpoll.addEventListener("click",function(){
  poll.style.display="block";
  displayques(0)
  document.getElementById("body").style.cursor='not-allowed'
    
  });
  

  

let cross=document.getElementById("modal-close-btn")
cross.addEventListener('click',function(){poll.style.display='none'

document.getElementById("body").style.cursor='auto'

}

)

let poll=document.getElementById("poll")
setTimeout(  function(){poll.style.display="block"
                       displayques(0)
                       },3000)

let pollData = {
    options: ['Yes', 'Definitely yes','mujhe kya mai toh aalu hu','nhi!'],
    votes: [0,0,0,0]
  };

  
  function voteOption(optionIndex) {
    nextques.style.display='none'
    pollData.votes[optionIndex] += 1;
    updateButtonLabels();
    showPollResults();
    const database = firebase.database();
    const pollRef = database.ref('poll');
    pollRef.set(pollData.votes);
    
  }

  
  function updateButtonLabels() {
    for (let i = 0; i < pollData.options.length; i++) {
      const option = pollData.options[i];
      const votes = pollData.votes[i];
      const buttonElement = document.getElementById(`poll-option-${i}`);
      
      buttonElement.style.display="none";
      cross.disabled=false;
    }
  }


  
  function calculatePercentage(votes, totalVotes) {
    if (totalVotes === 0) {
      return 0;
    }

    return ((votes / totalVotes) * 100).toFixed(2);
  }

  
  function getTotalVotes() {
    return pollData.votes.reduce((total, votes) => total + votes, 0);
  }

  
  function showPollResults() {
    const totalVotes = getTotalVotes();
    
    const pollResultsElement = document.getElementById('poll-results');
    pollResultsElement.innerHTML = '';

    for (let i = 0; i < pollData.options.length; i++) {
     
      const option = pollData.options[i];
      const votes = pollData.votes[i];
      const percentage = calculatePercentage(votes, totalVotes);

      const resultElement = document.createElement('div');
      const resultText = document.createElement('div');
      const resultBar = document.createElement('div');
      const resultFill = document.createElement('div');
  
      resultElement.classList.add('finalresult');
      resultText.textContent = `${options1[i]}: ${votes} votes (${percentage}%)`;
      resultText.classList.add('result-text');
      resultBar.classList.add('result-bar');
      resultFill.classList.add('result-fill');
      resultFill.classList.add('result-fill2');
      
      setTimeout(function(){resultFill.style.width = `${percentage}%`;},1200)
      
  
      resultElement.appendChild(resultText);
      resultBar.appendChild(resultFill);
      resultElement.appendChild(resultBar);
      pollResultsElement.appendChild(resultElement);
      resultFill.offsetHeight;

    
    
    setTimeout(function(){
      resultFill.classList.remove('result-fill2');
    },1200)
    
    }
  }
  document.getElementById("subscribe").addEventListener("click",function(){
    let abc=document.getElementById("email").value
    if(abc=="") alert("First enter your email!")
    else{alert("You have succesfully subscribed!!")
     
    }
  })
  const database = firebase.database();
const pollRef = database.ref('poll');
pollRef.on('value', (snapshot) => {
  const votes = snapshot.val();
  if (votes) {
    pollData.votes = votes; 
  }
});





const questionRef = database.ref('questions');
let toggle=0;
function nextquestion(){
  toggle+=1;
  if(toggle===4){alert("You can answer 1 poll at a time!! Select accordingly. Sorry for inconvenience!")}
  if(toggle===7){toggle=0}
  
    
  
displayques(toggle);

}

    let options1 
function displayques(index) {
  
 
  questionRef.on('value', (snapshot) => {
    const questionData = snapshot.val();
    const questions = questionData[index];
    let question1 = questions.question;
      options1 = questions.options;

console.log(question1)
   console.log(options1) 

     document.getElementById("ques").innerHTML = question1;
  document.getElementById("poll-option-0").innerHTML = options1[0];
  document.getElementById("poll-option-1").innerHTML = options1[1];
  document.getElementById("poll-option-2").innerHTML = options1[2];
  document.getElementById("poll-option-3").innerHTML = options1[3];

  
    
    

  })  
    
  
}

document.getElementById("customSwitch1").addEventListener('change',function(){
 
  if(this.checked){document.getElementById("body").style.background="black"
document.getElementById("leftpart").style.boxShadow=' 1px 1px 1px 1px white'
document.getElementById("leftpart").style.border='1px solid white'
document.getElementById("mode").innerHTML='Light mode'
document.getElementById("subscribe").style.backgroundColor='white'
  document.getElementById("subscribe").style.color='black'
  document.getElementById("fmclogo").classList.add("darkfmclogo")
}
  else{document.getElementById("body").style.background="linear-gradient(#cc2b5e ,#753a88)"
  document.getElementById("leftpart").style.boxShadow='1px 1px 1px 1px salmon'
  document.getElementById("leftpart").style.border='1px solid salmon'
  document.getElementById("mode").innerHTML='Dark mode'
  document.getElementById("subscribe").style.backgroundColor=' #4CAF50'
  document.getElementById("subscribe").style.color='#fff'
  document.getElementById("fmclogo").classList.remove("darkfmclogo")
  

}
  

})
let frsguide=document.getElementById("frsguide")
image=[
  "images/f1.png","images/f2.png","images/f3.png","images/f4.png","images/f5.png","images/f6.png","images/f7.png","images/f8.png"
]
//change image
let i=0

frsguide.src=`${image[i]}`
document.getElementById("next").addEventListener("click",function(){
  i+=1;
 
  if(i>7){i=7; } frsguide.src=`${image[i]}`
  
  })
  document.getElementById("back").addEventListener("click",function(){
    i-=1; 
    if(i<0){i=0
      
    }frsguide.src=`${image[i]}`;
    })
   
