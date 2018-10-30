<template>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Campaign
            </v-list-tile-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon><v-icon @click="">add</v-icon></v-toolbar-side-icon>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Players</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>