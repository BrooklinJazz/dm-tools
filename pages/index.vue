<template>
  <div>
    INDEX {{list}}
    <button @click="init()">GET DATA</button>
    {{monsters}}
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      monsters: state => state.monsters
    })
  },
  methods: {
    ...mapActions([
      'init'
    ])
  }
};
</script>