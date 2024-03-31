<template>
  <div class="dark:bg-dark-mode h-full pb-32 dark:text-white overflow-x-hidden" >
    <div class="gradient-circle overflow-x-hidden"></div>
    <div class="customcc sm:block hidden md:block" :class="isDark ? 'customcc-dark-theme' : 'customcc' "></div>

    <NavBar/>
    <Hero :isDark="isDark" />
    <EducationView :isDark="isDark"/>
    <SkillsComponent/>
    <FooterView/>
    <ScrollToTheTopButton/>
  </div>
</template>

<script>
import {useDark} from "@vueuse/core";
const isDark = useDark()

//TODO Add a div with gradient-circle-bottom class to the last element of the page
import SkillsComponent from "@/components/Skills/SkillsComponent.vue";
import NavBar from "./components/Navbar/NavBar.vue";
import Hero from "@/components/Hero/HeroView.vue";
import EducationView from "@/components/Education/EducationView.vue";
import FooterView from "@/components/Footer/FooterView.vue";
import ScrollToTheTopButton from "@/components/add-on/ScrollToTheTopButton.vue";
export default {
  name: 'App',
  components: {
    SkillsComponent,
    EducationView,
    NavBar,
    Hero,
    FooterView,
    ScrollToTheTopButton
  },
  setup: () => {
    return { isDark }
  },
  mounted() {
    const cursor = document.querySelector('.customcc');
    function moveCursor(e) {
      const mouseX = e.clientX
      const mouseY = e.clientY
      const cursorHalfWidth = cursor.offsetWidth / 2
      const cursorHalfHeight = cursor.offsetHeight / 2
      // Smooth transition
      cursor.style.transform = 'translate(' + (mouseX - cursorHalfWidth) + 'px, ' + (mouseY - cursorHalfHeight - 80) + 'px)';
    }
    document.addEventListener('mousemove', function (e) {
      requestAnimationFrame(function () {
        moveCursor(e);
      });
    });
  },
  methods: {
    isMobile() {
      return window.innerWidth < 768;
    }
  },
}

</script>
