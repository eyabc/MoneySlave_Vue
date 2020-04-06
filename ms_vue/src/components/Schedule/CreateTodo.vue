<template>
    <div class="block">
        <div class="opened" v-if="opened">
            <div class="opened-header">
                <div class="opened-header-left">
                    <date-picker :date="date"></date-picker>
                    <el-select
                            :value="agenda"
                            :options="options"
                            :filterable="true"
                            placeholder="아젠다 선택"
                    />
                    <el-select
                            :value="list"
                            :options="options"
                            :filterable="true"
                            placeholder="목록에서 선택"
                    />
                </div>
                <span><i class="icon el-icon-arrow-up" @click="toggleWeight"></i></span>
            </div>
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
        <div class="closed" v-else><i class="icon el-icon-plus" @click="toggleWeight"></i></div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import { DatePicker, ElSelect } from '@/components/element-ui';

    const components = { DatePicker, ElSelect };
    @Component({ components })
    export default class CreateTodo extends Vue {
        opened = true;
        date: Date = new Date();
        options: any = [{
            value: 'Option1',
            label: 'Option1'
        }, {
            value: 'Option5',
            label: 'Option5'
        }];
        agenda?: string = '';
        list?: string = '';
        contents?: string = '';

        toggleWeight () {
            this.opened = !this.opened
        }
    }
</script>

<style lang="scss">
    .date-picker {
        width: 140px !important;
    }

    .icon {
        padding: 10px;

        &:hover {
            font-weight: bold;
            cursor: pointer;
        }
    }

    .opened {
        /*&:after {*/
        /*    display: block;*/
        /*    clear: both;*/
        /*    content: ''*/
        /*}*/
        &-header {
            display: flex;
            justify-content: space-between;
            &-left {
                display: flex;
            }
        }
    }

    .closed {
        display: flex;
        justify-content: flex-end;
    }
    .form {
        margin-left: 15px;
    }
    .el-textarea {
        margin-top: 10px;
    }
    .el-textarea__inner {
        height: 33px;
    }
    .submit {
        margin-top: 5px;
        text-align: right;
    }
</style>