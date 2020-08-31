import s from './Avatar.css'

export default () => (
  <figure class={s.avatar}>
    <img
      src={require('../images/viktor.jpg').default}
      alt='Photo of Viktor'
    />
  </figure>
)
