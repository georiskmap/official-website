<script>
import CustomButton from './Buttons/Button.vue'

export default {
  components: {
    CustomButton,
  },
};
</script>

<template>
  <div class="hero-image">
    <div class="container">

      <div class="row">
        <div class="hero-container w-100">
          <div class="hero-text w-100">
            <div class="C61 white" style="margin-bottom: 16px;">GeoHazards; Predict,Prepare, Protect.</div>

            <p class="M20 white" style="margin-bottom: 16px;">Promoting a sustainable environment
              through
              the
              development,
              generating applications, and <br />
              dissemination of Geohazard maps using advanced Geospatial Technology</p>
            <div>
            </div>
          </div>
          <div>
            <CustomButton class="M16 white btn-success" btn-text="View Water Level" type="success" size="lg" />

            <CustomButton class="M16 btn-outline" btn-text="View Dashboard" type="outline-secondary" size="lg"
              style="border-radius: 0;background-color: transparent;width: 216px;height: 67px;color: #EAF7F3;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('../assets/icons/HeroImage.png');
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); */
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* position: relative; */
  /* margin-top: 105px; */
}

.hero-container {
  /* padding: 0 40px 0 40px; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.hero-text {
  /* height: 100vh; */
  padding: 0 40px 0 40px;
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  color: white;
}

.hero-text button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
}

.hero-text button:hover {
  background-color: #555;
  color: white;
}

.btn-success {
  margin-right: 16px;
}

@media (max-width: 485px) {
  .btn-success {
    margin-right: 0;
  }

  /* margin-bottom: 16px; */
}

@media (max-width: 455px) {
  .btn-success {
    margin-bottom: 16px;
  }

  /* margin-bottom: 16px; */
}
</style>