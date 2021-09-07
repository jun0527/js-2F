const hourHand = document.querySelector('.js-hourHand');
const secondHand = document.querySelector('.js-secondHand');
const minuteHand = document.querySelector('.js-minuteHand');

function clock() {
  setInterval(() => {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    hourHand.setAttribute('style', `transform: rotate(${(hour * (720 / 24)) - 90}deg)`);
    minuteHand.setAttribute('style', `transform: rotate(${minute * (360 / 60)}deg)`);
    secondHand.setAttribute('style', `transform: rotate(${(second * (360 / 60)) - 180}deg)`);
  })
}
clock();