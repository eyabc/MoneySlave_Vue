<template>
    <div id="wrapper">
        <div class="container">
            <span id="logo">
                <fa icon="won-sign" />
            </span>
            <span>
                <el-button size="mini" plain>Plain</el-button>
            </span>
        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'
    @Component({ })
    export default class SiteHeader extends Vue {
    }
</script>

<style lang="scss" src="@/assets/scss/common.scss"/>
<style lang="scss">
    #wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        line-height: 64px;
        border-bottom: 1px solid #eee;
        background: fade-out(#fff, 0.15);
    }
    #logo {
        font-size: 20px;
    }
</style>