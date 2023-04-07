<template>
  <header>
    <!-- Avatar logo -->
    <div class="flex justify-between">
      <div class="h-9 w-9 cursor-pointer">
        <a href="/">
          <img v-if="isHomePage" class="rounded-full" src="/images/avatar.jpg" alt="Avatar Logo" />
        </a>
      </div>

      <!-- Desktop navigation menu -->
      <nav class="hidden md:block text-white bg-neutral-800 rounded-full px-4">
        <ul class="flex">
          <li v-for="item in navigation" :key="item.name" class="my-2 mx-3 hover:text-teal-500 transition">
            <a :href="item.href">{{ item.name }}</a>
          </li>
        </ul>
      </nav>

      <div class="flex cursor-pointer">
        <!-- Mobile nav button -->
        <div @click="isMobileMenuOpen = true"
          class="flex items-center md:hidden mr-4 bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition px-5 py-2 rounded-full">
          <span class="text-sm text-white mr-2">Menu</span>
          <ChevronDownIcon class="h-3 w-3 text-white" aria-hidden="true" />
        </div>

        <!-- Theme switcher button -->
        <div
          class="bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition flex justify-center items-center rounded-full cursor-pointer px-3 py-2">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 transition stroke-teal-500">
            <path
              d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Mobile modal menu -->
    <div v-if="isMobileMenuOpen" @click="isMobileMenuOpen = false"
      class="fixed inset-0 z-40 bg-black opacity-75 transition" />
    <div v-if="isMobileMenuOpen"
      class="fixed top-0 z-50 right-0 left-0 bg-neutral-900 border border-neutral-800 mx-4 my-8 px-8 py-4 rounded-3xl">
      <nav>
        <div class="text-white flex justify-between mt-4">
          <span class="text-sm leading-6 text-white mb-8">Navigation</span>
          <XMarkIcon @click="isMobileMenuOpen = false" class="h-5 w-5 cursor-pointer" aria-hidden="true" />
        </div>
        <ul class="flex flex-col">
          <li v-for="item in navigation" :key="item.name" class="mb-4">
            <a class="text-lg leading-6 text-white hover:text-teal-500 transition" :href="item.href">{{ item.name }}</a>
            <div class="border-t border-neutral-800"></div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XMarkIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'
const route = useRoute()

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Articles', href: '/articles' },
  { name: 'Projects', href: '/projects' },
  { name: 'Speaking', href: '/speaking' },
  { name: 'Uses', href: '/uses' }
]

const isMobileMenuOpen = ref(false)
const isHomePage = ref(true)

const IsHomePage = () => {
  if (route.path === '/') {
    isHomePage.value = false
  }
}

IsHomePage()
</script>
