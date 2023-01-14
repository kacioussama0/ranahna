<template>

<div class="contact-us py-5">

  <div class="container">



    <div class="row my-5 align-items-center">


      <div class="col-md-6 order-last order-md-first">


        <div class="card border-0 shadow-sm p-3">
          <div class="card-body">

            <h1 class="text-center display-3 text-primary mb-5 fw-bold">تسجيل الدخول</h1>

            <form action="/" onsubmit="e => e.preventDefault()">


              <div class="mb-3">
                <label for="email" class="form-label">البريد الإلكتروني</label>
                <input type="text" id="email" class="form-control">
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">كلمة السر</label>
                <input type="password" id="password" class="form-control">
              </div>

              <button class="btn btn-warning w-100">دخول</button>

            </form>

          </div>

        </div>

      </div>
      
      <div class="col-md-6">
        <img src="/public/assets/imgs/login.svg" alt="">
      </div>

    </div>


    </div>

</div>

</template>

<script>
export default  {

}
</script>

<style scoped>

</style>