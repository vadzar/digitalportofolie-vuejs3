import { createRouter, createWebHashHistory } from "vue-router";
import LoginPage from "@/views/pages/page-login/LoginPage.vue";
import RegisterPage from "@/views/pages/page-register/RegisterPage.vue";
import { dpStore } from "../store";
import { fetchUserData } from '../connector/userConnector';

const routes = [
    {
        path: "/login",
        name: "LoginPage",
        component: LoginPage
    },
    {
        path: "/register",
        name: "RegisterPage",
        component: RegisterPage
    },
    {
        path: "/",
        name: "Home",
        component: () => {
            return import(
                '../views/pages/page-home/HomePage.vue'
            );
        },
        meta: { requiredLogin: true }
    },
    {
        path: "/home",
        name: "HomePage",
        component: () => {
            return import(
                '../views/pages/page-home/HomePage.vue'
            );
        },
        meta: { requiredLogin: true }
    },
    {
        path: "/article",
        name: "ArticlePage",
        component: () => {
            return import(
                '../views/pages/page-article/ArticlePage.vue'
            );
        },
        meta: { requiredLogin: true }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
		// always scroll to top
		return { top: 0 };
	}
})

router.beforeEach((to, from, next) => {
    const store = dpStore();
    if(to.matched.some((record) => record.meta.requiredLogin)) {
        checkLogin(store, next);
    }
    else {
        next();
    }
        
})

const checkLogin = async (store, next) => {
    if(store.isLoggedIn) {
        const userData = await fetchUserData(store.getAuthToken);
        if(userData != null) {
            store.setUserData(userData);
            next();
        } else {
            alert("Your session is expired, please login again")
            store.clearAuthToken();
            next({ path: "/login"});
        }
    }
}

export default router;
