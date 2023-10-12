const brightnessSlider = document.getElementById('brightnessSlider');
const background = document.querySelector('.background');

brightnessSlider.addEventListener('input', () => {
    const brightnessValue = brightnessSlider.value;
    const opacity = 1 - brightnessValue / 100;
    background.style.opacity = opacity;
});


