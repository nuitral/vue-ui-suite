declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<unknown, object, any>
    export default component
}