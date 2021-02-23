// Début Partie Carousel
const images = document.querySelectorAll('#galery img');
let imgActive = 0;
let interval; // Variable globale pour stocker l'intervalle de temps
images[imgActive].classList.add('show');
var stop = true;

// Masquer les photos sauf la première
for (let i = 1; i < images.length; i += 1) {
  images[i].classList.add('hidden');
}

// Clic sur bouton suivant
document.querySelector('#next').addEventListener('click', function () {
  next();
});

// Clic sur bouton précédent
document.querySelector('#prev').addEventListener('click', function () {
  prev();
});

// Clic du bouton play
document.querySelector('#play').addEventListener('click', function () {
  if (stop == true) {
    interval = setInterval(next, 4000); // création de l'intervalle de temps
    stop = false;
    // console.log(stop);
  }
});

// Clic du bouton pause
document.querySelector('#pause').addEventListener('click', function () {
  if (stop == false) {
    clearInterval(interval); // destruction de l'intervalle de temps
    stop = true;
    // console.log(stop);
  }
});

// Fonction photo suivante
const next = function () {
  images[imgActive].classList.remove('show');
  images[imgActive].classList.add('hidden');
  imgActive += 1;
  if (imgActive >= images.length) {
    imgActive = 0;
  }
  images[imgActive].classList.remove('hidden');
  setTimeout(() => {
    images[imgActive].classList.add('show');
  }, 300);
};

// Fonction photo précédente
const prev = function () {
  images[imgActive].classList.remove('show');
  images[imgActive].classList.add('hidden');
  imgActive -= 1;
  if (imgActive < 0) {
    imgActive = images.length - 1;
  }
  images[imgActive].classList.remove('hidden');
  setTimeout(() => {
    images[imgActive].classList.add('show');
  }, 300);
};

// gestion touches clavier
window.addEventListener('keydown', function (e) {
  if (e.key == 'ArrowRight') {
    next();
  }
  if (e.key == 'ArrowLeft') {
    prev();
  }
});

// Fin Partie Carousel
