import Link from '@/components/link'
import styles from './footer.module.css'

const Footer = ({ slug }) => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <Link href="https://github.com/Y4HYA4/CloudBoost#readme" external gray>
          Project
          </Link>
          <Link href="https://blog.yahya-abulhaj.dev" external gray> Learn More
          
          </Link>
        </div>
        <Link href="https://www.itzyahya.tech" external gray>
          
        </Link>
        <Link href="https://devops.yahya-abulhaj.dev/" >
        ❝Sayings❞
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
