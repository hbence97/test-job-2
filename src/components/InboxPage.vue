<template>
  <div id="inbox-page__container">
    <div id="inbox-page">
      <users-list />
    </div>
    <page-header id="inbox-page__header" />
  </div>
</template>

<script>
export default {};
</script>

<style>

#inbox-page__container {
  position: relative;
  background: #e9eff2;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
}

#inbox-page {
  position: absolute;
  left: 200px;
  padding-left: 6rem;
  padding-top: 3rem;
  width: 100%;
  min-height: 100vh;
  background: white;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: -10px 0px 12px -8px rgba(0, 0, 0, 0.15);
  z-index: 1;
}
</style>
