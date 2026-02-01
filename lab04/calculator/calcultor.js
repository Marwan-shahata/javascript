var answer = document.getElementById("Answer");
function enterNumber(val) {
    answer.value += val;
    return val;
    
}
function enteroperator(val) {
    answer.value += val;
     return val;
    
}
function enterEqual() {
    answer.value =eval(answer.value);
    
}
function Clear() {
    answer.value ="";
    
}
