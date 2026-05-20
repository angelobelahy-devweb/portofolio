<script setup>
import { MenuIcon } from '@lucide/vue';
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const activeLink = ref(window.location.hash || '#accueil')

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const setActive = (link) => {
  activeLink.value = link
  isOpen.value = false
}

const handleHashChange = () => {
  activeLink.value = window.location.hash || '#accueil'
}

onMounted(() => {
  window.addEventListener('hashchange', handleHashChange)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', handleHashChange)
})

const formations = [
  {
    year: "2025 - 2026",
    name: "Hopes Formation",
    description: "Formation spécialisée en développement web avec une concentration sur Laravel et VueJS. Cette formation m'a permis de maîtriser la création d'API RESTF, la gestion des routes, l'authentification, ainsi que les bonnes pratiques de Laravel. Côté VueJS, j'ai appris à construire des interfaces dynamiques avec des composants réutilisables et les appels API. Des projets concrets ont été réalisés pour renforcer l'intégration entre backend et frontend."
  },
  {
    year: "2022 - 2023",
    name: "Nir'Info",
    description: "Formation spécialisée en PHP et Javascript, axée sur le développement d'applications web dynamiques. Maîtrise de la programmation orientée objet (POO) pour structurer le code de manière modulaire et maintenable."
  },
];
const projects = [
  {
    title: "Spotify Clone",
    image: "/src/assets/images/spotify.png",
    description:
      "Application moderne inspirée de Spotify avec lecteur audio, playlists et design responsive.",
    techs: [
      "/src/assets/images/vuejs.PNG", 
      "/src/assets/images/laravel.PNG", 
      "/src/assets/images/tailwind.PNG",
    ],
  },
  {
    title: "Plateforme de music",
    image: "/src/assets/images/music.png",
    description:
      "Application de music d'un Artiste avec lecteur audio, téléchargement d'un audio pour pratiquer mes compétence en javascript.",
    techs: [
      "/src/assets/images/js.PNG", 
      "/src/assets/images/css.PNG", 
    ],
  },
  {
    title: "Garage Automobile",
    image: "/src/assets/images/garages.png",
    description:
      "Ce site permet aux clients de consulter les services du garages, d'acheter des pièces automobiles, de demander une réparation ou un dépannage, et aussi de réserver un lavage de véhicule en ligne.",
    techs: [
      "/src/assets/images/sass.PNG", 
      "/src/assets/images/php.PNG", 
    ],
  },
  {
    title: "Plateforme d'examens",
    image: "/src/assets/images/spotify.JPG",
    description:
      "Système d’examens de métier et de langue avec QCM, comprehension de texte, disseration, mot croisé et mot relié. Les professeurs on la possibilité de corriger les mettre des notes, de mettre des critiques, de barré les mot incorrecte et aussi les examens ont des minuteries.",
    techs: [
      "/src/assets/images/mysql.PNG", 
      "/src/assets/images/laravel.PNG", 
      "/src/assets/images/tailwind.PNG",
      "/src/assets/images/DaisyUI.PNG",
    ],
  },
  {
    title: "Agenda App",
    image: "/src/assets/images/agenda.png",
    description:
      "Application de gestion de tâches avec localStorage et interface responsive.",
    techs: [
      "/src/assets/images/vuejs.PNG",  
      "/src/assets/images/tailwind.PNG",
    ],
  },
  {
    title: "Réseaux Sociaux",
    image: "/src/assets/images/reseaux.png",
    description:
      "Application de reseaux sociaux avec des envoye des messages, publication des post, commenter ou de likez des post, voir les profil des autres utilisateur, mettre des story et ajouter ou supprimer une invitation d'amis.",
    techs: [
      "/src/assets/images/sass.PNG", 
      "/src/assets/images/php.PNG", 
    ],
  },
];

const langages = [
  {
    icon: "/src/assets/images/html.png",
    title: "HTML",
    niveau: "w-[95%]",
    color: "bg-red-500",
  },
  {
    icon: "/src/assets/images/css.PNG",
    title: "CSS",
    niveau: "w-[80%]",
    color: "bg-blue-800",
  },
  {
    icon: "/src/assets/images/js.PNG",
    title: "Javascript",
    niveau: "w-[69%]",
    color: "bg-yellow-500",
  },
  {
    icon: "/src/assets/images/php.PNG",
    title: "PHP",
    niveau: "w-[85%]",
    color: "bg-blue-400",
  },
  {
    icon: "/src/assets/images/sass.PNG",
    title: "SASS",
    niveau: "w-[60%]",
    color: "bg-pink-400",
  },
  {
    icon: "/src/assets/images/sql.PNG",
    title: "sql",
    niveau: "w-[65%]",
    color: "bg-blue-800",
  },
];
const frameworks = [
  {
    icon: "/src/assets/images/symfony.PNG",
    title: "Symfony",
    niveau: "w-[65%]",
    color: "bg-black",
  },
  {
    icon: "/src/assets/images/laravel.PNG",
    title: "Laravel",
    niveau: "w-[80%]",
    color: "bg-red-600",
  },
  {
    icon: "/src/assets/images/vuejs.PNG",
    title: "VueJS",
    niveau: "w-[80%]",
    color: "bg-green-400",
  },
  {
    icon: "/src/assets/images/tailwind.PNG",
    title: "TailwindCSS",
    niveau: "w-[85%]",
    color: "bg-cyan-500",
  },
  {
    icon: "/src/assets/images/pinia.PNG",
    title: "Pinia",
    niveau: "w-[65%]",
    color: "bg-yellow-200",
  },
  {
    icon: "/src/assets/images/bootstrap.PNG",
    title: "Bootstrap",
    niveau: "w-[85%]",
    color: "bg-violet-800",
  },
  {
    icon: "/src/assets/images/daisyui.PNG",
    title: "DaisyUI",
    niveau: "w-[85%]",
    color: "bg-yellow-500",
  },
];
const bd = [
  {
    icon: "/src/assets/images/mysql.PNG",
    title: "MySQL",
    niveau: "w-[85%]",
    color: "bg-orange-400",
  },
  {
    icon: "/src/assets/images/postgresql.PNG",
    title: "PostgreSQL",
    niveau: "w-[55%]",
    color: "bg-blue-900",
  },
];
const outils = [
  {
    icon: "/src/assets/images/git.PNG",
    title: "GIT",
    niveau: "w-[85%]",
    color: "bg-green-100",
  },
  {
    icon: "/src/assets/images/github.PNG",
    title: "GitHub",
    niveau: "w-[80%]",
    color: "bg-black",
  },
  {
    icon: "/src/assets/images/vscode.PNG",
    title: "VSCode",
    niveau: "w-[95%]",
    color: "bg-blue-500",
  },
];
const design = [
  {
    icon: "/src/assets/images/photoshop.PNG",
    title: "Photoshop",
    niveau: "w-[50%]",
    color: "bg-blue-500",
  },
];
const bureautique = [
  {
    icon: "/src/assets/images/word.PNG",
    title: "Word",
    niveau: "w-[80%]",
    color: "bg-blue-500",
  },
  {
    icon: "/src/assets/images/excel.PNG",
    title: "Excel",
    niveau: "w-[60%]",
    color: "bg-green-500",
  },
];
</script>
<template>
  <div class="bg-[#05070e] text-white min-h-screen relative">
    <!-- HEADER -->
   <header
    class="border-b border-white/10 bg-[#111827]/90 backdrop-blur sticky top-0 z-50"
  >
    <div
      class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
    >
      <!-- LOGO -->
      <h1 class="text-2xl font-bold text-red-500">
        <a href="#accueil">
          <ul class="flex">
            <li class="folio">P</li>
            <li class="folio">O</li>
            <li class="folio">R</li>
            <li class="folio">T</li>
            <li class="folio">F</li>
            <li class="folio">O</li>
            <li class="folio">L</li>
            <li class="folio">I</li>
            <li class="folio">O</li>
          </ul>
        </a>
      </h1>

      <!-- MENU DESKTOP -->
      <nav class="hidden md:flex gap-6 text-sm">

        <a
          href="#accueil"
          @click="setActive('#accueil')"
          :class="activeLink === '#accueil'
            ? 'text-red-500'
            : 'text-white hover:text-red-500'"
          class="transition"
        >
          Accueil
        </a>

        <a
          href="#about"
          @click="setActive('#about')"
          :class="activeLink === '#about'
            ? 'text-red-500'
            : 'text-white hover:text-red-500'"
          class="transition"
        >
          À propos
        </a>

        <a
          href="#formation"
          @click="setActive('#formation')"
          :class="activeLink === '#formation'
            ? 'text-red-500'
            : 'text-white hover:text-red-500'"
          class="transition"
        >
          Formations
        </a>

        <a
          href="#skills"
          @click="setActive('#skills')"
          :class="activeLink === '#skills'
            ? 'text-red-500'
            : 'text-white hover:text-red-500'"
          class="transition"
        >
          Compétences
        </a>

        <a
          href="#experience"
          @click="setActive('#experience')"
          :class="activeLink === '#experience'
            ? 'text-red-500'
            : 'text-white hover:text-red-500'"
          class="transition"
        >
          Expérience
        </a>

        <a
          href="#projects"
          @click="setActive('#projects')"
          :class="activeLink === '#projects'
            ? 'text-red-500'
            : 'text-white hover:text-red-500'"
          class="transition"
        >
          Projets
        </a>

      </nav>

      <!-- BOUTON MOBILE -->
      <button
        @click="toggleMenu"
        class="bg-red-500 text-white md:hidden p-2 rounded-md"
      >
        ☰
      </button>
    </div>
     <!-- MENU MOBILE -->
    <nav
      v-if="isOpen"
      class="md:hidden bg-[#111827] border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm"
    >
      <a
        href="#accueil"
        @click="setActive('#accueil')"
        :class="[
          activeLink === '#accueil'
            ? 'text-red-500'
            : 'text-white hover:text-red-500'
        ]"
      >
        Accueil
      </a>

      <a
        href="#about"
        @click="setActive('#about')"
        :class="[
          activeLink === '#about'
            ? 'text-red-500'
            : 'text-white hover:text-red-500'
        ]"
      >
        À propos
      </a>

      <a
        href="#formation"
        @click="setActive('#formation')"
        :class="[
          activeLink === '#formation'
            ? 'text-red-500'
            : 'text-white hover:text-red-500'
        ]"
      >
        Formations
      </a>

      <a
        href="#skills"
        @click="setActive('#skills')"
        :class="[
          activeLink === '#skills'
            ? 'text-red-500'
            : 'text-white hover:text-red-500'
        ]"
      >
        Compétences
      </a>

      <a
        href="#experience"
        @click="setActive('#experience')"
        :class="[
          activeLink === '#experience'
            ? 'text-red-500'
            : 'text-white hover:text-red-500'
        ]"
      >
        Expérience
      </a>

      <a
        href="#projects"
        @click="setActive('#projects')"
        :class="[
          activeLink === '#projects'
            ? 'text-red-500'
            : 'text-white hover:text-red-500'
        ]"
      >
        Projets
      </a>
    </nav>
  </header>

    <!-- ACCUEIL -->
    <section id="accueil" class="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <p class="text-red-500 font-semibold mb-3">Développeur Web Fullstack</p>

        <h2 class="text-5xl md:text-6xl font-black leading-tight">
          BELAHY An-Gnen Angelo
        </h2>

        <p class="mt-6 text-gray-300 leading-8 text-lg">
          Étudiant développeur web passionné par la création d’applications modernes avec Vue.js, Laravel et TailwindCSS. J’aime développer des interfaces responsives, rapides et modernes.
        </p>

        <div class="flex flex-wrap gap-4 mt-8">
          <button class="bg-red-600 hover:shadow-white hover:shadow hover:translate-y-1 hover:bg-transparent px-5 py-2 rounded-[20px] font-semibold transition cursor-pointer">
           <span class="far fa-file-pdf"></span> Télécharger CV
          </button>

          <button class="border border-red-600 text-red-500 px-5 py-2 rounded-sm cursor-pointer hover:bg-red-600 hover:text-white">
            Voir mes projets
          </button>
        </div>
        <div class="flex flex-col gap-1">
          <a href="tel:0325782655" class="flex gap-2 mt-2 items-center text-xs hover:font-semibold transition-all">
            <span class="fas fa-phone"></span>
            +261 32 57 826 55
          </a>
          <a href="" class="flex gap-2 mt-2 items-center text-xs hover:font-semibold transition-all">
            <span class="fas fa-envelope"></span>
            angelobelahy@gmail.com
          </a>
          <a href="" class="flex gap-2 mt-2 items-center text-xs hover:font-semibold transition-all">
            <span class="fas fa-map-marker-alt"></span>
            Ambohitrarahamba
          </a>
        </div>
      </div>

      <div class="flex justify-center">
        <div id="profil" class="circle w-[300px] h-[300px] bg-gradient-to-br from-red-600 to-[#0f172a] pt-2 shadow-2xl flex flex-col items-center justify-center">
          <div class="inner w-[280px] h-[280px]  flex items-center justify-center text-center">
            <img src="/src/assets/images/profil.png" alt="Profil" class="rounded-full">
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="max-w-7xl mx-auto px-6 py-20">
      <div class="grid lg:grid-cols-2 gap-10">
        <div>
          <h2 class="text-4xl font-bold mb-6 relative titles w-[max-content]">À propos</h2>

          <p class="text-gray-300 leading-8">
            Je suis un développeur web passionné par les technologies modernes.
            Je développe des applications web dynamiques avec Laravel, Vue.js
            et TailwindCSS. J’aime travailler sur des projets modernes comme
            des plateformes Spotify Clone, systèmes d’examens, applications
            d’agenda et sites de réservation.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-white/5 p-6 bloc1 w-[100%]">
            <h3 class="text-red-500 text-xl font-bold">Frontend</h3>
            <p class="text-gray-400 mt-2">Vue.js, TailwindCSS, JavaScript</p>
          </div>

          <div class="bg-white/5 p-6 bloc1 w-[100%]">
            <h3 class="text-red-500 text-xl font-bold">Backend</h3>
            <p class="text-gray-400 mt-2">PHP, Laravel, API REST</p>
          </div>

          <div class="bg-white/5 p-6 bloc1 w-[100%]">
            <h3 class="text-red-500 text-xl font-bold">Base de données</h3>
            <p class="text-gray-400 mt-2">MySQL</p>
          </div>

          <div class="bg-white/5 p-6 bloc1 w-[100%]">
            <h3 class="text-red-500 text-xl font-bold">Versioning</h3>
            <p class="text-gray-400 mt-2">Git & GitHub</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FORMATION -->
    <section id="formation" class="bg-white/5 py-20">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="relative titles w-[max-content] text-4xl font-bold mb-10">Formations</h2>

        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div v-for="formation in formations" class="p-6  bg-[#05070e] w-full">
            <strong class="text-red-500 mt-2">{{ formation.year }}</strong>
            <h3 class="text-2xl font-bold">{{ formation.name }}</h3>
            <p class="text-gray-400 mt-3 text-sm">{{ formation.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills" class="max-w-7xl mx-auto px-6 py-20">
      <h2 class="text-4xl font-bold mb-10 relative titles w-[max-content]">Compétences</h2>
      <h3 class=" text-2xl font-bold my-4">Langages</h3>
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
        <div v-for="skill in langages" class="hover:border-b-1 hover:border-gray-400 flex flex-col flex-wrap gap-3 bg-white/5 bloc2 p-6 items-center w-[100%] transition hover:translate-y-2">
          <div class="flex justify-center items-center w-10 h-10  text-xl">
            <img :src="`${skill.icon}`" alt="HTML" class="w-8 object-fit-cover">
          </div>
          <span class="skill">{{ skill.title }}</span>
          
          <div class="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
            <div :class="`h-full ${skill.niveau} ${skill.color} rounded-full`"></div>
          </div>
        </div>
      </div>
      <h3 class="text-2xl font-bold my-4">Frameworks & Librarie</h3>
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
        <div v-for="skill in frameworks" class="hover:border-b-1 hover:border-gray-400 flex flex-col flex-wrap gap-3 bg-white/5 bloc2 p-6 items-center w-[100%] transition hover:translate-y-2">
          <div class="flex justify-center items-center w-10 h-10  text-xl">
            <img :src="`${skill.icon}`" alt="HTML" class="w-8  object-fit-cover">
          </div>
          <span class="skill">{{ skill.title }}</span>

          <div class="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
            <div :class="`h-full ${skill.niveau} ${skill.color} rounded-full`"></div>
          </div>
        </div>
      </div>
      <h3 class="text-2xl font-bold my-4">Base de donnée</h3>
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
        <div v-for="skill in bd" class="hover:border-b-1 hover:border-gray-400 flex flex-col flex-wrap gap-3 bg-white/5 bloc2 p-6 items-center w-[100%] transition hover:translate-y-2">
          <div class="flex justify-center items-center w-10 h-10  text-xl">
            <img :src="`${skill.icon}`" alt="HTML" class="w-8  object-fit-cover">
          </div>
          <span class="skill">{{ skill.title }}</span>

          <div class="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
            <div :class="`h-full ${skill.niveau} ${skill.color} rounded-full`"></div>
          </div>
        </div>
      </div>
      <h3 class="text-2xl font-bold my-4">Outils</h3>
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
        <div v-for="skill in outils" class="hover:border-b-1 hover:border-gray-400 flex flex-col flex-wrap gap-3 bg-white/5 bloc2 p-6 items-center w-[100%] transition hover:translate-y-2">
          <div class="flex justify-center items-center w-10 h-10 text-xl">
            <img :src="`${skill.icon}`" alt="HTML" class="w-8  object-fit-cover">
          </div>
          <span class="skill">{{ skill.title }}</span>

          <div class="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
            <div :class="`h-full ${skill.niveau} ${skill.color} rounded-full`"></div>
          </div>
        </div>
      </div>
      <h3 class="text-2xl font-bold my-4">Design</h3>
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
        <div v-for="skill in design" class="hover:border-b-1 hover:border-gray-400 flex flex-col flex-wrap gap-3 bg-white/5 bloc2 p-6 items-center w-[100%] transition hover:translate-y-2">
          <div class="flex justify-center items-center w-10 h-10 text-xl">
            <img :src="`${skill.icon}`" alt="HTML" class="w-8  object-fit-cover">
          </div>
          <span class="skill">{{ skill.title }}</span>

          <div class="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
            <div :class="`h-full ${skill.niveau} ${skill.color} rounded-full`"></div>
          </div>
        </div>
      </div>
      <h3 class="text-2xl font-bold my-4">Bureautique</h3>
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
          <div v-for="skill in bureautique" class="hover:border-b-1 hover:border-gray-400 flex flex-col flex-wrap gap-3 bg-white/5 bloc2 p-6 items-center w-[100%] transition hover:translate-y-2">
            <div class="flex justify-center items-center w-10 h-10 text-xl">
              <img :src="`${skill.icon}`" alt="HTML" class="w-8  object-fit-cover">
            </div>
            <span class="skill">{{ skill.title }}</span>

            <div class="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
              <div :class="`h-full ${skill.niveau} ${skill.color} rounded-full`"></div>
            </div>
          </div>
        </div>
    
    </section>

    <!-- EXPERIENCE -->
    <section id="experience" class="bg-white/5 py-20">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-4xl font-bold mb-10 relative titles w-[max-content]">Expérience</h2>

        <div class="space-y-6">
          <div class="">
            <h3 class="text-2xl font-bold">Développement de projets personnels</h3>

            <p class="text-gray-400 leading-8 mt-4">
              Création de plusieurs applications web modernes :
              Spotify Clone, plateforme d’examens en ligne,
              application Agenda, site de garage automobile
              et plateforme de réservation.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="max-w-7xl mx-auto px-6 py-20 ">
      <h2 class="text-4xl font-bold mb-10 relative titles w-[max-content]">Mes projets</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
        <div
          v-for="project in projects"
          :key="project.title"
          class=" border border-white/10 rounded-2xl bg-[#05070e] overflow-hidden group w-full"
        >
          <div class="h-48 bg-gradient-to-br from-red-600 to-blue-700 relative">
            <img :src="`${project.image}`" alt="Capture des projets" class="w-full h-48 object-cover projet-image">
          </div>

          <div class="p-6 bg-[#05070e]">
            <h3 class="text-2xl font-bold">{{ project.title }}</h3>

            <p class="text-gray-400 mt-3 leading-7 text-sm">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mt-5">
              <div
                v-for="tech in project.techs"
                :key="tech"
                class="flex justify-center items-center w-8 h-8 rounded-full bg-black text-[#05070e] text-xs"
              >
                <img :src="`${tech}`" alt="HTML" class="w-5 object-fit-cover">
              </div>
            </div>
            <div class="mt-5">
              <a href="#" class="border border-red-600 text-red-500 px-5 py-2 rounded-sm cursor-pointer hover:bg-red-600 hover:text-white">Lien sur GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="border-t border-white/10 py-10 text-center text-gray-400">
      <p>© 2026 - Portfolio BELAHY An-Gnen Angelo</p>
    </footer>

    <a href="#accueil" class="fixed w-8 h-8 border border-gray-400 rounded-full flex justify-center items-center text-gray-400 bottom-4 right-4 ">
      <span class="fas fa-arrow-up"></span>
    </a>
  </div>
</template>



<style>
  .active {
    color: rgb(219, 34, 34);
  }
  * {
    transition: .3s;
  }
  html{
      scroll-behavior: smooth;
      scroll-padding-top: 100px;
    }

    body{
      background:#0f172a;
      color:white;
      font-family: Arial, Helvetica, sans-serif;
    }
    .circle {
      animation: circle 10s linear infinite;
    }
    @keyframes circle {
      from {
        rotate: 0deg;
      }
      to {
        rotate: 360deg;
      }
    }
    .inner {
      animation: inner 10s linear infinite;
    }
    @keyframes inner {
      from {
        rotate: 0deg;
      }
      to {
        rotate: -360deg;
      }
    }
    .titles::after {
      content: "";
      width: 60%;
      background-color: #e71822;
      position: absolute;
      bottom: -4px;
      left: -10px;
      border-radius: 10px;
      height: 2px;
    }

    .folio {
        letter-spacing: 1px;
        animation: gros 2.4s linear infinite;
        font-weight: bold;
    }
    .folio:nth-child(1) {
        animation-delay: 0.2s;
    }
    .folio:nth-child(2) {
        animation-delay: 0.4s;
    }
    .folio:nth-child(3) {
        animation-delay: 0.6s;
    }
    .folio:nth-child(4) {
        animation-delay: 0.8s;
    }
    .folio:nth-child(5) {
        animation-delay: 1s;
    }
    .folio:nth-child(6) {
        animation-delay: 1.2s;
    }
    .folio:nth-child(7) {
        animation-delay: 1.4s;
    }
    .folio:nth-child(8) {
        animation-delay: 1.6s;
    }
    .folio:nth-child(9) {
        animation-delay: 1.8s;
    }
    @keyframes gros {
        0% {
            color: white;
            transform: scale(0.8);
        }
        50% {
            color: white;
            transform: scale(0.8);
        }
        100% {
            color: #b72500;
            transform: scale(1.2);
        }
    }
    .glass{
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(10px);
      border:1px solid rgba(255,255,255,0.1);
    }

    .gradient{
      background: linear-gradient(to right,#3b82f6,#8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .card-hover{
      transition:0.3s;
    }

    .card-hover:hover{
      transform: translateY(-8px);
    }
    #profil {
      clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);
    }
    .bloc1 {
      clip-path: polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 86%, 48% 86%, 48% 100%, 15% 100%, 0 100%, 0% 85%);
    }
    .bloc1:hover {
      
      rotate: 10deg;
    }
    .bloc2 {
      clip-path: polygon(72% 5%, 92% 0, 100% 9%, 100% 31%, 100% 100%, 0 100%, 0 10%, 10% 0, 29% 5%);
      border-radius: 10px;
    }
</style>
