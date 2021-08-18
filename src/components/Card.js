import s from './Card.css'

export default ({ title, img, year, platform, ...props }) => (
  <a {...props} class={s.link}>
    <article style={{ backgroundImage: `url(${img})` }} class={s.card}>
      <div class={s.inner}>
        <h2 class={s.title}>{title}</h2>
        <time class={s.date} datetime={year}>{year} - {platform}</time>
      </div>
    </article>
  </a>
)
