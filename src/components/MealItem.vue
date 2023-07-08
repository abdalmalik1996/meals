<template>
  
  <div class="bg-white shadow rounded-2xl flex flex-col hover:scale-105 transition-all ">

    
    <routerLink :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-2xl h-64 w-full object-cover"
    /></routerLink>
    <div class="p-3 h-full flex flex-col justify-between">
      <div class="h-full flex flex-col justify-between mb-3">
        <h3 class="font-semibold font-bold text-2xl mb-2">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          {{ $filters.truncateWords(meal.strInstructions, 20) }}
        </p>
      </div>

      <div class="flex items-center">
        <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";
import { RouterLink } from "vue-router";

const {meal } = defineProps({
    meal:{
        required:true,
        type:Object
    }
}) 

</script>
