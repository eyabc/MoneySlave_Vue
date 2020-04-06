<template>
    <div class=" schedule-wrapper">
        <agenda/>
        <create-todo></create-todo>
        <pomodoro/>
        <todo-list></todo-list>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { CreateTodo, Pomodoro, TodoList, Agenda } from '@/components';

    const components = { CreateTodo, Pomodoro, TodoList, Agenda };
    @Component({components})
    export default class Schedule extends Vue {

    }
</script>
<style lang='scss' scoped>
    .schedule-wrapper {
    }
</style>