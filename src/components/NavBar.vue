<template>
    <div class="w-full flex justify-between p-10">
      <div class="text-3xl font-bold hover:shadow-2xl rounded-3xl p-2.5 transition duration-300 ease-in-out hover:scale-105">
        Louis.
      </div>
      <div>
        <ul class="flex gap-6 font-mono">
          <li class="p-2.5 hover:shadow-xl rounded-xl px-6 transition duration-300 ease-in-out hover:scale-105" >Work</li>
          <li class="p-2.5 hover:shadow-xl rounded-xl px-6 transition duration-300 ease-in-out hover:scale-105">About</li>
          <li class="p-2.5 hover:shadow-xl rounded-xl px-6 transition duration-300 ease-in-out hover:scale-105">Blog</li>
          <li class="p-2.5 hover:shadow-xl rounded-xl px-6 transition duration-300 ease-in-out hover:scale-105">Resume</li>
          <li class="p-2.5 hover:shadow-xl rounded-xl px-6 transition duration-300 ease-in-out hover:scale-105">Contact</li>
          <li class="p-2.5">
            <SunIcon class="h-6 w-6 text-black-500" />
          </li>
        </ul>

      </div>
    </div>

</template>
<script setup>
import { SunIcon } from '@heroicons/vue/24/solid'

</script>

<script>
export default {
  name:"NavBar",
}
</script>