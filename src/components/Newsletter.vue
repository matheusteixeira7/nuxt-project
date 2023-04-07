<template>
  <div class="rounded-xl border border-zinc-800 p-6 text-white mt-12">
    <h2 class="mb-4 flex items-center">
      <EnvelopeIcon class="h-5 text-zinc-500" />
      <span class="pl-4 text-sm font-medium">Stay up to date</span>
    </h2>
    <p class="mb-6 text-sm text-zinc-400">
      Get notified when i publish something new, and unsubscribe at any time.
    </p>

    <form class="flex">
      <input
        type="email"
        placeholder="Email address"
        aria-label="Email address"
        required
        class="mr-4 min-w-0 flex-auto appearance-none rounded-md border border-zinc-700 bg-zinc-700/[0.15] px-3 py-2 text-zinc-200 shadow-md shadow-zinc-800/5 placeholder:text-zinc-500 focus:border-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-400/10 sm:text-sm"
      />
      <button
        class="rounded-md bg-zinc-700 py-2 px-3 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-600 active:bg-zinc-700 active:text-zinc-100/70 active:transition-none"
      >
        Join
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/24/solid'
</script>
