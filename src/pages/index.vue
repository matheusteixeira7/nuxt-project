<template>
  <div class="h-full overflow-hidden bg-black">
    <Layout>
      <Navbar />
      <Hero />
      <CardImage />
      <div class="lg:flex lg:justify-between mb-12">
        <div>
          <PostCard />
        </div>
        <div class="mx-4 md:mx-12 lg:max-w-md">
          <Newsletter />
          <WorkExperience />
        </div>
      </div>
    </Layout>
  </div>
</template>

<script setup lang="ts"></script>
