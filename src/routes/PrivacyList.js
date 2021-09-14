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
      <li><a href='/privacy-policy/shaky-shapes'>Shaky Shapes</a></li>
      <li><a href='/privacy-policy/agrazing-maze'>Agrazing Maze</a></li>
    </ul>
    <BackFooter />
  </div>
)
