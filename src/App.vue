<template>
  <nav-bar/>
  <transition name="fade" mode="out-in">

  <router-view/>

  </transition>
  <Footer/>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export  default  {

  components: { NavBar,Footer}
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap');

* {
  font-family: 'Cairo', sans-serif !important;

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>