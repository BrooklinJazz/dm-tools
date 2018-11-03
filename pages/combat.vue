<template>
<div>
    <h1>COMBAT COMING SOON</h1>
    <h1 @click="damageMonster(20)">hit {{dmgAmount}}</h1>
    <input type="text" v-model="dmgAmount" @keyup.enter="damageMonster"/>
</div>
</template>

<script>
import socket from "~/plugins/socket.io.js";
export default {
  data() {
    return {
      dmgAmount: "20"
    };
  },
  methods: {
    damageMonster() {
      socket.emit("DamageMonster", { damage: this.dmgAmount });
    }
  }
};
</script>
