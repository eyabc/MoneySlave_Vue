<template>
    <div>
        <div id="wrapper">
            <div class="container">
                <!-- TODO link when user to '/schedule; or '/' -->
                <span id="logo"><fa icon="won-sign"/></span>
                <span v-if="userInfo === null">
                    <el-button icon="login" size="mini" @click="handleDialogSignIn" plain>로그인</el-button>
                </span>
                <el-dropdown trigger="click" v-else>
                    <span class="el-dropdown-link"><b>{{userInfo.name}}</b> 님 오늘하루도 화이팅<i class="el-icon-arrow-down el-icon--right"></i></span>
                    <el-dropdown-menu slot="dropdown" class="dropdown">
                        <!-- TODO link to menu -->
                        <el-dropdown-item disabled>{{userInfo.id}}</el-dropdown-item>
                        <el-dropdown-item>계좌</el-dropdown-item>
                        <el-dropdown-item>급여</el-dropdown-item>
                        <el-dropdown-item>내 정보</el-dropdown-item>
                        <el-dropdown-item @click.native="logout">로그아웃</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <sign-in ref="signInForm"/>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { SignIn } from '@/components';
import { namespace } from "vuex-class";
import { UserInfo } from "@/middleware/store/user";
import {MutationMethod} from "vuex";

const userStore = namespace('userStore');

const components = {SignIn};
@Component({components})
export default class SiteHeader extends Vue {

    @userStore.State userInfo!: UserInfo|null;
    @userStore.Mutation setUserInfo!: MutationMethod;

    private handleDialogSignIn() {
        const signInForm: any = this.$refs.signInForm;
        signInForm.open();
    }

    private logout () {
        this.$message({ type: 'success', message: '로그아웃 되었습니다' })
        this.setUserInfo(null)
        console.log(this.userInfo);
    }

    private created () {
        this.setUserInfo({
            id: 'bey4314@naver.com',
            name: '박은영'
        })
    }
}
</script>

<style lang="scss">
    #wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        line-height: 64px;
        border-bottom: 1px solid #eee;
        background: fade-out(#fff, 0.15);
    }

    #logo {
        font-size: 20px;
    }

    .login {
        :hover {
        }
    }

    .container {
        display: flex;
        justify-content: space-between;
    }
    .dropdown {
        top: 40px !important;
    }
</style>