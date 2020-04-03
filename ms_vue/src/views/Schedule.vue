<template>
    <div class="content">
        <create-todo></create-todo>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { CreateTodo } from '@/components';

    const components = { CreateTodo };
    @Component({components})
    export default class Schedule extends Vue {

    }
</script>
<style lang='scss'>
</style>