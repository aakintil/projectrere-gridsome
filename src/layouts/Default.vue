<template>
  <div class="layout container-fluid">
    <div class="row row-navbar fixed-top">
      <nav class="navbar navbar-expand-lg navbar-light wrapper">
        <a class="navbar-brand" href="/"
          ><g-image
            loading="auto"
            src="~/assets/imgs/logos/projectrere-logo-blue.svg"
            alt=""
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
              <!-- <g-link to="/home/" class="nav-link">Home</g-link> -->
              <a class="nav-link" href="/"> Home </a>
            </li>
            <li class="nav-item">
              <g-link to="/about/" class="nav-link">About</g-link>
              <!-- <a class="nav-link active" href="about.html">
                About <span class="sr-only">(current)</span>
              </a> -->
            </li>
            <li class="nav-item btn secondary-btn">
              <g-link to="/apply/" class="nav-link">Apply</g-link>
              <!-- <a class="" href="apply.html">Apply</a> -->
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