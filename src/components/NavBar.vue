<script setup>

import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark()
const toggleDark = useToggle(isDark)
import MobileNavbar from "@/components/MobileNavbar.vue";
const navbar_items = [
  {id: 1, name: 'Education', link: '#education'},
  {id: 2, name: 'Skills', link: '#skills'},
  {id: 3, name: 'Projects', link: '#projects'},
  {id: 4, name: 'Contact', link: '#contact'}
]
</script>

<!--<template>-->
<!--    <div class="w-full flex justify-between p-10">-->
<!--      <div class="p-6 text-4xl font-bold hover:shadow-2xl rounded-3xl transition duration-300 ease-in-out hover:scale-105 dark:text-white silk-flower">-->
<!--        <a href="#" class="text-gradient">-->
<!--          Louis.-->
<!--        </a>-->
<!--      </div>-->
<!--      <div class="flex gap-10">-->
<!--        <ul class="dark:text-white flex gap-6 mont-bold flex my-auto" v-for="navbar_item in navbar_items" :key="navbar_item.id" >-->
<!--          <a :href="navbar_item.link" class="flex" >-->
<!--              <li class="p-6 hover:shadow-xl rounded-xl  transition duration-300 ease-in-out hover:scale-105 hover:text-brown-color"-->
<!--                :class="isDark ? 'dark-neumorphism' : 'neumorphism'"-->
<!--              >{{navbar_item.name}}-->
<!--            </li>-->
<!--          </a>-->
<!--        </ul>-->
<!--        <ul class="h-full" @click="toggleAnimation">-->
<!--          <ThemeToggle @click="toggleDark(), toggleAnimation()" id="toggleBtn" style="cursor: none" />-->
<!--        </ul>-->
<!--      </div>-->
<!--    </div>-->
<!--</template>-->
<!--<template>-->
<!--  <div class="sm:flex justify-between sm:items-center sm:px-4 sm:py-3 pb-5 h-full">-->
<!--    <div class="flex justify-around px-4 py-3 sm:p-0">-->
<!--        <div class="p-6 text-4xl font-bold hover:shadow-2xl rounded-3xl transition duration-300 ease-in-out hover:scale-105 dark:text-white silk-flower">-->
<!--          <a href="#" class="text-gradient">-->
<!--            Louis.-->
<!--          </a>-->
<!--        </div>-->
<!--      <a href="#">-->
<!--        <ul v-if="!isOpen" class="lg:hidden md:hidden h-full" @click="toggleAnimation">-->
<!--          <ThemeToggle @click="toggleDark(), toggleAnimation()" id="toggleBtn" style="cursor: none" />-->
<!--        </ul>-->
<!--      </a>-->
<!--      <div class="sm:hidden md:hidden translate-y-[30%]">-->
<!--        <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">-->
<!--          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">-->
<!--            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>-->
<!--            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>-->
<!--          </svg>-->
<!--        </button>-->
<!--      </div>-->
<!--    </div>-->
<!--    <nav :class="isOpen ? 'flex justify-start overflow-x-scroll overflow-y-hidden bg-transparent text-xs sm:py-10' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex lg:justify-end justify-center md:gap-8 h-full flex lg:gap-12">-->
<!--      <ul class="dark:text-white flex lg:gap-8 gap-6 mont-bold" v-for="navbar_item in navbar_items" :key="navbar_item.id" >-->
<!--        <a :href="navbar_item.link" class="flex justify-center h-full" >-->
<!--            <li class="lg:p-6 p-4 hover:shadow-xl rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:text-brown-color"-->
<!--              :class="isDark ? 'dark-neumorphism' : 'neumorphism'"-->
<!--            >{{navbar_item.name}}-->
<!--          </li>-->
<!--        </a>-->
<!--      </ul>-->
<!--      <ul class="h-full hidden lg:block md:block" @click="toggleAnimation()">-->
<!--        <a href="#">-->
<!--          <ThemeToggle @click="toggleDark(), toggleAnimation()" id="toggleBtn" style="cursor: none" />-->
<!--        </a>-->
<!--      </ul>-->
<!--    </nav>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div class="w-full">
    <!--    Navbar pour mobile-->
    <nav class="block sm:hidden">
      <MobileNavbar :navbar-items="navbar_items" />
    </nav>
    <!--    Navbar pour desktop-->
    <nav class="hidden sm:block w-full">
          <div class="w-full flex justify-between p-10">
            <div class="p-6 text-4xl font-bold hover:shadow-2xl rounded-3xl transition duration-300 ease-in-out hover:scale-105 dark:text-white silk-flower">
              <a href="#" class="text-gradient">
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
              <ul class="h-full" @click="toggleAnimation()">
                <ThemeToggle @click="toggleDark()" id="toggleBtn" style="cursor: none" />
              </ul>
            </div>
          </div>
    </nav>

  </div>

</template>

<script>
import ThemeToggle from "@/components/ThemeToggle.vue";
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
  data() {
    return {
      isOpen: false,
    }
  },
  components: {
    ThemeToggle,
  },
}
</script>