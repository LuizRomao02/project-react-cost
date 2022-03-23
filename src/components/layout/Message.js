import {useState, useEffect} from 'react'

import styles from './Message.module.css'

function Message({ type, msg }) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(!msg){
            setVisible(false)
            return
        }

        setVisible(true)
        const timer = setTimeout(() =>{
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)

    }, [msg]) //condicionado a mensgem, sempre precisa ser ligado a alguem o useEffect

    return (
       <>
       {visible && (
           <div className= {`${styles.message} ${styles[type]}`}> {msg} </div>
       )}
       </>
    )

}
export default Message