let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let stringBefore = "";
let stringAfter = "";
let result = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            if(string.includes("%")){
                stringAfter = string.substring(stringBefore.length + 1, string.length);
                result = (parseFloat(stringBefore)/100)* parseFloat(stringAfter) ;
                input.value = result;
                string = result.toString();
            }
            else {
                string = eval(string);
                input.value = string;
            }
            
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML == '%'){
            stringBefore = string.substring(0, string.length);
            string += e.target.innerHTML;
            input.value = string;

        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})

