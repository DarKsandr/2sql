<script setup>
    
</script>

<template>
    <div id="sidebar-circle">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>
<style scoped lang="scss">
#sidebar-circle{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: fixed;
    background-color: #FFFF00;
    justify-content: center;
    flex-direction: column;
    gap: 7px;
    align-items: center;
    bottom: 50px;
    right: 30px;
    z-index: 3;
    display: none;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-tap-highlight-color: transparent;
    @include respond-to(mobile) { 
        display: flex;
    }
}
#sidebar-circle>div{
    width: 35px;
    height: 5px;
    background-color: white;
    -webkit-box-shadow: 2px 2px 0px 0px rgba(0,0,0,.8);
    -moz-box-shadow: 2px 2px 0px 0px rgba(0,0,0,.8);
    box-shadow: 2px 2px 0px 0px rgba(0,0,0,.8);
}
</style>
