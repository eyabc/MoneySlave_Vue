<template>
    <div>
        <el-card>
            <el-form :model="signUpForm" label-position="top" :rules="rules" ref="signUpForm" class="sign-up-form">
                <el-form-item label="이름" prop="name" >
                    <el-input v-model="signUpForm.name"></el-input>
                </el-form-item>
                <el-form-item label="아이디" prop="id">
                    <el-input v-model="signUpForm.id"></el-input>
                </el-form-item>
                <el-form-item label="비밀번호" prop="pass">
                    <el-input type="password" v-model="signUpForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="비밀번호 확인" prop="checkPass">
                    <el-input type="password" v-model="signUpForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="submit-btn" @click="submitForm('signUpForm')">회원가입</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    // TODO 회원가입 validate 검사
    @Component({})
    export default class SignUp extends Vue {
        signUpForm: { name: string; id: string; pass: string; checkPass: string } = {
            name: '',
            id: '',
            pass: '',
            checkPass: '',
        };


        validateId = (rule: any, value: string, callback: any) => {
            if (!value) {
                return callback(new Error('아이디를 입력해 주세요.'))
            }
            callback()
        };
        validateName = (rule: any, value: string, callback: any) => {
            if (!value) {
                return callback(new Error('이름을 입력해 주세요.'))
            }
            callback();
        };
        validatePassword = (rule: any, value: string, callback: any) => {
            if (!value) {
                return callback(new Error('비밀번호 입력해 주세요.'))
            }
            callback();
        };
        validatePasswordDoubleCheck = (rule: any, value: string, callback: any) => {
            if (!value) {
                return callback(new Error('비밀번호를 재입력해 주세요.'))
            }
            callback();
        };

        rules: { name: any[]; id: any[]; pass: any[]; checkPass: any[] } = {
            name: [{validator: this.validateName, trigger: 'blur'}],
            id: [{validator: this.validateId, trigger: 'blur'}],
            pass: [{validator: this.validatePassword, trigger: 'blur'}],
            checkPass: [{validator: this.validatePasswordDoubleCheck, trigger: 'blur'}],
        };


        submitForm = async (formName: string) => {
            try {
                await (this.$refs[formName] as Vue & { validate: () => boolean }).validate();
                alert('회원가입 완료!');
            } catch (err) {
                return false;
            }
        }
    }
</script>