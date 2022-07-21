import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Head from 'next/head'

// custom components
import BasicLayout from '../components/BasicLayout'

export default function Page() {
  const { t } = useTranslation('page')

  return (
    <>
      <Head>
        <title>Multilang Next.js app - some page</title>
        <meta name="description" content="Multilang Next.js app - some page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasicLayout>
        <h3>{t('someHeadline')}</h3>
        <p>{t('someParagraph')}</p>
        <p>{t('quote', { year: '2022' })}</p>
      </BasicLayout>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'page']),
  }
})
