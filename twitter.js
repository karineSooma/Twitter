let tweet = document.querySelector("#tweet");
let tweetar = document.getElementById('tweetar');
let counter = document.getElementById('counter');
let tweetText = tweet.value;

tweetar.addEventListener('click', onClickTweetar);

function onClickTweetar() {
    let tweetText = document.createTextNode(tweet.value);
    let tweetList = document.querySelector(".tweetList");
    let tweetBox = document.createElement('div');
    let textParag = document.createElement('p');
    textParag.appendChild(tweetText);
    tweetBox.appendChild(tweetText);
    tweetList.appendChild(tweetBox);
}

tweet.addEventListener('keyup', funcaoTextArea);

function funcaoTextArea() {
    disabled();
}

function disabled() {
    let tweet = document.querySelector("#tweet");
    let tweetText = tweet.value;
    if (tweetText.length == 0 || tweetText.length > 140) {
        tweetar.disabled = true;
    } else {
        tweetar.disabled = false;
    }
}

function contador() {
    let atual = document.getElementById("tweet").value.length;
    var valor = 140 - atual;
    document.getElementById("counter").innerHTML = valor;
    if (valor < 0) {
        document.getElementById("counter").style.color = "red";
    } else if (valor < 20) {
        document.getElementById("counter").style.color = "red";
    } else if (valor < 40) {
        document.getElementById("counter").style.color = "orange";
    } else if (valor < 60) {
        document.getElementById("counter").style.color = "blue";
    } else if (valor < 140) {
        document.getElementById("counter").style.color = "black";
    }
}
     tweet.addEventListener("keydown", pulaLinha);

    function pulaLinha (){
        if (tweet.scrollHeight > tweet.offsetHeight){
            tweet.rows += 1;
        } else {
            tweet.rows -=1;
        }
    // }

    // function resize() {
    //     let nomedatextbox = document.querySelector("#tweet");
    //     nomedatextbox.style.height = '24px';
    //     nomedatextbox.style.height = nomedatextbox.scrollHeight + 12 + 'px';
    // }
    // function autoResize() {
//     let tweet = document.getElementById('tweet');
//     while (text.scrollHeight > text.offsetHeight) {
//         tweet.rows += 1;
//     }
}