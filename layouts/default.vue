<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed clipped app>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Campaign
            </v-list-tile-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon>
              <v-icon @click="">add</v-icon>
            </v-toolbar-side-icon>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Campaign 1</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Players
            </v-list-tile-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon>
              <v-icon @click="">add</v-icon>
            </v-toolbar-side-icon>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Player 1</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Characters
            </v-list-tile-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon>
              <v-icon @click="">mdi-wrench</v-icon>
            </v-toolbar-side-icon>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>My Characters</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Character Creator</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Monsters
            </v-list-tile-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon>
              <v-icon @click="">mdi-wrench</v-icon>
            </v-toolbar-side-icon>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>My Monsters</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Monster Creator</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Community Monsters?</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Monster Encounter V2</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
          New Encounter
          <v-icon right>add</v-icon>
        </v-btn>
        <v-btn flat>
          Saves
          <v-icon right>mdi-content-save</v-icon>
        </v-btn>
        <v-menu offset-y>
          <v-btn slot="activator" flat>
            User Name
            <v-icon>arrow_drop_down</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile @click="">
              <v-list-tile-title>Sign Out</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="">
              <v-list-tile-title>Account Settings</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="">
              <v-list-tile-title>Other Apps</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <h1 @click="ping">SERVER</h1>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; {{currentYear}}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { mapActions } from "vuex"
  import axios from "axios"
  export default {
    data() {
      return {
        drawer: false,
        currentYear: new Date().getFullYear(),
      };
    },
    methods: {
      ...mapActions({
        ping: 'apiPing'
      })
    }
  };
</script>