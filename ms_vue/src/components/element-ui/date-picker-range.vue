<template>
    <div>
        <el-date-picker
                v-model="value"
                type="daterange"
                :clearable="false"
                :size="size"
        >
        </el-date-picker>
    </div>
</template>
<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';

    @Component
    export default class DatePickerRange extends Vue {
        @Prop() readonly value!: string;
        @Prop() readonly size!: string;
    }
</script>