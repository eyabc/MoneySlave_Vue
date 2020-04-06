<template>
    <div class="block">
        <el-card class="box-card" shadow="never">
            <div slot="header" >
                <span>아젠다</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="routeToAgenda">관리</el-button>
            </div>
            <el-tree accordion :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </el-card>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    @Component
    export default class Agenda extends Vue {
        data: Array<any> = [{
            label: 'Level one 1',
            children: [{
                label: '2020년 02월 03일 Level two 1-1',
            }]
        }, {
            label: 'Level one 2',
            children: [{
                label: 'Level two 2-1',
            }, {
                label: 'Level two 2-2',
            }]
        }, {
            label: 'Level one 3',
            children: [{
                label: 'Level two 3-1',
            }, {
                label: 'Level two 3-2',
            }]
        }];
        defaultProps: any ={
            children: 'children',
            label: 'label'
        };
        routeToAgenda() {
            this.$router.push({ path: 'agenda'})
        }
    }
</script>

<style scoped>

</style>