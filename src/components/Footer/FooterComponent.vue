<script setup>
// import { useDark, useToggle } from "@vueuse/core";
// const isDark = useDark()
// const toggleDark = useToggle(isDark)
import SocialView from "@/components/add-on/SocialComponent.vue";
import GetInTouchComponent from "@/components/Footer/GetInTouchComponent.vue";
</script>

<template>
    <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
            <div className="mt-10 ml-16">
                <GetInTouchComponent />
                <SocialView title="true" justify_type="justify-center" />
            </div>
        </div>
        <div class="gradient-circle-bottom overflow-x-hidden"></div>
    </div>
</template>

<script>
export default {
    name: "FooterView",
};
</script>
