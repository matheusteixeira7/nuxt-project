<template>
  <div class="rounded-xl border border-zinc-800 p-6 text-white mt-12">
    <h2 class="flex justify-start items-center mb-4">
      <BriefcaseIcon class="h-5 text-zinc-500" />
      <span class="pl-4 text-sm font-medium">Work</span>
    </h2>

    <div v-for="(item, index) in resume" :key="index" class="flex justify-between items-center mb-8">
      <div class="flex items-center">
        <div class="h-10 w-10 bg-zinc-800 border border-zinc-600 mr-4 flex justify-center items-center rounded-full">
          <Planetaria />
        </div>
        <div>
          <span class="block text-white text-md font-medium ">{{ item.company }}</span>
          <span class="block text-sm text-zinc-400">{{ item.title }}</span>
        </div>
      </div>
      <div class="text-sm text-zinc-400">{{ item.start }} - {{ item.end }}</div>
    </div>

    <button class="w-full bg-zinc-800 hover:bg-zinc-700 transition active:transition-none ease-in py-2 rounded-md">Download CV</button>
  </div>
</template>

<script setup lang="ts">
import { BriefcaseIcon } from '@heroicons/vue/24/solid'
import Planetaria from '@/components/icons/Planetaria.vue'

const resume = [
  {
    company: 'Planetaria',
    title: 'CEO',
    logo: Planetaria,
    start: '2019',
    end: '2019'
  },
  {
    company: 'Airbnb',
    title: 'CTO',
    logo: Planetaria,
    start: '2014',
    end: '2019'
  },
  {
    company: 'Facebook',
    title: 'Software Engineer',
    logo: Planetaria,
    start: '2014',
    end: '2019'
  }
]
</script>
