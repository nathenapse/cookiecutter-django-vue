<template>
  <aside
    class="menu column is-2 is-narrow-mobile is-fullheight section sidebar"
  >
    <p class="menu-label">General</p>
    <ul class="menu-list">
      <!-- <li><router-link :to="{ name: 'dashboard' }">Droplets</router-link></li> -->
      <!-- <li><router-link :to="{ name: 'keys' }">Key</router-link></li> -->
    </ul>
    <p class="menu-label">Account</p>
    <ul class="menu-list">
      <li>
        <a>Profile</a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sidebar {
  padding: 5rem 1rem;
  background: #f5f5f5;
}
</style>
