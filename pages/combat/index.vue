<template>
  <div>
    <h1>COMBAT COMING SOON</h1>
  </div>
</template>

<script>
  import socket from "~/plugins/socket.io.js";
  import {
    mapState,
    mapMutations,
    mapActions
  } from "vuex";
  export default {
    computed: {
      ...mapState({
        monsters: ({monsters}) => monsters
      })
    }
  };
</script>
