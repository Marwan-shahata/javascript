
// 1.1
do {
    var word = prompt("enter your wardwith E :");
    var count=0;

    for (var i = 0; i < word.length; ++i){
        if (word[i] == 'e' || word[i] == 'E') {
            
            count++;
        }
        
    }
    
} while (isFinite(word));


document.writeln(`<h1>wellcome</h1><br>`)
document.writeln(`Number Of e : ${count}<br>`);