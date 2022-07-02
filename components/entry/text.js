import { memo, useState } from 'react'
import cn from 'classnames'

import Link from '@/components/link'
import styles from './text.module.css'


const categories = {
   
   'AZ-900' :  "/images/AZ900.png" , 
   'AI-900' : "/images/AI900.png",
   'DP-900' : "/images/DP900.png",
   'SC-900' : "/images/SC900.png",
   'PL-900' : "/images/PL900.png",
  /* 'AZ-104' : "/images/AZ104.png",
   'AZ-204' : "/images/AZ204.png",
   'AZ-500' : "/images/AZ500.png",
   'AZ-400' : "/images/AZ400.png",
   'AZ-305' : "/images/AZ305.png",
   'Terraform' : "/images/tf.png", */
   
  
}


const request = ['🙋‍♂️', '🙋🏽‍♂️', '🙋🏻‍♂️','🙋🏿‍♂️','🙋🏻', '🙋🏼', '🙋🏽', '🙋🏾', '🙋🏿']

const TextEntry = ({ title, type, comment, href, category, as }) => {
  const [diceRoll] = useState(Math.random())
  const emoji = category
    ? categories[category]
    : request[Math.round(diceRoll * (request.length - 1))]
  return (
    <li className={cn(styles.item, !category && styles.request)}>
      <Link
      
        href={href}
        as={as}
        external={!as}
        title={`${title}`}
        className={styles.link}
      >
        <img src={emoji}  style={{width:'100px', margin:'10px'}}/>
       
        <span  className={cn(styles.title, 'clamp', !category && styles.new)}>
          {title}
        </span>
      </Link>
    </li>
  )
}

export default memo(TextEntry)
