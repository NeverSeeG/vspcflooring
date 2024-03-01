/**
 * @Description：
 * @Author: 王磊
 * @Date: 2024-03-01
 */
import DefaultTheme from 'vitepress/theme-without-fonts'
import Home from '../components/Home.vue'
import "./custom.scss";
export default {
    ...DefaultTheme,
    Layout: Home,
    enhanceApp({ app }) {
    }
}
