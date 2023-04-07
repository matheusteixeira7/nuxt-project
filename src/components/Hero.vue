<template>
  <div>
    <div class="mt-14 mb-8 h-16 w-16 cursor-pointer">
      <img class="rounded-full" src="/images/avatar.jpg" alt="Avatar Logo" />
    </div>

    <div class="mb-8">
      <h1
        class="text-3xl font-extrabold leading-normal text-white md:text-5xl lg:max-w-3xl lg:leading-normal mb-8"
      >
        Software engineer, founder, and amateur writter.
      </h1>
      <p class="text-base text-gray-400 font-medium leading-relaxed">
        I’m Spencer, a software designer and entrepreneur based in New York City.
        I’m the founder and CEO of Planetaria, where we develop technologies that
        empower regular people to explore space on their own terms.
      </p>
    </div>

    <div>
      <a v-for="item in socialMedia" :key="item.name" :href="item.link">
        <Icon :name="item.name" size="24" class="text-gray-400 hover:text-white transition mr-6"/>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">

const socialMedia = [
  {
    name: 'mdi:twitter',
    link: 'https://twitter.com/matheusteixeira7'
  },
  {
    name: 'mdi:instagram',
    link: 'https://instagram.com/matheusteixeira7'
  },
  {
    name: 'mdi:github',
    link: 'https://github.com/matheusteixeira7'
  },
  {
    name: 'mdi:linkedin',
    link: 'https://linkedin.com/in/matheusteixeira7'
  }
]
</script>
