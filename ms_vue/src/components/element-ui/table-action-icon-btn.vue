<template>
    <el-button
            size="mini"
            :icon="icon"
            class="action-btn"
            :type="type"
            circle plain/>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';

    @Component
    export default class TableActionIconBtn extends Vue {
        @Prop({default: ''}) readonly type!: string;
        @Prop(String) readonly icon!: string;

    }
</script>

<style scoped>

</style>