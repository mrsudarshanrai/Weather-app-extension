export function getCurrentDay(){
    let date= new Date();
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    return `${days[date.getDay()]}`;
}