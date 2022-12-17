export function showErrors (errors, container) {
    errors.forEach(err => {
        container.innerHTML += `${err}<br/>`;
    });
};