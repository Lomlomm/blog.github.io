<script setup lang="ts">
  import {
    MDBFooter,
    MDBContainer,
    MDBBtn,
    MDBIcon
  } from 'mdb-vue-ui-kit';
</script>

<template class="wrapper">
  <MDBFooter bg="dark" :text="['center', 'white']" class="footer">
    <!-- Grid container -->
    <MDBContainer class="p-4 pb-0">
      <!-- Section: Social media -->
      <div class="mb-1 footer">
        <div class="social-buttons">
          <MDBBtn
            tag="a"
            outline="light"
            href="https://lomlomm.github.io/Portfolio/"
            floating
            class="m-1 i-button"
          >
            <Icon name="fa6-regular:folder-closed" class="icon"/>
          </MDBBtn>
          
          <!-- Linkedin -->
          <MDBBtn
            tag="a"
            outline="light"
            href="https://www.linkedin.com/in/nessaarellano/"
            floating
            class="m-1 i-button"
          >
            <Icon name="grommet-icons:linkedin-option" class="icon"/>
          </MDBBtn>
          
          <!-- Github -->
          <MDBBtn
            tag="a"
            outline="light"
            href="https://github.com/Lomlomm"
            floating
            class="m-1 i-button"
          >
            <Icon name="grommet-icons:github" class="icon"/>
          </MDBBtn>  
        </div>
        
        <a href="https://www.buymeacoffee.com/lomlomm" class="buy-me-coffee">
          <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=lomlomm&button_colour=493737&font_colour=ffffff&font_family=Comic&outline_colour=ffffff&coffee_colour=FFDD00" />
        </a>

        <div class="text-center p-1">
          Made&nbsp;with&nbsp;<Icon name="grommet-icons:favorite"/>&nbsp;by&nbsp;<a class="text-white" href="https://github.com/Lomlomm">Nessa</a>
        </div>
      </div>
      <!-- Section: Social media -->
    </MDBContainer>
    <!-- Grid container -->
  </MDBFooter>
</template>

<style>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.social-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.icon{
  width: 70%;
  height: 70%;
}

.i-button{
  display: flex;
  align-items: center;
  justify-content: center;
}


.buy-me-coffee {
  margin: 10px 0;
}

.text-center {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
}

@media (min-width: 768px) {
  .footer {
    flex-direction: row;
    justify-content: space-between;
  }

  .text-center {
    flex-direction: row;
    text-align: left;
  }

}
</style>
