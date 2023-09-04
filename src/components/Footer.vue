<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<template>
    <!-- Remove the container if you want to extend the Footer to full width. -->
    <footer class="text-white text-center text-lg-start footer-container">
        <!-- Grid container -->
        <div class="container">
            <!--Grid row-->
            <div class="row mt-4">
                <!--Grid column-->
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <div>
                        <router-link @click="scrollToTop" to="/">
                            <img src='../assets/icons/GRMI_logo.png' alt="Responsive image" width="183">
                        </router-link>
                    </div>
                    <div style="margin-top: 16px;display: inline-flex;">
                        <div style="margin-right: 16px;">
                            <a href="https://www.linkedin.com/company/geohazards-risk-mapping-initiative/">
                                <img src='../assets/icons/Linkedin.png' alt="GRMI LINKEDIN">
                            </a>
                        </div>
                        <div>
                            <a href=https://twitter.com/GeohazardMaps>
                                <img src='../assets/icons/Twitter.png' alt="GRMI TWITTER">
                            </a>
                        </div>
                    </div>
                </div>

                <!--Grid column-->
                <div class="col-lg-2 col-md-3 mb-4 mb-md-0 links-container">
                    <div class="d-flex flex-column" style="margin-right: 12px;">
                        <div class="M20 white" style="font-weight: 700;margin-bottom: 24px;">QUICKLINKS</div>

                        <router-link class="M16 white links" @click="scrollToTop" to="/about" style="margin-bottom: 12px;">
                                About GRMI
                        </router-link>

                        <router-link class="M16 white links" @click="scrollToTop" to="/team" style="margin-bottom: 12px;">
                            <span>
                                Team
                            </span>
                        </router-link>

                        <router-link class="M16 white links text-nowrap" @click="scrollToTop" to="/news-and-media" style="margin-bottom: 12px;">
                            <span>
                                News and Media
                            </span>
                         </router-link>

                         <router-link class="M16 white links" @click="scrollToTop" to="/completed-projects" style="margin-bottom: 12px;">
                            <span>
                                Projects
                            </span>
                         </router-link> 

                         <router-link class="M16 white links" @click="scrollToTop" to="/" style="margin-bottom: 12px;">
                            <span>
                                Portal
                            </span>
                         </router-link> 

                         <router-link class="M16 white links" @click="scrollToTop" to="/">
                            <span >
                                Events
                            </span>
                         </router-link> 
                    </div>
                </div>

                <div class="col-lg-2 col-md-3 mb-4 mb-md-0">
                    <div class="d-flex flex-column" style="margin-right: 12px;">
                        <div class="M20 white" style="font-weight: 700;margin-bottom: 24px">CONTACT</div>
                        <span class="M16 white">mails@georiskmap.org</span>
                    </div>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-lg-5 col-md-12 mb-4 mb-md-0 mt-md-4">
                    <section class="newsletter">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="content" style="text-align: left;">
                                        <div class="C49 white newsletter-text" style="margin-bottom: 24px;">
                                            Subscribe to our Newsletter
                                        </div>
                                        <div class="input-group">
                                            <input type="email" class="form-control" placeholder="Enter your email">
                                        </div>
                                        <span class="input-group-btn">
                                            <button class="btn" type="submit"><span class="M20"
                                                    style="color: #FCFCFC;">Subscribe</span></button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
                <!--Grid column-->
            </div>
            <!--Grid row-->
            <div style="margin-top: 114px;">
                <div class="M13 white d-flex justify-content-center mb-3">
                    2020 - 2023 georiskmap.org © ALL RIGHTS RESERVED
                    <!-- <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a> -->
                </div>
                <div class="M10 white d-flex justify-content-center">
                    Website designed by GRMI Technologies
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer-container {
    background-color: #134A39;
    padding: 78px 0;
}

.newsletter-text {
    white-space: nowrap;
}

.newsletter .content {
    max-width: 650px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;
}

.newsletter .content .form-control {
    height: 50px;
    border-color: #ffffff;
    border-radius: 6px;
}

.newsletter .content.form-control:focus {
    box-shadow: none;
    border: 2px solid #ffffff;
}

.newsletter .content .btn {
    min-height: 52px;
    border-radius: 6px;
    background: #1A1A1A;
    margin-top: 16px;
}

.links-container .links{
  color: inherit;
  text-decoration: none;
}

@media (max-width: 1500px) {
    .newsletter-text {
        white-space: normal;
    }
}


</style>