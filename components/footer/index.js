import Link from '@/components/link'
import styles from './footer.module.css'

const Footer = ({ slug }) => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <Link href="https://github.com/Y4HYA4" external gray>
          🙋🏽‍♂️CONTRIBUTE
          </Link>
          <Link href="https://overreacted.io" external gray>
           
          </Link>
        </div>
        <Link href="https://www.itzyahya.tech" external gray>
          
        </Link>
        <Link href="https://www.itzyahya.tech" external gray>
        🌐WEBSITE
        </Link>
       
      </footer>
      <footer className={styles.footer}>
        <div />
        <Link href={`https://www.itzyahya.tech${slug ?? ''}`} external gray>
          
        </Link>
        <div />
      </footer>
    </>
  )
}

export default Footer
