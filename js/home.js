//when click on the blog button

document.getElementById('blog').addEventListener('click' , function(){
    window.location.href = './blog.html'
})



  

//when click on the donate now button



// card one
document.getElementById('btn-one').addEventListener('click' , function(){
    let balance = getInnerText('balance')
    const amount = getInputValue('amount-one');
    let donate = getInnerText('donate');
   
    
    if(amount < 0 || isNaN(amount) === true  ){
        alert('Invalid Donation Amount!');
        return;
       

    }

    else if(amount > balance){
        alert("Insufficient balance!")
        return;
    }
    else{
        const newDonate = donate + amount;
        const finalDonate = newDonate.toFixed(2);
        document.getElementById('donate').innerText = finalDonate;

        const remainBalance = balance - amount;
        const finalBalance = remainBalance.toFixed(2);
        document.getElementById('balance').innerText = finalBalance; 
    }


     my_modal_1.showModal();

     
     
     document.getElementById('history-container').appendChild(createHistory('amount-one','place-one'))
     
})


//card 2

document.getElementById('btn-two').addEventListener('click' , function(){
    let balance = getInnerText('balance')
    const amount = getInputValue('amount-two');
    let donate = getInnerText('donate-two');
   
    
    if( amount < 0 || isNaN(amount) === true ){
        alert('Invalid Donation Amount!');
        return;
        
    }

    else if(amount > balance){
        alert("Insufficient balance!")
        return;
    }


    else{
       

        const newDonate = amount + donate;
        const finalDonate = newDonate.toFixed(2);
        document.getElementById('donate-two').innerText = finalDonate;

        const remainBalance = balance - amount;
        const finalBalance = remainBalance.toFixed(2);
        document.getElementById('balance').innerText = finalBalance;
    }


     my_modal_1.showModal();

     document.getElementById('history-container').appendChild(createHistory('amount-two','place-two'))

     
     
})



//card 3

document.getElementById('btn-three').addEventListener('click' , function(){
    let balance = getInnerText('balance')
    const amount = getInputValue('amount-three');
    let donate = getInnerText('donate-three');
   
    
    if(amount < 0 || isNaN(amount) === true){

        alert('Invalid Donation Amount!');
        return;
       

    }

    else if(amount > balance){
        alert("Insufficient balance!")
        return;
    }

    else{

        const newDonate = amount + donate;
        const finalDonate = newDonate.toFixed(2);
        document.getElementById('donate-three').innerText = finalDonate;

        const remainBalance = balance - amount;
        const finalBalance = remainBalance.toFixed(2);
        document.getElementById('balance').innerText = finalBalance;
       
    }


     my_modal_1.showModal();


     document.getElementById('history-container').appendChild(createHistory('amount-three','place-three'))

     
})



// when the history button is clicked
const history = document.getElementById('history');
const donate = document.getElementById('donate-btn')
const cardPart = document.getElementById('card-container');
const historyPart = document.getElementById('history-container')

document.getElementById('history').addEventListener('click' , function(){
    


    history.className = "btn shadow-none bg-lemon text-black text-[1.1rem] font-semibold px-7"
    donate.className = "btn shadow-none bg-white text-[#111111B3] border-[1.5px] borde-[#1111114D] text-[1.1rem] font-medium px-7"
    
    cardPart.classList.add('hidden');
    historyPart.classList.remove('hidden');



})


//when donate btn is clicked


document.getElementById('donate-btn').addEventListener('click' , function(){

   donate.className = "btn shadow-none bg-lemon text-black text-[1.1rem] font-semibold px-7"
    history.className = "btn shadow-none bg-white text-[#111111B3] border-[1.5px] borde-[#1111114D] text-[1.1rem] font-medium px-7"

    historyPart.classList.add('hidden');
    cardPart.classList.remove('hidden');

})

