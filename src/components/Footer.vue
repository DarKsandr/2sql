<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <div id="footer">
    <p class="alignleft">
      <a class="fl" href="mailto:admin@2sql.ru">Обратная
        связь</a>
    </p>
    <p class="alignright">
      <RouterLink to="/">2SQL.RU</RouterLink> (c) 2013-{{ currentYear }}
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