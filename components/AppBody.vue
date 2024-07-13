<script setup lang="ts">
  import { MDBCol, MDBRow, MDBCardGroup, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg } from "mdb-vue-ui-kit";
</script>
<template>
    <ClientOnly fallbackTag="div">
        <div class="container">
            <MDBRow :cols="['1','md-3']" class="g-4">
                <MDBCol>
                    <MDBCard>
                    <MDBCardImg src="/img/package-manager.png" top alt="..."/>
                    <MDBCardBody>
                        <MDBCardTitle>What's a package manager?</MDBCardTitle>
                        <MDBCardText>
                        This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard>
                    <MDBCardImg src="/img/coming-soon.png" top alt="..."/>
                    <MDBCardBody>
                        <MDBCardTitle>How to face impostor syndrome?</MDBCardTitle>
                        <MDBCardText>
                        This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard>
                    <MDBCardImg src="/img/coming-soon.png" top alt="..."/>
                    <MDBCardBody>
                        <MDBCardTitle>An ocean of possibilities: How to choose which programming language to learn?</MDBCardTitle>
                        <MDBCardText>
                        This is a longer card with supporting text below as a natural lead-in to
                        additional content.
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard>
                    <MDBCardImg src="/img/coming-soon.png" top alt="..."/>
                    <MDBCardBody>
                        <MDBCardTitle>What's Vite and why you should start using it?</MDBCardTitle>
                        <MDBCardText>
                        This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard>
                    <MDBCardImg src="/img/coming-soon.png" top alt="..."/>
                    <MDBCardBody>
                        <MDBCardTitle>What's Vite and why you should start using it?</MDBCardTitle>
                        <MDBCardText>
                        This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div>
    </ClientOnly>
   
  </template>

<style>
    .container{
        max-width: 1200px; /* Set the maximum width for the container */
        margin: 0 auto;   /* Center the container */
        padding: 0 15px;  /* Optional: Add some padding to prevent content from touching the edges */
    }
</style>