<template>
  <div>
    <v-sheet class="header" color="primary darken-1" tile>
      <v-container tag="header">
        <v-row class="align-center">
          <v-col md="auto">
            <Logo dark />
          </v-col>

          <v-col class="text-right d-none d-md-block">
            <template v-for="{ title, to, icon, items } in mainNav">
              <v-btn v-if="to" :to="to" :key="title" class="white--text" text>
                {{ title }}
              </v-btn>
              <v-menu v-else offset-y left>
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" :icon="!!icon" class="white--text" text>
                    <v-icon v-if="icon" dense>{{ icon }}</v-icon>
                    <template v-else>
                      {{ title }}
                      <v-icon dense right>mdi-chevron-down</v-icon>
                    </template>
                  </v-btn>
                </template>

                <v-list v-if="items">
                  <v-list-item
                    v-for="{ title: _title, to: _to } in items"
                    :key="_title"
                    :href="_to.match(/^http/) ? _to : null"
                    :target="_to.match(/^http/) ? '_blank' : '_self'"
                    :to="_to.match(/^http/) ? null : _to"
                    color="primary"
                  >
                    <v-list-item-title>
                      {{ _title }}
                    </v-list-item-title>
                    <v-list-item-icon v-if="_to.match(/^http/)"
                      ><v-icon dense>mdi-open-in-new</v-icon></v-list-item-icon
                    >
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
            <v-menu offset-y left>
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" class="white--text" icon>
                  <v-icon size="20">{{
                    isSignedIn ? 'mdi-account-check' : 'mdi-account'
                  }}</v-icon>
                </v-btn>
              </template>

              <v-sheet v-if="user.email" color="white" tile>
                <v-list nav dense>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="mb-2">
                        Signed in as
                      </v-list-item-title>

                      <small>
                        {{ user.email }}

                        <v-btn
                          v-if="user.admin"
                          to="/admin"
                          class="my-n2"
                          color="success"
                          icon
                          small
                        >
                          <v-icon small>mdi-lock-open</v-icon>
                        </v-btn>
                      </small>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-divider />
              </v-sheet>
              <v-list nav dense>
                <v-list-item
                  v-for="{ title, to, icon } in userNav"
                  :key="title"
                  :to="to"
                  color="primary"
                >
                  <v-list-item-icon>
                    <v-icon dense>{{ icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>

          <v-col class="text-right d-md-none">
            <v-btn @click.stop="$emit('openDrawer')" icon color="white">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <Hero v-if="!dense" :title="meta.title" :subtitle="meta.text" />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Hero from '~/components/Hero.vue'
import { hero as meta } from '~/assets/json/meta.json'

export default {
  components: {
    Logo,
    Hero
  },
  props: {
    dense: {
      type: Boolean,
      default: false
    },
    isSignedIn: {
      type: Boolean,
      default: false
    },
    mainNav: {
      type: Array,
      default: () => []
    },
    userNav: {
      type: Array,
      default: () => []
    },
    user: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      meta
    }
  }
}
</script>

<style>
.header .logo {
  height: 50px !important;
  width: 200px;
}
</style>
