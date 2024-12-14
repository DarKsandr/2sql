<script setup>
    defineOptions({
      inheritAttrs: false
    });
</script>

<template>
    <div>
        <table :border="$attrs.border" :cellspacing="$attrs.border">
            <slot></slot>
        </table>
    </div>
</template>
<style scoped lang="scss">
@include respond-to(mobile) { 
    div{
        overflow-x:auto;
        width: calc(100vw - 40px);
    }
}
</style>