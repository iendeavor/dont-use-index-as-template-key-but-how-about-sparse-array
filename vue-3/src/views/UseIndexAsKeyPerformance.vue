<template>
<div>
  <button @click="removeFirst">Remove first</button>

  <transition-group name="list" tag="ul">
    <template v-for="item, index of array" :key="index">
      <li>{{ item }}</li>
    </template>
  </transition-group>
</div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup () {
    const array = reactive(Array(2000).fill(0).map((_, i) => i))

    const removeFirst = () => {
      array.shift()
    }

    return {
      array,
      removeFirst
    }
  }
})
</script>
