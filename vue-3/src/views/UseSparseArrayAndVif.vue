<template>
<div>
  <button @click="removeFirst">Remove first</button>

  <transition-group name="list" tag="ul">
    <template v-for="item of array" :key="item">
      <li v-if="item >= sparseIndex">{{ item }} - {{ item }}</li>
    </template>
  </transition-group>
</div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup () {
    const array = reactive(Array(20).fill(0).map((_, i) => i))

    const sparseIndex = ref(0)
    const removeFirst = () => {
      delete array[sparseIndex.value++]
    }

    return {
      array,
      sparseIndex,
      removeFirst
    }
  }
})
</script>
