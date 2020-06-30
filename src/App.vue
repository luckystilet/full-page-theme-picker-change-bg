<template>
  <div id="app">
    <div id="header">
      <router-link :to="{name: 'Table'}" class="btn"></router-link>
      <Switcher/>
      <div class="btn-wrapper">
        <div
          class="btn-picker"
          @click="isPickerOpen=!isPickerOpen"
        ></div>
        <div
          class="theme-picker"
          :class="{open: isPickerOpen}"
        >
          <div class="row">RGB Color</div>
          <div class="row">
            <label>
              Red:
              <input type="text" v-model="red" placeholder="0-255">
            </label>
          </div>
          <div class="row">
            <label>
              Green:
              <input type="text" v-model="green" placeholder="0-255">
            </label>
          </div>
          <div class="row">
            <label>
              Blue:
              <input type="text" v-model="blue" placeholder="0-255">
            </label>
          </div>
          <div class="row center">
            <div class="btn btn-trans" @click="doneHandler">Done</div>
          </div>
        </div>
      </div>
      <div
        class="toggle"
        @click="theme=!theme"
      >toggle theme
      </div>
      <div class="nav-list">
        <div class="nav-item nav-item-1"></div>
        <div class="nav-item nav-item-2"></div>
        <div class="nav-item nav-item-3"></div>
        <div class="nav-item nav-item-4"></div>
        <div class="nav-item nav-item-5"></div>
        <div class="nav-item nav-item-6"></div>
      </div>
      <div class="btn" v-waves>v-waves</div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import BackgroundSwitcher from '@/components/BackgroundSwitcher'
  import Switcher from '@/components/Switcher'
  //Slider / Range

  
  export default {
    name: 'App',
    data() {
      return {
        red: '',
        green: '',
        blue: '',
        isPickerOpen: false,
      }
    },
    components: {Switcher},
    methods: {
      doneHandler() {
        this.isPickerOpen = !this.isPickerOpen
        const style = document.documentElement.style
        style.setProperty('--rgb-red', this.red)
        style.setProperty('--rgb-green', this.green)
        style.setProperty('--rgb-blu', this.blue)
      },
    }

  }
</script>
<style lang="scss" src="./assets/scss/style.scss"></style>
<style scoped lang="scss">
  #header{
    display: flex;
    justify-content: center;
    > div{
      margin-right: 20px;
      &:last-child{
        margin-right: 0;
      }
    }
  }
  .center{
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  .btn{
    user-select: none;
    cursor: pointer;
    &-wrapper{
      position: relative;
      cursor: pointer;
    }
    &-picker{
      cursor: pointer;
      height: 20px;
      width: 20px;
      background-image: url("./assets/icons/color-picker.svg");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
    &-trans{
      padding: 5px 10px;
      border: solid 1px #444;
      border-radius: 5px;
      display: inline-block;
    }
  }
  .theme-picker{
    display: flex;
    flex-direction: column;
    position: absolute;
    top: calc(100% + 15px);
    left: 50%;
    border-radius: 15px;
    border: solid 1px black;
    background-color: rgba(#666, .5);
    padding: 20px;
    opacity: 0;
    transform: translate(-50%, -15px) scale(.6);
    transition: opacity .3s, transform .3s;
    pointer-events: none;
    &.open{
      opacity: 1;
      transform: translate(-50%, 0px) scale(1);
      pointer-events: visible;
    }
    .row{
      margin-bottom: 5px;
      &:last-child{
        margin-bottom: 0;
      }
    }
    input{
      padding: 4px 10px;
      border-radius: 5px;
      width: 100px;
      color: dodgerblue;
    }
  }
  .nav{
    &-list{
      display: flex;
    }
    &-item{
      border-radius: 50%;
      height: 20px;
      width: 20px;
      margin-right: 10px;
      &-1{
        background: rgb(calc(var(--rgb-red) * 1.091), calc(var(--rgb-green) * 0.1212), calc(var(--rgb-blu) * 0.22));
      }
      &-2{
        background: rgb(calc(var(--rgb-red) * 0.179), calc(var(--rgb-green) * 1.957), calc(var(--rgb-blu) * 2.0));
      }
      &-3{
        background: rgb(calc(var(--rgb-red) * 1.69), calc(var(--rgb-green) * 0.2), calc(var(--rgb-blu) * 1.11));
      }
      &-4{
        background: rgb(calc(var(--rgb-red) * 0.271), calc(var(--rgb-green) * 0.3243), calc(var(--rgb-blu) * 2.8));
      }
      &-5{
        background: rgb(calc(var(--rgb-red) * 1.199), calc(var(--rgb-green) * 1.19), calc(var(--rgb-blu) * 0.88));
      }
      &-6{
        background: rgb(calc(var(--rgb-red) * 0.484), calc(var(--rgb-green) * 1.654), calc(var(--rgb-blu) * 1.33));
      }
    }
  }
</style>
