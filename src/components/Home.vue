<template>
  <!-- Start Header -->
  <header class="text-light position-relative" style="background-image: url('/landing-bg.jpg')">
    <div class="landing-page position-relative">
      <div class="container">
        <div class="row  py-5">
          <div class="col-md-8">
            <h1 class="display-3 fw-bolder">وظف أفضل المستقلين لأي وظيفة عبر الإنترنت</h1>
            <div class="input-group my-5 w-75">
              <input type="text" class="form-control bg-white bg-opacity-75 w-50" placeholder="جرب : تصميم شعار" aria-label="Recipient's username" aria-describedby="button-addon2">
              <button class="btn btn-primary rounded-end-4 px-4" type="button" id="button-addon2">بحث</button>
            </div>

            <div>
              <h3>أكثر بحثا :</h3>
              <div class="d-flex align-items-center flex-wrap mt-4">
                <span class="rounded-4 btn btn-outline-light me-3">تصميم واجهات ويب</span>
                <span class="rounded-4 btn btn-outline-light me-3">تصميم شعار</span>
                <span class="rounded-4 btn btn-outline-light me-3">تصميم فيديو</span>
                <span class="rounded-4 btn btn-outline-light me-3">ترجمة</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- End Header -->

  <!-- Start How Work -->

  <section class="how-work py-5 ">

    <div class="container">

      <h2 class="text-center text-primary mb-5">كيف يعمل الموقع</h2>


      <div class="row  py-5">

        <div class="col-sm-6 col-md-4 text-center ">
          <div class="vstack gap-3 shadow-sm align-items-center p-3">
            <i class="fa-light fa-server fa-3x"></i>
            <h3>استعرض الخدمات</h3>
            <p class="text-muted">ابحث عن الخدمة التي تحتاجها باستخدام مربع البحث في الأعلى أو عبر التصنيفات.</p>
          </div>
        </div>

        <div class="col-sm-6 col-md-4 text-center ">
          <div class="vstack gap-3 shadow-sm align-items-center p-3">
            <i class="fa-light fa-server fa-3x"></i>
            <h3>اطلب الخدمة</h3>
            <p class="text-muted">راجع وصف الخدمة وتقييمات المشترين ثم اطلبها لفتح تواصل مع البائع.</p>
          </div>
        </div>


        <div class=" col-sm-6 col-md-4 text-center ">
          <div class="vstack gap-3 shadow-sm align-items-center p-3">
            <i class="fa-light fa-server fa-3x"></i>
            <h3>استلم خدمتك</h3>
            <p class="text-muted">تواصل مع البائع مباشرة داخل موقع خمسات حتى استلام طلبك كاملاً.</p>
          </div>
        </div>

      </div>


    </div>


  </section>

  <!-- End How Work  -->


  <!-- Start Our Services -->

  <section class="discover py-5 bg-primary-subtle">

    <div class="container">

      <h2 class="text-center text-primary">إستكشف الخدمات</h2>

      <div class="row my-5 py-5 gy-5 text-center">

        <div class="col-sm-6 col-md-4 col-lg-3" v-for="service in services">
            <i :class="`fa-light ${service.icon} fa-5x`"></i>
            <hr>
            <h4>{{service.name}}</h4>
        </div>

      </div>

    </div>

  </section>

  <!-- End Our Services -->


  <!-- Start Deals -->

  <section class="deals py-5 ">

    <div class="container">

      <h2 class="text-center text-primary mb-5">إستكشف العروض</h2>


      <div v-for="deal in deals">

       <div class="d-flex justify-content-between flex-column flex-md-row align-items-center">

        <h3 class="my-0 mb-3">{{deal.title}}</h3>

         <span class="align-self-center link-primary">عرض المزيد <i class ="fa-light fa-arrow-left"></i></span>
        </div>

        <div class="row my-5 py-1 gy-5 text-center">

          <div class="col-sm-6 col-md-6 col-lg-3" v-for="deal in deal.services">
            <card
                :stars="deal.user.stars"
                :user="deal.user"
                :image="deal.image"
            />
          </div>

        </div>
      </div>


    </div>

  </section>

  <!-- End Deals -->

  <!-- Start Work -->

  <section class="work bg-primary-subtle py-5 text-center">

      <div class="container">
        <h3 class="display-5">أنجز أعمالك بسهولة وأمان</h3>
        <button class="btn btn-lg btn-primary px-5 mt-5">سجل الأن</button>
      </div>


  </section>

  <!-- End Work -->


  <Footer/>

</template>

<script>
import NavBar from "./NavBar.vue";
import Card from './Card.vue';
import services from "../services.js";
import deals from "../deals.js";


export default {
  components: {Card,NavBar},
  data() {
    return {
      services, deals
    }
  }
}
</script>

<style scoped>
header {
  height: 70vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

header::before {
  content: '';
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>