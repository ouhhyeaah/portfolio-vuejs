<script setup>
function setProgressBarColor(percentage){
  if(percentage < 50){
    return "bg-red-500";
  }else if(percentage < 75){
    return "bg-yellow-500";
  }else{
    return "bg-green-500";
  }
}


</script>

<template>
  <div class="flex justify-end mb-1">
    <span class="mont-bold text-xl dark:text-white">{{percentage}}%</span>
  </div>
  <div class="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700 bar">
    <div class="h-3 rounded-full progress-bar" :style="{ 'width' : percentage+'%'}" :class="setProgressBarColor(percentage)"></div>
  </div>
</template>

<script>


export default {
  name:"ProgressBarComponent",
  props: {
    percentage: Number
  },
}
</script>