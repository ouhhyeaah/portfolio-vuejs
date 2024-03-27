<script setup>
import {ref, onMounted} from "vue";
import { useDark } from "@vueuse/core";
const isDark = useDark()
import skills from "@/data/skills";
import ProgressBarComponent from "@/components/ProgressBarComponent.vue";


const ref_skills = ref(skills);

onMounted(() => {
  console.log("SkillsComponent mounted");
  function progressBar() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
      const percentage = bar.style.width;
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.transition = 'width 1s';
        bar.style.width = percentage;
      }, 1000);
    });
  }
  progressBar();
});

</script>

<template>


  <section id="skills" class="pt-20">
    <div class="w-full h-auto flex flex-wrap mx-auto">
      <div class="w-1/2 text-center" v-for="skill in ref_skills"
      :key="skill.id">
        <div class="p-10 m-5" :class="isDark ? 'dark-neumorphism' : 'neumorphism' ">
          <span class="text-2xl mont-bold">{{skill.name}}</span>
          <ProgressBarComponent :percentage="skill.percentage" />
        </div>
      </div>
    </div>
  </section>


</template>

<script>
export default {
  name:"SkillsComponent",
}
</script>