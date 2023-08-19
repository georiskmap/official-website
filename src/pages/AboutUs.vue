<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import "../assets/styles/App.scss"

</script>

<template>
  <Navbar />
  <div style="background-color: #EAF7F3;">
    <div class="hero-image">
      <div class="container">

        <div class="row">
          <div class="hero-container w-100">
            <div class="hero-text w-100">
              <div class="C61 white">About GRMI</div>
            </div>
            <div>
              <CustomButton btn-text="Click me" type="success" size="lg" />


              <CustomButton btn-text="View Dashboard" type="outline-secondary" size="lg" style="color: white;" />
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="section section-lg pt-0">
      <div class="container mt-n8 mt-lg-n13 z-2">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="border-light p-2 p-md-4 p-lg-5" style="background-color: #FFFFFF;">
              <div class="C61 heading">
                WHO ARE WE?
              </div>
              <div class="card-body">

                <div class="row">
                  <div class="col-12 col-md-6 text-container">
                    <p>
                      <span>
                        Lorem ipsum dolor sit amet consectetur. Elementum tortor pellentesque mollis urna bibendum
                        volutpat.
                        Pretium
                        suspendisse ipsum pellentesque ultrices quam. Nec adipiscing tincidunt mus imperdiet orci interdum
                        suspendisse
                        enim. Laoreet tristique nunc tortor congue scelerisque. In ipsum turpis tempus sed aliquam
                        pellentesque.
                        Mattis
                        vivamus pulvinar sollicitudin tincidunt blandit.
                      </span>

                      Sed ornare sit suspendisse elit id vitae. In egestas viverra sem quam risus eu. Non consequat porta
                      libero
                      porta
                      ac scelerisque elementum. Aliquam dictum faucibus varius aliquam iaculis egestas interdum commodo.
                      Sed
                      est
                      metus
                      est at ut. Sagittis vehicula tempus cursus velit vitae.

                      <span>
                        Diam consectetur adipiscing turpis amet facilisi posuere integer cursus ac. Amet laoreet tempor
                        pulvinar
                        cras
                        nam. Amet neque vitae vitae integer viverra. In vulputate a nunc lacus. Proin nibh gravida eu
                        facilisis
                        purus
                        risus eu. Sed quis quisque ut libero tristique non. Augue aenean magna libero nisi venenatis donec
                        nisi.
                        Nibh
                        pharetra eget id nunc massa metus tincidunt tellus eget. Vivamus fermentum tellus sagittis ipsum
                        et
                        natoque
                        mi.
                        Faucibus risus id orci arcu. Facilisis sed ligula lorem non lobortis dictum nisl. Non eget viverra
                        montes
                        donec.
                        Odio etiam tincidunt maecenas quam nunc a morbi sapien justo. Vel magna tincidunt enim tristique
                        egestas
                        pellentesque.
                      </span>

                      Vitae vestibulum sit proin sagittis cursus mauris nulla nibh urna. Molestie tortor quis purus purus
                      consequat
                      urna elit porttitor fringilla. Dolor mi sapien ultrices nunc etiam est lobortis. Ut felis morbi
                      adipiscing
                      volutpat commodo fames facilisis odio dictumst. Consequat faucibus a at ridiculus sodales
                      adipiscing.
                      Nec
                      arcu
                      nunc pellentesque nulla vel. Aliquet lobortis eget tincidunt elit consectetur nulla tempus ac.
                      Eleifend ante
                      ligula dignissim duis. Diam nulla a non non urna ac.
                      <span>

                        In ut at nisl bibendum non in sed nibh. Laoreet a orci sed mus et nec tincidunt. Sodales
                        adipiscing
                        aenean
                        imperdiet justo quis congue neque. Rhoncus magna netus nulla porttitor accumsan porttitor.
                        Pellentesque
                        dolor
                        congue ultrices facilisi eu tempus tincidunt laoreet at. Enim urna maecenas faucibus in justo
                        suscipit
                        pellentesque. Urna sapien elit nulla viverra elit. Metus semper a diam viverra ullamcorper eu.
                        Penatibus
                        lectus
                        suspendisse elementum augue dui sapien consectetur.
                      </span>
                    </p>
                  </div>
                  <div class="col-12 col-md-6 text-center" style="margin-top: 37px;">
                    <img src='../assets/icons/about_us_president.png' class="img-fluid" alt="Responsive image">
                    <div class="C31" style="padding-top: 6px;">
                      Taiwo Ogunwumi
                    </div>
                  </div>
                  <div class="images-container">
                    <img class="item" src='../assets/icons/about_us 1.png'>
                    <img class="item" src='../assets/icons/about_us 2.png'>
                    <img class="item" src='../assets/icons/about_us 3.png'>
                    <img class="item" src='../assets/icons/about_us 4.png'>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>


<style scoped>
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('../assets/icons/about_us_bg.png');
  height: 112vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.hero-text {
  padding: 0 40px 0 40px;
  color: white;
}

.who-are-we-bg-container {
  position: relative;
  height: 100vh;
  background-color: #EAF7F3
}

.who-are-we-bg-container .banner {
  position: absolute;
  max-height: fit-content;
  bottom: 0;
  background-color: white;
}


.images-container .item {
  width: 25%;
  height: auto;
  padding-top: 54px;
  display: inline-block;
  background-size: cover;
  background-position: center;
}

.images-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  resize: both;
  overflow: auto;
}

.banner {
  padding-left: 120px;
  margin: 0 120px;
}

.text-container {
  padding: 0;
}

.text-container p span {
  display: block;
  padding: 37px 0;
}

@media (min-width: 992px) {

  .mt-lg-n13,
  .my-lg-n13 {
    margin-top: -26rem !important;
  }

  .text-container {
    padding: 0 12px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1488px;
  }

  .section {
    margin: 0 120px;
  }
}


@media (max-width: 1000px) {
  .banner {
    padding-left: 60px;
    margin: 0;
  }

}
</style>
