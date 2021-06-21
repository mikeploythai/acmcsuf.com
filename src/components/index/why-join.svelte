<script lang="ts">
</script>

<section>
  <img
    src="assets/new_assets/why-join-illustration.png"
    alt="Social event with acmCSUF club members."
  />
  <div class="right-content">
    <h2 class="headers">
      Why should students join?
    </h2>
    <p>
      We help kickstart student’s journies through the tech industry by providing workshops 
      that enable growth of technical ability, a community of techies open to building personal 
      and professional connections, and a mentorship program full of enthusiastic upperclassmen 
      ready prepare underclassmen for success.
    </p>
  </div>
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section .right-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    justify-content: center;
    max-width: 680px;
  }

  section .right-content .headers {
    font-size: 36px;
  }

  section .right-content p {
    padding-top: 16px;
    font-size: 16px;
  }

  section img {
    max-width: 350px;
    margin-right: 120px;
    filter: drop-shadow(0 10px 40px rgba(44, 145, 198, 0.5));
  }
  
  /* section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  }

  section img {
    width: 270px;
  }

  section div h2 {
    text-transform: lowercase;
    font-weight: bold;
    text-align: center;
    font-size: var(--heading-font-size);
  }

  section div p {
    text-align: center;
    font-size: var(--body-font-size);
  }

  @media (min-width: 768px) {
    section {
      padding: 0 180px;
    }
  }

  @media screen and (min-width: 1440px) {
    section {
      flex-direction: row;
    }

    section img {
      width: 420px;
    }

    section div h2 {
      text-align: right;
    }

    section div p {
      text-align: right;
    }
  } */
</style>
