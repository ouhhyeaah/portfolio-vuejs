<script setup>
// import { useDark, useToggle } from "@vueuse/core";
// const isDark = useDark()
// const toggleDark = useToggle(isDark)
import SocialView from "@/components/SocialView.vue";
</script>

<template>
  <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
    <div>
      <h1 className="text-2xl text-bold">Contact.</h1>
      <div className="mt-10">
        <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
          LET&apos;S WORK
        </h1>
        <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
          TOGETHER
        </h1>
        <div className="mt-10">
          <SocialView title=True justify_type="justify-center" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name:"FooterView",
}
</script>