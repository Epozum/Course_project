<template>
  <div class="menu">
    <div class="disc">What about popcorn without an integral part of cinema?
      Here you can taste the most delicious popcorn from the best American ingredients, made according to the original recipe. And a wide range of drinks will quench your thirst and satisfy everyone's aesthetic taste.</div>
    <img src="https://cookieandkate.com/images/2012/02/popcorn-with-chili-powder-and-dark-chocolate.jpg">
    <div class="disc">Are you hungry?
      Appetizing French hot dogs with a large selection of sausages and sauces - just what you need.</div>
    <img src="https://image.freepik.com/free-photo/french-hot-dogs-from-store-packaged-paper-baked-with-cheese-mustard-stone-background_156140-4158.jpg">
    <div class="disc">Aromatic coffee and a variety of teas will help warm your hearts and fill you with energy for the whole day.</div>
    <img src="https://www.pointbleudesign.com/wp-content/uploads/2019/09/European-Specialty-Coffee-Market-by-Pointbleu-Design-Blog.jpg">

  </div>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>
  .menu {
    padding: 30px;
  }
  .disc{
    font-family: Arial;
  }
  img{
    width: 50%;
    display: block;
    margin: 20px auto;
  }
</style>