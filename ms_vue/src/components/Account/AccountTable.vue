<template>
    <div>
        <div class="header">
            <date-picker-range :value="date" size="mini"/>
            <radio-btn :value="state" :options="states" size="mini" class="radio"></radio-btn>
        </div>
        <el-table
                border
                :data="tableData"
                class="table"
                :summary-method="getSummaries"
                show-summary>
            <el-table-column
                    prop="date"
                    label="날짜"
                    width="120"
                    sortable>
                <template slot-scope="scope">
                    <strong v-if="getEditState(scope.row.id)"
                            v-html="$moment(scope.row.date).format('YYYY-MM-DD')"/>
                    <el-date-picker v-else
                                    class="account-date-picker"
                                    v-model="scope.row.date"
                                    type="date"
                                    size="mini"
                                    :clearable="false"
                                    prefix-icon="."
                    />
                </template>
            </el-table-column>
            <el-table-column
                    prop="content"
                    label="내용"
                    sortable>
                <template slot-scope="scope">
                    <strong v-if="getEditState(scope.row.id)"
                            v-html="scope.row.content"/>
                    <el-input v-else v-model="scope.row.content" size="mini"></el-input>
                </template>
            </el-table-column>
            <el-table-column
                    prop="get"
                    label="수익"
                    width="100px">
                <template slot-scope="scope">
                    <strong v-if="getEditState(scope.row.id)"
                            v-html="scope.row.get"/>
                    <el-input v-else v-model="scope.row.get" size="mini"></el-input>
                </template>
            </el-table-column>
            <el-table-column
                    prop="out"
                    label="지출"
                    width="100px">
                <template slot-scope="scope">
                    <strong v-if="getEditState(scope.row.id)"
                            v-html="scope.row.out"/>
                    <el-input v-else v-model="scope.row.out" size="mini"></el-input>
                </template>
            </el-table-column>
            <el-table-column width="95px">
                <template slot-scope="scope" v-if="scope.row.root !== false">
                    <div v-if="scope.row.id !== 0">
                        <div class="action-wrapper" v-if="editing.indexOf(scope.row.id) === -1">
                            <table-action-icon-btn
                                    icon="el-icon-edit-outline"
                                    @click.native="handleEdit(scope.row.id)"/>
                            <table-action-icon-btn
                                    type="danger"
                                    class="icon-right"
                                    icon="el-icon-delete"
                            />
                        </div>
                        <div v-else class="action-wrapper">
                            <el-button
                                    size="mini"
                                    class="action-btn"
                                    @click="handleEditClose(scope.row.id)">수정 완료
                            </el-button>
                        </div>
                    </div>
                    <div v-else class="action-wrapper">
                        <el-button
                                size="mini"
                                class="action-btn">
                            추가
                        </el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import {DatePickerRange, RadioBtn, TableActionIconBtn} from '@/components';
    import moment from 'moment'

    const components = {DatePickerRange, RadioBtn, TableActionIconBtn};

    interface Account {
        id: number;
        date: string;
        content: string;
        get: number;
        out: number;
    }

    const initData: Account[] = [
        {
            id: 0,
            date: moment().format('YYYY-MM-DD'),
            content: '',
            get: 0,
            out: 0,
        },
        {
            id: 1,
            date: '2016-05-02',
            content: 'wangxiaohu',
            get: 1000,
            out: 0,
        }, {
            id: 2,
            date: '2016-05-04',
            content: 'wangxiaohu',
            get: 1000,
            out: 0,
        }, {
            id: 3,
            date: '2016-05-01',
            content: 'wangxiaohu',
            get: 0,
            out: -1000,
        }, {
            id: 4,
            date: '2016-05-03',
            content: 'wangxiaohu',
            get: 0,
            out: -2000
        }
    ];
    @Component({components})
    export default class AccountTable extends Vue {
        date: Date[] = [new Date(), new Date()];
        state = '전체';
        states: { [key: string]: string } = {
            radio1: '전체',
            radio2: '수입',
            radio3: '지출',
        };
        editing: number[] = [];
        edit = false;
        tableData: Account[] = [ ...initData ];

        handleEdit(id: number) {
            this.editing.push(id)
        }

        handleEditClose(id: number) {
            const idx = this.editing.indexOf(id);
            this.editing.splice(idx, 1);
        }

        getSummaries({ data }: { data: Account[] }) {
            const [ getSum, outSum ] = data.reduce(([a, b], { get, out }) => [a + get, b + out], [0, 0]);
            return ['합계', getSum + outSum, getSum, outSum, ''];
        }

        getEditState(id: number) {
            return id !== 0 && this.editing.indexOf(id) === -1;
        }
    }
</script>

<style scoped>
    .header {
        display: flex;
        margin-bottom: 10px;
    }

    .radio {
        margin: 0 10px;
    }

    .action-wrapper {
        display: flex;
        justify-content: center;
    }
</style>

<style>
    .account-date-picker .el-input__inner {
        padding: 0 10px !important;
        width: 100px;
    }
</style>