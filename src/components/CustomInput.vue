<template>
  <label>
    <slot></slot>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @keypress="inputHandler($event)"
    />
  </label>
</template>
<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: ''
      },
      value: {
        default: ''
      },
      onlyNumbers: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      inputHandler(e) {
        if (this.onlyNumbers && (e.which < 48 || e.which > 57)) {
          e.preventDefault()
        }
        this.$emit('inputed', e.target.value)
      }
    },
  }
</script>
<style lang="scss" scoped>
  $anakiwa-blue: #A5C6FF;
  $emperor: #4F4F4F;
  $alto-2: #E0E0E0;
  
  label{
    font-size: 1.1em;
    color: grey;
    &.blue{
      text-align: center;
      input{
        display: flex;
        justify-content: center;
        align-items: center;
        border-color: $anakiwa-blue;
        height: 50px;
        width: 140px;
        font-size: 14px;
        color: $emperor;
        padding: 0 40px;
        border-radius: 15px;
      }
    }
  }
  input{
    border: 1px solid $alto-2;
    border-radius: 4px;
    height: 34px;
    padding: 0 1em;
    width: 100%;
    margin-top: 1em;
    margin-bottom: 1em;
    outline: none;
    box-shadow: none;
    &.invalid{
      border: 1px solid rgba(255, 0, 0, 0.5);
      box-shadow: 0 0 2px rgba(255, 0, 0, 0.8);
      outline: none;
    }
  }
</style>
