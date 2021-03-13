<template>
  <q-list
    padding
    dark
  >
    <q-item-label header>
      Menu
    </q-item-label>

    <q-item
      to="/pages"
      exact-active-class="selected-menu-item"
      class="text-white"
      label="get started!"
      color="accent"
      clickable
    >
      <q-item-section>
        Home
      </q-item-section>
    </q-item>

    <q-item
      to="/pages/todont"
      exact-active-class="selected-menu-item"
      label="get started!"
      color="accent"
      clickable
    >
      <q-item-section>
        get started!
      </q-item-section>
    </q-item>

    <q-item
      to="/pages/horizontal-todonts"
      exact-active-class="selected-menu-item"
      color="secondary"
      clickable
    >
      <q-item-section>
        get started horizontally 😱
      </q-item-section>
    </q-item>

    <q-item
      to="/pages/languages"
      exact-active-class="selected-menu-item"
      color="secondary"
      clickable
    >
      <q-item-section>
        Languages
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>

<style>
.selected-menu-item {
  background: var(--q-secondary);
  border-right: 4px solid white;
  color: white !important;
}
</style>
