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
        title='Lubba'
        img={require('../images/lubba.png').default}
        href='https://lubba.app/'
        year='2022'
        platform='Apple Watch'
      />
      <Card
        title='Numbers Round'
        img={require('../images/numbersround.png').default}
        href='https://www.numbersround.com/'
        year='2022'
        platform='Website'
      />
      <Card
        title='Puzzle PDF'
        img={require('../images/puzzlepdf.png').default}
        href='https://www.puzzlepdf.com/'
        year='2022'
        platform='PDF, Website'
      />
      <Card
        title='Shaky Shapes'
        img={require('../images/shakyshapes.png').default}
        href='https://apps.apple.com/app/shaky-shapes/id1528137086'
        year='2021'
        platform='Apple Watch, iOS'
      />
      <Card
        title='Podger'
        img={require('../images/podger.png').default}
        href='https://podger.app/'
        year='2020'
        platform='Apple Watch, iOS'
      />
      <Card
        title='Shufflepong'
        img={require('../images/shufflepong.png').default}
        href='https://apps.apple.com/app/shufflepong/id1527268585'
        year='2020'
        platform='Apple Watch, iOS'
      />
      <Card
        title='Tubesnake'
        img={require('../images/tubesnake.png').default}
        href='https://apps.apple.com/app/tubesnake/id1484342417'
        year='2020'
        platform='Apple Watch, iOS'
      />
      <Card
        title='Fish in a Watch'
        img={require('../images/fishinawatch.png').default}
        href='https://apps.apple.com/app/fish-in-a-watch/id1454215856'
        year='2019'
        platform='Apple Watch, iOS'
      />
    </Grid>
    <Footer />
  </div>
)
