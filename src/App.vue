<script setup>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div id="page">
    <Header />
    <Sidebar />
    <div id="poster">
      <div id="post-content">
        <h1><a href="#" rel="bookmark" @click.prevent>{{ $route.meta.h1 }}</a></h1>
        <div class="entry">
          <RouterView />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
#page {
	text-align: left;
	width: 100%;
	background: url(/src/images/bg1.png) fixed;
	padding: 0;
	min-height: 600px;
	color: #fff;
	display: grid;
	grid-template: 
	"header header" min-content
	"sidebar poster" max-content
	"footer footer" min-content / min-content auto;

  @include respond-to(mobile) { 
    grid-template: 
          "header" min-content
          "poster" max-content
          "footer" min-content / auto;
  }
}
#poster {
  grid-area: poster;
}
#poster>div {
  margin-bottom: 70px;
}
#post-content {
  margin: 0 20px;
  font-size: 1.2em;
  text-align: justify;
  -moz-border-radius: 5px;
  max-width: 1000px;
}
.entry{
  margin-top: 30px;
}
</style>