<script setup>
// import { useDark, useToggle } from "@vueuse/core";
// const isDark = useDark()
// const toggleDark = useToggle(isDark)
import SocialView from "@/components/SocialView.vue";
</script>

<template>
  <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
    <div>
        <div className="mt-10">
          <SocialView title=True justify_type="justify-center" />
        </div>
    </div>
  </div>
</template>


<script>
export default {
  name:"FooterView",
}
</script>