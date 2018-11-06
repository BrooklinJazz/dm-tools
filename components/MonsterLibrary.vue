<template>
    <v-card class="MonsterLibrary">
        <v-toolbar color="deep-orange" dark>
            <v-toolbar-side-icon @click=""></v-toolbar-side-icon>
            <v-toolbar-title>Monster Library</v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- <v-autocomplete v-model="monsterFilter" :items="monsterNames" append-icon="search" /> -->
            <v-text-field v-model="monsterFilter" append-icon="search" />
        </v-toolbar>
        <v-list class="MonsterLibraryList">
            <v-list-tile @click="" v-for="monster in filteredMonsters" :key="monster.name">
                <v-list-tile-title>
                    <v-list-tile-title v-text="monster.name"></v-list-tile-title>
                </v-list-tile-title>
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
            }
        },
        computed: {
            monsterNames: function (params) {
                return this.monsters.map(({name}) => name)
            },
            filteredMonsters: function filterByName(params) {
                return this.monsters.filter(({
                    name
                }) => name.toLowerCase().includes(this.monsterFilter.toLowerCase()))
            }
        },
    }
</script>


<style scoped>
    .MonsterLibrary {
        overflow-y: hidden;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .MonsterLibraryList {
        overflow-y: scroll;
        /* PREVENT SMALL SCROLLBAR ISSUE WHEN NO MONSTERS */
        flex-grow: 1;
    }
</style>
