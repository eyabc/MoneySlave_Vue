<template>
    <div>
        <el-form label-width="70px">
            <el-form-item label="통장이름">
                <span>월급통장</span>
            </el-form-item>
            <el-form-item label="잔액">
                <span>6000 원</span>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component
    export default class AccountInfo extends Vue {

    }
</script>

<style scoped>
    .el-form-item {
        margin-bottom: 0;
    }
</style>