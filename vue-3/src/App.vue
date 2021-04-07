<template>
<div>
  <template v-for="route of routes">
    <router-link :to="route.name">
      <div>{{route.name}}</div>
    </router-link>
  </template>

  <router-view />
</div>
</template>

<script>
import { defineComponent } from 'vue'
import { routes } from './router'

export default {
  setup () {
    return {
      routes
    }
  }
}
</script>
