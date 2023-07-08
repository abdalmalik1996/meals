import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import DefaultLayout from '../components/DefaultLayout.vue'
import MealsByName from "../views/MealsByName.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByIngreadient from "../views/MealsByIngreadient.vue";
import GuestLayout from "../components/GuestLayout.vue"
import MealDetails from "../views/MealDetails.vue"
import ingreadients from "../views/ingreadients.vue"
const routes = [
  {
    path:'/',
    component:DefaultLayout,
    children:[
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLeater",
        component: MealsByLetter,
      },
      {
        path: "/ingreadients",
        name: "ingreadients",
        component: ingreadients,
      },
      {
        path: "/by-Ingreadients/:ingredient",
        name: "byIngreadient",
        component: MealsByIngreadient,
      },

      {
        path:'/meal/:id',
        name:'mealDetails',
        component:MealDetails
      }
    ]
  },
  {
    path:'/guest',
    component:GuestLayout,
  }
   
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
