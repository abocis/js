

// console.log(`hello`);
// console.log(`i love pizza`);

// window.alert(`i love pizza`);
// window.alert(`this is an alert`)


document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent= `this is a little text`;


let online = true;

function display (username, lastneme){

    if(online == false){
        console.log(`pls log in ${username} ${lastneme}`)
    
    } else {
        console.log(`welcome ${username} ${lastneme}`)
    }

};

display("abou", "cisse");

