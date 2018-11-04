<template>
    <v-card class="MonsterLibrary">
        <v-toolbar color="deep-orange" dark>
            <v-toolbar-side-icon @click="toggleShowMonsters"></v-toolbar-side-icon>
            <v-toolbar-title>Monster Library</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-autocomplete v-if="!showMonsters" v-model="monsterFilter" :items="monsterNames" append-icon="search" />
            <v-text-field v-if="showMonsters"  v-model="monsterFilter" append-icon="search" />
        </v-toolbar>
        <v-list v-if="showMonsters">
            <v-list-tile v-for="monster in filteredMonsters" :key="monster.name">
                <v-list-tile-content>
                    <v-list-tile-title v-text="monster.name"></v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        props: {
            monsters: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                monsterFilter: "",
                showMonsters: true
            }
        },
        methods: {
            toggleShowMonsters: function (params) {
                this.showMonsters = !this.showMonsters
            }
        },
        computed: {
            monsterNames: function (params) {
                return this.monsters.map(({name}) => name)
            },
            filteredMonsters: function filterByName(params) {
                return this.monsters.filter(({name}) => name.includes(this.monsterFilter))
            }
        },
    }
</script>


<style scoped>
.MonsterLibrary {
    color: red;
    overflow-y: scroll;
    border: solid blue 2px;
}
</style>
