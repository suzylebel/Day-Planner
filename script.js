
    $(document).ready(function() {// moment ().format
        function headerDate() {
            var currentHeader = moment().format('dddd, MMMM Do, h:mm a');
            $("#currentDay").text(currentHeader);
        }
        
        headerDate();

    
        // create array
        var timeBlocks = [
            {
                id: "0",
                hour: "09",
                time: "09",
                meridiem: "am",
                reminder: "",
            },
            {
                id: "1",
                hour: "10",
                time: "10",
                meridiem: "am",
                reminder: "",
        
            },
            {
                id: "2",
                hour: "11",
                time: "11",
                meridiem: "am",
                reminder: "",
        
            },
            {
                id: "3",
                hour: "12",
                time: "12",
                meridiem: "pm",
                reminder: "",
        
            },
            {
                id: "4",
                hour: "01",
                time: "13",
                meridiem: "pm",
                reminder: "",
        
            },
            {
                id: "5",
                hour: "02",
                time: "14",
                meridiem: "pm",
                reminder: "",
        
            },
            {
                id: "6",
                hour: "03",
                time: "15",
                meridiem: "pm",
                reminder: "",
        
            },
            {
                id: "7",
                hour: "04",
                time: "16",
                meridiem: "pm",
                reminder: "",
        
            },
            {
                id: "8",
                hour: "05",
                time: "17",
                meridiem: "pm",
                reminder: "",
        
            },
        
        
        ]
        
        // function displayReminders() {
        //     myDay.forEach(function (_thisHour) {
        //         $(`#${_thisHour.id}`).val(_thisHour.reminder);
        //     })
        // }


        
        // row for planner
        timeBlocks.forEach(function (thishour) {
            // console.log(thishour);
            var hourlyRow = $("<div>").attr({
                "class": "row",
                "id": thishour.id
                
            });
            $(".container").append(hourlyRow);
        
            // hour time display with am/pm
            var hourDisplay = $("<div>")
                .text(`${thishour.hour}${thishour.meridiem}`)
                .attr({
                    "class": "col-md-2 hour"
                });
        
            var hourPlan = $("<div>")
                .attr({
                    "class": "col-md-9 description"
                });
        
                
            var typeBox = $("<textarea>")
            .attr({
                "class": "col-md-9",
                "id": thishour.time
            });
            
           
            hourPlan.append(typeBox);
        
        
            // let currentHour = parseInt(moment().format('H'));
            let currentHour = 12;
        
            // Tracking past, present, and future by color code in css:
            if (currentHour > parseInt(thishour.time)) {
                hourPlan.attr({
                    "class": "past col-md-9"});
            } 
            if (currentHour < parseInt(thishour.time)) {
                hourPlan.attr({
                    "class": "future col-md-9"});
            }
            else if (currentHour === parseInt(thishour.time)) {
                hourPlan.attr({
                    "class": "present col-md-9"});
            }
        
        
        
                    var iconBtn = $("<i>")
                        .attr({
                            "class": "far fa-save"
        
                    // $(saveBtn).on("click", function() {
                            //         localStorage.setItem(thishour)JSON.stringify(thishour)
                        })
        
                    var saveBtn = $("<button>")
                        .addClass("save-button")
                        .attr({
                            "class": "col-md-1"});
                        //  .attr({
                        //     "id": thishour.id})
                      saveBtn.append(iconBtn);  
        
        
                    hourlyRow.append(hourDisplay, thishour, hourPlan, saveBtn)
        
                    
                });

                // init();

                $(".save-button").on("click", function(event){
                    console.log($(this).parent().attr("id"))
                    event.preventDefault();
                   var valueEl = $(this).parent().find("textarea").val();
                   var timeEl = $(this).parent().attr("id");

                   
        
                window.localStorage.setItem(timeEl, valueEl);

                // displayReminders();
            
            }); 
             

        //  $("#09").val(localStorage.getItem("09"));
        // $("#10").val(localStorage.getItem("10"));
        // $("#11").val(localStorage.getItem("11"));
        // $("#12").val(localStorage.getItem("12"));
        // $("#13").val(localStorage.getItem("13"));
        // $("#14").val(localStorage.getItem("14"));
        // $("#15").val(localStorage.getItem("15"));
        // $("#16").val(localStorage.getItem("16"));
        // $("#17").val(localStorage.getItem("17"));
        });






