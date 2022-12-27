let formcal = document.createElement("form")
formcal.setAttribute("name","formcal")
document.body.append(formcal)

let Calculator = document.createElement("div")
Calculator.setAttribute("class","container-md")////Making a container
Calculator.setAttribute("id","Calculator")
formcal.append(Calculator)


let DisBrand = document.createElement("div")
DisBrand.setAttribute("class","row")
Calculator.append(DisBrand)

let Display = document.createElement("input")
Display.setAttribute("class","col-8")
Display.setAttribute("id","Display")        /// display as a input
Display.setAttribute("type","text")
Display.setAttribute("name","display")
DisBrand.append(Display)

let Brand = document.createElement("div")
Brand.setAttribute("class","col-3")         ////for brand
DisBrand.append(Brand)

let NameofBrand = document.createElement("h3")
NameofBrand.innerHTML="JV TECH"
Brand.append(NameofBrand)

let inputArea = document.createElement("div")
inputArea.setAttribute("class","col-8")  /// for all input sets
inputArea.setAttribute("id","inputArea")
Calculator.append(inputArea)

let inputset1 = document.createElement("div")/////1st set
inputset1.setAttribute("class","row")
inputArea.append(inputset1)


let Set1_1 = document.createElement("input")
Set1_1.setAttribute("type","button")
Set1_1.setAttribute("value","ClearAll")
Set1_1.setAttribute("class","col-3")
Set1_1.addEventListener("click",()=>{formcal.display.value = ''})
inputset1.append(Set1_1)

let Set1_2 = document.createElement("input")
Set1_2.setAttribute("type","button")                  ////have to set
Set1_2.setAttribute("value","%")
Set1_2.setAttribute("class","col-3")
inputset1.append(Set1_2)

let Set1_3 = document.createElement("input")
Set1_3.setAttribute("type","button")
Set1_3.setAttribute("value",".")
Set1_3.setAttribute("class","col-3")
Set1_3.addEventListener("click",()=>{formcal.display.value += '.'})
inputset1.append(Set1_3)

let Set1_4 = document.createElement("input")
Set1_4.setAttribute("type","button")
Set1_4.setAttribute("value","*")
Set1_4.setAttribute("class","col-3")
Set1_4.addEventListener("click",()=>{formcal.display.value += '*'})
inputset1.append(Set1_4)

//////input set1 completed

let inputset2 = document.createElement("div")/////2nd set
inputset2.setAttribute("class","row")
inputArea.append(inputset2)

let Set2_1 = document.createElement("input")
Set2_1.setAttribute("type","button")
Set2_1.setAttribute("value","7")
Set2_1.setAttribute("class","col-3")
Set2_1.addEventListener("click",()=>{formcal.display.value += '7'})
inputset2.append(Set2_1)

let Set2_2 = document.createElement("input")
Set2_2.setAttribute("type","button")
Set2_2.setAttribute("value","8")
Set2_2.setAttribute("class","col-3")
Set2_2.addEventListener("click",()=>{formcal.display.value += '8'})
inputset2.append(Set2_2)

let Set2_3 = document.createElement("input")
Set2_3.setAttribute("type","button")
Set2_3.setAttribute("value","9")
Set2_3.setAttribute("class","col-3")
Set2_3.addEventListener("click",()=>{formcal.display.value += '9'})
inputset2.append(Set2_3)

let Set2_4 = document.createElement("input")
Set2_4.setAttribute("type","button")
Set2_4.setAttribute("value","/")
Set2_4.setAttribute("class","col-3")
Set2_4.addEventListener("click",()=>{formcal.display.value += '/'})
inputset2.append(Set2_4)

/////////////////////////////////////////////
let inputset3 = document.createElement("div")/////1st set
inputset3.setAttribute("class","row")
inputArea.append(inputset3)

let Set3_1 = document.createElement("input")
Set3_1.setAttribute("type","button")
Set3_1.setAttribute("value","4")
Set3_1.setAttribute("class","col-3")
Set3_1.addEventListener("click",()=>{formcal.display.value += '4'})
inputset3.append(Set3_1)

let Set3_2 = document.createElement("input")
Set3_2.setAttribute("type","button")
Set3_2.setAttribute("value","5")
Set3_2.setAttribute("class","col-3")
Set3_2.addEventListener("click",()=>{formcal.display.value += '5'})
inputset3.append(Set3_2)

let Set3_3 = document.createElement("input")
Set3_3.setAttribute("type","button")
Set3_3.setAttribute("value","6")
Set3_3.setAttribute("class","col-3")
Set3_3.addEventListener("click",()=>{formcal.display.value += '6'})
inputset3.append(Set3_3)

let Set3_4 = document.createElement("input")
Set3_4.setAttribute("type","button")
Set3_4.setAttribute("value","-")
Set3_4.setAttribute("class","col-3")
Set3_4.addEventListener("click",()=>{formcal.display.value += '-'})
inputset3.append(Set3_4)
///////////////////

let inputset4 = document.createElement("div")/////1st set
inputset4.setAttribute("class","row")
inputArea.append(inputset4)

let Set4_1 = document.createElement("input")
Set4_1.setAttribute("type","button")
Set4_1.setAttribute("value","1")
Set4_1.setAttribute("class","col-3")
Set4_1.addEventListener("click",()=>{formcal.display.value += '1'})
inputset4.append(Set4_1)

let Set4_2 = document.createElement("input")
Set4_2.setAttribute("type","button")
Set4_2.setAttribute("value","2")
Set4_2.setAttribute("class","col-3")
Set4_2.addEventListener("click",()=>{formcal.display.value += '2'})
inputset4.append(Set4_2)

let Set4_3 = document.createElement("input")
Set4_3.setAttribute("type","button")
Set4_3.setAttribute("value","3")
Set4_3.setAttribute("class","col-3")
Set4_3.addEventListener("click",()=>{formcal.display.value += '3'})
inputset4.append(Set4_3)

let Set4_4 = document.createElement("input")
Set4_4.setAttribute("type","button")
Set4_4.setAttribute("value","+")
Set4_4.setAttribute("class","col-3")
Set4_4.addEventListener("click",()=>{formcal.display.value += '+'})
inputset4.append(Set4_4)

/////////////////////////
let inputset5 = document.createElement("div")/////1st set
inputset5.setAttribute("class","row")
inputArea.append(inputset5)

let Set5_1 = document.createElement("input")
Set5_1.setAttribute("type","button")
Set5_1.setAttribute("value","0")
Set5_1.setAttribute("class","col-4")
Set5_1.addEventListener("click",()=>{formcal.display.value += '0'})
inputset5.append(Set5_1)

let Set5_2 = document.createElement("input")
Set5_2.setAttribute("type","button")
Set5_2.setAttribute("value","00")
Set5_2.setAttribute("class","col-4")
Set5_2.addEventListener("click",()=>{formcal.display.value += '00'})
inputset5.append(Set5_2)

let Set5_3 = document.createElement("input")
Set5_3.setAttribute("type","button")
Set5_3.setAttribute("value","=")
Set5_3.setAttribute("class","col-4")
Set5_3.addEventListener("click",()=>{formcal.display.value = eval(formcal.display.value)})
inputset5.append(Set5_3)

document.addEventListener("keyup",(eve)=>{
    if(eve.key==='1'){
        formcal.display.value += '1'
    }
    if(eve.key==='2'){
        formcal.display.value += '2'
    }
    if(eve.key==='3'){
        formcal.display.value += '3'
    }
    if(eve.key==='4'){
        formcal.display.value += '4'
    }
    if(eve.key==='5'){
        formcal.display.value += '5'
    }
    if(eve.key==='6'){
        formcal.display.value += '6'
    }
    if(eve.key==='7'){
        formcal.display.value += '7'
    }
    if(eve.key==='8'){
        formcal.display.value += '8'
    }
    if(eve.key==='9'){
        formcal.display.value += '9'
    }
    if(eve.key==='+'){
        formcal.display.value += '+'
    }
    if(eve.key==='-'){
        formcal.display.value += '-'
    }
    if(eve.key==='*'){
        formcal.display.value += '*'
    }
    if(eve.key==='/'){
        formcal.display.value += '/'
    }
    if(eve.key==='0'){
        formcal.display.value += '0'
    }
    if(eve.key==='%'){
        formcal.display.value += '%'
    }
    if(eve.key==='=' ||eve.key==='Enter'){
        formcal.display.value = eval(formcal.display.value);
    }
    if(eve.key==='Delete'||eve.key==='Backspace'||eve.key==='\x00'){
     formcal.display.value = ''
    }
    else{
        alert("Number only allowed")
    }

})