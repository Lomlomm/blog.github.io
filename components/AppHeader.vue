<script setup lang="ts">
  import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
  } from 'mdb-vue-ui-kit';
  import { ref, provide } from 'vue';
  import { useRoute } from 'vue-router';

  const collapse1 = ref(false);
  // const search2 = ref('');
  // provide('searchQuery', search2);
  const route = useRoute();
  const pageTitles: { [key: string]: string }  = {
    'index': 'Lomlomm\'s DevBlog.',
    'tech': 'Tech Insights.',
    'growing': 'Personal Growth.',
    'stuff': 'Miscellaneous Stuff.',
    'blog-slug': ''
  };

  const pageDescriptions: { [key: string]: string }  = {
    'index': 'Dev notes on technology and the path of professional growing.',
    'tech': 'Latest trends and insights in technology.',
    'growing': 'Personal and professional growth stories.',
    'stuff': 'A collection of miscellaneous topics.',
    'blog-slug': ''
  };


  const routeName = ref(route.name as string);
  const currentTitle = computed(() => pageTitles[routeName.value]);
  const currentDescription = computed(() => pageDescriptions[routeName.value]);

  watch(route, () => {
    routeName.value = route.name as string;
  });

 

</script>
<template>
    <header>
      <!-- Navbar -->
      <ClientOnly fallbackTag="div">
      <MDBNavbar expand="lg" light bg="white" container>
        <MDBNavbarToggler
          target="#navbarExample01"
          @click="collapse1 = !collapse1"
        ></MDBNavbarToggler>
        <MDBCollapse id="#navbarExample01" v-model="collapse1">
          <MDBNavbarNav class="mb-2 mb-lg-0">
            <MDBNavbarItem to="/" active> Home </MDBNavbarItem>
            <MDBNavbarItem to="/tech"> Tech </MDBNavbarItem>
            <MDBNavbarItem to="/growing"> Growing </MDBNavbarItem>
            <MDBNavbarItem to="/stuff"> Stuff </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </ClientOnly>
      <!-- Navbar -->
      <!-- Jumbotron -->
      <div v-if="currentTitle !== ''" class="title p-5 text-center bg-light">
        <h1 class="mb-3">{{ currentTitle }}</h1>
        <h4 class="mb-3">{{ currentDescription }}</h4>
      </div>
      <!-- Jumbotron -->
    </header>
  </template>

 <style>
    h1 {
        font-family: 'PlayFair Display', sans-serif;
    }
    h4{
        font-family: 'Marvel', sans-serif;
    }
    .search{
        margin-right: 10px;
    }
    .search-button{
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-color: rgba(209, 138, 177, 0.288);
      background-color: rgba(209, 138, 177, 0.479);
      border-radius: 5px;
      width: 50px;
      color: white;
    }
</style>