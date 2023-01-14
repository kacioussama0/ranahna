<template>

  <div class="container">

    <h1 class="py-5 text-center display-1">خدماتنا</h1>


    <div class="services my-5">

      <div class="row gy-5 gx-0 gx-md-5">

        <div class=" col-md-6 col-lg-4" v-for="service in services">

            <div class="card">
              <h3 class="card-header p-4 bg-transparent border-0 display-6 text-center">{{service.name}}</h3>

              <div class="card-body p-0">
                <div :style="{backgroundImage: `url('${service.image}')`}" class="h-100 bg-image"></div>
                </div>

              <div class="card-footer p-4 bg-transparent">
                <p class="mb-0">عدد الخدمات : 123</p>
              </div>

            </div>

        </div>


      </div>


    </div>

  </div>

</template>

<script>
import services from "../services.js";

export default {
  data() {
    return {
      services
    }
  }
}
</script>

<style scoped>

div.card {
  height: 420px !important;
}


img {
  height: 300px;
  object-fit: cover;
  object-position: center;
}

.bg-image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

</style>