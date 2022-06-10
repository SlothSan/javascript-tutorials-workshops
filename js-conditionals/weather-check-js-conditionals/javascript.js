const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather () {
    const choice = select.value;


if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear Shorts! Go to the beach, or the park, and get an ice cream. :)';
} else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside, take a rain coat and an umbrella with you, and don\'t stay out for too long';
} else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down! It is freezing! Best to stay in with a cup of hot chocolate, or if your feeling brave build a snowman!';
} else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining but the sky is grey and gloomy, you are probably in the UK and it could turn any minute, best take the big coat just in case.';
} else {
    para.textContent = '';
}

}