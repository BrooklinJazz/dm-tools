<template>
  <v-container fluid class="CombatContainer">
    <v-layout class="CombatLayout" row>
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

<style scoped>
.CombatContainer {
  height: 100%;
}
.CombatLayout {
  height: 100%;
}
</style>
