<script setup>
import {BASE_NAME, FEEDBACK_EMAIL} from "../config.js";

const currentYear = new Date().getFullYear();
</script>

<template>
  <div id="footer">
    <p class="alignleft">
      <a class="fl" :href="`mailto:${FEEDBACK_EMAIL}`">Обратная
        связь</a>
    </p>
    <p class="alignright">
      <RouterLink :to="{name: 'home'}">{{ BASE_NAME }}</RouterLink> (c) 2013-{{ currentYear }}
    </p>
  </div>
</template>

<style scoped>
#footer {
  background-color: #000;
  width: 100%;
  height: 40px;
  color: #fff;
  grid-area: footer;
  display: flex;
  justify-content: space-between;
}
</style>