<template>
  <div class="bg-switcher">
    <div
      class="bg-switcher-stack"
      v-for="(el, i) in bgs[themeColor]" :key="i"
      :class="{'active': i === currentSlide}"
    >
      <div
        class="bg-switcher-stack__item blur"
        :style="{backgroundImage: 'url(' + require(`@/assets/img/bg/${el}${isDark}_blur.jpg`) + ')'}"
      ></div>
      <div
        class="bg-switcher-stack__item normal"
        :style="{backgroundImage: 'url(' + require(`@/assets/img/bg/${el}${isDark}.jpg`) + ')'}"
      ></div>
    </div>
    <div class="bg-switcher__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: "BackgroundSwitcher",
    props: {
      themeColor: {
        type: String
      }
    },
    data() {
      return {
        currentSlide: 0,
        bgs: {
          light: ['1','2','3','4'],
          dark: ['1','2','3']
        }
      }
    },
    computed: {
      isDark(){
        return this.themeColor === 'dark' ? '-dark' : ''
      }
    },
    mounted(){
      setInterval(()=>{
        this.currentSlide ++
        if(this.bgs[this.themeColor].length-1 === this.currentSlide) this.currentSlide = 0
      },8000)
    },
  }
</script>
<style scoped lang="scss">
  .bg-switcher{
    padding-top: var(--header-height);
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 0;
    &-stack{
      opacity: 0;
      /*transition: opacity .3s;*/
      &__item{
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background-size: cover;
        background-position: center center;
        transform: scale(2) rotateZ(5deg);
        /*transition: all 3s ease-in-out;*/
        &.normal{
          opacity: 0;
        }
        &.blur{
          opacity: 1;
        }
      }
      &.active{
        opacity: 1;
        .bg-switcher-stack__item{
          animation-name: BG;
          animation-delay: .3s;
          animation-duration: 2s;
          animation-fill-mode: forwards;
          animation-timing-function: linear;
          animation-direction: alternate;
        }
      }
    }
    &__content{
      position: relative;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
  }


  @keyframes BG{
    to{
      opacity: 1;
      transform: scale(1) rotateZ(0deg);
    }
  }
</style>
