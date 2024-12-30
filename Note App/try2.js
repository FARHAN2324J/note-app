const draggable = document.getElementById('draggable');
const pin = document.querySelector('i');


let isDragging = false;

let offsetX, offsetY;


const startDragging = (e) => {
    isDragging = true;
    const rect = draggable.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    offsetX = clientX - rect.left;
    offsetY = clientY - rect.top;
    pin.style.visibility = 'hidden';
}

const drag = (e) => {
    if (isDragging) {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const newX = clientX - offsetX;
        const newY = clientY - offsetY;

        draggable.style.left = `${newX}px`;
        draggable.style.top = `${newY}px`;
    }
}


const stopDragging = () => {
    isDragging = false;
    draggable.classList.add('stop');
    pin.style.visibility = 'visible';
    pin.classList.add('move');
    setTimeout(() => {
        draggable.classList.remove('stop');
        pin.classList.remove('move');
    }, 1000);
}


draggable.addEventListener('mousedown', startDragging);

document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', stopDragging);

draggable.addEventListener('touchstart', startDragging);
document.addEventListener('touchmove', drag);
document.addEventListener('touchend', stopDragging);



