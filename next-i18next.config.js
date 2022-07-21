const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en', 'mn'],
    localePath: path.resolve('./public/locales'),
    saveMissing: true,
    react: { useSuspense: false },//this line
    localeDetection: false,
  },
}
