<script setup lang="ts">
import { defineProps } from 'vue'
import type { PropType } from 'vue'

// Properties provided by the controller
defineProps({
  message: String as PropType<string>
})

</script>

<template>
    <div>
        <!-- Add tailwind class to our header -->
        <h1 class="bg-red-500">Dashboard</h1>
        <p> {{ message }} </p>
    </div>
    <a :href="route('dashboard')">Take me to the dashboard!</a>
</template>
