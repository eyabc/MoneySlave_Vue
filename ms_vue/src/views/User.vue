<template>
    <div>
        <user-form></user-form>
        <withdraw></withdraw>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import { UserForm, Withdraw } from '@/components';

    const components = { UserForm, Withdraw };
    @Component({ components })
    export default class User extends Vue {

    }
</script>

<style scoped>

</style>