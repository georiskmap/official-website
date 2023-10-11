<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import "../assets/styles/App.scss"

</script>

<template>
  <Navbar />
  <div style="background-color: #EAF7F3;">
    <div class="hero-image">
      <div class="">

        <div class="row">
          <div class="hero-container w-100">
            <div class="hero-text  text-center  w-100">
              <div class="C61 white text-[3.8125rem] cabin">About GRMI</div>
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
      <div class=" mt-n8 mt-lg-n13 z-2">
        <div class="row justify-content-center">
          <div class="">
            <div class="border-light p-12 lg:p-20 " style="background-color: #FFFFFF;">
              <div class="text-[2rem] cabin font-semibold heading">
                WHO ARE WE?
              </div>
              <div class="card-body">
                <div class="">
                  <div class="flex mt-5 lg:flex-row flex-col  justify-between gap-8 ">
                    <div class="text-justify flex space-y-4 flex-col leading-12 text-container">
                    <p class="leading-[1.5rem]">
                      In harmonious progression with the principles of Sustainable Development Goals 11 (Sustainable Cities and Communities) and 13 (Climate Action), we are embarking on a pioneering endeavor that aligns with the core objectives of the Sendai Framework for Disaster Risk Reduction. Our goal is to amplify the availability and accessibility of multi-hazard early warning systems, alongside comprehensive disaster risk information and assessments by the year 2030.
                      </p>

                      <p>
                      Powered by a profound commitment to these global aspirations, we have inaugurated the "Geohazards Risk Mapping Initiative." This initiative stands as a beacon of innovation and community mobilization, marshaling the talents of volunteer youth proficient in Geographic Information Systems and satellite imagery analysis. Through their expertise, we are crafting precise flood susceptibility and post-disaster maps, not just in Nigeria, but extending our efforts across various African nations. 
                      </p>

                      <p>
                      We are steadily carving a pathway of progressive impact, fostering local solutions embedded with globally validated insights through the development of flood risk geospatial solutions. Our mission transcends mere documentation; it is about weaving a tapestry of safety, awareness, and proactive engagement within communities vulnerable to the vagaries of climate change.
                      </p>

                      <p>
                      As we embark on this momentous journey, we are operationalizing our objectives through the following strategic actions: <br>
                      ● Unveiling mobile applications that foster community engagement, chiefly to facilitate the timely reporting of flood events and foster a spirit of vigilance and collaboration. <br>
                      ● Orchestrating mapathons as a participatory community methodology, thereby refining flood prediction analyses and encouraging local involvement in safety measures. <br>
                      ● Crafting high-caliber static and web maps that serve as robust tools for both planning and response, facilitating informed decision-making in critical times. <br>
                      ● Ensuring these early warning signal maps are accessible to the broader public, forming a nexus of information that benefits emergency institutions and stakeholders alike, fostering a community united in resilience and preparedness.
                    </p>
                  </div>
                  <div class="col-12 col-md-6 text-center" >
                    <iframe class="w-[200px] h-[200px] md:w-[350px] md:h-[380px] lg:w-[450px] lg:h-[480px]" 
                      src="https://www.youtube.com/embed/sAx462Sc004?si=uClXD1ueAA_bv1tz&amp;start=1" 
                      title="YouTube video player" frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowfullscreen>
                    </iframe>
                  </div>
                  </div>
                  <div class="images-container ">
                    <img class="item" src='../assets/icons/about_us1.png'>
                    <img class="item" src='../assets/icons/about_us2.png'>
                    <img class="item" src='../assets/icons/about_us3.png'>
                    <img class="item" src='../assets/icons/about_us4.png'>
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
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('https://upcdn.io/12a1yd9/image/about_us_bg.png');
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


.text-container p{
  font-family: 'Merriweather', serif;

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
