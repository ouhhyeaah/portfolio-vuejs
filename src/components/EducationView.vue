<script setup>
import { useDark } from "@vueuse/core";
const isDark = useDark()
import {onMounted, ref} from 'vue'
//import {collection, getDocs} from "firebase/firestore";
//import { db } from "@/firebase"
import educations from "@/data/educations";
const ref_educations = ref()

onMounted( async () => {
  let JSONEducations = []
  educations.forEach((e) => {
    const education = {
      id:e.id,
      school: e.school,
      duration: e.duration,
      start: e.start,
      description:e.description
    }
    JSONEducations.push(education)
  })
  ref_educations.value = JSONEducations.reverse()
})
</script>

<template>
  <section id="education" class="pt-20 flex justify-center ">
    <div class="flex justify-around w-11/12 gap-6">

      <div class="mx-auto neumorphism p-10 w-1/2 dark:text-white"
           :class="isDark ? 'dark-neumorphism' : 'neumorphism'"
             v-for="education in ref_educations" :key="education.id"
      >
        <h1 class="text-5xl py-8 mont-bold"> {{ education.school }} </h1>
        <span class="text-2xl mont-light ">{{ education.start }} / {{ education.start + education.duration}}</span>
        <p class="py-8 mont text-2xl">
          {{ education.description }}
        </p>

      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "EducationView"
}
</script>