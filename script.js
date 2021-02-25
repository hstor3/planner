// clock displayed at top of page
let now = moment().format("LLLL");
$("#current").text(now);

// correctly linked test
console.log("hello");


function backColor(timeSlot, index) {
    // debugger
if (moment(timeSlot).isBefore(moment())) {
    document.getElementById(index).style.backgroundColor = "red"
} else if (moment(timeSlot).isAfter(moment())) {
    document.getElementById(index).style.backgroundColor = "yellow"
} else {
    document.getElementById(index).style.backgroundColor = "blue"
}
};

let timeSlots = [
    "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"
];


$(document).ready(function () {
    for (let index = 0; index < timeSlots.length; index++) {
        const time = timeSlots[index];

        let html = `
        <div id=${index} class="time row m-1 text-dark border border-dark rounded">
            <div class="hour col-3" id="hour">${time}
            </div>
            <div class="activity-div col-7 text-center" id="activity-div text-area">
                <input class="activity text-center rounded" type="text" id="activity-${index}">
                <ul class="outtie" id="outtie-${index}"></ul>
            </div>
            <div class="btn-div col-2" id="btn-div">
                <button class="save-btn rounded" id="save-btn">Save</button>
            </div>
        </div>
        `
        $(".pre-scrollable").append(html);

        backColor(time, index);
    }
});



$(document).on("click", "button.save-btn", function(event) {
    console.log(event);
    console.log("hi");
    let rowId = event.target.parentNode.parentNode.id;
    let data = document.getElementById(`activity-${rowId}`);
    console.log(data.value)
    
    let output = document.getElementById(`outtie-${rowId}`);
    let x = document.createElement("li");
    x.textContent = data.value;

    output.appendChild(x);
});



// function textInfo(event) {
//     event.preventDefault();
//     console.log(event);
//     let response = activeInput;
//     activeInput.textContent = response;

// }

// saver.addEventListener("keydown", textInfo);


// "click .parent": function(e){
    // console.log(e.currentTarget.id)
// }

// console.log(saver);

// saver.on("click", function() {
// console.log("Hi")
// })

// saver.addEventListener("click", function () {
    // console.log("hi")
// })

// console.log(saver);

// saver.addEventListener("click", function() {
    // console.log("HI")
// });

// let activeInput = document.getElementById("activity");
// let saver = document.getElementById("save-btn");

// function saveData() {

    //         dataSaver = JSON.parse(localStorage.getItem("dataSaver") || "[]");
    //         dataSaver.push({
        //             "data": activeInput.innerText
//         })
//         localStorage.setItem("dataSaver", JSON.stringify(dataSaver));
//         location.reload();
//     };

    // function saveScore() {
    //     savedScores = JSON.parse(localStorage.getItem("savedScores") || "[]");
    //     savedScores.push({
//         "name": myName.value,

//         "score": score.innerHTML,
//     })

//     localStorage.setItem("savedScores", JSON.stringify(savedScores));
//     location.reload();
// };
// document.addEventListener("DOMContentLoaded", function() {
//     dataSaver = JSON.parse(localStorage.getItem("dataSaver") || "[]");

//     for (let i = 0; i < dataSaver.length; i++) {
//         const dSaver = document.createElement("li");
//         let text = `${dataSaver[i]["data"]} - ${}`

//     }
// })

// document.addEventListener("DOMContentLoaded", function() {

//     savedScores = JSON.parse(localStorage.getItem("savedScores") || "[]");

//     for (let i = 0; i < savedScores.length; i++) {
//         var node = document.createElement('li');
//         let text = `${savedScores[i]["name"]} - ${savedScores[i]["score"]}` 
//         node.appendChild(document.createTextNode(text));
//         nameList.appendChild(node);
//    
//  }  
