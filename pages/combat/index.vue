<template>
  <v-container >
    <v-layout row>
      <v-flex xs4>
        <monster-library :monsters="monsters" />
  
      </v-flex>
    </v-layout>
  
  </v-container>
</template>

<script>
  import MonsterLibrary from "~/components/MonsterLibrary"
  import socket from "~/plugins/socket.io.js";
  import {
    mapState,
    mapMutations,
    mapActions
  } from "vuex";
  export default {
    computed: {
      ...mapState({
        monsters: ({
          monsters
        }) => monsters
      })
    },
    components: {
      MonsterLibrary
    }
  };
</script>
