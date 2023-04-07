<template>
  <div
      v-for="(post, postIndex) in posts"
      :key="postIndex"
      class="bg-inherit transition ease-in hover:bg-neutral-800 rounded-2xl lg:max-w-xl px-4 md:px-12 py-6 md:py-4 "
    >
    <a href="/">
      <div class="flex items-center mb-4">
        <div class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        <span class="pl-3.5 text-sm font-medium leading-relaxed text-zinc-500">{{
          new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }).format(post.date)
        }}</span>
      </div>
      <div>
        <h2 class="text-base font-bold leading-relaxed text-white mb-2">
          {{ post.title }}
        </h2>
        <p class="text-sm text-zinc-400">{{ post.content }}</p>
      </div>
      <div class="flex items-center mt-4 text-sm font-medium text-teal-500">
        <span>
          Read article
        </span>
        <Icon name="mdi:chevron-right" />
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
const posts = [
  {
    id: '1',
    title: 'Crafting a design system for a multiplanetary future',
    content:
      'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
    date: new Date(),
    link: 'https://twitter.com/matheusteixeira7'
  },
  {
    id: '2',
    title: 'Crafting a design system for a multiplanetary future',
    content:
      'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
    date: new Date(),
    link: 'https://twitter.com/matheusteixeira7'
  },
  {
    id: '3',
    title: 'Crafting a design system for a multiplanetary future',
    content:
      'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
    date: new Date(),
    link: 'https://twitter.com/matheusteixeira7'
  }
]
</script>
