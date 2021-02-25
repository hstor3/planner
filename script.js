// clock displayed at top of page
let now = moment().format("LLLL");
$("#current").text(now);

// correctly linked test
console.log("hello");


function backColor(timeSlots, index) {
    if (moment(timeSlots).isBefore(moment())) {
        document.getElementById(index).style.backgroundColor = "red"
    } else if (moment(timeSlots).isAfter(moment())) {
        document.getElementById(index).style.backgroundColor = "blue"
    } else {
        document.getElementById(index).style.backgroundColor = "yellow"
    }
};

let timeSlots = [
    "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"
];

// fix times
function compareHours() {
let moments = moment().hours("hh");
console.log(parseInt(timeSlots[0].split(" ")[0]));

for (var i = 0; i < timeSlots.length; i++) {
    var hour = parseInt(timeSlots[i].split(" ")[0])
    console.log(hour);

    if (hour < moments) {
        console.log("past")
    }
    // else if and else
    // make a past class

    // set hourly limits
}
}
compareHours();

$(document).ready(function () {
    for (let index = 0; index < timeSlots.length; index++) {
        const time = timeSlots[index];

        let activityArray = JSON.parse(localStorage.getItem("9 am"));
        console.log(activityArray);

        let html = `
        <div id=${index} class="time row m-1 text-dark border border-dark rounded">
            <div class="hour col-3" id="hour">${time}
            </div>
            <div class="activity-div col-7 text-center" id="activity-div text-area">
                <input class="activity text-center rounded" type="text" id="activity-${index}">
                <ul class="outtie" id="outtie-${index}"></ul>
            </div>
            <div class="btn-div col-2" id="btn-div">
                <button class="save-btn rounded" id="${time}">Save</button>
            </div>
        </div>
        `
        $(".pre-scrollable").append(html);

        backColor(time, index);
    }


});



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

    let output = document.getElementById(`outtie-${rowId}`);
    let x = document.createElement("li");
    x.textContent = data.value;
    
    output.appendChild(x);
    
});

function resetInput() {
    document.getElementById(`activity-${index}`).value = "";
    // document.getElementById(`activity-${index}`).reset();
};