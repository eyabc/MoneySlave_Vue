<template>
    <div class="block">
        <div class="header">
            <date-picker :date="date"></date-picker>
            <span class="money">누적 금액: 0 원 </span>
        </div>
        <el-table
                :data="tableData"
                class="table">
            <el-table-column
                    prop="todo"
                    label="할일"
                    width="400">
            </el-table-column>
            <el-table-column
                    prop="start"
                    label="시작시간"
                    width="">
            </el-table-column>
            <el-table-column
                    prop="end"
                    label="완료시간"
                    width=""/>
            <el-table-column
                    prop="pomodoro"
                    label="Pomodoro"
                    width="">
            </el-table-column>
            <el-table-column
                    prop="earn"
                    label="수익">
            </el-table-column>
        </el-table>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {DatePicker} from '@/components/element-ui';

    const components = { DatePicker };
    @Component({ components })
    export default class TodoList extends Vue {
        date: Date = new Date();
        tableData: Array<any> = [{
            todo: 'todo1',
            start: '00:00',
            end: '00:00',
            pomodoro: 1,
            earn: 1000,
        }]
    }
</script>
<style scoped>
    .header {
        display: flex;
    }
    .money {
        margin-left: 15px;
        line-height: 40px;
    }
    .table {
        width: 100%;
        margin-top: 10px;
    }
    .el-table .success-row {
        background: #f0f9eb;
    }
</style>

