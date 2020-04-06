<template>
    <div>
        <el-select class='form' v-model="value" :filterable="filterable" :placeholder="placeholder">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

    @Component
    export default class Select extends Vue {
        @Prop() readonly filterable!: boolean;
        @Prop() readonly value!: string;
        @Prop() readonly placeholder!: string;
        @Prop() readonly options: any;
    }
</script>