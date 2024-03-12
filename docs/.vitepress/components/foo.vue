<template>
  <div class="head_layer">
    <el-menu :default-active="activeIndex"
             class="layout"
             mode="horizontal"
             :ellipsis="false"
             @select="handleSelect">
      <div class="logo">
        <img style="width: 40px"
             src="/icononly_transparent_nobuffer.png"
             alt="Element logo" />
        <span class="logo_label">Vstar Vinyl flooring</span>
      </div>
      <div class="flex-grow" />
      <el-menu-item index="1">HOME</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </div>
  <el-carousel style="width:100%;height: 880px">
    <el-carousel-item>
      <el-image style="width: 100%;height: 880px"
                src="https://cdn.globalso.com/baoshengfloor/13.jpg"
                fit="fill" />
    </el-carousel-item>
    <el-carousel-item>
      <el-image style="width: 100%; height: 880px;margin-top:61px "
                src="https://cdn.globalso.com/baoshengfloor/26.jpg"
                fit="fill" />
    </el-carousel-item>
    <el-carousel-item>
      <el-image style="width: 100%;height: 880px; "
                src="/1694414381535.png"
                fit="fill" />
    </el-carousel-item>
  </el-carousel>

  <div v-if="page.isNotFound">
    Custom 404 page!
  </div>
  <Content />
</template>
<script setup>
import { useData, useRouter } from 'vitepress'
const { page, frontmatter } = useData()
const { route, go } = useRouter()
const handleSelect = () => {
  go('/markdown-examples')
}
</script>

<style scope lang="scss">
.flex-grow {
  flex-grow: 1;
}
.head_layer {
  -webkit-transform: none;
  -ms-transform: none;
  -o-transform: none;
  transform: none;
  opacity: 1;
  -webkit-transition: all 0.6s ease;
  -o-transition: all 0.6s ease;
  transition: all 0.6s ease;
  border-bottom: 1px solid;
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 9;
  background: #fff;
}

.layout {
  width: 1300px;
  margin: 0 auto;
  position: relative;
}

.el-menu--horizontal.el-menu {
  border-bottom: 0px !important;
}

.el-menu--horizontal > .el-menu-item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
  border-bottom: 2px solid transparent;
  color: var(--el-menu-text-color);
  font-size: 18px;
}

.el-sub-menu__title {
  font-size: 18px;
}

/* .head_layer .layout {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
} */

.el-carousel__container {
  height: 900px;
}
.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  .logo_label {
    font-size: 18px;
    font-weight: 800;
    margin-left: 12px;
  }
}
</style>
