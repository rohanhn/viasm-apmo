import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to VIASM CMS",
        "Auth.form.welcome.subtitle": "Log in to VIASM system",
      },
    },
  },

  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};