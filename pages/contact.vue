<template>
  <Page :title="title" hero>
    <v-row>
      <v-col md="10" lg="8" class="py-0">
        <p class="mb-8">
          We love to hear from you. Please don't hesitate to email us with any
          comments, questions and suggestions.
        </p>

        <v-btn to="/faq/extension" color="accent" outlined>
          Frequently asked questions
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="mt-8 mb-4">
      <v-col v-for="item in items" :key="item.title" cols="12" md="4">
        <v-card height="100%" class="d-flex flex-column">
          <v-card-title class="subtitle-2">
            <v-icon left>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-card-title>
          <v-card-text v-html="item.text" />
          <v-spacer />
          <v-card-actions>
            <v-spacer />
            <v-btn :href="item.button.href" color="accent" text>
              <v-icon left>{{ item.button.icon }}</v-icon>
              {{ item.button.text }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <h3 class="mt-8 mb-2">Social media</h3>

    <p class="mb-8">
      Follow us on LinkedIn and Twitter for occasional product updates.
    </p>

    <v-btn
      href="https://www.linkedin.com/company/wappalyzer"
      color="accent"
      class="mr-2"
      target="_blank"
      outlined
    >
      <v-icon left>mdi-linkedin</v-icon>
      LinkedIn
    </v-btn>
    <v-btn
      href="https://twitter.com/Wappalyzer"
      color="accent"
      target="_blank"
      outlined
    >
      <v-icon left>mdi-twitter</v-icon>
      Twitter
    </v-btn>
  </Page>
</template>

<script>
import Page from '~/components/Page.vue'

export default {
  components: {
    Page
  },
  data() {
    return {
      title: 'Get in touch',
      items: [
        {
          title: 'Sales and support',
          icon: 'mdi-face-agent',
          text:
            'Email us at <a href="mailto:info@wappalyzer.com">info@wappalyzer.com</a> for sales enquiries and technical support for paid products, or just to say hi.',
          button: {
            icon: 'mdi-email-outline',
            href: 'mailto:info@wappalyzer.com',
            text: 'Email us'
          }
        },
        {
          title: 'Bugs and feature requests',
          icon: 'mdi-bug',
          text:
            'Did you find a bug with the browser extension or Node.js module, or want to request a new feature? Please create an issue on GitHub.',
          button: {
            icon: 'mdi-github',
            href: 'https://github.com/AliasIO/wappalyzer/issues/new/choose',
            text: 'Create an issue'
          }
        },
        {
          title: 'Technical discussion',
          icon: 'mdi-chat-outline',
          text:
            'Join us on Slack for technical discussion about the browser extension and Node.js module.',
          button: {
            icon: 'mdi-slack',
            href:
              'https://join.slack.com/t/wappalyzer/shared_invite/enQtMjc1MzA2NzE4NzkwLTA5Y2RmMTQxMTFhYzViODQzMzUyNGFkMWIzY2ZhZmFlOWY2NTcyZWY4OWVjYzhiY2JhZTZlMzBiNThlMWJiMjU',
            text: 'Join us on Slack'
          }
        }
      ]
    }
  }
}
</script>
