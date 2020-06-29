<template>
  <ul class="chips__list">
    <li
      class="chips__item fadeIn"
      v-for="(el, i) in data" :key="i"
      @click="clickHandler(el)"
    >{{el.name}}<span>&times;</span></li>
  </ul>
</template>
<script>
  export default {
    name: "Chips",
    // Нужно передать массив объектов с полями: name
    props: {
      data: {
        type: Array,
        required: true,
        // !!!___Удалить default, это плейсхолдер___!!!
        // default: function(){return [{name: 'Киев'},{name: 'Харьков'},{name: 'Одесса'},{name: 'Кишенев'},{name: 'Минск'},{name: 'Питер'},{name: 'Москава'}]}
      },
    },
    methods: {
      clickHandler(el){
        // Таймаут, чтоб корректно отработал клик вне блока у родительского компонента.
        setTimeout(()=>{
          this.$emit('removeChip',el)
        },0)
      }
    },
  }
</script>
<style scoped lang="scss">
  $alto-2: #E0E0E0;
  .chips{
    &__list{
      display: flex;
      flex-wrap: wrap;
      margin: 0 -3px 5px;
      min-height: 29px;
      width: calc(100% - 20px);
    }
    &__item{
      margin: 0 3px 5px;
      padding: 2px 5px;
      border-radius: 5px;
      border: solid 1px rgba($alto-2,.3);
      display: flex;
      align-items: center;
      user-select: none;
      cursor: pointer;
      color: dodgerblue;
      font-size: 12px;
      &:last-child{
        margin-right: 0;
      }
      span{
        font-size: 18px;
        margin-left: 3px;
        color: #000;
      }
    }
  }
</style>
