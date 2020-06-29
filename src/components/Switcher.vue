<template>
  <div class="switcher-container">
    <div class="lang">
      <span class="fadeIn" :class="{ active: !switcher }">RU</span>
      <span class="fadeIn" :class="{ active: switcher }">EN</span>
    </div>
    <div class="switcher" @click="toggle">
      <div class="circle" :class="!switcher ? 'left' : 'right'"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: { type: Boolean, default: false },
    activeBg: { type: String, default: 'orange' }
  },
  data: () => ({
    switcher: false
  }),
  methods: {
    toggle () {
      this.switcher = !this.switcher;
    }
  }
}
</script>

<style lang="scss" scoped>
  .switcher-container {
    display: flex;
    align-items: center;
    .lang {
      /*margin-bottom: 0.5em;*/
      span {
        transition: color .3s;
        &.active {
          color: orange;
        }
      }
    }
    .switcher {
      margin-left: 10px;
      width: calc(48px + 0.3em);
      height: calc(24px + 0.3em);
      background: orange;
      border-radius: 30px;
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;
      transition: all .3s;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
      &:hover {
        background: orange;
        opacity: .9;
      }
      .circle {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #fff;
        transition: all .3s;
        margin-left: 0.15em;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        &.left {
          margin-left: 0.15em;
        }
        &.right {
          margin-left: calc(24px + 0.15em);
        }
      }
    }
  }
  .fadeIn {
    animation: fadeIn 0.3s ease-in-out forwards;
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
