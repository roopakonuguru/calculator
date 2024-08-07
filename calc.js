var datainput = document.getElementById("Input-Data")
// console.log(datainput)
function targetinput(x){
    datainput.value=datainput.value+x
    
}
function clearall(){
    datainput.value=''
}

function calculate(){
    const data = document.getElementById("Input-Data").value
    try{
        let result = eval(data)
        datainput.value=result
        if(datainput.value == "undefined"){
            datainput.value="enter valid input"
            setTimeout(() => {
                datainput.value=''
            }, 1000);
        }
        else{
            datainput.value=result
        }
    }
    catch{
        datainput.value="Expression is wrong"
        setTimeout(() => {
            datainput.value=''
        }, 1000);
    }
    
    
}
function remove(){
    datainput.value = datainput.value.slice(0,-1)
}

