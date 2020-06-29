<template>
  <div id="app">
    <div id="header">
      <div class="btn-wrapper">
        <div
          class="btn btn-picker"
          @click="isPickerOpen=!isPickerOpen"
        ></div>
        <div
          class="theme-picker"
          :class="{open: isPickerOpen}"
        >
          <div class="row">
            <label>
              Red:
              <input type="text" v-model="red">
            </label>
          </div>
          <div class="row">
            <label>
              Green:
              <input type="text" v-model="green">
            </label>
          </div>
          <div class="row">
            <label>
              Blue:
              <input type="text" v-model="blue">
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
      >toggle theme</div>
      <div class="nav-list">
        <div class="nav-item nav-item-1"></div>
        <div class="nav-item nav-item-2"></div>
        <div class="nav-item nav-item-3"></div>
        <div class="nav-item nav-item-4"></div>
        <div class="nav-item nav-item-5"></div>
        <div class="nav-item nav-item-6"></div>
      </div>
    </div>
    <full-page ref="fullPage" :options="options" @onLeave="onLeave">
      <section class="section" id="s-1">
        <BackgroundSwitcher :themeColor="themeColor">
          <div class="section-content">
            CONTENT
          </div>
        </BackgroundSwitcher>
      </section>
      <section class="section" id="s-2">
        <div class="section-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi architecto assumenda aut beatae, deleniti deserunt dolore dolorem dolores expedita facilis harum laborum magni maxime modi, nostrum officiis quaerat quibusdam quos saepe sapiente sequi soluta suscipit ut velit voluptatem! Asperiores commodi culpa dolores expedita explicabo iusto maxime, nobis non officiis placeat, qui quis quo rerum vel voluptates. Distinctio dolorum ducimus eos error fuga incidunt ipsa iste minima molestias provident. Aliquam autem cumque ipsum, iure laboriosam maxime odit placeat quo? Amet aspernatur cum dicta dolorum ea error excepturi expedita facilis fugiat hic illum impedit inventore ipsam, ipsum itaque laboriosam magnam minima molestiae nisi nulla obcaecati odio, odit officiis provident quae quia, quisquam quod ratione reprehenderit rerum sunt ullam unde ut vel veritatis voluptates voluptatibus. Alias aliquid aperiam aspernatur atque facilis illo impedit in incidunt ipsa nobis quibusdam, recusandae sit tenetur? A alias assumenda atque beatae dicta dolore eos excepturi exercitationem harum, incidunt iusto neque numquam optio praesentium, qui rerum sed suscipit tempora tempore tenetur. A accusamus aliquam aliquid architecto aut consectetur cumque dolore ducimus eaque et ex exercitationem explicabo fugit magni minus modi molestias neque, nostrum, obcaecati optio quas quod sed temporibus ullam velit! Ab aliquam animi assumenda, blanditiis commodi distinctio dolorem dolores eum eveniet harum ipsam ipsum laboriosam, nisi nostrum possimus quam, recusandae sed sequi sit unde. Alias beatae ea expedita harum incidunt numquam quod saepe sit veniam vitae? Commodi delectus esse maxime officiis quasi, voluptatem? Aliquid architecto, consectetur consequatur delectus dicta dignissimos doloremque, dolorum esse fugiat id laborum minima minus modi molestiae mollitia nam nihil nostrum possimus praesentium provident qui quidem quis quo recusandae reprehenderit repudiandae, unde voluptatum. Accusantium adipisci aspernatur aut autem blanditiis consequuntur corporis deserunt dicta dolor dolore enim eveniet ex fuga fugiat illum ipsa, labore maiores modi nihil numquam, quaerat ratione reiciendis sed similique sit tempore voluptate voluptatibus! Animi corporis dolorum ea necessitatibus porro reprehenderit temporibus. Adipisci debitis dolorem harum inventore, necessitatibus nihil odit pariatur provident reiciendis sapiente tempore voluptate voluptatem! Aperiam, debitis fuga iure minus numquam ut. Accusantium doloremque dolores exercitationem iure labore magni quas quia quibusdam sunt tempore. At deleniti deserunt eius ex explicabo laboriosam, minima quibusdam voluptatem. Animi asperiores assumenda atque consectetur deserunt, dicta dolores eaque eligendi facere inventore ipsa, laboriosam laudantium modi nam necessitatibus neque nihil numquam optio pariatur recusandae sapiente tempore temporibus ut. Aliquam consequatur dicta, eligendi eos et explicabo, incidunt, iste labore natus nihil quod sequi similique suscipit. Accusantium aperiam autem cum deleniti itaque minus nobis nostrum quo repellat sapiente. A accusamus at, dicta, dolore error harum impedit iste iusto nemo optio quam quidem sed! A aspernatur consectetur cum distinctio dolor enim explicabo, harum in minus nemo non quod repudiandae sequi temporibus velit veniam veritatis voluptatibus? Aut consequatur excepturi, minus reiciendis repellat saepe similique totam! Accusantium eos explicabo id necessitatibus numquam obcaecati optio provident velit. Ab accusamus, aspernatur aut deleniti dignissimos excepturi, fugiat laboriosam, minima nam officiis quas quasi quibusdam quidem repellat tempore? Accusamus architecto assumenda dicta est et, expedita explicabo fugit illum inventore minus molestiae nostrum obcaecati quaerat? Amet magni modi necessitatibus quaerat quibusdam vel? Adipisci amet cupiditate delectus ducimus earum eos et exercitationem explicabo labore, nam nemo nesciunt praesentium provident quasi quod recusandae reprehenderit repudiandae, totam ullam voluptate! Ab asperiores assumenda atque aut, corporis delectus dolore doloremque doloribus ea et eveniet exercitationem illo inventore ipsam labore magni minima molestias natus nesciunt officia optio perspiciatis reiciendis reprehenderit suscipit totam ut vero voluptate. Amet cupiditate eveniet facere, facilis fugiat, iure laudantium minima natus quasi quidem quos ullam! Consequuntur, distinctio dolores ex exercitationem inventore itaque mollitia repudiandae. Amet consectetur deleniti facilis, incidunt iure minus suscipit? A accusamus architecto cum delectus dicta dignissimos dolore doloremque dolorum ducimus eius, est et eveniet excepturi facilis hic id ipsum iste iure laboriosam libero maxime molestias mollitia nemo, officiis pariatur quae, quaerat quasi quis repudiandae saepe sed soluta sunt unde veniam voluptatem voluptates voluptatum! Accusamus adipisci, at eveniet ipsa ipsum iusto laudantium magni minima neque nulla, quaerat quidem repellat sequi. Ab accusamus accusantium ipsum quibusdam velit. Consequuntur dolore earum libero odio provident sapiente tempora velit! Ad aliquid aperiam assumenda consequuntur delectus dicta dolore ducimus enim error facere harum ipsam iste, iusto labore magni molestiae molestias necessitatibus porro praesentium quaerat quas quasi quod rem sapiente sint totam velit, voluptates? At minus numquam quibusdam. Aperiam cum error tempore. Autem consequuntur ea earum esse iure quo sint suscipit veritatis. Excepturi natus neque provident velit voluptatibus. Fugiat inventore saepe ullam. Consequuntur dolore dolorum ea eligendi eos, eveniet illo impedit incidunt ipsam, iure laborum molestiae natus nemo nulla officia optio perferendis quam, quasi quibusdam rem rerum saepe sequi sint sit temporibus totam voluptas voluptatum? Alias mollitia nobis pariatur quaerat quam quod sapiente similique ut! Accusamus libero odit soluta vitae. Consequatur, delectus, perferendis. Aperiam aspernatur assumenda autem beatae cumque dicta, ea earum eos et, expedita illo illum incidunt itaque iure iusto laudantium magni necessitatibus officia omnis, quidem quisquam sapiente voluptate voluptates? Amet architecto blanditiis commodi corporis debitis delectus dolore dolorum explicabo harum hic, illo impedit laudantium, magnam molestiae optio pariatur porro possimus quaerat quam, qui quidem reiciendis sint tempore ullam unde. Ad amet consequatur cumque cupiditate dolor dolorem ducimus eligendi enim excepturi fuga fugit harum ipsa iure libero magni maiores molestiae nemo omnis perspiciatis porro praesentium quaerat quidem recusandae repellendus suscipit veniam, voluptate? Aliquid, ducimus earum eum, eveniet excepturi harum hic impedit maxime molestias perspiciatis ratione repellendus reprehenderit temporibus unde ut voluptates voluptatibus. Accusantium dicta eius eos excepturi fugiat mollitia veniam! Assumenda at consectetur debitis delectus dignissimos expedita fuga laborum laudantium molestias optio placeat, provident quasi qui quisquam quod ratione similique sunt tempore totam voluptatibus. Aliquam dolor error explicabo id, numquam quam voluptates? Aut corporis cupiditate eligendi enim, est et exercitationem illum incidunt itaque magnam maiores neque odio odit possimus, quis quo rem repellendus reprehenderit sapiente sint sunt, veniam voluptas voluptatum! At commodi consequatur eaque quasi veniam! Ad, aspernatur commodi, deleniti deserunt dolorem doloribus dolorum eaque enim error harum quas quasi quod ratione similique, voluptate! Animi dignissimos dolores ducimus expedita fugit repellat sunt veniam. Aut autem, est id quaerat quibusdam unde?
          </p>
        </div>
      </section>
      <section class="section" id="s-3">
        <div class="section-content">
          <div class="section-split">
            <div class="section-split-side">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam architecto consectetur ea minima necessitatibus, nostrum perferendis quia, quidem ratione recusandae repellat tempora voluptas voluptate. Aspernatur, consequatur culpa eaque fuga harum hic, illum inventore itaque libero nisi, nobis possimus quam sint suscipit tempora! Aperiam asperiores at atque beatae distinctio ducimus eius et explicabo facere facilis fugit harum itaque iusto, laborum magnam minima nisi non perferendis porro reprehenderit repudiandae sequi sunt ut vitae voluptate? Aperiam aut cumque deserunt incidunt ipsam magnam quibusdam. Aperiam beatae consectetur consequuntur eos exercitationem expedita fugiat inventore, natus nemo obcaecati pariatur perspiciatis placeat quo tempora ut! Asperiores dolorum et exercitationem iste qui similique sint unde. Architecto at corporis earum eius eos eum impedit molestiae necessitatibus nisi nostrum numquam perferendis perspiciatis porro possimus provident qui quibusdam quis quisquam, quo reprehenderit saepe sapiente sunt temporibus totam ut vel vitae voluptatem! Accusamus, ad adipisci alias architecto asperiores atque consequatur culpa dolores eius eos fugit in labore modi nisi odio officia placeat quae quasi quis quisquam ratione rem repellendus sit ullam unde ut vel voluptatem? Accusantium atque cupiditate deleniti dolorem error expedita facilis fuga natus nostrum quisquam quod quos, repudiandae sapiente, tempore voluptatem! Ad aut blanditiis commodi debitis dignissimos ea, eius eligendi et eveniet expedita facere fuga fugiat hic illo iste iusto libero, nam neque odit possimus provident recusandae, repellendus sint tempore ut velit veniam vitae! Aperiam dignissimos eaque exercitationem, fuga iusto nisi nulla porro ratione repellat sunt? Ab amet culpa ea laborum vero. Architecto, consequuntur cumque debitis dolorem dolores minima natus odit rem vel veniam? A ad aliquam autem blanditiis distinctio eum expedita harum impedit nobis odio officiis, omnis quaerat, quam quas quasi reprehenderit, similique temporibus vel. Ab aspernatur consequatur consequuntur dolore ducimus magnam neque non pariatur ratione temporibus. Ab accusantium culpa dolore, eaque eum laborum, magni modi molestiae odit officia possimus voluptate? A assumenda consectetur ea eligendi, obcaecati tenetur. Consequuntur distinctio harum iure laborum ut. Accusamus accusantium aspernatur atque delectus deleniti dolorum earum enim et, eum excepturi expedita facere fugiat illum inventore ipsum iusto labore laboriosam laudantium modi molestias nihil nisi nulla odit, placeat porro quam quasi quis quod repellat reprehenderit saepe sapiente tempore unde velit veniam veritatis voluptatum? A ad aliquam animi, blanditiis dolor dolorum eligendi eum excepturi ipsa magnam minima modi molestias nemo neque non perspiciatis provident quaerat quam quisquam quod quos repudiandae unde veniam vero voluptatibus? Debitis excepturi exercitationem mollitia nam neque odit officiis placeat recusandae, ullam veniam! Adipisci amet corporis cum distinctio illum iure laudantium nesciunt recusandae tempore vel? Ab aperiam blanditiis dicta eum possimus tempora tempore temporibus, unde vero? Adipisci aperiam asperiores aut blanditiis consequatur dolore dolorem error fugit hic illum iste labore magnam neque perspiciatis quasi, ratione reprehenderit rerum suscipit tenetur voluptatem. Aperiam atque, consequuntur corporis dolore eius eos, facere ipsam minima officiis optio quae quo similique tenetur ut voluptate? Eius esse est, exercitationem hic magnam necessitatibus non officiis praesentium! Aliquam beatae consequatur cum debitis doloribus earum ex, exercitationem facere facilis fugit illum incidunt laborum, magni maiores nam nihil officiis optio perferendis provident quaerat quam quas quia recusandae repudiandae tenetur ut velit! Deleniti error nostrum numquam qui repellendus soluta tempore, unde! Animi architecto corporis, cum dicta doloremque earum expedita fuga fugiat fugit hic laboriosam maiores minima nobis odio optio possimus quia recusandae repellendus reprehenderit sunt suscipit tempora totam vel. Amet eos maxime modi natus quasi veritatis voluptatibus. A cumque ducimus enim impedit ipsa minus neque porro quas temporibus tenetur. Adipisci aspernatur assumenda at atque blanditiis eaque illo illum incidunt laborum mollitia nihil non pariatur possimus quaerat quidem sint tempore veniam, voluptatibus. Autem esse est iusto nemo sed unde voluptates? Autem fugiat impedit mollitia. Accusantium adipisci alias amet consectetur cumque delectus doloremque doloribus eaque et facilis fuga fugiat harum illo ipsam, ipsum minus neque odit officia perferendis quam repellat reprehenderit, tenetur ut. Aliquam aperiam asperiores at commodi, cum delectus doloribus et eum illum iure iusto minima mollitia officiis quis recusandae reiciendis rerum tempora, unde voluptate voluptatem? Accusamus, error facere hic magni minus numquam odit officia temporibus? Aliquam est neque sint vel veniam vitae voluptate? Amet hic neque nobis perspiciatis unde vel velit. Consequuntur neque placeat reprehenderit saepe sint! Alias assumenda consequatur, distinctio excepturi iure molestiae necessitatibus odit perspiciatis quaerat quo, similique tenetur vitae?
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eius eligendi, est explicabo fuga in, ipsam laboriosam maiores molestiae nam, optio qui rem sequi sit tempora unde veritatis. Aperiam asperiores dolorem dolores est ex facilis laudantium natus necessitatibus officiis, quaerat quas, quos reprehenderit sed ut velit veniam veritatis, voluptate voluptatem? Culpa dolores eius eligendi, nam praesentium saepe sit? Architecto cupiditate distinctio dolor dolore doloremque dolores, excepturi explicabo fugit illo minima molestiae molestias, nesciunt nihil numquam odit, omnis quibusdam saepe tempore unde veritatis. Accusamus alias distinctio dolorem ea, eos facere illum ipsum iste laborum magni nihil nisi nostrum quis sapiente veniam!
          </p>
        </div>
      </section>
      <div id="footer"></div>
    </full-page>
  </div>
</template>
<script>
  import BackgroundSwitcher from '@/components/BackgroundSwitcher'
  export default {
    name: 'App',
    data() {
      return {
        isPickerOpen: false,
        red: '',
        green: '',
        blue: '',
        theme: true,
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
      themeColor(){
        if(this.theme){
          return 'light'
        }
        return 'dark'
      }
    },
    components: {BackgroundSwitcher},
    methods: {
      doneHandler(){
        this.isPickerOpen = !this.isPickerOpen
        const style = document.documentElement.style
        style.setProperty('--rgb-red', this.red)
        style.setProperty('--rgb-green', this.green)
        style.setProperty('--rgb-blu', this.blue)
      },
      onLeave: function(origin, destination, direction) {
        const root = document.documentElement
        if(destination.index===0){
          root.style.setProperty('--header-height', '80px')
          this.reRender()
          
        }else{
          root.style.setProperty('--header-height', '40px')
          this.reRender()
        }
      },
      reRender(){
      }
    },
    mounted(){
    },
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
    background-color: rgba(#666,.5);
    padding: 20px;
    opacity: 0;
    transform: translate(-50%, -15px) scale(.6);
    transition: opacity .3s, transform .3s;
    &.open{
      opacity: 1;
      transform: translate(-50%, 0px) scale(1);
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
