<template>
    <div>
        <div class="withdraw-btn">
            <el-button size="mini">탈퇴하기</el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component
    export default class Withdraw extends Vue {

    }
</script>

<style scoped>
    .withdraw-btn {
        text-align: right;
    }
</style>