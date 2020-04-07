<template>
    <el-radio-group v-model="value" :size="size">
        <el-radio-button v-for="item in options" :key="item" :label="item"/>
    </el-radio-group>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';

    @Component
    export default class RadioBtn extends Vue {
        @Prop() readonly value!: string;
        @Prop() readonly options!: any;
        @Prop() readonly size!: string;
    }
</script>

<style scoped>

</style>