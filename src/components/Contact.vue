<template>

<div class="contact-us py-5">

  <div class="container">

    <h1 class="text-center display-1 mb-5">تواصل معنا</h1>


    <div class="row my-5 align-items-center">


      <div class="col-md-6 order-last order-md-first">


        <div class="card border-0 shadow-sm p-3 ">
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
                <label for="subject" class="form-label">الموضوع</label>
                <input type="text" id="subject" class="form-control">
              </div>

              <div class="mb-3">
                <label for="message" class="form-label">الرسالة</label>
                <textarea name="message" id="message" class="form-control"></textarea>
              </div>

              <button class="btn btn-warning w-100">إرسال</button>

            </form>

          </div>

        </div>

      </div>
      
      <div class="col-md-6">

        <img src="/public/assets/imgs/contact.svg" alt="" class="img-fluid">
        
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