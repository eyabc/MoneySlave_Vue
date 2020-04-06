<template>
  <div id="site">
    <site-header />
    <div class="container">
      <router-view class="content"/>
    </div>
    <site-footer id="site-footer" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { SiteHeader, SiteFooter } from '@/components';

const components = { SiteFooter, SiteHeader };
@Component({ components })
export default class App extends Vue { }
</script>
<style lang="scss" src="@/assets/scss/common.scss"/>
<style lang="scss" >
#site {
  &-body {
  }
  &-footer {
    background: #424242;
    color: #adadad;
    font-size: 12px;
    padding: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    width: 100%;
    text-align: center;
  }
}

.content {
  width: 1000px;
  height: 100%;
  background: #F9F9F9;
  margin-top: 64px;
  box-sizing: border-box;
  padding: 20px 15px;
}
</style>
