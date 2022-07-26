import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Head from 'next/head'

// custom components
import BasicLayout from '../components/BasicLayout'

export default function Index() {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>Multilang Next.js app - home page</title>
        <meta name="description" content="Multilang Next.js app - home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasicLayout>
        <p>{t('hp')}</p>
      </BasicLayout>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'main']),
  }
})
