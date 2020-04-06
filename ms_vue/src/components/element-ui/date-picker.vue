<template>
    <div>
        <span><i class="icon el-icon-arrow-left"/></span>
        <el-date-picker
                class="date-picker"
                v-model="date"
                type="date"
                :clearable="false"
                placeholder="Pick a day"
                :picker-options="pickerOptions">
        </el-date-picker>
        <span><i class="icon el-icon-arrow-right"/></span>
        <span><el-button size="mini" round>오늘</el-button></span>
    </div>
</template>
<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component
    export default class DatePicker extends Vue {
        @Prop() readonly date!: Date;
        pickerOptions: any = {
            shortcuts: [{
                text: '오늘',
                onClick(picker: any) {
                    console.log(typeof(picker))
                    picker.$emit('pick', new Date());
                }
            }, {
                text: '어제',
                onClick(picker: any) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                }
            }, {
                text: '일주일 전',
                onClick(picker: any) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', date);
                }
            }]
        };

    }
</script>

<style lang="scss" scoped>
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
</style>