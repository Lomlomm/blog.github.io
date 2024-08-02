<script setup lang="ts">
  import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBIcon
  } from 'mdb-vue-ui-kit';
  import { ref, provide } from 'vue';
  import { useRoute } from 'vue-router';

  const collapse1 = ref(false);
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
          target="#navbarNav"
          @click="collapse1 = !collapse1"
          togglerClass="toggler"
          togglerSize="2x" 
        >
        </MDBNavbarToggler>
        <MDBCollapse id="navbarNav" v-model="collapse1">
          <MDBNavbarNav class="mb-2">
            <MDBNavbarItem to="/" active> Home </MDBNavbarItem>
            <MDBNavbarItem to="/tech"> Tech </MDBNavbarItem>
            <MDBNavbarItem to="/growing"> Growing </MDBNavbarItem>
            <MDBNavbarItem to="/stuff"> Stuff </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </ClientOnly>
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
    .navbar-toggler, .toggler{
      color: black;
    }
    .fas{
      color: black;
    }
    .title{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
</style>