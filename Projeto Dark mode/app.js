const bt = document.querySelector('.bt');
const container = document.querySelector('.container');

bt.onclick = function () {
    this.classList.toggle('active');
    container.classList.toggle('active');
}