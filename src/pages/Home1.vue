<template>

  <!-- NAVBAR -->
  <nav class="fixed top-0 left-0 right-0 z-50 glass">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold gradient">
        Angelo.dev
      </h1>

      <div class="hidden md:flex gap-6">
        <a href="#home" class="hover:text-blue-400">Accueil</a>
        <a href="#skills" class="hover:text-blue-400">Compétences</a>
        <a href="#projects" class="hover:text-blue-400">Projets</a>
        <a href="#contact" class="hover:text-blue-400">Contact</a>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <section id="home" class="min-h-screen flex items-center px-6">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

      <div>
        <p class="text-blue-400 font-semibold mb-3">
          Développeur Web Full-Stack Junior
        </p>

        <h1 class="text-5xl md:text-7xl font-bold leading-tight mb-6">
          BELAHY <br>
          <span class="gradient">
            AN-GNEN ANGELO
          </span>
        </h1>

        <p class="text-gray-300 text-lg leading-relaxed mb-8">
          Passionné par le développement web moderne avec Laravel,
          Vue.js et TailwindCSS. J’aime créer des applications web
          responsives, dynamiques et performantes.
        </p>

        <div class="flex flex-wrap gap-4">
          <a href="#projects"
            class="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition">
            Voir mes projets
          </a>

          <a href="#contact"
            class="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
            Contact
          </a>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="w-[320px] h-[320px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
          <div class="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
            <span class="text-8xl">
              👨‍💻
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- SKILLS -->
  <section id="skills" class="py-24 px-6">
    <div class="max-w-7xl mx-auto">

      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">
          Mes Compétences
        </h2>

        <p class="text-gray-400">
          Technologies que j’utilise dans mes projets
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">

        <!-- FRONTEND -->
        <div class="glass rounded-3xl p-8 card-hover">
          <h3 class="text-2xl font-bold mb-6 text-blue-400">
            Frontend
          </h3>

          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 bg-blue-500/20 rounded-full">HTML5</span>
            <span class="px-4 py-2 bg-blue-500/20 rounded-full">CSS3</span>
            <span class="px-4 py-2 bg-blue-500/20 rounded-full">JavaScript</span>
            <span class="px-4 py-2 bg-blue-500/20 rounded-full">Vue.js</span>
            <span class="px-4 py-2 bg-blue-500/20 rounded-full">Pinia</span>
            <span class="px-4 py-2 bg-blue-500/20 rounded-full">TailwindCSS</span>
            <span class="px-4 py-2 bg-blue-500/20 rounded-full">DaisyUI</span>
            <span class="px-4 py-2 bg-blue-500/20 rounded-full">Sass</span>
            <span class="px-4 py-2 bg-blue-500/20 rounded-full">Responsive Design</span>
          </div>
        </div>

        <!-- BACKEND -->
        <div class="glass rounded-3xl p-8 card-hover">
          <h3 class="text-2xl font-bold mb-6 text-purple-400">
            Backend
          </h3>

          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 bg-purple-500/20 rounded-full">PHP</span>
            <span class="px-4 py-2 bg-purple-500/20 rounded-full">Laravel</span>
            <span class="px-4 py-2 bg-purple-500/20 rounded-full">POO</span>
            <span class="px-4 py-2 bg-purple-500/20 rounded-full">API REST</span>
            <span class="px-4 py-2 bg-purple-500/20 rounded-full">MySQL</span>
          </div>
        </div>

        <!-- TOOLS -->
        <div class="glass rounded-3xl p-8 card-hover">
          <h3 class="text-2xl font-bold mb-6 text-pink-400">
            Outils
          </h3>

          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 bg-pink-500/20 rounded-full">Git</span>
            <span class="px-4 py-2 bg-pink-500/20 rounded-full">GitHub</span>
            <span class="px-4 py-2 bg-pink-500/20 rounded-full">VS Code</span>
            <span class="px-4 py-2 bg-pink-500/20 rounded-full">Windows</span>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section id="projects" class="py-24 px-6">
    <div class="max-w-7xl mx-auto">

      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">
          Mes Projets
        </h2>

        <p class="text-gray-400">
          Quelques projets réalisés
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">

        <!-- PROJECT -->
        <div class="glass rounded-3xl overflow-hidden card-hover">
          <div class="h-52 bg-gradient-to-r from-blue-500 to-cyan-500"></div>

          <div class="p-6">
            <h3 class="text-2xl font-bold mb-4">
              Plateforme QCM
            </h3>

            <p class="text-gray-400 mb-6">
              Application d’examen en ligne développée avec Laravel,
              Vue.js et MySQL.
            </p>

            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-white/10 rounded-full text-sm">
                Laravel
              </span>

              <span class="px-3 py-1 bg-white/10 rounded-full text-sm">
                Vue.js
              </span>

              <span class="px-3 py-1 bg-white/10 rounded-full text-sm">
                MySQL
              </span>
            </div>
          </div>
        </div>

        <!-- PROJECT -->
        <div class="glass rounded-3xl overflow-hidden card-hover">
          <div class="h-52 bg-gradient-to-r from-purple-500 to-pink-500"></div>

          <div class="p-6">
            <h3 class="text-2xl font-bold mb-4">
              Spotify Clone
            </h3>

            <p class="text-gray-400 mb-6">
              Interface moderne inspirée de Spotify avec Vue.js,
              TailwindCSS et gestion d’état Pinia.
            </p>

            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-white/10 rounded-full text-sm">
                Vue.js
              </span>

              <span class="px-3 py-1 bg-white/10 rounded-full text-sm">
                TailwindCSS
              </span>

              <span class="px-3 py-1 bg-white/10 rounded-full text-sm">
                Pinia
              </span>
            </div>
          </div>
        </div>

        <!-- PROJECT -->
        <div class="glass rounded-3xl overflow-hidden card-hover">
          <div class="h-52 bg-gradient-to-r from-orange-500 to-red-500"></div>

          <div class="p-6">
            <h3 class="text-2xl font-bold mb-4">
              Garage Auto
            </h3>

            <p class="text-gray-400 mb-6">
              Site web de gestion de garage avec réservations
              et services automobiles.
            </p>

            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-white/10 rounded-full text-sm">
                Laravel
              </span>

              <span class="px-3 py-1 bg-white/10 rounded-full text-sm">
                API REST
              </span>

              <span class="px-3 py-1 bg-white/10 rounded-full text-sm">
                Responsive
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="py-24 px-6">
    <div class="max-w-4xl mx-auto text-center">

      <h2 class="text-4xl font-bold mb-6">
        Contact
      </h2>

      <p class="text-gray-400 mb-10">
        Disponible pour un stage, une alternance ou un poste
        de développeur web full-stack junior.
      </p>

      <div class="glass rounded-3xl p-10">

        <div class="space-y-6 text-lg">

          <p>
            📧 Votre Email
          </p>

          <p>
            📱 Votre Téléphone
          </p>

          <p>
            💻 GitHub : github.com/votreprofil
          </p>

        </div>

      </div>
    </div>
  </section>

</template>

<script setup>

</script>

<style>
html {
  scroll-behavior: smooth;
}


</style>
