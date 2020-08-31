import s from './Privacy.css'
import BackFooter from '../components/BackFooter'

export default ({ app }) => (
  <div class={s.view}>
    <h1>Privacy Policy</h1>
    <p>Viktor Hesselbom built the {app} app as a Commercial app. This SERVICE is provided by Viktor Hesselbom and is intended for use as is.</p>
    <p>This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.</p>

    <h2>Information Collection and Use</h2>
    <p>The app does not use third party services that may collect information used to identify you.</p>

    <h2>Changes to This Privacy Policy</h2>
    <p>I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</p>

    <h2>Contact Us</h2>
    <p>If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me.</p>

    <BackFooter />
  </div>
)
