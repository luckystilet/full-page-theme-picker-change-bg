<template>
  <div class="layout">
    <div id="header">
      <router-link class="btn" :to="{name: 'Gsap'}" v-waves exact>Gsap</router-link>
      <router-link class="btn" :to="{name: 'Home'}" v-waves exact>Home</router-link>
      <router-link class="btn" :to="{name: 'Table'}" v-waves exact>Table</router-link>
    </div>
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    name: "mainLayout"
  }
</script>
