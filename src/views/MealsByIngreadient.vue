<template>
   <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ ingredient.strIngredient }}</h1>
  </div>
 <Meal :meals="meals"/>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import {useRoute} from 'vue-router'
import Meal from '../components/Meal.vue'
const ingredient = computed(() => store.state.ingredient)
const meals = computed(()=>store.state.mealsByIngreadient)
const route = useRoute()
onMounted(()=>{
  store.dispatch('searchMealsByIngreadient',route.params.ingredient)
})
</script>
