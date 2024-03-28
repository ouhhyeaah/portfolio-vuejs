<script setup>

import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark()
const toggleDark = useToggle(isDark)


const navbar_items = [
  {id: 1, name: 'Education', link: '#education'},
  {id: 2, name: 'Skills', link: '#skills'},
  {id: 3, name: 'Projects', link: '#projects'},
  {id: 4, name: 'Contact', link: '#contact'}
]
</script>

<template>
    <div class="w-full flex justify-between p-10">
      <div class="p-6 text-4xl font-bold hover:shadow-2xl rounded-3xl transition duration-300 ease-in-out hover:scale-105 dark:text-white silk-flower">
        <a href="#">
          Louis.
        </a>
      </div>
      <div class="flex gap-10">
        <ul class="dark:text-white flex gap-6 mont-bold flex my-auto" v-for="navbar_item in navbar_items" :key="navbar_item.id" >
          <a :href="navbar_item.link" class="flex" >
              <li class="p-6 hover:shadow-xl rounded-xl  transition duration-300 ease-in-out hover:scale-105 hover:text-brown-color"
                :class="isDark ? 'dark-neumorphism' : 'neumorphism'"
              >{{navbar_item.name}}
            </li>
          </a>
        </ul>

        <ul class="h-full" @click="toggleAnimation">
          <ThemeToggle @click="toggleDark(), toggleAnimation()" id="toggleBtn" style="cursor: none" />

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
  if (isDark.length !== 0){
    toggleButton.style.transition = "translate .7s"
    toggleButton.style.translate = "0px 150%"
  }else{
    toggleButton.style.transition = "translate .7s"
    toggleButton.style.translate = "0px 0%"
  }
}

export default {
  name:"NavBar",
  components: {
    ThemeToggle,
  }
}
</script>