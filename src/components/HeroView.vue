<template>
    <div class="flex gap-6 justify-evenly dark:text-white py-16 lg:w-4/5 md:w-full sm:w-full sm:mx-auto md:mx-auto lg:mx-auto" :class="isDark ? 'dark-neumorphism' : 'neumorphism'">
      <div class="flex flex-col lg:p-10 font-extralight w-1/3 sm:w-1/2 dark:text-white">
        <span class="lg:text-7xl md:text-6xl text-3xl pb-7 dark:text-white mont-bold" >
          Hello 👋
        </span>
        <span class="dark:text-white lg:text-3xl md:text-xl text-xs mont-light text-wrap">
          I'm a cybersecurity student, but I'm also interested in different areas of computer science, such as programming.
        </span>
        <div class="pt-10 flex gap-10 justify-center">
          <SocialView justify_type="justify-around" class="lg:text-6xl md:text-5xl text-3xl" size=16 />
        </div>
      </div>
      <DisplayImage />
    </div>
</template>

<script>
import SocialView from "@/components/SocialView.vue";
import DisplayImage from "@/components/DisplayImage.vue";
export default {
  components: {
    DisplayImage,
    SocialView
  },
  props: {
    isDark: Boolean
  },
}
</script>