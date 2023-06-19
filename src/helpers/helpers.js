
//below function will help display notifications for 2 sec
//The function will be imported as "show" in App.js
export function showNotification(setter) {
    setter(true);
    setTimeout(() => {
      setter(false);
    }, 2000);
  }
  

  //checkWin function will first determine the win status based on the state of 
  //correct, wrong and word props
  //These props will be provided in Popup component 

  export function checkWin(correct, wrong, word) {
    let status = 'win';
  
    // Check for win
    word.split('').forEach(letter => {
      if(!correct.includes(letter)){
        status = '';
      }
    });
    
    // Check for lose
    if(wrong.length === 6) status = 'lose';
  
    return status
  }