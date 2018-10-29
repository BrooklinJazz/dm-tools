<template>
  <div>
    <h1>INDEX</h1>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations,
    mapActions
  } from "vuex";
  export default {
    computed: {
      ...mapState({
        monsters: state => state.monsters
      })
    }
  };
</script>