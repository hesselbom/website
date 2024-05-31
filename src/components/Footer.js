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
      <p class={s.contact}>Contact me at <a href={mail}>viktor@hesselbom.net</a></p>
      <p><a rel='me' href='https://www.youtube.com/channel/UCwesYXkLUWs5ykr6H5AEauw'>YouTube</a></p>
      <p><a rel='me' href='https://twitter.com/hesselbom'>Twitter / 𝕏</a></p>
      <p><a rel='me' href='https://www.linkedin.com/in/hesselbom/'>LinkedIn</a></p>
      <p><a rel='me' href='https://mastodon.social/@viktorhesselbom'>Mastodon</a></p>
      <p class={s.policies}><a href='/privacy-policy'>App Privacy Policies</a></p>
      <p class={s.policies}>Hesselbom Tech AB</p>
    </footer>
  )
}
