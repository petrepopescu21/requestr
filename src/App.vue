<template>
  <v-app>
    <v-app-bar app class="warning">
      <v-toolbar-title class="headline text-uppercase">
        <span>ITEC</span>
        <span class="font-weight-bold">REQUESTR</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>wb_incandescent</v-icon>
        <span>Change Theme</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container style="max-width: 800px">
        <h1>Hello, {{name}}</h1>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data: () => ({
    name: "Random Citizen"
  }),
  mounted() {
    axios
      .get("/.auth/me")
      .then(res => {
        this.name = res.data[0].user_claims.filter(claim => {
          return (
            claim.typ ==
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"
          );
        })[0].val;
      })
      .catch(err => {
        //do nothing for local use
      });
  }
};
</script>
