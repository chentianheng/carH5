<template>
    <div class="container">
        <img @click="hrefMain" class="btn1" src="../../images/assets/introduction/btn1.png" alt="btn1">
        <img @click="hrefSecondary" class="btn2" src="../../images/assets/introduction/btn2.png" alt="btn2">
    </div>
</template>

<script>
    export default {
        data(){
            return{
            }
        },
        methods:{
            hrefMain(){
                this.$router.push({ path:'/main' })
            },
            hrefSecondary(){
                this.$router.push({ path:'/secondary' })
            }
        }
    }
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
        background: black url("../../images/assets/introduction/background000.png") no-repeat ;
        background-size: 100%;
        width: 100%;
    }
    .btn1{
        margin-top: 16rem;
        width: 30%;
    }
    .btn2{
        margin-top: 13rem;
        width: 30%;
    }
</style>