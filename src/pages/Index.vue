<template>
  <Layout class="home-page">
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div class="row row-hero">
      <div class="container-hero wrapper">
        <div class="layered">
          <h1 class="mg-btm-32">
            Project Rere supports Social Enterprises in Africa and Asia.
          </h1>
          <p class="mg-btm-16">
            Working on improving access to Education in Nigeria? Apply now for
            our Podcast and Grant!
          </p>
          <a href="apply.html" class="btn primary-btn mg-btm-32">
            Apply
          </a>
        </div>
        <div class="overlay"></div>
      </div>
    </div>
    <div class="row row-content">
      <div class="container-content wrapper">
        <div class="content-info">
          <h2 class="mg-btm-32">
            We hope to inspire more people to support Social Enterprises, and
            begin their own social impact journey.
          </h2>
          <div class="content-card-container">
            <div class="content-card">
              <g-image src="~/assets/imgs/icons/awareness-icon.png" alt="" />
              <h3>Awareness</h3>
              <p class="caption">
                We share stories about and provide grants to Social Enterprises
                in Africa and Asia.
              </p>
            </div>
            <div class="content-card">
              <g-image src="~/assets/imgs/icons/podcasts-icon.png" alt="" />
              <h3>Podcasts</h3>
              <p class="caption">
                Through stories, we aim to provide Social Enterprises access to
                an audience of curious listeners and investors.
              </p>
            </div>
            <div class="content-card">
              <g-image src="~/assets/imgs/icons/grants-icon.png" alt="" />
              <h3>Grants</h3>
              <p class="caption">
                We use our grant capital to support the growth of creative and
                innovative ideas developed by Social Entrepreneurs.
              </p>
            </div>
          </div>
        </div>

        <div class="content-join">
          <h2 class="mg-btm-32">
            Join us as we promote positive social change across Africa and Asia
          </h2>
          <div class="text-row">
             <a href="javascript:void( window.open( 'https://form.jotform.com/202654195519056', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) ) "> Subscribe With Us </a>
          </div>
        </div>
      </div>
    </div>

    <footer class="row row-footer">
      <div class="container-footer wrapper">
        <a class="navbar-brand" href="/"
          ><g-image
            loading="auto"
            src="~/assets/imgs/logos/projectrere-logo-white.svg"
            alt=""
        /></a>
        <a
          href="https://docs.google.com/document/d/1WcHhkeq4FBVVHUXvXnpjsHdPm4fkvGhRWTL6sWCLKzI/edit?usp=sharing"
          target="_blank"
          class="text-link"
          >Privacy Policy</a
        >
        <a href="mailto:hello@projectrere.com" target="_blank" class="text-link"
          >Contact us at hello@projectrere.com</a
        >
        <p class="caption">Copyright &#169; Project Rere Ltd</p>
      </div>
    </footer>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Project Rere | Home",
  },
  mounted() {},
};
</script>

<style></style>
