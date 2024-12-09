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
        <h1><a href="/" rel="bookmark"></a></h1>
        <div class="entry">
          <RouterView />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
#page {
	text-align: left;
	width: 100%;
	background: url(/src/images/bg1.png);
	background-attachment: fixed;
	padding: 0;
	min-height: 600px;
	color: #fff;
	display: grid;
	grid-template: 
	"header header" min-content
	"sidebar poster" max-content
	"footer footer" min-content / min-content auto;
}

#poster {
  grid-area: poster;
}

#poster>div {
  margin-bottom: 70px;
}

#post-content {
  margin: 0 20px 40px 40px;
  font-size: 1.2em;
  margin: 0 20px 40px 40px;
  text-align: justify;
  padding: 10px;
  -moz-border-radius: 5px;
  width: 55%;
}
@media only screen and (max-width: 1400px) {
  #post-content {
    width: auto;
  }
}
</style>