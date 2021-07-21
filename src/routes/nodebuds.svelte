<script lang="ts">
  import WhyJoinNodebuds from "@/components/nodebuds/why-join-nodebuds.svelte";
  import Spacing from "@/components/sections/spacing.svelte";
  import CommonHero from "@/components/sections/common-hero.svelte";
  import NodeBudsTestimonial from "@/components/nodebuds/nodebuds-testimonial.svelte";
  import CallToActionSection from "@/components/sections/call-to-action-section.svelte";
</script>

<Spacing amount="200px"/>

<div class="container">
  <section>
    <div>
      <h2 class="headers">Personalized mentorship</h2>
      <p>
        <span class="headers">
          node<span class="brand-em brand-red">Buds</span>
        </span> is our exclusive mentorship program that aims to assist underclassmen with 
        adjusting to university life while simultaneously preparing them for life in tech.  
        Our program exposes underclassmen to various opportunities that encourage connecting forming, 
        skill building, and both personal and technical development.
      </p>
    </div>
    <img
      src="assets/new_assets/badges/nodebuds-badge.svg"
      alt="nodeBuds badge"
    />
  </section>
</div>

<Spacing amount="200px"/>

<!-- <NodeBudsTestimonial
  src="../assets/png/node-buds-testimonial-illustration.png"
  alt="Mentory Samuel Sandoval and trainee Johnson Tong"
>
  <span slot="semester">Fall 2020</span>
  <p slot="content">
    <span class="headers">node<span class="brand-em brand-red">Buds</span></span>
    is a great way to get ahold of how you can move forward in your computer science
    journey! If you feel lost, or don’t have much idea of what to do,
    <span class="headers">node<span class="brand-em brand-red">Buds</span></span>
    is a great way to learn and gain insight from a mentor who has more experience,
    and is further along than you are.
    <br />
    <span class="brand-em">By Johnson Tong</span>
  </p>
</NodeBudsTestimonial> -->


<!-- <CommonHero>
  <h2 slot="headline">What is node<span class="brand-nodebuds">Buds</span>?</h2>
  <p slot="text">
    <span class="brand-em">node<span class="brand-nodebuds">Buds</span></span>
    is a mentorship program that aims to help underclassmen adjust to university
    life prepare them for the tech industry. We achieve this by having upper an underclassman
    form strong connection with each other which allows them to exchange advice,
    skills, and more.
  </p>
</CommonHero>

<Spacing />

<WhyJoinNodebuds />

<Spacing />

<NodeBudsTestimonial
  src="../assets/png/node-buds-testimonial-illustration.png"
  alt="Mentory Samuel Sandoval and trainee Johnson Tong"
>
  <span slot="semester">fall <span class="brand-nodebuds">2020</span></span>
  <p slot="content">
    <span class="brand-em">node<span class="brand-nodebuds">Buds</span></span>
    is a great way to get ahold of how you can move forward in your computer science
    journey! If you feel lost, or don’t have much idea of what to do,
    <span class="brand-em">node<span class="brand-nodebuds">Buds</span></span>
    is a great way to learn and gain insight from a mentor who has more experience,
    and is further along than you are.
    <br />
    <span class="brand-em">By Johnson Tong</span>
  </p>
</NodeBudsTestimonial>

<Spacing /> -->

<!-- <CallToActionSection>
  <h2 slot="headline">How can I get involved?</h2>
  <p slot="text">
    Currently, applications are closed to join the program. Follow us on social
    media to know when they open up! Until then, we invite you to become a part
    of
    <span class="brand-em"
      >the largest tech community at <span class="brand-blue">CSUF</span></span
    >.
  </p>
</CallToActionSection>

<Spacing /> -->

<style>
  .container {
    display: flex;
    justify-content: center;
  }
  
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 1064px;
  }

  section img {
    min-width: 350px;
    filter: drop-shadow(0 10px 40px rgba(212, 17, 83, 0.5));
    -webkit-filter: drop-shadow(0 10px 40px rgba(212, 17, 83, 0.5));
  }

  section div {
    max-width: 650px;
  }

  section h2 {
    font-size: 36px;
    padding-bottom: 16px;
  }

  section p {
    font-size: 16px;
  }

  /* .brand-nodebuds {
    color: var(--acm-red);
    text-transform: none;
  } */
</style>
