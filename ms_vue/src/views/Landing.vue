<template>
    <div>
        <div class="main-wrapper">
            <span class="title">Money Slave</span>
            <sign-up class="box-card"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import { SignUp } from '@/components'

    const components = { SignUp };
    @Component({ components })
    export default class Landing extends Vue {

    }
</script>

<style lang="scss" scoped>
    .main-wrapper {
        height: 500px;
        position: relative;
    }
    .title {
        position: absolute;
        top: 10%;
        left: 40px;
        font-size: 50px
    }
    .box-card {
        position: absolute;
        right: 64px;
        top: 10%;
        width: 400px;
    }
</style>