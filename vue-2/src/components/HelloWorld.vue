<template>
<div>
  <div>v-if</div>

  <button @click="removeFirst">Remove first</button>

  <transition-group name="list" tag="ul">
    <template v-for="item of array">
      <template v-show="item >= sparseIndex">
        <li v-if="item >= sparseIndex" :key="item">{{ item }} - {{ item }}</li>
      </template>
    </template>
  </transition-group>
</div>
</template>

<script>
export default {
  data () {
    return {
      array: Array(20).fill(0).map((_, i) => i),
      sparseIndex: 0
    }
  },
  methods: {
    removeFirst () {
      delete this.array[this.sparseIndex++]
    }
  }
}
</script>
