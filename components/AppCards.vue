<script setup lang="ts">
  import { MDBCol, MDBRow, MDBCardGroup, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg } from "mdb-vue-ui-kit";
  const route = useRoute();
  
  const routeNameRef = ref(route.name as string);
  watch(route, () => {
    routeNameRef.value = route.name as string;
  });
  const routeValue = routeNameRef.value
  var list :any = []
  if(routeValue == 'index'){
    list = await queryContent('blog').find()
  }else{
    list = await queryContent('blog').where({ 'tag': routeValue }).find()
  }
  console.log(routeValue)

</script>
<template>
  <ClientOnly fallbackTag="div">
      <div class="container">
          <MDBRow :cols="['1','md-3']" class="g-4">
              <MDBCol v-for="post in list" :key="post._path">
                <NuxtLink :to="`/${post.slug}`">
                  <MDBCard>
                    <MDBCardImg :src="post.cover"/>
                    <MDBCardBody class="card-body">
                        <MDBCardTitle class="card-title">{{post.title}}</MDBCardTitle>
                        <MDBCardText class="card-desc">
                        {{post.description}}
                        </MDBCardText>
                        <a class="category" href="">#{{post.tag}}</a>
                    </MDBCardBody>
                  </MDBCard>
                </NuxtLink>
              </MDBCol>
          </MDBRow>
      </div>
  </ClientOnly>   
</template>


<style>
  .category{
      color: rgb(165, 51, 218);
  }
  .card-body{
    padding: 30px;
  }
  .card-title{
    color:rgb(87, 87, 87)
  }
  .card-desc{
    color: rgb(110, 110, 110);
  }


</style>