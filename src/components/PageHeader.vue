<template>
  <header>
    <img id="header__logo" src="../assets/logo.png" alt="logo" />
    <nav-bar />
    <user-profile />
  </header>
</template>

<script></script>

<style>
header {
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  width: 13rem;
  background: #e9eff2;
}

#header__logo {
  height: 78px;
  width: 75px;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  align-self: center;
}
</style>
