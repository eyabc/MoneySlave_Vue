<template>
    <div class="block">
        <el-input
                type="textarea"
                :rows="2"
                placeholder="Please input"
                v-model="contents">
        </el-input>
        <div class="submit">
            <el-button type="primary" size="mini">작성하기</el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component
    export default class CreateAgenda extends Vue {
        contents?: string = '';
    }
</script>

<style scoped>
    .submit {
        margin-top: 5px;
        text-align: right;
    }
</style>