<script setup lang="ts" name="Icon">
  import { Icon } from '@iconify/vue'
  const icons = ['ic:baseline-heart-broken', 'ant-design:like-twotone', 'mdi:alarm-clock']
  const getIconCode = (name: string, dynamic = false) => {
    return dynamic ? `<Icon icon="${name}">` : `<${name} />`
  }
</script>

<template>
  <div page-card>
    <PageTitle title="静态图标" description="通过 unplugin-icons 对下载过的iconify图标集合进行按需自动引入。更多动态引入配置请查看 build/vite/plugins/auto-import.ts" />
    <div mt="6" mb="10" flex gap="4">
      <div class="box">
        <i-ep-star />
        <span>{{ getIconCode('i-ep-star') }}</span>
      </div>
      <div class="box">
        <i-ri-search-line />
        <span>{{ getIconCode('i-ri-search-line') }}</span>
      </div>
      <div class="box">
        <i-emoji-sun />
        <span>{{ getIconCode('i-emoji-sun') }}</span>
      </div>
    </div>
    <PageTitle title="动态图标" description="通过 @iconify/vue 引入Icon组件，可动态设置icon属性来自动请求任何iconify图标集合来获取图标。注意：这种方式依赖于HTTP请求！" />
    <div mt="6" mb="10" flex gap="4">
      <div class="box" v-for="icon in icons" :key="icon">
        <Icon :icon="icon" />
        <span>{{ getIconCode(icon, true) }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  @apply px-3 py-2 border-solid border-light center flex-col hover:border-light_hover rounded transition-base cursor-pointer text-xl text-regular;

  span {
    @apply mt-1 text-base;
  }
}
</style>
