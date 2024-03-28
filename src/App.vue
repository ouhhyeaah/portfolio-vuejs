<script setup>
import { useDark } from "@vueuse/core";
const isDark = useDark()
import {onMounted} from "vue";
import SkillsComponent from "@/components/SkillsComponent.vue";

onMounted(() => {
  const cursor = document.querySelector('.customcc');
  function moveCursor(e) {
    const mouseX = e.clientX
    const mouseY = e.clientY
    const cursorHalfWidth = cursor.offsetWidth / 2
    const cursorHalfHeight = cursor.offsetHeight / 2
    // Smooth transition
    cursor.style.transform = 'translate(' + (mouseX - cursorHalfWidth) + 'px, ' + (mouseY - cursorHalfHeight) + 'px)';
  }
  document.addEventListener('mousemove', function (e) {
    requestAnimationFrame(function () {
      moveCursor(e);
    });
  });
})
</script>
<template>
  <div class="dark:bg-dark-mode h-full pb-32 dark:text-white overflow-hidden" >
    <div class="gradient-circle"></div>
    <div class="customcc" :class="isDark ? 'customcc-dark-theme' : 'customcc' "></div>
    <NavBar/>
    <Hero/>
    <EducationView/>

    <SkillsComponent/>
    <FooterView/>
  </div>
</template>

<script>
//TODO Add a div with gradient-circle-bottom class to the last element of the page
import NavBar from "./components/NavBar.vue";
import Hero from "@/components/HeroView.vue";
import EducationView from "@/components/EducationView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  name: 'App',
  components: {
    EducationView,
    NavBar,
    Hero,
    FooterView
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
:root{
  --dark-gray:#16171d;
  --dark-blue: #10182a;
  --color-cursor: #ffffff;
  --cursor-outline-shade: 0.3;
  --cursor-size: 10px;
  --cursor-outline-size: 12px;
}
html {
  cursor: none;
  background: #e0e0e1;
  scroll-behavior: smooth;
  overflow-x: hidden;
}
.customcc{
  width: 15px;
  height: 15px;
  background: var(--dark-blue);
  border-radius: 50%;
  opacity: 0.8;
  position: fixed;
  z-index: 9999; /* assure que le curseur soit au dessus de tout le reste */
  pointer-events: none; /* assure que le curseur n'interfère pas avec les éléments de la page */
}
.customcc-dark-theme{
  width: 15px;
  height: 15px;
  background: var(--color-cursor);
  border-radius: 50%;
  opacity: 0.8;
  position: fixed;
  z-index: 9999; /* assure que le curseur soit au dessus de tout le reste */
  pointer-events: none; /* assure que le curseur n'interfère pas avec les éléments de la page */
}
.neumorphism {
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow:  20px 20px 60px #bebebe,
  -20px -20px 60px #ffffff;
}
.dark-neumorphism {
  border-radius: 50px;
  background: #16171c;
  box-shadow:  29px 29px 058px #09090b,
  -29px -29px 58px #23252d;
}
.montserrat {
  font-family: "Montserrat";
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: var(--dark-blue);
}
.test {
  //background: radial-gradient(circle at top right, #303e51,  #10182b );
  background: radial-gradient(
      circle at -1000px -1000px,
      #303e51,  #10182b
  );
}


</style>
