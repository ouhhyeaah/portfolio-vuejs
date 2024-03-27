<script setup>

import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

<template>
    <div class="w-full flex justify-between p-10">
      <div class="p-6 text-4xl font-bold hover:shadow-2xl rounded-3xl transition duration-300 ease-in-out hover:scale-105 dark:text-white silk-flower">
        <a href="#">
          Louis.
        </a>
      </div>
      <div>
        <ul class="dark:text-white flex gap-6 mont-bold">
          <li class="p-6 hover:shadow-xl rounded-xl  transition duration-300 ease-in-out hover:scale-105 hover:text-brown-color"
              :class="isDark ? 'dark-neumorphism' : 'neumorphism'"
          ><a href="#education">Education</a></li>
          <li class="p-6 hover:shadow-xl rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:text-brown-color"
              :class="isDark ? 'dark-neumorphism' : 'neumorphism'"
          >Experience</li>
          <li class="p-6 hover:shadow-xl rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:text-brown-color"
              :class="isDark ? 'dark-neumorphism' : 'neumorphism'"
          >Projects</li>
          <li class="p-6 hover:shadow-xl rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:text-brown-color"
              :class="isDark ? 'dark-neumorphism' : 'neumorphism'"
          >Contact</li>
          <li class="duration-300 ease-in-out hover:scale-105 hover:text-brown-color"
              :class="isDark ? 'dark-neumorphism' : 'neumorphism'"
              @click="toggleAnimation"
          >
            <ThemeToggle @click="toggleDark()" id="toggleBtn" style="cursor: none" />
          </li>
        </ul>
      </div>
    </div>

</template>

<script>
import ThemeToggle from "@/components/ThemeToggle.vue";

window.addEventListener("load", () => {
  toggleAnimation()
})
const toggleAnimation = () => {
  const isDark = document.getElementsByClassName("dark")
  const toggleButton = document.getElementById('toggleBtn')
  if (isDark.length != 0){
    toggleButton.style.transition = "translate .7s"
    toggleButton.style.translate = "0px 40px"
  }else{
    toggleButton.style.transition = "translate .7s"
    toggleButton.style.translate = "0px 0px"
  }
}

export default {
  name:"NavBar",
  components: {
    ThemeToggle,
  }
}
</script>