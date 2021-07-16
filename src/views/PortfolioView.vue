<template>
  <div>
    <navbar-component />
    <hero-component />
    <about-component />
    <skills-component />
    <experience-component />
    <education-component />
    <service-component />
    <portfolio-component />
    <blogs-component />
    <testimonials-component />
    <logo-slider-component />
    <contact-info-component />
    <footer-component />
  </div>
</template>

<script>
// import Home from "@/views/Home.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import HeroComponent from "@/components/HeroComponent.vue";
import AboutComponent from "../components/AboutComponent.vue";
import $ from "jquery";
import SkillsComponent from "@/components/SkillsComponent.vue";
import ExperienceComponent from "../components/ExperienceComponent.vue";
import ServiceComponent from "../components/ServiceComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import ContactInfoComponent from "../components/ContactInfoComponent.vue";
import PortfolioComponent from "@/components/PortfolioComponent.vue";
import BlogsComponent from "../components/BlogsComponent.vue";
import TestimonialsComponent from "@/components/TestimonialsComponent.vue";
import EducationComponent from "../components/EducationComponent.vue";
import LogoSliderComponent from "../components/LogoSliderComponent.vue";


export default {
  name: "All",
  components: {
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ServiceComponent,
    TestimonialsComponent,
    PortfolioComponent,
    FooterComponent,
    ContactInfoComponent,
    BlogsComponent,
    LogoSliderComponent
    // EducationComponent
  },

  mounted() {
    // this.$analytics.logEvent("view-site");

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    $("[data-progress]").each(function() {
      $(this).css({
        bottom: $(this).data("progress")
      });
    });

    // Background-images
    $("[data-background]").each(function() {
      $(this).css({
        "background-image": "url(" + $(this).data("background") + ")"
      });
    });

    // background color
    $("[data-color]").each(function() {
      $(this).css({
        "background-color": $(this).data("color")
      });
    });

    document.addEventListener("scroll", this.handleScroll);

    var parallaxBox = document.getElementById("parallax");
    /* c1left = document.getElementById('l1').offsetLeft,
			           c1top = document.getElementById('l1').offsetTop, */
    let c2left = document.getElementById("l2").offsetLeft;
    let c2top = document.getElementById("l2").offsetTop;
    let c3left = document.getElementById("l3").offsetLeft;
    let c3top = document.getElementById("l3").offsetTop;
    let c4left = document.getElementById("l4").offsetLeft;
    let c4top = document.getElementById("l4").offsetTop;
    let c5left = document.getElementById("l5").offsetLeft;
    let c5top = document.getElementById("l5").offsetTop;
    let c6left = document.getElementById("l6").offsetLeft;
    let c6top = document.getElementById("l6").offsetTop;
    let c7left = document.getElementById("l7").offsetLeft;
    let c7top = document.getElementById("l7").offsetTop;
    let c8left = document.getElementById("l8").offsetLeft;
    let c8top = document.getElementById("l8").offsetTop;
    let c9left = document.getElementById("l9").offsetLeft;
    let c9top = document.getElementById("l9").offsetTop;

    parallaxBox.onmousemove = event => {
      event = event || window.event;
      var x = event.clientX - parallaxBox.offsetLeft,
        y = event.clientY - parallaxBox.offsetTop;

      /*  mouseParallax('l1', c1left, c1top, x, y, 5); */
      this.mouseParallax("l2", c2left, c2top, x, y, 25);
      this.mouseParallax("l3", c3left, c3top, x, y, 20);
      this.mouseParallax("l4", c4left, c4top, x, y, 35);
      this.mouseParallax("l5", c5left, c5top, x, y, 30);
      this.mouseParallax("l6", c6left, c6top, x, y, 45);
      this.mouseParallax("l7", c7left, c7top, x, y, 30);
      this.mouseParallax("l8", c8left, c8top, x, y, 25);
      this.mouseParallax("l9", c9left, c9top, x, y, 40);
    };
  },

  methods: {
    handleScroll() {
      if ($(".navbar").offset().top > 100) {
        $(".navbar").addClass("nav-bg");
      } else {
        $(".navbar").removeClass("nav-bg");
      }
    },
    mouseParallax(id, left, top, mouseX, mouseY, speed) {
      var obj = document.getElementById(id);
      var parentObj = obj.parentNode,
        containerWidth = parseInt(parentObj.offsetWidth),
        containerHeight = parseInt(parentObj.offsetHeight);
      obj.style.left =
        left -
        ((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) *
          speed +
        "px";
      obj.style.top =
        top -
        ((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) *
          speed +
        "px";
    }
    /* ########################################### /hero parallax ############################################## */
  }
};
</script>
