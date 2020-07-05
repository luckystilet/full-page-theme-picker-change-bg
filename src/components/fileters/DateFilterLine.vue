<template>
  <div class="date-line">
    <div class="date-line__group">
      <div
        class="date-line__item"
        v-for="(section, i) in dateSections" :key="i"
      >
        <div
          class="date-line__segment current"
          :class="{active: dateActive.index === i && dateActive.isCurrent}"
          @click="selectDateFilter(i, true)"
        >{{section.current}}</div>
        <div
          class="date-line__segment previous"
          :class="{active: dateActive.index === i && !dateActive.isCurrent}"
          @click="selectDateFilter(i, false)"
        >{{section.previous}}</div>
      </div>
    </div>
    <date-picker
      v-model="date"
    >
      <button
        class="date-line__segment p-2 bg-blue-500 hover:bg-blue-600 text-white rounded focus:outline-none"
        :class="{active: calendarClassActive}"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V3C0 2.73478 0.105357 2.48043 0.292893 2.29289C0.48043 2.10536 0.734784 2 1 2H5V0H7V2H13V0H15V2ZM18 10H2V18H18V10ZM13 4H7V6H5V4H2V8H18V4H15V6H13V4ZM4 12H6V14H4V12ZM9 12H11V14H9V12ZM14 12H16V14H14V12Z" fill="#2E5EA9"/>
        </svg>
      </button>
    </date-picker>
  </div>
</template>
<script>
  export default {
    name: "DateFilterLine",
    data() {
      return {
        dateSections: [
          {
            current: 'This year',
            previous: 'Last year'
          },{
            current: 'This month ',
            previous: 'Last month'
          },{
            current: 'This week ',
            previous: 'Last week'
          },{
            current: 'Today ',
            previous: 'Yesterday '
          }
        ],
        dateActive: {index: 0, isCurrent: true},
        calendarClassActive: false,
        date: new Date(),
      }
    },
    methods: {
      selectDateFilter(index, isCurrent){
        this.dateActive = {index, isCurrent}
        this.calendarClassActive = false
        const now = new Date()
        let fromDate = new Date()
        let tillDate = new Date()
        // yar filter
        if(index === 0){
          if(isCurrent){
            fromDate.setFullYear(now.getFullYear() - 1)
          }else{
            fromDate.setFullYear(now.getFullYear() - 2)
            tillDate.setFullYear(now.getFullYear() - 1)
          }
        }
        // month filter
        else if(index === 1){
          if(isCurrent){
            fromDate.setMonth(now.getMonth() - 1)
          }else{
            fromDate.setMonth(now.getMonth() - 2)
            tillDate.setMonth(now.getMonth() - 1)
          }
        }
        // week filter
        else if(index === 2){
          if(isCurrent){
            fromDate.setDate(now.getDate() - 7)
          }else{
            fromDate.setDate(now.getDate() - 14)
            tillDate.setDate(now.getDate() - 7)
          }
        }
        // day filter
        else if(index === 3){
          if(isCurrent){
            fromDate.setDate(now.getDate() - 1)
          }else{
            fromDate.setDate(now.getDate() - 2)
            tillDate.setDate(now.getDate() - 1)
          }
        }
        this.$emit('interval', {fromDate, tillDate})
      }
    },
    watch:{
      date: function(cur, prev){
        this.dateActive.index = -1
        this.calendarClassActive = true
        this.$emit('interval', {fromDate: cur.setDate(cur.getDate() - 1), tillDate: cur})
      }
    },
  }
</script>
<style scoped lang="scss">
  .date-line{
    display: flex;
    align-items: center;
    &__group{
      display: flex;
      margin-right: 4rem;
    }
    &__item{
      display: flex;
      margin-right: 1.8rem;
      font-size: 14px;
      @include block();
      border-radius: $border-r;
      &:last-child{
        margin-right: 0;
      }
    }
    &__segment{
      border-radius: $border-r;
      padding: 6px 16px;
      color: var(--black);
      background-color: var(--white);
      transition: all .3s;
      cursor: pointer;
      @include userInterface();
      &.active{
        color: var(--white);
        background-color: var(--main);
        svg, path{
          fill: var(--white);
        }
      }
    }
  }
</style>
