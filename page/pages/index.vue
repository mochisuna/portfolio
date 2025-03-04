<template>
  <div>
    <h1>{{ appConfig.title }}</h1>
    <p class="float">Dark Mode: {{ appConfig.theme.dark }}</p>
    <div ref="svgContainer" class="svg-container"></div>
    <AppAlert>
      Primary Color:
      <span :style="{ color: appConfig.theme.colors.primary }"
        >This is primary</span
      >
    </AppAlert>
    <Kappa />
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig(); // 環境変数
const appConfig = useAppConfig(); // アプリ設定
</script>
