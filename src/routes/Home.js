import s from './Home.css'
import Avatar from '../components/Avatar'
import Card from '../components/Card'
import Grid from '../components/Grid'
import Footer from '../components/Footer'

export default () => (
  <div class={s.view}>
    <Avatar />
    <h1>Viktor Hesselbom</h1>
    <h2>Web, iOS, Android, Apple Watch Developer</h2>
    <Grid>
      <Card
        title='Shaky Shapes'
        img={require('../images/shakyshapes.png').default}
        href='https://apps.apple.com/us/app/shaky-shapes/id1528137086'
        year='2021'
        platform='Apple Watch, iOS'
      />
      <Card
        title='Podger'
        img={require('../images/podger.png').default}
        href='https://apps.apple.com/us/app/podger-podcast-player/id1540792803'
        year='2020'
        platform='Apple Watch, iOS'
      />
      <Card
        title='Shufflepong'
        img={require('../images/shufflepong.png').default}
        href='https://apps.apple.com/us/app/shufflepong/id1527268585'
        year='2020'
        platform='Apple Watch, iOS'
      />
      <Card
        title='Tubesnake'
        img={require('../images/tubesnake.png').default}
        href='https://apps.apple.com/se/app/tubesnake/id1484342417'
        year='2020'
        platform='Apple Watch, iOS'
      />
      <Card
        title='Fish in a Watch'
        img={require('../images/fishinawatch.png').default}
        href='https://apps.apple.com/us/app/fish-in-a-watch/id1454215856'
        year='2019'
        platform='Apple Watch, iOS'
      />
    </Grid>
    <Footer />
  </div>
)
