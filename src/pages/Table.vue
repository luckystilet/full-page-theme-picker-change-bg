<template>
  <div class="page">
    <transition name="fade-route" appear>
      <DateFilterLine @interval="dateFilterHandler"/>
    </transition>
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
  .page{
    min-height: 100vh;
    max-width: 1240px;
    margin: 0 auto;
    padding-top: calc(var(--header-height) + 10px);
    background-color: var(--bg);
  }
</style>
