<template>
  <div class="dark:bg-dark-mode h-full pb-32 dark:text-white overflow-x-hidden" >
    <div class="gradient-circle overflow-x-hidden"></div>
    <div class="customcc" :class="isDark ? 'customcc-dark-theme' : 'customcc' "></div>
    <NavBar/>
    <Hero :isDark="isDark"/>
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
import SkillsComponent from "@/components/SkillsComponent.vue";
import NavBar from "./components/NavBar.vue";
import Hero from "@/components/HeroView.vue";
import EducationView from "@/components/EducationView.vue";
import FooterView from "@/components/FooterView.vue";
import ScrollToTheTopButton from "@/components/ScrollToTheTopButton.vue";
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
  }
}

</script>
