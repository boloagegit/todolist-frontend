<template>
  <v-app dark>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer padless>
      <v-card class="flex" flat tile>
        <v-card-title>
          <strong class="subheading">Get source code at my Github!</strong>

          <v-spacer></v-spacer>

          <v-btn class="mx-4" dark icon href="https://github.com/boloagegit/todolist-frontend" target="_blank">
            <v-icon size="24px">mdi-github</v-icon>
          </v-btn>
        </v-card-title>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    };
  },
};
</script>
