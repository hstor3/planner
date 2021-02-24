// let time = document.getElementsByClassName("time");
// let workHour = document.getElementById("hour");
// let activeInput = document.getElementById("activity");
// let saver = document.getElementById("save-btn");

let now = moment().format("LLLL");

$("#current").text(now);

console.log("hello");

if ("#current" > now) {
    document.getElementsByClassName("time").style.backgroundColor = "red"
} else if ("#current" < now) {
    document.getElementsByClassName("time").style.backgroundColor = "yellow"
} else {
    document.getElementsByClassName("time").style.backgroundColor = "blue"
};

// saver.innerHTML.onClick = function() {
// console.log("hi");
// }   

// $(saver).click(function() {
// console.log("hi")
// })



// saver.innerHTML = console.log("hi");

// console.log("Do: " + activeInput.val( ))
// localStorage.setItem("text-field", input.val());
// saver.addEventListener("click", saveText); 

// function saveText() {
// let saver = $("#save-btn");
// }
// activeInput = "";
// $("activeInput").val("");
// $("saver").val(activeInput);

// let x = $("activeInput:text").val();

// let x = activeInput.value;
// document.getElementById("output").innerHTML = x;
// let outputText = document.getElementById("outtie");

// let info = (textVal.value === "");
// outputText.value = console.log("You have successfully scheduled" + info + ".");
// }
// saveText("");
// console.log(saveText)


// function addInfo() {
//     let li = document.createElement("li");
//     let inputValue = activeInput.value;
//     let t = document.createTextNode(inputValue);

//     li.appendChild(t);
//     if (inputValue === "") {
//         console.log("write something!!")
//     } else { 
//         document.getElementById("UL").value = "";
//     }



// $(saver).on("click", function() {
// event.preventDefault();
// console.log(event);
// console.log("Hi");
// activeInput++;


//     $("input[type="text"]").each(function() {
//         let id = $(this).attr("id");
//         let value = $(this).val();
//         localStorage.setItem(id, value);
// });
// });
// }
// console.log(addInfo);
// addInfo();
// console.log(saver);

// $("activity").on("click", function() {
//     $("input[type="text"]").each(function() {
//         let id = $(this).attr("id");
//         let value = localStorage.getItem(id);

//         $(this).val(value);
//     });
// });



// localStorage.setItem("text-field")

// ("MMMM DD YYYY, h:mm a");

// if (now == moment().isAfter("now")) {
//     document.getElementsByClassName("time").style.backgroundColor = "red";
// }

let timeSlots = [
    "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"
];

$(document).ready(function () {
    for (let index = 0; index < timeSlots.length; index++) {
        const element = timeSlots[index];

        let html = `
        <div id=${index} class="time row m-1 text-dark bg-light border border-dark rounded">
        <div class="hour col-3" id="hour">${element}
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
