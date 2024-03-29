<template>
    <div class="flex gap-6 justify-evenly dark:text-white py-16 w-4/5 mx-auto" :class="isDark ? 'dark-neumorphism' : 'neumorphism'">
      <div class="flex flex-col text-5xl p-10 font-extralight w-1/3 dark:text-white">
        <span class="text-12xl pb-7 dark:text-white mont-bold" id="test">Hello 👋</span>
        <span class="dark:text-white text-3xl mont-light text-wrap">I'm a cybersecurity student, but I'm also interested in different areas of computer science, such as programming. </span>
        <div class="pt-10 flex gap-10 justify-center">
          <SocialView justify_type="justify-around" size=16 />
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