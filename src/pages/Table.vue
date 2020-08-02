<template>
  <div class="page">
    <transition name="fade-route" appear>
      <DateFilterLine @interval="dateFilterHandler"/>
    </transition>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
  </div>
</template>
<script>
  import DateFilterLine from '@/components/fileters/DateFilterLine'
  export default {
    name: "Table",
    components: {DateFilterLine},
    methods: {
      dateFilterHandler(e){
      }
    },
  }
</script>
<style scoped lang="scss">
  h1{
    font-size: calc(2.5vmin + 1rem);
    color: #891FDE;
    -webkit-text-stroke: 2px transparent;
    text-shadow: 0 0 4px rgba(0,0,0,.4);
    margin-right: 2rem;
    user-select: none;
  }
  .page{
    min-height: 100vh;
    max-width: 1240px;
    margin: 0 auto;
    padding-top: calc(var(--header-height) + 10px);
    background-color: var(--bg);
  }
</style>
