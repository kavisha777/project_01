const numbers = [10,20,30,40,50];


function checknumber() {
    let number=parseInt(document.getElementById("input").value);

    let result ;

    if (numbers.includes(number)) {
       result = `Yes ${number} is in the list` ;
       document.getElementById("output").style.color = "green";
        }
    else {
       result = `No ${number} is not in the list` ;
       document.getElementById("output").style.color = "red";
    } 
    document.getElementById("output").innerText = result;
}