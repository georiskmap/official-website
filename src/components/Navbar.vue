<script>

import MyDropdown from './Dropdowns/Dropdowns.vue';
import CustomButton from './Buttons/Button.vue';

export default {
  components: {
    MyDropdown,
    CustomButton
  }
};
</script>

<template>
  <!-- <nav class="navbar bg-dark" data-bs-theme="dark"> -->
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <!-- <div> -->
        <router-link to="/">
          <img src='../assets/icons/GRMI_logo.png' alt="Responsive image" width="183" style="color: green;">
        </router-link>
        <!-- </div> -->
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">

          <MyDropdown buttonText="About Us">
            <div class="M20 primary-500 nav-dropdown-heading">About Us</div>

            <router-link to="/about">About GRMI</router-link>
            <router-link to="/team">Team</router-link>
            <router-link to="/news-and-media">News and Media</router-link>
            <router-link to="/">Careers</router-link>
          </MyDropdown>

          <MyDropdown buttonText="Services">
            <div class="M20 primary-500 nav-dropdown-heading">Services</div>

            <router-link to="/">Software</router-link>
            <router-link to="/">Consultancy</router-link>
            <router-link to="/">Research and Development</router-link>
            <router-link to="/">Data Collection/Intelligence</router-link>
          </MyDropdown>

          <MyDropdown buttonText="Projects">
            <div class="M20 primary-500 nav-dropdown-heading">Projects</div>
            <router-link to="/completed-projects">Completed</router-link>
            <router-link to="/">Proposed</router-link>
            <router-link to="/">Ongoing</router-link>
          </MyDropdown>

          <MyDropdown buttonText="Data">
            <div class="M20 primary-500 nav-dropdown-heading">Data</div>

            <router-link to="/">Portal</router-link>
            <router-link to="/">Dashboard</router-link>
          </MyDropdown>

          <MyDropdown buttonText="Partners">
            <div class="M20 primary-500 nav-dropdown-heading">Partners</div>

            <router-link to="/">Commercial Partners</router-link>
            <router-link to="/">Research Partners</router-link>
            <router-link to="/">Local Partners</router-link>
            <router-link to="/">Regions: NG, GH</router-link>
          </MyDropdown>

          <MyDropdown buttonText="Knowledge">
            <div class="M20 primary-500 nav-dropdown-heading">Knowledge</div>

            <router-link to="/insights">Insights</router-link>
            <router-link to="/">Events</router-link>
            <router-link to="/">Research Papers</router-link>
          </MyDropdown>
        </ul>

        <CustomButton class="M16 white btn-success" btn-text="View Water Level" type="success" size="lg" />
        <!-- style="border-radius: 0;background-color: #134A39;border: none;width: 216px;height: 67px;" -->

      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  padding: 28px 120px 28px 120px;
}

.navbar-nav a {
  color: #9EDBC8;
  display: block;
  margin-top: 16px;
}

.navbar-nav a:hover {
  color: #2DB187;
}

.nav-dropdown-heading {
  margin-bottom: 32px;
}

a {
  color: inherit;
  text-decoration: none;
}


@media (max-width: 767px) {
  .navbar {
    padding: 40px 0px 40px 0px;
  }
}
</style>
