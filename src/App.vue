<script setup>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div id="page">
    <Header />
    <Sidebar />
    <RouterView />
    <Footer />
  </div>
</template>
