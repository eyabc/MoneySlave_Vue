<template>
    <div>
        <create-agenda/>
        <agenda-table/>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import { CreateAgenda, AgendaTable } from "@/components";

    const components = { CreateAgenda, AgendaTable };
    @Component({components})
    export default class Agenda extends Vue {

    }
</script>