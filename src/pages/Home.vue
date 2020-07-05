<template>
  <div class="page">
    <transition name="fade-route" appear>
      <full-page ref="fullPage" :options="options" @onLeave="onLeave">
        <section class="section" id="s-1">
          <BackgroundSwitcher :themeColor="themeColor">
            <div class="section-content">
              <CustomSelect></CustomSelect>
              <Chips
                :data="chipsData"
                @removeChip="removeChip($event)"
              ></Chips>
              <Checkbox/>
              <Checkbox/>
              <Checkbox/>
              <div class="content-field">
                <div class="block-title-blue">Определить бюджет тура</div>
              </div>
            </div>
          </BackgroundSwitcher>
        </section>
        <section class="section" id="s-2">
          <div class="section-content">
            <VueSlider
              v-model="value"
              :interval="10"
              :useKeyboard="true"
              :max="max"
            ></VueSlider>
            <div class="controls-line">
              <CustomInput
                :value="fromRange"
                class="blue"
                @inputed="fromRange = parseInt($event) || 0"
                :onlyNumbers="true"
              >мин.цена
              </CustomInput>
              <CustomInput
                :value="toRange"
                class="blue"
                @inputed="toRange = parseInt($event) || 0"
                :onlyNumbers="true"
              >макс.цена
              </CustomInput>
            </div>
            <hr>
            <hr>
            <date-picker
              v-model="date"
            />
          </div>
        </section>
        <section class="section" id="s-3">
          <div class="section-content">
            <div class="section-split">
              <div class="section-split-side">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam architecto consectetur ea
                minima necessitatibus, nostrum perferendis quia, quidem ratione recusandae repellat tempora voluptas
                voluptate. Aspernatur, consequatur culpa eaque fuga harum hic, illum inventore itaque libero nisi, nobis
                possimus quam sint suscipit tempora! Aperiam asperiores at atque beatae distinctio ducimus eius et
                explicabo facere facilis fugit harum itaque iusto, laborum magnam minima nisi non perferendis porro
                reprehenderit repudiandae sequi sunt ut vitae voluptate? Aperiam aut cumque deserunt incidunt ipsam
                magnam
                quibusdam. Aperiam beatae consectetur consequuntur eos exercitationem expedita fugiat inventore, natus
                nemo obcaecati pariatur perspiciatis placeat quo tempora ut! Asperiores dolorum et exercitationem iste
                qui
                similique sint unde. Architecto at corporis earum eius eos eum impedit molestiae necessitatibus nisi
                nostrum numquam perferendis perspiciatis porro possimus provident qui quibusdam quis quisquam, quo
                reprehenderit saepe sapiente sunt temporibus totam ut vel vitae voluptatem! Accusamus, ad adipisci alias
                architecto asperiores atque consequatur culpa dolores eius eos fugit in labore modi nisi odio officia
                placeat quae quasi quis quisquam ratione rem repellendus sit ullam unde ut vel voluptatem? Accusantium
                atque cupiditate deleniti dolorem error expedita facilis fuga natus nostrum quisquam quod quos,
                repudiandae sapiente, tempore voluptatem! Ad aut blanditiis commodi debitis dignissimos ea, eius
                eligendi
                et eveniet expedita facere fuga fugiat hic illo iste iusto libero, nam neque odit possimus provident
                recusandae, repellendus sint tempore ut velit veniam vitae! Aperiam dignissimos eaque exercitationem,
                fuga
                iusto nisi nulla porro ratione repellat sunt? Ab amet culpa ea laborum vero. Architecto, consequuntur
                cumque debitis dolorem dolores minima natus odit rem vel veniam? A ad aliquam autem blanditiis
                distinctio
                eum expedita harum impedit nobis odio officiis, omnis quaerat, quam quas quasi reprehenderit, similique
                temporibus vel. Ab aspernatur consequatur consequuntur dolore ducimus magnam neque non pariatur ratione
                temporibus. Ab accusantium culpa dolore, eaque eum laborum, magni modi molestiae odit officia possimus
                voluptate? A assumenda consectetur ea eligendi, obcaecati tenetur. Consequuntur distinctio harum iure
                laborum ut. Accusamus accusantium aspernatur atque delectus deleniti dolorum earum enim et, eum
                excepturi
                expedita facere fugiat illum inventore ipsum iusto labore laboriosam laudantium modi molestias nihil
                nisi
                nulla odit, placeat porro quam quasi quis quod repellat reprehenderit saepe sapiente tempore unde velit
                veniam veritatis voluptatum? A ad aliquam animi, blanditiis dolor dolorum eligendi eum excepturi ipsa
                magnam minima modi molestias nemo neque non perspiciatis provident quaerat quam quisquam quod quos
                repudiandae unde veniam vero voluptatibus? Debitis excepturi exercitationem mollitia nam neque odit
                officiis placeat recusandae, ullam veniam! Adipisci amet corporis cum distinctio illum iure laudantium
                nesciunt recusandae tempore vel? Ab aperiam blanditiis dicta eum possimus tempora tempore temporibus,
                unde
                vero? Adipisci aperiam asperiores aut blanditiis consequatur dolore dolorem error fugit hic illum iste
                labore magnam neque perspiciatis quasi, ratione reprehenderit rerum suscipit tenetur voluptatem. Aperiam
                atque, consequuntur corporis dolore eius eos, facere ipsam minima officiis optio quae quo similique
                tenetur ut voluptate? Eius esse est, exercitationem hic magnam necessitatibus non officiis praesentium!
                Aliquam beatae consequatur cum debitis doloribus earum ex, exercitationem facere facilis fugit illum
                incidunt laborum, magni maiores nam nihil officiis optio perferendis provident quaerat quam quas quia
                recusandae repudiandae tenetur ut velit! Deleniti error nostrum numquam qui repellendus soluta tempore,
                unde! Animi architecto corporis, cum dicta doloremque earum expedita fuga fugiat fugit hic laboriosam
                maiores minima nobis odio optio possimus quia recusandae repellendus reprehenderit sunt suscipit tempora
                totam vel. Amet eos maxime modi natus quasi veritatis voluptatibus. A cumque ducimus enim impedit ipsa
                minus neque porro quas temporibus tenetur. Adipisci aspernatur assumenda at atque blanditiis eaque illo
                illum incidunt laborum mollitia nihil non pariatur possimus quaerat quidem sint tempore veniam,
                voluptatibus. Autem esse est iusto nemo sed unde voluptates? Autem fugiat impedit mollitia. Accusantium
                adipisci alias amet consectetur cumque delectus doloremque doloribus eaque et facilis fuga fugiat harum
                illo ipsam, ipsum minus neque odit officia perferendis quam repellat reprehenderit, tenetur ut. Aliquam
                aperiam asperiores at commodi, cum delectus doloribus et eum illum iure iusto minima mollitia officiis
                quis recusandae reiciendis rerum tempora, unde voluptate voluptatem? Accusamus, error facere hic magni
                minus numquam odit officia temporibus? Aliquam est neque sint vel veniam vitae voluptate? Amet hic neque
                nobis perspiciatis unde vel velit. Consequuntur neque placeat reprehenderit saepe sint! Alias assumenda
                consequatur, distinctio excepturi iure molestiae necessitatibus odit perspiciatis quaerat quo, similique
                tenetur vitae?
              </div>
              <div class="section-split-side">
                <img src="@/assets/img/9.jpg" class="section-split-side__img" alt="">
              </div>
            </div>
          </div>
        </section>
        <section class="section" id="s-4">
          <div class="section-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eius eligendi, est explicabo fuga in,
              ipsam laboriosam maiores molestiae nam, optio qui rem sequi sit tempora unde veritatis. Aperiam asperiores
              dolorem dolores est ex facilis laudantium natus necessitatibus officiis, quaerat quas, quos reprehenderit
              sed ut velit veniam veritatis, voluptate voluptatem? Culpa dolores eius eligendi, nam praesentium saepe
              sit?
              Architecto cupiditate distinctio dolor dolore doloremque dolores, excepturi explicabo fugit illo minima
              molestiae molestias, nesciunt nihil numquam odit, omnis quibusdam saepe tempore unde veritatis. Accusamus
              alias distinctio dolorem ea, eos facere illum ipsum iste laborum magni nihil nisi nostrum quis sapiente
              veniam!
            </p>
          </div>
        </section>
        <div id="footer"></div>
      </full-page>
    </transition>
  </div>
</template>
<script>
  import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
  import 'vue-slider-component/dist-css/vue-slider-component.css'
  import 'vue-slider-component/theme/default.css'
  //
  import CustomSelect from '@/components/CustomSelect'
  import Chips from '@/components/Chips'
  import Checkbox from '@/components/Checkbox'
  import CustomInput from '@/components/CustomInput'
  import BackgroundSwitcher from '@/components/BackgroundSwitcher'
  
  export default {
    name: "Home",
    data() {
      return {
        //Date picker
        date: new Date(),
        //Slider data
        fromRange: 0,
        toRange: 10000,
        max: 50000,
        //Slider data
        selectData: ['Киев', 'Харьков', 'Одесса', 'Кишенев', 'Минск', 'Питер', 'Москава', 'Париж', 'Берлин'],
        chipsData: [{name: 'Киев'}, {name: 'Харьков'}, {name: 'Одесса'}, {name: 'Кишенев'}, {name: 'Минск'}, {name: 'Питер'}, {name: 'Москава'}],
        isPickerOpen: false,
        red: '',
        green: '',
        blue: '',
        options: {
          licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
          // fixedElements: '#header',
          fixedElements: '#header',
          navigation: true,
          // navigationTooltips: ['firstSlide', 'secondSlide'],
          verticalCentered: false,
          scrollOverflow: true,
          // scrollOverflowReset: true,
          touchSensitivity: 15,
          // navigationPosition: 'right',
          onLeave: this.onLeave,
        },
      }
    },
    computed: {
      value: {
        get: function () {
          // Проверка, чтоб небыло больше макс
          if (this.fromRange > this.max) {
            this.fromRange = this.max
          }
          if (this.toRange > this.max) {
            this.toRange = this.max
          }
          // Проверка, чтоб небыло меньше 0
          if (this.fromRange < 0) {
            this.fromRange = 0
          }
          if (this.toRange < 0) {
            this.toRange = 0
          }
          return [this.fromRange, this.toRange]
        },
        set: function (newVal) {
          let fromRange = newVal[0]
          let toRange = newVal[1]
          if (!fromRange) {
            this.fromRange = 0
          }
          if (!toRange) {
            this.toRange = 0
          }
          if (fromRange < toRange) {
            this.fromRange = fromRange
            this.toRange = toRange || 0
          } else {
            this.fromRange = toRange || 0
            this.toRange = fromRange || 0
          }
        }
      },
      themeColor() {
        if (this.theme) {
          return 'light'
        }
        return 'dark'
      }
    },
    components: {BackgroundSwitcher, CustomSelect, Chips, Checkbox, VueSlider, CustomInput},
    methods: {
      removeChip(e) {
        this.chipsData = this.chipsData.filter(c => c.name !== e.name)
      },
      doneHandler() {
        this.isPickerOpen = !this.isPickerOpen
        const style = document.documentElement.style
        style.setProperty('--rgb-red', this.red)
        style.setProperty('--rgb-green', this.green)
        style.setProperty('--rgb-blu', this.blue)
      },
      onLeave: function (origin, destination, direction) {
        const root = document.documentElement
        if (destination.index === 0) {
          root.style.setProperty('--header-height', '80px')
        } else {
          root.style.setProperty('--header-height', '40px')
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .page{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
  }
</style>
