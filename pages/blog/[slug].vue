<!-- pages/blog/_slug.vue -->
<script lang="ts" setup>
  const { slug } = useRoute().params;
</script>
<template>
  <article class="bg-white rounded-2xl">
    <ContentDoc :path="`/blog/${slug}`" v-slot="{ doc }">
      <div class="cover-container">
        <img v-if="doc.cover" :src="doc.cover" alt="Cover Image" class="cover-image mx-auto mb-5 rounded-lg">
      </div>

      <header>
        <div class="text-center p-5">
          <h1 class="text-4xl font-bold lg:w-2/3 mx-auto">{{ doc.title }}</h1>
          <p class="text-gray-500 mt-2 desc">{{ doc.description }}</p>
        </div>
      </header>

      <!-- Content -->
      <div class="content">
        <ContentRenderer :value="doc"/>
      </div>
    </ContentDoc>
  </article>
</template>

<style>
  .content{
    margin: 10px 300px;
    font-size: 20px;
  }
  a{
    color: rgb(95, 95, 95);
    font-weight: bold;
  }

  a:hover{
    color: rgb(161, 101, 101);
  }

  .desc{
    font-size: 25px;
  }

  .cover-container {
    width: 100%;
    height: 300px; /* Adjust the height as needed */
    overflow: hidden;
    position: relative;
  }

  .cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
