<script setup lang="ts">
  import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon
  } from 'mdb-vue-ui-kit';
</script>
<template>
    <MDBFooter bg="dark" :text="['center', 'white']" class="footer">
      <!-- Grid container -->
      <MDBContainer class="p-4 pb-0">
        <!-- Section: Social media -->
        <section class="mb-4 footer">
          <!-- Facebook -->
           
            <MDBBtn
              tag="a"
              outline="light"
              href="#!"
              floating
              class="m-1 social-buttons"
            >
              <Icon name="grommet-icons:facebook" />
            </MDBBtn>
            
          
          <!-- Instagram -->
          <MDBBtn
            tag="a"
            outline="light"
            href="#!"
            floating
            class="m-1 social-buttons"
          >
            <Icon name="grommet-icons:instagram"/>
          </MDBBtn>
          <!-- Linkedin -->
          <MDBBtn
            tag="a"
            outline="light"
            href="https://www.linkedin.com/in/nessaarellano/"
            floating
            class="m-1 social-buttons"
          >
            <Icon name="grommet-icons:linkedin-option"/>
          </MDBBtn>
          <!-- Github -->
          <MDBBtn
            tag="a"
            outline="light"
            href="https://github.com/Lomlomm"
            floating
            class="m-1 social-buttons"
          >
            <Icon name="grommet-icons:github"/>
          </MDBBtn>
        <!-- Section: Social media -->

        </section>
        <div
          class="text-center p-3 w-100"
          style="background-color: transparent"
        >
        Made with 
        <Icon name="grommet-icons:favorite"/>
        by
        <a class="text-white" href="https://github.com/Lomlomm"
          >Nessa</a
        >
      </div>
      </MDBContainer>
      <!-- Grid container -->
      <!-- Copyright -->
      
      <!-- Copyright -->
    </MDBFooter>
  </template>

<style>
.social-buttons{
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>