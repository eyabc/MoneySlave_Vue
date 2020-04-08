<template>
    <el-form class="form">
        <el-form-item label="포모도로 당 금액" label-width="120px" class="pomodoro-pay">
            <el-input type="text"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">저장</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component
    export default class PayForm extends Vue {

    }
</script>

<style scoped>
.form {
    display: flex;
    width: 400px;
}
.pomodoro-pay {
    margin-right: 10px;
}
</style>