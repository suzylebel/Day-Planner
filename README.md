# 05 Third-Party APIs: Work Day Scheduler


Explore the [Deployed Day Planner](https://suzylebel.github.io/Day-Planner/)
View the [Github page](https://github.com/suzylebel/Day-Planner)

## Table of Contents
1. [User story](#User-story)
2. [About the Project](#About-the-Project)
3. [Tech/Framework used](#Tech-Used)
4. [Code Breakdown](Code-Breakdown)
5. [UI // Things to update](#UI)
6. [License](#License)
7. [Contact](#Contact)
8. [Credits](#Credit)


## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## About the Project

The goal of this project was to edit files that were already given to us and use JQuery to create a functioning Day planner for our user to use. Using moment.js we were also able to color code the planner based on the users current time to show past, present and future! Local storage was also used so the users Planner is saved!


## Tech Used
The index.html and style.css were provided to start.
I created functions in JS using JQuery libraries.  

## Code Breakdown

I took the approach to create an array and loop that array into my code: 

``` // create array
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
                
 ```
 I also used JQuery to create me elements and append it to the DOM!


This is also the first time learning moment().format to display the current time and day to the users landing page. 

```
 function headerDate() {
            var currentHeader = moment().format('dddd, MMMM Do, h:mm a');
            $("#currentDay").text(currentHeader);
        }
```
## UI
I decided to give it a bit of a color lift so the user could feel cool about their day planner. 

## Contribute
If you’d like to fork this project from github please feel free! With a pull request I can grant you access to leave comments and notes about this project. 

## License 
None
 
## Contact 

Suzy Le Bel 
suzy.lebel@gmail.com

Project Link can be found [here.](https://suzylebel.github.io/Day-Planner/)

## Credit
Assistance from Amanda Crawford (BCS Tutor). 



