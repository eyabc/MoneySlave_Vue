<template>
    <div>
        <account-info/>
        <account-table/>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import * as components from '@/components/Account';

    @Component({ components })
    export default class Account extends Vue {
    }
</script>

<style scoped>

</style>