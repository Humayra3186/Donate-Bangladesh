//to get inner text

function getInnerText (id){
    const innerText = document.getElementById(id).innerText;
    const number = Number(innerText);
    return number;
}

//to get input value



function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    const number = Number(inputValue);

    return number;
};



// history child 

 function createHistory(id,inner){
    const amount = getInputValue(id);
    const donateFor = document.getElementById(inner).innerText;
    const historyItem = document.createElement('div');
    
    historyItem.className= "border border-[#1111111A] rounded-2xl p-5 mb-5 shadow-lg";
    historyItem.innerHTML = `<p class="font-semibold text-[1.1rem] text-black">${amount} Taka is ${donateFor}</p>
                             <p class="text-[#111111B3] text-[0.89rem] font-light pt-4">Date : ${new Date()}</p>
                            
                           `
        
                           return historyItem;
 }














