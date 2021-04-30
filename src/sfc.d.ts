declare module '*.vue' {
    import Vue from 'vue';
    // import VueRouter, { Route } from 'vue-router';

    interface Vue {
        $u:any;
        // $router: VueRouter;
        // $route: Route;
    }
    export default Vue;
}
declare module 'uview-ui'
