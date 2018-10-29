<template>
  <v-app>
    <div>
      <v-toolbar>
        <v-toolbar-side-icon/>
        <v-toolbar-title>Dungeon Master Tools</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat>Encounter Runner</v-btn>
          <v-btn flat>Campaigns</v-btn>
          <v-menu offset-y>
            <v-btn slot="activator" flat>
              Notes
              <v-icon>arrow_drop_down</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile>
                <v-list-tile-title>Locations</v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>NPCs</v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>Scenes</v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>
                  <v-icon>add</v-icon>
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
          <v-btn flat>Build A Monster</v-btn>
          <v-menu offset-y>
            <v-btn slot="activator" flat>
              Characters
              <v-icon>arrow_drop_down</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile @click="">
                <v-list-tile-title>My Characters</v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click="">
                <v-list-tile-title>Character Builder</v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click="">
                <v-list-tile-title>Players</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
          <v-menu offset-y>
            <v-btn slot="activator" flat>
              User Name
            </v-btn>
            <v-list>
              <v-list-tile>
                <v-list-tile-title>Sign Out</v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>Account Settings</v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>Other Apps</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-toolbar-items>
      </v-toolbar>
      <nuxt />
    </div>
  </v-app>
</template>