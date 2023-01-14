<template>

  <div class="container">

    <h1 class="display-2 text-center my-5">من نحن</h1>

    <div class="row">

      <div class="col-md-6 order-last order-md-first">

        <div class="accordion py-5" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                ماهي رانا هنا
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                "رانا هنا" هو منصة جزائرية لبيع وشراء الخدمات المصغرة ( تصميم المواقع الالكترونية ، التطبيقات الرقمية ، فيديوهات موشن ...) ، يجمع بين الشباب الجزائري المتمكن من تقديم هذه الخدمات وبين فئة المشترين الطالبين لها، وبذلك يوفر دخلاً مناسباً للشباب الجزائري وخدمات مميزة بسعر اقتصادي للأفراد والشركات الناشئة.
              </div>
            </div>
          </div>


          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                عناصر الإبتكار في المشروع
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                تعمل اغلبية المواقع و المنصات المشابهة لموقعنا على ان تكون وسيط بين مشتري الخدمة و بائعها و تأخذ عمولتها من خلال ذالك ، لكن منصتنا تقوم هي بإنجاز الخدمات التي يطلبها الزبائن عبر توظيف عامليين لديها بواسطة عقود عمل بينها و بينهم مقابل اجور شهرية ،و بهذا يكون سعر الخدمة اقل بكثير من المنافسين و أيضا يوفر مناخ عمل جيد للعاملين عبر تقسيم العمل و إستراتيجية تسويقية تستهدف الفئات التي تريد شراء الخدمات المقدمة من موقعنا من جانب الطلاب اصحاب مذكرات التخرج او اصحاب مشاريع المؤسسات ناشئة في الجزائر أو خارجها .
              </div>
            </div>
          </div>

        </div>

      </div>
      
      <div class="col-md-6">

        <img src="/public/assets/imgs/faq.svg" alt="">
        
      </div>


    </div>

  </div>

</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

</style>