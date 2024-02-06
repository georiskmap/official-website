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
              <div class="white text-[3.8125rem]">About GRMI</div>
            </div>
            <div>
              <CustomButton btn-text="Click me" type="success" size="lg" />


              <CustomButton btn-text="View Dashboard" type="outline-secondary" size="lg" style="color: white;" />
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="section section-lg pt-0 relative md:w-[80%] w-[95%] mx-auto mt-[-20rem]">
      <div class=" mt-n8 mt-lg-n13">
        <div class="row justify-content-center">
          <div class="">
            <div class="border-light p-12 lg:p-20 " style="background-color: #FFFFFF;">
              <div class="text-[2rem] cabin font-semibold heading">
                WHO ARE WE?
              </div>
              <div class="card-body">
                <div class="">
                  <div class=" grid lg:grid-cols-temp grid-cols-1 mt-5 justify-between gap-8 ">
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
                  <div class=" text-center" >
                    <iframe class="w-full h-[200px] md:w-full md:h-[380px] lg:w-full lg:h-[700px]" 
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
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('https://res.cloudinary.com/waleszn/image/upload/q_30/v1695970926/about_us_bg_tcgesm.png');
  height: 112vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-container {
  height: 100vh;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.hero-text {
  color: white;
  margin-top: 6rem;
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
  width: auto;
  height: auto;
  padding-top: 54px;
  display: inline-block;
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;
}

.images-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
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

  .text-container {
    padding: 0 12px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1488px;
  }
}


@media (max-width: 600px) {
  .banner {
    padding-left: 60px;
    margin: 0;
  }

}
</style>
