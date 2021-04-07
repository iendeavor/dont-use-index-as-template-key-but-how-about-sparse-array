<template>
<div>
  <button @click="removeFirst">Remove first</button>

  <transition-group name="list" tag="ul">
    <template v-for="item of array" :key="item.id">
      <li>{{ item.value }}</li>
    </template>
  </transition-group>
</div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup () {
    const array = reactive(Array(2000).fill(0).map((_, i) => ({ id: i, value: i })))

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
