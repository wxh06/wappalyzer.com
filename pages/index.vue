<template>
  <div>
    <Page :title="title" hero no-crumbs no-head>
      <template v-for="(section, i) in sections">
        <v-divider
          v-if="i"
          :key="`section-${i}`"
          class="my-4 my-sm-8 my-md-10"
        />

        <v-row align="center" justify="center" class="pt-lg-8 pb-lg-6">
          <v-col :order-sm="i % 2 !== 0 ? 0 : 12" cols="12" order="12" sm="4">
            <v-row justify="center">
              <v-col cols="8" sm="12" class="py-0">
                <v-img
                  :class="i % 2 !== 0 ? 'mr-sm-12' : 'ml-sm-12'"
                  :src="`/images/${section.image}`"
                  contain
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="8" lg="6">
            <v-responsive height="30" class="d-flex align-center mb-4">
              <v-icon color="primary" left>{{ section.icon }}</v-icon>

              <span class="overline font-weight-bold">{{ section.title }}</span>
            </v-responsive>

            <h2 class="mb-2">
              {{ section.subtitle }}
            </h2>

            <p v-html="section.text" class="mb-8" />

            <v-btn
              v-for="(button, k) in section.buttons"
              :key="`sectino-${i}-button-${k}`"
              :to="button.to"
              :href="button.href"
              :target="button.href ? '_blank' : '_self'"
              :outlined="button.secondary"
              color="primary"
              class="mb-2 mr-2"
              >{{ button.text }}
              <v-icon right>{{ button.icon }}</v-icon>
            </v-btn>

            <div class="overline pt-6 pb-2">Highlights</div>

            <div
              v-for="feature in section.features"
              :key="feature"
              class="body-2 d-flex align-start pt-2 grey--text"
            >
              <v-icon color="success" dense left>mdi-check</v-icon>
              {{ feature }}
            </div>
          </v-col>
        </v-row>
      </template>
    </Page>

    <SignUpCTA />
    <Logos />
  </div>
</template>

<script>
import Logos from '~/components/Logos.vue'
import Page from '~/components/Page.vue'
import SignUpCTA from '~/components/SignUpCTA.vue'
import meta from '~/assets/json/meta.json'

export default {
  head() {
    return {
      meta: [
        {
          description: 'Hello'
        }
      ]
    }
  },
  components: {
    Logos,
    Page,
    SignUpCTA
  },
  data() {
    return {
      title: meta.hero.title,
      sections: Object.values(meta).filter((meta) => meta.feature)
    }
  }
}
</script>
