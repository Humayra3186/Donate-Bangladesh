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
   
    
    if(Math.sign(amount) !== -1 && isNaN(amount) === false){
       
        const newDonate = amount + donate;
        document.getElementById('donate').innerText = newDonate;

        const remainBalance = balance - amount;
        document.getElementById('balance').innerText = remainBalance;
       

    }
    else{
        alert('Invalid Donation Amount!');
        return;
    }


     my_modal_1.showModal();
     
})


//card 2

document.getElementById('btn-two').addEventListener('click' , function(){
    let balance = getInnerText('balance')
    const amount = getInputValue('amount-two');
    let donate = getInnerText('donate-two');
   
    
    if(Math.sign(amount) !== -1 && isNaN(amount) === false){
       
        const newDonate = amount + donate;
        document.getElementById('donate-two').innerText = newDonate;

        const remainBalance = balance - amount;
        document.getElementById('balance').innerText = remainBalance;
       

    }
    else{
        alert('Invalid Donation Amount!');
        return;
    }


     my_modal_1.showModal();
     
})



//card 

document.getElementById('btn-three').addEventListener('click' , function(){
    let balance = getInnerText('balance')
    const amount = getInputValue('amount-three');
    let donate = getInnerText('donate-three');
   
    
    if(Math.sign(amount) !== -1 && isNaN(amount) === false){
       
        const newDonate = amount + donate;
        document.getElementById('donate-three').innerText = newDonate;

        const remainBalance = balance - amount;
        document.getElementById('balance').innerText = remainBalance;
       

    }
    else{
        alert('Invalid Donation Amount!');
        return;
    }


     my_modal_1.showModal();
     
})

