<script lang="ts">
  export let segment: string;
  const menuItems = [
    { title: "about", slug: "about" },
    { title: "events", slug: "events" },
    { title: "paths", slug: "paths" },
    {
      title: '<span class="headers">node</span>Buds',
      slug: "nodebuds",
    },
    { title: "connect", slug: "connect" },
  ];
</script>

<nav>
  <!-- <input type="checkbox" id="navToggle" /> -->
  <div class="content">
    <a href="/" class="full-logomark">
      <img
        src="assets/new_assets/badges/general-badge.svg"
        width="48"
        class="logo-badge"
        alt="acmCSUF badge"
      />
      <span class="logo-text brand-em">CSUF</span>
    </a>

    <ul class="pages">
      {#each menuItems as { title, slug } (slug)}
        <li>
          <a
            href="{`/${slug}`}"
            class="{`page page-${slug}`} headers"
            rel="prefetch"
            aria-current="{segment === slug}"
          >
            {@html title}
          </a>
        </li>
      {/each}
    </ul>
  </div>

  <!--  <label for="navToggle" class="menu">
    <div class="menuLine"></div>
    <div class="menuLine"></div>
    <div class="menuLine"></div>
  </label> -->
</nav>

<style>
  nav {
    position: fixed;
    z-index: 100;
    width: 100%;
    background-color: var(--acm-light);
    filter: drop-shadow(0 2px 8px rgba(16, 19, 21, 0.1));
    -webkit-filter: drop-shadow(0 2px 8px rgba(16, 19, 21, 0.1));
  }

  nav .content,
  nav .full-logomark,
  nav .pages {
    display: flex;
    align-items: center;
  }

  nav li,
  nav a {
    list-style: none;
    text-decoration: none;
  }

  nav .content {
    justify-content: center;
    padding: 24px 0;
  }

  nav .full-logomark {
    margin-right: 376px;
  }

  nav .full-logomark .logo-badge {
    filter: drop-shadow(0 1.5px 4.5px rgba(44, 145, 198, 0.5));
    -webkit-filter: drop-shadow(0 1.5px 4.5px rgba(44, 145, 198, 0.5));
  }

  nav .full-logomark .logo-text {
    font-size: 24px;
    padding-left: 8px;
  }

  nav .pages a {
    font-size: 18px;
    margin-left: 64px;
    transition: color .25s ease-in-out;
  }

  nav .page-about:hover,
  nav .page-about[aria-current="true"],
  nav .page-events:hover,
  nav .page-events[aria-current="true"],
  nav .page-paths:hover,
  nav .page-paths[aria-current="true"],
  nav .page-connect:hover,
  nav .page-connect[aria-current="true"] {
    color: var(--acm-blue);
  }

  nav .page-nodebuds {
    font-weight: 700;
  }

  nav .page-nodebuds:hover, 
  nav .page-nodebuds[aria-current="true"] {
    color: var(--acm-red);
  }

  /* nav {
    position: fixed;
    width: 100%;
    z-index: 100;
    height: var(--navbar-height);
    background-color: var(--acm-light);
    box-shadow: 0 3px 6px rgba(33, 33, 33, 0.1);
    overflow: visible;
  }

  nav .logo {
    float: left;
    display: flex;
    align-items: center;
    overflow: visible;
    margin-left: 128px;
    height: 100%;
    text-decoration: none;
  }

  nav .logo .logoText {
    padding-left: 12px;
    font-size: 24px;
    font-weight: 700;
    color: var(--acm-dark);
    text-decoration: none;
  }

  nav .pages {
    float: right;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    margin-right: 128px;
    height: 100%;
    font-weight: 600;
    list-style: none;
  }

  nav .pages a {
    margin-left: 64px;
    font-size: 24px;
    color: var(--acm-dark);
    text-decoration: none;
  }

  

  nav .pages .page-node-buds[aria-current="true"] {
    font-weight: 700;
    color: #c40042;
  } */

  /* #navToggle {
    display: none;
  }

  nav .menu {
    display: none;
    position: absolute;
    right: 64px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  nav .menu .menuLine {
    width: 30px;
    height: 2px;
    margin: 6px;
    border-radius: 3px;
    background-color: var(--acm-dark);
    transition: all 0.25s ease;
  }

  @media screen and (max-width: 1300px) {
    nav .logo {
      margin-left: 88px;
    }

    nav .pages {
      margin-right: 88px;
    }
  }

  @media screen and (max-width: 1100px) {
    nav .logo {
      margin-left: 48px;
    }

    nav .pages {
      position: fixed;
      z-index: 90;
      top: 82px;
      bottom: 100%;
      width: 100vw;
      height: auto;
      flex-direction: column;
      justify-content: space-evenly;
      overflow: hidden;
      background-color: rgb(255, 255, 255);
      transition: all 0.25s ease;
    }

    nav .pages a {
      margin: 0;
      font-size: 24px;
    }

    nav .menu {
      display: block;
      right: 48px;
    }

    nav :checked ~ .pages {
      bottom: 0;
    }

    nav :checked ~ .menu .menuLine:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    nav :checked ~ .menu .menuLine:nth-child(2) {
      opacity: 0;
    }

    nav :checked ~ .menu .menuLine:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }

  @media screen and (max-width: 800px) {
    nav .logo {
      margin-left: 48px;
    }

    nav .menu {
      right: 48px;
    }
  } */
</style>
