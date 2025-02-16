function toggleMain() {
    var main = document.querySelector('.main');
    var closetxt = document.getElementById('openMain');
    var blancDiv = document.getElementById('blanc');
    var fleche = document.querySelector('.fleche');
    var navbar = document.querySelector('.navbar');
    var linkedin = document.querySelector('.linkedin');
    var cv = document.querySelector('.cv')

    if (main.style.display === 'none' || main.style.display === '') {
        main.style.display = 'block';
        closetxt.style.display = 'none';
        blancDiv.style.display = 'none';
        fleche.style.display ='block';
        navbar.style.display ='block';
        linkedin.style.display = 'block';
        cv.style.display = 'block';
    } else {
        main.style.display = 'none';
        closetxt.style.display = 'block';
        blancDiv.style.display = 'block';
        fleche.style.display = 'none';
        navbar.style.display = 'none';
        linkedin.style.display = 'none';
        cv.style.display = 'none';
    }
}