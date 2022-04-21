import Head from 'next/head'

import Page from '@/components/page'
import Link from '@/components/link'
import styles from './error.module.css'

const Error = ({ missingTerm, status }) => {
  return (
    <Page title={status || 'Error'} showSlug={false}>
      <Head>
        <title>{[status]}</title>
      </Head>

      {status === 404 ? (
        <>
          <h1>404</h1>
          <p>
            That <strong>{missingTerm}</strong> doesn’t exist yet. You can{' '}
            <Link
              underline
              href={`https://github.com/Y4HYA4' ${missingTerm}?`}
            >
              contribute maybe 🤔!
            </Link>
            .
          </p>

          <Link underline href="/">
            Go Home
          </Link>
        </>
      ) : (
        <section className={styles.section}>
          <span>{status || 'пиздец'}</span>
          <p>CloudBoost ERR0R.</p>
        </section>
      )}
    </Page>
  )
}

export default Error
