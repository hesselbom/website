import s from './Privacy.css'
import BackFooter from '../components/BackFooter'

export default () => (
  <div class={s.view}>
    <h1>Privacy Policies</h1>
    <ul>
      <li><a href='/privacy-policy/fish-in-a-watch'>Fish in a Watch</a></li>
      <li><a href='/privacy-policy/podger'>Podger</a></li>
      <li><a href='/privacy-policy/shufflepong'>Shufflepong</a></li>
      <li><a href='/privacy-policy/tubesnake'>Tubesnake</a></li>
    </ul>
    <BackFooter />
  </div>
)
