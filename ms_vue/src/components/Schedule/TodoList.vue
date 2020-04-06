<template>
    <div class="block">
        <div class="header">
            <date-picker :date="date"></date-picker>
            <span>누적 금액 </span>
        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    import {DatePicker} from '@/components/element-ui';

    const components = { DatePicker };
    @Component({ components })
    export default class TodoList extends Vue {
        date: Date = new Date();

    }
</script>

