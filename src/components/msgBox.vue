<template>
    <div style="display: flex;align-items: center;padding-left: 8px;">
        <div>
            <img class="logoImg" :src="data.headImgUrl" alt="logoImg"/>
        </div>

        <div style="margin-left: 7px;">
            <p style="color: white;padding-left: 10px;font-size: 15px;">{{ data.nickName }}</p>
            <p class="msgBox">{{ data.msg }}</p>
        </div>

    </div>

</template>

<script>
    export default {
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        name: "msgBox",
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .msgBox {
        background-image: url("../images/assets/activity/msgBox.png");
        font-size: 14px;
        background-size: auto 100%;
        color: #ffffff;
        padding: 0.2rem 1rem;
        width: 10rem;
        border-radius: 5px;
    }

    .logoImg {

        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
</style>
