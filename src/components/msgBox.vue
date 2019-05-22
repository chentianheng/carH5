<template>
    <p class="msgBox">
    {{ text }}
    </p>

</template>

<script>
    export default {
        props:['text'],
        name: "msgBox",
        data(){
            return{
            }
        }
    }
</script>

<style scoped>
    .msgBox{
        background-image: url("../images/assets/activity/msgBox.png");
        font-size: 14px;
        background-size: auto 100%;
        color: #ffffff;
        padding: 0.2rem 1rem;
        width: 10rem;
        border-radius: 5px;
    }
</style>
