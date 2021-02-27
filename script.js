// clock displayed at top of page
let now = moment().format("LLLL");
$("#current").text(now);

// correctly linked test
console.log("hello");

let timeSlots = [
    "9:00 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"
];

// compares times to moment times and changes background color based on time
function compareHours(index, time) {
    let moments = moment().hours("hh");

console.log(index, time)
let parsedTime = moment(time, ["h:m a"])

        if (parsedTime.isBefore(moments)) {
            document.getElementById(index).classList.add("past");
        } else if (parsedTime.isAfter(moments)) {
            document.getElementById(index).classList.add("future");
        } else if (parsedTime.isSame(moments)) {
            document.getElementById(index).classList.add("present");
        } else {
            console.log("wut?")
        }


        // else if and else addClass (from css to change color)
       }   
       // make a past class

        // set hourly limits
// }

// what displays when the page is loaded
$(document).ready(function () {
    for (let index = 0; index < timeSlots.length; index++) {
        const time = timeSlots[index];
        
        let activityArray = JSON.parse(localStorage.getItem(time));
        console.log(activityArray);
        
        let html = `
        <div id=${index} class="row time">
            <div class="hour col-3" id="hour">${time}</div>
            <div class="activity-div col-7" id="activity-div text-area">
                <input class="activity" type="text" id="activity-${index}">
                <ul class="output" id="output-${index}"></ul>
                </div>
                <div class="btn-div col-2" id="btn-div">
                <button class="save-btn" id="${time}">Save</button>
                </div>
                </div>
                
                `
                $(".pre-scrollable").append(html);
                
                // backColor(time, index);
                compareHours(index, time);

                if (activityArray) {

                let output = document.getElementById(`output-${index}`);

                for (let j = 0; j < activityArray.length; j++) {
                    let x = document.createElement("li");
                    x.textContent = activityArray[j];
                
                    output.appendChild(x);
                }
            }
        }
});


// saves the input text after you click the button and adds it to the ul
$(document).on("click", "button.save-btn", function (event) {

    console.log(event);
    console.log("hi");
    let rowId = event.target.parentNode.parentNode.id;
    let data = document.getElementById(`activity-${rowId}`);

    let time = $(this).attr("id");
    // console.log(time);
    let hourArray = JSON.parse(localStorage.getItem(time)) || [];
    hourArray.push(data.value);
    console.log(hourArray);

    localStorage.setItem(time, JSON.stringify(hourArray));
    console.log(localStorage);

    let output = document.getElementById(`output-${rowId}`);
    let x = document.createElement("li");
    x.textContent = data.value;

    output.appendChild(x);
});

// find a save icon for html file in js