<template>
  <div class="page">
    <div class="page__inner">
      <div class="content">
        <h1 class="anim1">Lorem ipsum dolor sit amet.</h1>
        <p class="anim1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, velit!</p>
        <a href="#" class="anim1">Start Dreaming</a>
      </div>
      <img class="img" width="300" height="200" src="@/assets/1.jpg" alt="">
    </div>
    
    <button
      class="btn btn-info"
      @click="animate"
    >Trigger</button>
  </div>
</template>
<script>
  import { gsap } from 'gsap';
  import { CSSPlugin } from 'gsap/CSSPlugin'
  import { TweenMax } from 'gsap/T'
  gsap.registerPlugin(CSSPlugin);
  
  
  export default {
    name: "Gsap",
    methods: {
      animate(){
        gsap.from('.anim1', {
          opacity: 0,
          duration: 1,
          y: -100,
          stagger: .6
          // ease: 'elastic(1, 0.3)'
        })
        gsap.from('.img', {
          opacity: 0,
          duration: 1,
          y: 100,
          delay: 4
        })
        gsap.from('.page__inner', {duration: 1, backgroundPosition: '-200px 0'})
      }
    },
    mounted(){
      this.animate()
    },
  }
</script>
<style scoped lang="scss">
  .page{
    padding-top: var(--header-height);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &__inner{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-image: url('../assets/img/1.jpg');
      background-size: cover;
      margin-bottom: 2rem;
    }
  }
  .content{
    display: flex;
    align-items: center;
    min-height: 400px;
    justify-content: space-between;
    &>*{
      width: 250px;
    }
  }
</style>
