var naam = document.querySelector("#textarea1");
var dob = document.querySelector("#textarea2");
var compilationBtn= document.querySelector("#button")

function clickHandler(){ 
    var strn = dob.value;
    var userName= naam.value;
    var newStr = strn.substring(6,10)
    console.log(newStr)
    function leapYearFounder(newStr){
        if(newStr%4===0){
            if(newStr%100===0){
                if(newStr%400===0){
                output.innerText=  userName +  ",you are born in an leap year"
                }
                else{
                    output.innerText=userName+ ",you are not born in a leap year"
                }

            }
            else{
                output.innerText= userName+",you are born in an leap year"
            }

        }else{
            output.innerText= userName+",you are not born in a leap year"
        }
    }
    leapYearFounder(newStr)

}











compilationBtn.addEventListener("click", clickHandler)





