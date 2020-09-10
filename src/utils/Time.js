export function getCurrentTime(separator = '') {

    let newTime = new Date()

    return `${newTime.toLocaleTimeString()}`;
}