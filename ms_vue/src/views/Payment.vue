<template>
    <div>
        <pay-form></pay-form>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator';
    import * as components from '@/components/Payment';

    @Component({ components })
    export default class Payment extends Vue {

    }
</script>

<style scoped>

</style>