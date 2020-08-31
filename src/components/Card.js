import s from './Card.css'

export default ({ title, img, year, ...props }) => (
  <a {...props}>
    <article style={{ backgroundImage: `url(${img})` }} class={s.card}>
      <div class={s.inner}>
        <h2 class={s.title}>{title}</h2>
        <time class={s.date} datetime={year}>{year} - Apple Watch</time>
      </div>
    </article>
  </a>
)
