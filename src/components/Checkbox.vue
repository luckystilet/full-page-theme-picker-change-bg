<template>
  <label class="c-checkbox">
    <input type="checkbox" @change="changeHandler($event)" :checked="checked">
    <span class="c-checkbox__body"></span><slot></slot>
  </label>
</template>

<script>
export default {
  name: "c-checkbox",
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeHandler(e){
      this.$emit('input', e.target.checked)
    }
  },
}
</script>

<style scoped lang="scss">
  $cobalt: #003FA9;
  .c-checkbox{
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -webkit-app-region: no-drag;
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    &.back{
      color: #000;
    }
    &__body{
      position: relative;
      display: inline-block;
      height: 16px;
      width: 16px;
      border: 1px solid $cobalt;
      border-radius: 3px;
      margin-right: 8px;
      &:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: none;
      }
    }
    input{
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
      &:checked ~ span:after{
        background-image: url('../assets/icons/v.svg');
      }
    }
    &.black{
      span{
        border: 1px solid #000000;
      }
    }
  }
</style>
