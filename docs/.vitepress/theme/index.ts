/**
 * @Description：
 * @Author: 王磊
 * @Date: 2024-03-01
 */
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import DefaultTheme from 'vitepress/theme-without-fonts';
import foo from '../components/foo.vue';
import "./custom.scss";
export default {
    ...DefaultTheme,
    Layout: foo,
    enhanceApp({ app }) {
      app.component('foo', foo)
      app.use(ElementPlus);
    }
}
