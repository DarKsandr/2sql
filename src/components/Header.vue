<script setup>
import { BASE_NAME } from '../config';
</script>

<template>
	<div id="header">
		<div id="site-info">
			<RouterLink :to="{name: 'home'}" id="title_text" class="font-size-larger">
				{{ BASE_NAME }}
			</RouterLink><br>
			Информационный ресурс о SQL
		</div>
	</div>
</template>

<style scoped>
#header {
	width: 100%;
	/*line-height:40px;*/
	color: #fff;
	grid-area: header;
}

#site-info {
	margin-left:20px;
	padding-top: 25px;
	width: 230px;
}
#title_text {
	font-size: 120%;
}
</style>