<script setup>

</script>

<template>
	<div id="header">
		<div id="site-info">
			<RouterLink :to="{name: 'home'}" id="title_text" class="font-size-larger">
				2SQL.RU
			</RouterLink><br>
			Информационный ресурс о SQL
		</div>
	</div>
</template>

<style scoped>
#header {
	width: 100%;
	height: 40px;
	margin-bottom: 20px;
	/*line-height:40px;*/
	color: #fff;
	grid-area: header;
}

#site-info {
	text-align: center;
	/*margin-left:20px;*/
	padding-top: 25px;
	width: 230px;
	height: 100px;
}
#title_text {
	font-size: 120%;
}
</style>