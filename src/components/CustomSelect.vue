<template>
  <div class="c-select__wrapper">
    <div class="data-title">
      <slot></slot>
    </div>
    <div
      class="c-select"
      :class="{'numbers': numbers}"
      ref="select"
    >
      <form class="c-select__header">
        <div
          v-if="!search"
          class="c-select__header-text c-select__selected"
          :class="{
          'c-select__selected--has-placeholder': (placeholder && !multyselect && currentOption === '') || (placeholder && multyselect && multySelectChecked.length===0)
          }"
          @click="toggleOptionsList"
        >{{selectedValue}}
        </div>
        <label v-else class="c-select__search-label">
          <input
            type="text"
            class="c-select__header-text c-select__search"
            :class="{'c-select__search--has-selected': multySelectChecked.length}"
            autocomplete="off"
            :placeholder="selectedValue"
            ref="search"
            v-model="searchInput"
            @click="toggleOptionsListFromSearch"
          >
        </label>
        <div
          class="c-select-switcher"
          @click="toggleOptionsList"
        >
          <div
            class="c-select-switcher__icon"
            :class="{'c-select-switcher__icon--rotated': !listIsActive}"
          ></div>
        </div>
      </form>
      <ul class="c-select__list" :class="{'c-select__list--active': listIsActive}">
        <li
          class="c-select__item"
          v-for="(el, i) in filteredData"
          :key="i"
          :class="{'c-select__item--active': itemActiveHandler(el, i)}"
        >
          <div
            v-if="!multyselect"
            class="c-select__option"
            @click="selection(el, i)"
          >{{el}}
          </div>
          <label
            v-else
            class="c-select__option c-checkbox"
          >
            <input
              type="checkbox"
              v-model="checkedArr"
              :value="el"
              @change="selection(el, i, $event)"
            >
            <span class="c-checkbox__body"></span>
            {{el}}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: "c-select",
    // Титул передается слотом, отображается сверху
    // Можно передавать или массив "data", или "numbers" для выборта числа
    props: {
      data: {
        type: Array,
        // !!!___Удалить default, это плейсхолдер___!!!
        default: function(){return ['Киев','Харьков','Одесса','Кишенев','Минск','Питер','Москава','Париж','Берлин']}
      },
      placeholder: {
        type: String
      },
      search: {
        type: Boolean
      },
      multyselect: {
        type: Boolean
      },
      selected: {},
      numbers: {
        type: Number || String,
        default: 0
      }
    },
    data: () => ({
      listIsActive: false,
      searchInput: undefined,
      filteredData: [],
      currentOption: '',
      multySelectChecked: [],
      checkedArr: []
    }),
    computed: {
      selectedValue() {
        const mSelectLength = this.multySelectChecked.length
        if (mSelectLength) {
          // Если мультиселект, ставим точки, в зависимости от количества выбранного. Пример: Киев... = 3 города
          return mSelectLength === 2 ? this.multySelectChecked[0] + '..' : mSelectLength >= 3 ? this.multySelectChecked[0] + '...' : this.multySelectChecked[0]
        }
        // Установка  в шапку Или поиска, Или плейсхолдера, Или числа 1 если цифры, или пункта [0]
        return this.searchInput ? this.searchInput : this.placeholder ? this.placeholder : this.numbers ? 1 : this.data[0]
      },
    },
    methods: {
      toggleOptionsListFromSearch() {
        if (!this.listIsActive) {
          this.toggleOptionsList()
        }
      },
      selection(el, i, e) {
        if (this.multyselect) {
          if (e.target.checked) {
            this.multySelectChecked.push(el)
          } else {
            const index = this.multySelectChecked.indexOf(el)
            this.multySelectChecked.splice(index, 1)
          }
        } else {
          this.searchInput = el
          this.currentOption = el
          this.toggleOptionsList()
        }
      },
      toggleOptionsList() {
        this.destroyHandlers()
        this.listIsActive = !this.listIsActive
        if (this.listIsActive) {
          document.addEventListener("click", this.closeHandler)
          document.addEventListener("keydown", this.closeHandler)
          if (!this.numbers) {
            this.filteredData = this.data
          } else {
            this.filteredData = this.numbers
          }
        } else {
          this.emitData()
        }
      },
      closeHandler(event) {
        if (event.type === 'click') {
          if (!this.$refs.select.contains(event.target)) {
            this.listIsActive = false
            this.destroyHandlers()
            this.emitData()
          }
        } else if (event.type === 'keydown' && event.which === 27) {
          this.listIsActive = false
          this.destroyHandlers()
          this.emitData()
        }
      },
      emitData() {
        const selectChangeData = this.multyselect ? this.multySelectChecked : this.currentOption
        this.$emit('selectChange', selectChangeData)
      },
      destroyHandlers() {
        document.removeEventListener('click', this.closeHandler)
        document.removeEventListener('keydown', this.closeHandler)
      },
      itemActiveHandler(el) {
        if (!this.multyselect) {
          return this.currentOption === el
        } else {
          return this.multySelectChecked.includes(el)
        }
      }
    },
    watch: {
      searchInput(newVal, oldVal) {
        if (this.search) {
          this.filteredData = this.data.filter(el => {
            return el.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase())
          })
        }
      }
    },
    beforeDestroy(){
      this.destroyHandlers()
    }
  }
</script>
<style scoped lang="scss">
  $alto-2: #E0E0E0;
  $cobalt: #003FA9;
  $mine-shaft: #202020;
  $silver: #BDBDBD;
  $anakiwa: #84E7FF;
  $inputs-width: 220px;
  $bdrs: 5px;
  $gray: #828282;
  $onahau: #C2F3FF;
  $gradient-scroll: linear-gradient(0deg, #84E7FF 0%, #4A8DFF 100%);
  
  .c{
    &-checkbox{
      position: relative;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      white-space: nowrap;
      &.back{
        color: #000;
      }
      span{
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
    &-select{
      position: relative;
      color: $mine-shaft;
      width: $inputs-width;
      .c-checkbox{
        &__body{
          background-color: #FFFFFF;
          margin-right: 15px;
          z-index: 999;
        }
      }
      &-switcher{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 100%;
        cursor: pointer;
        background-color: $anakiwa;
        border-left: solid 1px $silver;
        border-radius: 0 $bdrs $bdrs 0;
        &__icon{
          width: 12px;
          height: 12px;
          background-image: url("../assets/icons/angle.svg");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          transition: transform .3s;
          &--rotated{
            transform: rotateZ(180deg);
          }
        }
      }
      &__header{
        display: flex;
        border-radius: 5px;
        border: solid 1px $alto-2;
        height: 50px;
        &-text{
          padding: 0 1rem;
          border-radius: $bdrs 0 0 $bdrs;
        }
      }
      &__search{
        font-size: 16px;
        height: 100%;
        &::placeholder{
          color: $gray;
        }
        &--has-selected{
          &::placeholder{
            color: $mine-shaft;
          }
        }
        &-label{
          width: calc(100% - 30px);
        }
      }
      &__option{
        display: flex;
        padding: 10px;
        width: 100%;
        user-select: none;
      }
      &__selected{
        display: inline-flex;
        align-items: center;
        width: calc(100% - 30px);
        cursor: pointer;
        user-select: none;
        font-size: 14px;
        &--has-placeholder{
          color: $gray;
        }
      }
      &__list{
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        border-radius: $bdrs;
        border: solid 1px $alto-2;
        background-color: #FFFFFF;
        max-height: 200px;
        overflow-y: scroll;
        animation: fadein .4s forwards;
        &::-webkit-scrollbar{
          width: 10px;
          border-radius: $bdrs;
        }
        &::-webkit-scrollbar-track{
          background-color: $alto-2;
          border-radius: $bdrs;
        }
        &::-webkit-scrollbar-thumb{
          background: $gradient-scroll;
          border-radius: $bdrs;
        }
        &--active{
          display: flex;
          z-index: 1;
        }
      }
      &__item{
        border-bottom: 1px solid #828282;
        font-size: 14px;
        color: #202020;
        cursor: pointer;
        &:last-child{
          border-bottom: 0;
        }
        &:hover:not(.c-select__item--active){
          background-color: rgba($onahau, .6);
        }
        &--active{
          background-color: $onahau;
        }
      }
    }
    &-select.numbers{
      width: 90px;
      .c-select{
        &__header{
          height: 36px;
        }
        &__selected{
          justify-content: center;
        }
        &__list{
          right: 30px;
        }
        &__option{
          justify-content: center;
        }
      }
    }
  }
</style>
