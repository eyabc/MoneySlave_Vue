<template>
    <div class="block">
        <el-table
                :data="tableData"
                style="width: 100%;"
                row-key="id"
                border
                default-expand-all>
            <el-table-column
                    prop="date"
                    label="날짜"
                    sortable
                    width="180">
            </el-table-column>
            <el-table-column
                    label="아젠다">
                <template slot-scope="scope">
                    <strong v-if="editing.indexOf(scope.row.id) === -1" v-html="scope.row.name" />
                    <el-input v-else v-model="scope.row.name" size="mini" type="textarea"/>
                </template>
            </el-table-column>
            <el-table-column
                    width="130px"
                    label=""
                    align="center">
                <template slot-scope="scope" v-if="scope.row.root !== false">
                    <div v-if="editing.indexOf(scope.row.id) === -1">
                        <el-button
                                size="mini"
                                icon="el-icon-check"
                                class="action-btn"
                                type="success"
                                @click="handleEdit(scope,scope.$index, scope.row)"/>
                        <el-button
                                size="mini"
                                icon="el-icon-edit-outline"
                                class="action-btn"
                                @click="handleEdit(scope,scope.$index, scope.row)"/>
                        <el-button
                                size="mini"
                                type="danger"
                                icon="el-icon-delete"
                                class="action-btn"
                                @click="handleDelete(scope.$index, scope.row)"/>
                    </div>
                    <div v-else>
                        <el-button
                                size="mini"
                                class="action-btn"
                                @click="handleEditClose(scope,scope.$index, scope.row)">수정 완료</el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';

    @Component
    export default class AgendaTable extends Vue {
        editing: number[] = []
        edit = false;
        tableData: Array<any> = [{
            id: 1,
            date: '2016-05-02',
            name: 'wangxiaohu'
        }, {
            id: 2,
            date: '2016-05-04',
            name: 'wangxiaohu'
        }, {
            id: 3,
            date: '2016-05-01',
            name: 'wangxiaohu',
            children: [{
                id: 31,
                root: false,
                date: '2016-05-01',
                name: 'wangxiaohu'
            }, {
                id: 32,
                root: false,
                date: '2016-05-01',
                name: 'wangxiaohu'
            }]
        }, {
            id: 4,
            date: '2016-05-03',
            name: 'wangxiaohu'
        }];
        handleEdit(scope: any, index: any, row: any) {
            console.log(scope)
            console.log(index)
            console.log(row)
            this.editing.push(scope.row.id)
        }
        handleEditClose(scope: any, index: any, row: any) {
            const idx = this.editing.indexOf(scope.row.id);
            this.editing.splice(idx, 1);
        }
    }
</script>

<style scoped>
    .action-btn {
        padding: 7px;
    }
</style>