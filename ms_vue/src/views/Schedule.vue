<template>
    <div class="content schedule-wrapper">
        <create-todo></create-todo>
        <pomodoro/>
        <todo-list></todo-list>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { CreateTodo, Pomodoro, TodoList } from '@/components';

    const components = { CreateTodo, Pomodoro, TodoList };
    @Component({components})
    export default class Schedule extends Vue {

    }
</script>
<style lang='scss'>
    .schedule-wrapper {
        padding: 30px 15px;
    }
</style>