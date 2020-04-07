<template>
    <div class="form">
        <el-form label-position="right"  label-width="120px" size="mini">
            <el-form-item label="이름">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="아이디">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="비밀번호 확인">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="비밀번호 변경">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="비밀번호 변경 확인">
                <el-input></el-input>
            </el-form-item>
            <el-form-item>
                <el-button>내 정보 저장</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component
    export default class UserForm extends Vue {

    }
</script>

<style scoped>
.form {
    width: 300px
}
</style>