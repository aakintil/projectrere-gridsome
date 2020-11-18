<template>
  <div class="layout">
    <div class="row row-navbar fixed-top">
      <nav class="navbar navbar-expand-lg navbar-light wrapper">
        <a class="navbar-brand" href="index.html"
          ><g-image loading="auto" src="~/assets/imgs/logos/projectrere-logo-blue.svg" alt=""
        /></a>
        <button
          class="navbar-toggler ml-auto custom-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/"> Home </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="about.html">
                About <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item btn secondary-btn">
              <a class="" href="apply.html">Apply</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
