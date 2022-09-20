if(localStorage.getItem('data') == null){
    localStorage.setItem('data', '[]');
}
let old_data = JSON.parse(localStorage.getItem('data'));
console.log(old_data);

let cardBuildingCounter = 0;
let btnCardFunctions = ["showTheAnswer(this.value)",
    "hideTheAnswer(this.value)",
    "edit(this.value)",
    "deleteFunction(this.value)"
];
let btnTexts = ["Show The Answer","Hide The Answer", "Edit", "Delete"]
const buildOldCards = function(){
    for(var i = 0; i < old_data.length; i++){
        let oldQuestion = old_data[i].split(' ')[0]
        let oldAnswer = old_data[i].split(' ')[1
        
        ]
        const card = document.createElement('div');
        card.setAttribute('id', 'card'+cardBuildingCounter)
        card.classList.add('card');

        const header = document.createElement('div');
        header.classList.add('header');
        const qeustionText = document.createElement('p');
        qeustionText.innerHTML = oldQuestion;
        qeustionText.setAttribute('id', 'qeustionText'+cardBuildingCounter)
        qeustionText.classList.add('questionText');
        const answerText = document.createElement('p');
        answerText.classList.add('answerText');
        answerText.setAttribute('id', 'answerText'+cardBuildingCounter)
        answerText.innerHTML = oldAnswer;
    

        const btnsDiv = document.createElement('div');
        btnsDiv.classList.add('btns');
        for(var j = 0; j < btnTexts.length; j++){
            const btn = document.createElement('button');
            btn.innerHTML = btnTexts[j];
            btn.setAttribute('value', cardBuildingCounter);
            btn.setAttribute('onclick', btnCardFunctions[j]);
            btnsDiv.appendChild(btn);
        }
        header.appendChild(qeustionText);
        header.appendChild(answerText);
        card.appendChild(header);
        card.appendChild(btnsDiv);

        let br = document.createElement('br');
        document.getElementById('container').appendChild(br);

    
        document.getElementById('container').appendChild(card);
        cardBuildingCounter++;
    }
}






















const reset = function(){
    old_data = [];
    localStorage.setItem('data', JSON.stringify(old_data));
    location.reload();
}


let openQestionBox = () => {
    document.getElementById('backGround').style.display = 'flex';
}
let closeQuestionBox = (event) => {
    event.preventDefault();
    document.getElementById('backGround').style.display = 'none';
}


let editCard = (event, value) => {
    event.preventDefault();
    console.log(document.getElementById('qeustionText'+value).innerHTML);
    console.log(document.getElementById('editQuestion').value);
    document.getElementById('qeustionText'+value).innerHTML = document.getElementById('editQuestion').value;
    document.getElementById('answerText'+value).innerHTML = document.getElementById('editAnswer').value;
    document.getElementById('editBackGround').style.display = 'none';    
    old_data[value] = document.getElementById('editQuestion').value + " " + document.getElementById('editAnswer').value;
    localStorage.setItem('data', JSON.stringify(old_data));
    
}
let closeEditBox = (event) => {
    event.preventDefault();
    document.getElementById('editBackGround').style.display = 'none';
}




const card = {
    question: '',
    answer: '',
    setQuestion: function(val) {
        this.question = val;
    },
    setAnswer: function(val){
        this.answer = val;
    },
    getQuestionAndAnswer: function() {
            return this.question + " " + this.answer;
    },
    sendValues: function(){
        buildCard(this.question, this.answer);    
    }
}





const buildCard = function(ques, ans){
    let new_data = ques + " " + ans;
    old_data.push(new_data);
    localStorage.setItem('data', JSON.stringify(old_data));
    
    console.log(ques +" " + ans + " " + cardBuildingCounter);
    //const container = document.createElement('div');
    const card = document.createElement('div');
    card.setAttribute('id', 'card'+cardBuildingCounter)
    card.classList.add('card');

    const header = document.createElement('div');
    header.classList.add('header');
    const qeustionText = document.createElement('p');
    qeustionText.innerHTML = ques;
    qeustionText.setAttribute('id', 'qeustionText'+cardBuildingCounter)
    qeustionText.classList.add('questionText');
    const answerText = document.createElement('p');
    answerText.classList.add('answerText');
    answerText.setAttribute('id', 'answerText'+cardBuildingCounter)
    answerText.innerHTML = ans;
    

    const btnsDiv = document.createElement('div');
    btnsDiv.classList.add('btns');
    for(var i = 0; i < btnTexts.length; i++){
        const btn = document.createElement('button');
        btn.innerHTML = btnTexts[i];
        btn.setAttribute('value', cardBuildingCounter);
        btn.setAttribute('onclick', btnCardFunctions[i]);
        btnsDiv.appendChild(btn);
    }
    header.appendChild(qeustionText);
    header.appendChild(answerText);
    card.appendChild(header);
    card.appendChild(btnsDiv);

    let br = document.createElement('br');
    document.getElementById('container').appendChild(br);

    
    document.getElementById('container').appendChild(card);
    cardBuildingCounter++;
}


const showTheAnswer = function(value){
    document.getElementById('answerText'+value).style.display = "flex"

}
const hideTheAnswer = function(value){
    document.getElementById('answerText'+value).style.display = "none"
}
const edit = function(value){
    document.getElementById('editBackGround').style.display = 'flex';
    document.getElementById('editSubmitBtn').value = value;
    
    
}
const deleteFunction = function(value){
    document.getElementById('card'+value).style.display = "none";
    old_data.splice(value, 1);
    localStorage.setItem('data', JSON.stringify(old_data));
}


const addingCard = function(){
    event.preventDefault();
    document.getElementById('backGround').style.display = "none";

    
    if(document.getElementById('fquestion').value == "" && document.getElementById('fanswer').value == ""){
        console.log(1);
        
    }else{
        card.setQuestion(document.getElementById('fquestion').value);
        card.setAnswer(document.getElementById('fanswer').value)
        card.sendValues();
    }
    
}






