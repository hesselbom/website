import { useState, useEffect } from 'preact/hooks'
import s from './Footer.css'

export default () => {
  const [mail, setMail] = useState('#')

  useEffect(() => {
    setTimeout(() => {
      setMail('mailto:viktor@hesselbom.net')
    }, 1000)
  }, [])

  return (
    <footer class={s.footer}>
      <p>Contact me at <a href={mail}>viktor@hesselbom.net</a></p>
      <p class={s.policies}><a href='/privacy-policy'>App Privacy Policies</a></p>
    </footer>
  )
}
