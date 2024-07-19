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
<template class="wrapper">
    <MDBFooter bg="dark" :text="['center', 'white']" class="footer">
      <!-- Grid container -->
      <MDBContainer class="p-4 pb-0">
        <!-- Section: Social media -->
        <section class="mb-1 footer">
          <!-- Facebook -->
           
            <!-- <MDBBtn
              tag="a"
              outline="light"
              href="#!"
              floating
              class="m-1 social-buttons"
            >
              <Icon name="grommet-icons:facebook" />
            </MDBBtn>
            
          -->
          
          <MDBBtn
            tag="a"
            outline="light"
            href="https://lomlomm.github.io/Portfolio/"
            floating
            class="m-1 social-buttons"
          >
            <Icon name="fa6-regular:folder-closed"/>
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
          class="text-center p-1 w-100"
          style="background-color: transparent"
        >
        Made with 
        <Icon name="grommet-icons:favorite"/>
        by
        <a class="text-white" href="https://github.com/Lomlomm"
          >Nessa</a
        >
      </div>
      <a href="https://www.buymeacoffee.com/lomlomm"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=lomlomm&button_colour=493737&font_colour=ffffff&font_family=Comic&outline_colour=ffffff&coffee_colour=FFDD00" /></a>
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>