const items = document.querySelectorAll('.carousel-item');
let current = 0;

function showItem(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

document.getElementById('prev').onclick = () => {
    current = (current - 1 + items.length) % items.length;
    showItem(current);
};
document.getElementById('next').onclick = () => {
    current = (current + 1) % items.length;
    showItem(current);
};
