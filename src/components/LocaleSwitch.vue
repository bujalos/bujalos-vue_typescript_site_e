<template>
  <div class="locale-switcher">
    <select v-model="$i18n.locale">
      <option value="en">English</option>
      <option value="de">Deutsch</option>
    </select>
  </div>
</template>
<style scoped lang="scss">
    .locale-switcher {
        padding: 0 20px 0 0;
    }
</style>