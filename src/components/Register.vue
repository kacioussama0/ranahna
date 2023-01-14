<template>

  <div class="contact-us py-5">

    <div class="container">

      <h1 class="text-center display-1 mb-5">تسجيل حساب جديد</h1>


      <div class="row my-5 align-items-center">


        <div class="col-md-6 order-last order-md-first">


          <div class="card border-0 shadow-sm p-3">
            <div class="card-body">
              <form action="/" onsubmit="e => e.preventDefault()">


                <div class="mb-3">
                  <label for="name" class="form-label">الإسم الكامل</label>
                  <input type="text" id="name" class="form-control">
                </div>


                <div class="mb-3">
                  <label for="email" class="form-label">البريد الإلكتروني</label>
                  <input type="text" id="email" class="form-control">
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label">كلمة السر</label>
                  <input type="password" id="password" class="form-control">
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label"> تأكيد كلمة السر</label>
                  <input type="password" id="password" class="form-control">
                </div>

                <div class="mb-3">

                  <a href="">إقرأ الشروط</a>


                </div>

                <div class="form-check-inline mb-3">
                  <label for="agree" class="form-check-label me-3">هل أنت موافق على الشروط ?</label>
                  <input type="checkbox" id="agree" class="form-check-input">
                </div>

                <button class="btn btn-warning w-100">تسجيل حساب</button>

              </form>

            </div>

          </div>

        </div>

        <div class="col-md-6">
          <img src="/public/assets/imgs/register.svg" alt="">
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