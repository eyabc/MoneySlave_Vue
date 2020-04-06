<template>
    <div class="block">
        <el-card class="box-card">
            <div slot="header" class="header">
                <span class="title">Card name</span>
                <div class="action">
                    <el-button type="primary" size="mini">시작</el-button>
                    <el-button type="warning" size="mini">연장</el-button>
                    <el-button type="success" size="mini">완료</el-button>
                    <el-button type="danger" size="mini">중단</el-button>
                </div>
            </div>
            <div class="time">
                <span>시작시간: 00:00</span>
                <span>Pomodoro: 0</span>
                <span>남은시간: 25 분</span>
            </div>
        </el-card>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component
    export default class Pomodoro extends Vue {

    }
</script>
<style lang="scss">
    .action {
        display: flex;
        align-items: center;
    }

    .title {
        padding-left: 10px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .el-card__header {
        padding: 10px 10px;
    }

    .el-card__body {
        padding: 10px 10px 10px 20px;
    }

    .time > span {
        padding-right: 30px;
    }
</style>