<script setup lang="ts">
import { watch } from 'vue';


let { msg, click } = defineProps(["msg", "click"])


watch(()=>msg, (newVal) => {
  console.log({ props : { msg, click }})
})


</script>

<template>
  Hi bro ! {{ msg }}
  <button v-on:click="click(msg +1)"> onClick</button>
</template>