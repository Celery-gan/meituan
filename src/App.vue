<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
.flexbtw {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.flexeve {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
.flexonly {
  display: flex;
  align-items: center;
}
.mouse:hover {
  color: #fe8c00;
}
</style>
