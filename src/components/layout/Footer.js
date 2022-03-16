import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a target="_blank" href='https://github.com/LuizRomao02'>
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a target="_blank" href='https://www.linkedin.com/in/luiz-rom%C3%A3o-2a78b2174/'>
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a target="_blank" href='https://www.instagram.com/romaol7/'>
                        <FaInstagram />
                    </a>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Luiz Romão</span> &copy; 2022
            </p>
        </footer>
    )
}

export default Footer
