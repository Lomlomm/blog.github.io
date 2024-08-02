<!-- pages/blog/_slug.vue -->
<script lang="ts" setup>
  const { slug } = useRoute().params;
</script>
<template>
  <article class="bg-white rounded-2xl p-5 lg:p-10">
    <ContentDoc :path="`/blog/${slug}`" v-slot="{ doc }">
      <div class="cover-container mb-5">
        <img v-if="doc.cover" :src="doc.cover" alt="Cover Image" class="cover-image mx-auto rounded-lg">
      </div>

      <header>
        <div class="text-center p-5">
          <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold mx-auto">{{ doc.title }}</h1>
        </div>
      </header>

      <!-- Content -->
      <div class="content mx-auto">
        <ContentRenderer :value="doc"/>
      </div>
    </ContentDoc>
  </article>
</template>

<style>
  .content {
    margin: 0 auto;
    padding: 10px;
    font-size: 16px;
  }
  a {
    color: rgb(95, 95, 95);
    font-weight: bold;
  }
  a:hover {
    color: rgb(161, 101, 101);
  }
  .desc {
    font-size: 1.25rem;
  }
  .cover-container {
    width: 100%;
    height: 40vh;
    overflow: hidden;
    position: relative;
  }
  .cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    .content {
      margin: 0 100px;
      font-size: 18px;
    }
  }

  @media (min-width: 1024px) {
    .content {
      margin: 0 200px;
      font-size: 20px;
    }
  }

  @media (min-width: 1280px) {
    .content {
      margin: 0 300px;
    }
  }
</style>
