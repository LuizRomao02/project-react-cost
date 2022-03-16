import styles from './LinkButton.module.css'
import { Link } from 'react-router-dom'

// to -> indicando pra onde que vai o link
// text -> mudar o texto baseado onde for usar

function LinkButton({ to, text }) {
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  )
}

export default LinkButton
