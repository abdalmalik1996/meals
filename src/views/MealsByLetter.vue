<template>
  <div class="flex flex-col p-8">
    <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
      <router-link
        :to="{ name: 'byLeater', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
    <Meal :meals="meals" />
</template>

<script setup>
import { computed, watch,onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meal from '../components/Meal.vue'

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route,() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
})
onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
debugger;
</script>
