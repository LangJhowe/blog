<template>
    <div class="progress-bar">
        <div class="bar-inner">
            <div class="progress"></div>
            <div class="progress-btn-wrapper">
                <div class="progress-btn"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        percent:{
            type:Number,
            default: 0
        }
    },
}
</script>

<style lang="stylus" scoped>

</style>

