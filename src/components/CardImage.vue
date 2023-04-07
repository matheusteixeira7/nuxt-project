<template>
  <div class="my-16 sm:mt-20">
    <div class="-my-4 flex justify-center gap-5 py-4 sm:gap-8">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-800 sm:w-72 sm:rounded-2xl"
        :class="image.rotation"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          sizes="(min-width: 640px) 18rem, 11rem"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  {
    id: '1',
    src: '/images/photos/image-1.jpg',
    alt: 'Image 1',
    rotation: 'rotate-2'
  },
  {
    id: '2',
    src: '/images/photos/image-2.jpg',
    alt: 'Image 2',
    rotation: '-rotate-2'
  },
  {
    id: '3',
    src: '/images/photos/image-3.jpg',
    alt: 'Image 3',
    rotation: 'rotate-2'
  },
  {
    id: '4',
    src: '/images/photos/image-4.jpg',
    alt: 'Image 4',
    rotation: '-rotate-2'
  },
  {
    id: '5',
    src: '/images/photos/image-5.jpg',
    alt: 'Image 5',
    rotation: 'rotate-2'
  }
]
</script>
