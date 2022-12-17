export function getShortDate() {
    let today = new Date();

    let date = today.getDate().toString().padStart(2, '0') 
        + '/'
        + (today.getMonth() + 1).toString().padStart(2, '0')
        + '/' + today.getFullYear();

    return date;
};

export function getLongDate() {
    let today = new Date();

    let date = today.getDate().toString().padStart(2, '0')
        + '/'
        + (today.getMonth() + 1).toString().padStart(2, '0')
        + '/' + today.getFullYear()
        + ' ' + today.getHours().toString().padStart(2, '0')
        + ':' + today.getMinutes().toString().padStart(2, '0')
        + ':' + today.getSeconds().toString().padStart(2, '0');

    return date;
};