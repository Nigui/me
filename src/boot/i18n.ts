import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { Quasar } from 'quasar';

import messages from 'src/i18n';

export default boot(({ app }) => {
  const locale = Quasar.lang.getLocale();

  const i18n = createI18n({
    locale,
    messages,
    fallbackLocale: 'en',
  });

  // Set i18n instance on app
  app.use(i18n);
});
