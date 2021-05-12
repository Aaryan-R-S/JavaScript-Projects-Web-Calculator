//select input
let screen = document.getElementById('screen')
let screenVal = ''

//select by tag
let btns = document.querySelectorAll('button')

for(a of btns){
    a.addEventListener('click', (e)=>{
        btnTxt = e.target.innerText
        // console.log(btnTxt);

        if(btnTxt=='AC'){ 
            screenVal = "";
            screen.value = screenVal
        }
        else if(btnTxt=='C'){
            screenVal = screenVal.substring(0, screenVal.length-1)
            screen.value = screenVal
        }
        else if(btnTxt=='='){
            screen.value = eval(screenVal)
        }
        else if(btnTxt=='X'){
            btnTxt = '*'
            screenVal+= btnTxt
            screen.value = screenVal
        }
        else{
            screenVal += btnTxt
            screen.value = screenVal
        }

    })
}

