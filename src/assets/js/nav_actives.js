// // Menu
// let menuOpen = document.querySelector('#menuHumbergers')
// let span1 = document.querySelector('.menuHumberger-span1')
// let span2 = document.querySelector('.menuHumberger-span2')
// let span3 = document.querySelector('.menuHumberger-span3')
// let navList = document.querySelector('.nav-list')
// let itemLinks = [...document.querySelectorAll('.nav-list-item-link')]



// menuOpen.addEventListener('click', () => {

//   if (!menuOpen.classList.contains('rouge')) {
//     menuOpen.classList.add('rouge')
//     // alert('afficher')
//     span1.style.transform = "translateY(8px) rotate(45deg)"
//     span2.style.transform = "translateX(-50px)"
//     span2.style.opacity = "0"
//     span3.style.transform = "translateY(-8px) rotate(-45deg)"
//     navList.style.position = "fixed"
//     navList.style.top = "-0.3rem"
//     navList.style.right = "-1.5rem"

//   } else {
//     menuOpen.classList.remove('rouge')
//     // alert('fermer')
//     span1.style.transform = "none"
//     span2.style.transform = "none"
//     span2.style.opacity = "1"
//     span3.style.transform = "none"
//      navList.style.position = "fixed"
//     navList.style.right = "-200%"
//   }
// })

// itemLinks.forEach(itemLink => {
//   itemLink.addEventListener('click', () => {
//     menuOpen.classList.remove('rouge')
//     span1.style.transform = "none"
//     span2.style.transform = "none"
//     span2.style.opacity = "1"
//     span3.style.transform = "none"
//      navList.style.position = "fixed"
//     navList.style.right = "-200%"
//   })
// })

const burger = document.querySelector('#menuHumbergers');
const navList = document.querySelector('.nav-list');
const itemLinks = document.querySelectorAll('.nav-list-item-link');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navList.classList.toggle('open');
});

// Fermer au clic sur un lien
itemLinks.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    navList.classList.remove('open');
  });
});


// Savoir Plus
let savoir = document.querySelector('#savoirPlus')
let savoirBtn = document.querySelector('#savoirPlusBtn')
let savoirClose = document.querySelector('#savoirClose')

// Pour stoper la propagation du boîte modal
savoir.addEventListener('click', function (e) {
  e.stopPropagation();
})
savoirClose.addEventListener('click', function () {
  savoir.style.opacity = "0"
  savoir.style.visibility = "hidden"
})
savoirBtn.addEventListener('click', function () {
  savoir.style.opacity = "1"
  savoir.style.visibility = "visible"
  
  
})


// 1) clic sur les liens -> active immédiatement
const liens = document.querySelectorAll(".nav-list-item-link");
liens.forEach(link => {
  link.addEventListener("click", function () {
    liens.forEach(l => l.classList.remove("actives"));
    this.classList.add("actives");
  });
});

// 2) observer pour le scroll -> ajoute/enlève 'actives' selon la section visible
// On observe tous les éléments qui ont un id (sections, header, div[id] etc.)
const sections = Array.from(document.querySelectorAll("[id]"))
  // on filtre pour ne garder que les sections qui correspondent aux liens du menu
  .filter(el => document.querySelector(`.nav-list-item-link[href="#${el.id}"]`));

if (sections.length) {
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -40% 0px", // déclenche un peu avant la fin (ajuste si tu veux)
    threshold: 0.15                // % de la section visible pour la considérer active
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = document.querySelector(`.nav-list-item-link[href="#${id}"]`);
      if (!link) return;

      if (entry.isIntersecting) {
        // retirer la classe sur tous puis ajouter sur le lien correspondant
        liens.forEach(l => l.classList.remove("actives"));
        link.classList.add("actives");
      } else {
        // si la section n'est plus intersecting, on retire la class (optionnel)
        // link.classList.remove("actives");
        // on ne retire ici que si une autre section devient intersecting (évité par l'ajout ci-dessus)
      }
    });
  }, observerOptions);

  sections.forEach(sec => io.observe(sec));
}

// 3) fallback simple si IntersectionObserver non supporté
if (!("IntersectionObserver" in window)) {
  function activeOnScrollFallback() {
    const scrollPos = window.scrollY + window.innerHeight / 3;
    let found = false;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      if (scrollPos >= top && scrollPos < bottom) {
        liens.forEach(l => l.classList.remove("actives"));
        const activeLink = document.querySelector(`.nav-list-item-link[href="#${sec.id}"]`);
        if (activeLink) activeLink.classList.add("actives");
        found = true;
      }
    });
    // si rien trouvé (en haut de page) on active accueil si présent
    if (!found) {
      const accueilLink = document.querySelector('.nav-list-item-link[href="#accueil"]');
      if (accueilLink) {
        liens.forEach(l => l.classList.remove("actives"));
        accueilLink.classList.add("actives");
      }
    }
  }
  window.addEventListener("scroll", activeOnScrollFallback, { passive: true });
  // run once on load
  activeOnScrollFallback();
}

// Le problème vient du calcul scrollY + 200 qui ne capture pas toujours la section #accueil (qui commence à top = 0) quand on est tout en haut.
// Je te propose une solution plus robuste et moderne : IntersectionObserver pour détecter quelle section est visible et basculer la classe actives. Ça fonctionne mieux pour les sections en haut (accueil) et évite les problèmes de marge arbitraire.
// Pourquoi ça corrige le problème #accueil

// IntersectionObserver détecte correctement quand #accueil (qui commence à top = 0) est visible, même si on est tout en haut.

// rootMargin: "0px 0px -40% 0px" déclenche la visibilité quand ~60% de la section est visible — tu peux ajuster cette valeur si tu veux déclencher plus tôt ou plus tard.

// J’ai aussi inclus un fallback basé sur scroll pour les navigateurs plus anciens.




























// -------------------------
// 1. Active au clic
// -------------------------

// const liens = document.querySelectorAll(".nav-list-item-link");

// liens.forEach(link => {
//     link.addEventListener("click", function () {
//         // Enlever toutes les classes actives
//         liens.forEach(l => l.classList.remove("actives"));

//         // Ajouter la class active à l'élément cliqué
//         this.classList.add("actives");
//     });
// });


// -------------------------
// 2. Active selon le scroll
// -------------------------

// const sections = document.querySelectorAll("section, header, div[id]");

// // Fonction qui détecte la section visible
// function activeOnScroll() {
//     let scrollY = window.scrollY + 200; // marge pour activer plus tôt

//     sections.forEach(sec => {
//         if (!sec.id) return; // ignore les éléments sans ID

//         const top = sec.offsetTop;
//         const height = sec.offsetHeight;
//         const id = sec.getAttribute("id");

//         if (scrollY >= top && scrollY <= top + height) {
//             // Retire tous les "actives"
//             liens.forEach(l => l.classList.remove("actives"));

//             // Ajoute la class à celui qui correspond à la section visible
//             const activeLink = document.querySelector(`.nav-list-item-link[href="#${id}"]`);
//             if (activeLink) activeLink.classList.add("actives");
//         }
//     });
// }

// window.addEventListener("scroll", activeOnScroll);
