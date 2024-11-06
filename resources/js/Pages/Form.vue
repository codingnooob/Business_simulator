<script setup lang="ts">
import { defineProps } from 'vue'
import type { PropType } from 'vue'
import { usePage } from '@inertiajs/vue3';

const page = usePage();
const userEmail = page.props.user.email
const userID = page.props.user.id
const userName = page.props.user.name

interface Book {
  title: string
  author: string
  year: number
}

// ##### Make it required #####
defineProps({
  book: {
    type: Object as PropType<Book>,
    required: true,
    default() {
      return {
        title: 'Default Title',
        author: 'Default Author',
        year: 2021
      }
    },
    validator: (value: Book) => {
      return value.title.length > 0
    }
  }
})
</script>
<template>
    <div>
        <a :href="route('dashboard')">Take me to the dashboard!</a>
    </div>
</template>