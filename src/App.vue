<template>
  <div id="customcc"></div>
  <NavBar></NavBar>
  <ModalView title="Le Titre"></ModalView>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ModalView from "@/components/ModalView.vue";

export default {
  name: 'App',
  components: {
    ModalView,
    NavBar
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const cursor = document.getElementById('customcc');
  function moveCursor(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const cursorHalfWidth = cursor.offsetWidth / 2;
    const cursorHalfHeight = cursor.offsetHeight / 2;
    // Smooth transition
    cursor.style.transform = 'translate(' + (mouseX - cursorHalfWidth) + 'px, ' + (mouseY - cursorHalfHeight) + 'px)';
  }
  document.addEventListener('mousemove', function (e) {
    requestAnimationFrame(function () {
      moveCursor(e);
    });
  });
});
</script>

<style>
html {
  cursor: none;
}
#customcc{
  width: 20px;
  height: 20px;
  background-color: transparent; /* Mettre le fond du curseur transparent */
  border: 2px solid #434343; /* Ajouter une bordure rouge pour le contour */
  border-radius: 50%; /* pour rendre le curseur rond */
  position: fixed;
  z-index: 9999; /* assure que le curseur soit au dessus de tout le reste */
  pointer-events: none; /* assure que le curseur n'interfère pas avec les éléments de la page */
}


</style>
