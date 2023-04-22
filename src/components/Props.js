// function addTwoNumbers(a, b) {
//     a = 42
//     return a + b
// }
// addTwoNumbers(1, 2)

export default function Props({name}) {
    const date = new Date();
    const hours = date.getHours();

    let timeOfDay
    if(hours >= 4 && hours < 12){
        timeOfDay = "morning"
    } else if(hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
    } else if(hours >= 17 && hours < 20){
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }

    return(
        <p>Good {timeOfDay}, {name}</p>
    )
}