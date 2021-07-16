<template>
  <!-- testimonial -->
  <section
    class="section has-background-primary is-relative testimonial-bg-shapes"
  >
    <div class="container">
      <div class="has-text-centered">
        <h2 class="section-title has-text-white">Testimonials</h2>
      </div>
      <div class="columns is-centered">
        <div class="column is-10 testimonial-slider">
          <!-- slider-item -->
          <div class="has-text-centered testimonial-content">
            <i
              class="ti-quote-right has-text-white icon mb-20 is-inline-block"
            ></i>
            <p class="has-text-white mb-20">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
              <strong
                >quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.</strong
              >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <img
              class="image is-rounded is-inline-block mb-20"
              src="../images/testimonial/client-1.png"
              alt="client-image"
            />
            <h4 class="has-text-white">Jesica Gomez</h4>
            <h6 class="has-text-light mb-20">CEO, Funder</h6>
          </div>
        </div>
      </div>
    </div>
    <!-- bg shapes -->
    <img src="../images/backgrounds/map.png" alt="map" class="image bg-map" />
    <img
      src="../images/illustrations/dots-group-v.png"
      alt="bg-shape"
      class="image bg-shape-1"
    />
    <img
      src="../images/illustrations/leaf-orange.png"
      alt="bg-shape"
      class="image bg-shape-2"
    />
    <img
      src="../images/illustrations/dots-group-sm.png"
      alt="bg-shape"
      class="image bg-shape-3"
    />
    <img
      src="../images/illustrations/leaf-pink-round.png"
      alt="bg-shape"
      class="image bg-shape-4"
    />
    <img
      src="../images/illustrations/leaf-cyan.png"
      alt="bg-shape"
      class="image bg-shape-5"
    />
  </section>
  <!-- /testimonial -->
</template>

<script>
export default {
  name: "TestimonialComponent"
};
</script>
