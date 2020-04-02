<template>
    <el-dialog :visible.sync="opened"
               title="로그인"
               width="340px"
               :close-on-click-modal="false">
        <el-form :model="signInForm" ref="signInForm" label-position="top" :rules="rules" class="sign-up-form">
            <el-form-item label="아이디" prop="id">
                <el-input v-model="signInForm.id"></el-input>
            </el-form-item>
            <el-form-item label="비밀번호" prop="password">
                <el-input type="password" v-model="signInForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="submit-btn" @click="submitForm('signInForm')">로그인</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from 'vue-property-decorator';

    const signInFormInit = {
        id: '',
        password: '',
    }

    @Component
    export default class SignIn extends Vue {
        opened = false;
        signInForm: { id: string; password: string } = { ...signInFormInit };
        open () {
            this.opened = true
        }

        @Watch('opened')
        onOpen() {
            this.signInForm = { ...signInFormInit }
        }

        validateId = (rule: any, value: string, callback: any) => {
            if(!value) {
                return callback(new Error('아이디를 입력해 주세요.'));
            }
            callback();
        };
        validatePassword = (rule: any, value: string, callback: any) => {
            if (!value) {
                return callback(new Error('비밀번호를 입력해 주세요.'));
            }
            callback();
        };


        rules: { id: any[]; password: any[] }  = {
            id: [{ validator: this.validateId, trigger: 'blur'}],
            password: [{ validator: this.validatePassword, trigger: 'blur'}]
        };

        submitForm = async (formName: string) => {
            try {
                await (this.$refs[formName] as Vue & { validate: () => boolean }).validate();
                alert('로그인 완료!');
            } catch (err) {
                return false;
            }
        }
    }
</script>