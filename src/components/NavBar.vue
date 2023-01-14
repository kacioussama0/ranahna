<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-primary  shadow">
    <div class="container">
      <a class="navbar-brand" href="#">
        <h2 class="fw-bolder">رانا هنا</h2>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav ms-auto my-2 my-lg-0 " style="--bs-scroll-height: 100px;">
          <li class="nav-item" v-for="list in navList">
            <router-link class="nav-link active" aria-current="page"  :to="list.url">{{list.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
import navList from "../nav-list.js";

export default {

  data() {
    return {
      navList
    }
  }

}
</script>

<style scoped>
.navbar-toggler {
  border: none !important;
}

.navbar-toggler:focus {
  box-shadow: none !important;
}
</style>