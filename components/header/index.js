import Link from 'next/link'

import styles from './header.module.css'
import LogoIcon from '@/components/icons/logo'
import useTheme from '@/lib/theme'
import Moon from '@/components/icons/moon'
import Sun from '@/components/icons/sun'
import useMounted from '@/lib/use-mounted'

const Header = ({ slug, title }) => {
  const isMounted = useMounted()
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <span>
          <Link href="/" >
            <a
              aria-label="Navigate Home"
              className={slug ? styles.home : styles.slug}
            >
              CloudBoost
            </a>
          </Link>
          <span className={styles.tagline} >
            &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;{'  '}
            {slug ? (
              <b >
                <span style={{ color: 'var(--accent)' }} >{title}</span>
                
              </b>
            ) : (
              <>&nbsp;&nbsp;Boost&nbsp;Your&nbsp;Cloud&nbsp;Preparation </>
            )}
          </span>
        </span>
        <button
          className={styles.command}
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {isMounted &&
            (theme === 'light' ? (
              <Moon color="var(--fg)" size={30} key="icon-light" />
            ) : (
              <Sun color="var(--fg)" size={30} key="icon-dark" />
            ))}
        </button>
      </div>
    </nav>
  )
}

export default Header
