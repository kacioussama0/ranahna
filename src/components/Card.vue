<template>
  <div class="card border-0 shadow-sm">

    <a href="#" class="stretched-link"></a>

    <div :style="{backgroundImage: `url('${image}')`}" class="h-75 bg-image">
    </div>


    <div class="card-footer bg-transparent d-flex flex-column p-3">
        <div class="user d-flex align-items-center">
          <img :src="user.avatar" :alt="user.name" class="img-fluid rounded-circle">
          <div class="d-flex flex-column  ms-3">
            <h5 class="text-start">{{user.service}}</h5>
            <p class="text-muted">من طرف : {{user.name}}</p>
          </div>
        </div>
      <span class="stars align-self-end">
        <i class="fa-solid fa-star fa-1x text-warning "></i>
        <span class="text-muted ms-1">({{user.stars}})</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {type:String, required: true},
    user: {type:Object, required: true},
  }
}
</script>

<style scoped>

div.card {
  height: 420px !important;
}

.user img {
  width: 60px;
  height: 60px;
}

p {
  font-size: 14px !important;
}

.bg-image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

</style>