<template>
  <!-- contact -->
  <section
    id="Contact"
    class="section section-on-footer"
    data-background="../images/backgrounds/bg-dots.png"
  >
    <div class="container">
      <div class="has-text-centered">
        <h2 class="section-title">Contact Info</h2>
      </div>
      <div class="columns is-centered">
        <div class="column is-8-desktop">
          <div
            class="has-background-white card-content has-text-centered shadow-down"
          >
            <h4 class="mb-80">Contact Form</h4>
            <form
              @submit.prevent="sendMail"
              class="columns is-multiline is-centered"
            >
              <div class="column is-6-tablet">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  class="input"
                  v-model="name"
                />
              </div>
              <div class="column is-6-tablet">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  class="input"
                  v-model="email"
                />
              </div>
              <div class="column is-full">
                <textarea
                  name="message"
                  id="message"
                  class="input"
                  placeholder="Type Message Here"
                  v-model="message"
                ></textarea>
              </div>
              <div class="form-result">
                <p class="alert alert-success" v-if="success && !error">
                  Message sent successfully.
                </p>
                <p class="alert alert-error" v-if="!success && error">
                  Message failed.
                </p>
              </div>
              <div class="column is-6-tablet is-10">
                <button class="button is-primary is-fullwidth">send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /contact -->
</template>

<script>
export default {
  name: "ContactInfoComponent",
  data() {
    return {
      name: null,
      email: null,
      message: null,
      success: false,
      error: false
    };
  },
  methods: {
    sendMail: function() {
      // this.$analytics.logEvent("send-email");
      // in a real app, it would be better if the URL is extracted as a env variable
      const url = `https://us-central1-${process.env.VUE_APP_FIREBASE_PROJECT_ID}.cloudfunctions.net/submit`;
      const payload = {
        name: this.name,
        email: this.email,
        message: this.message
      };
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
        .then(() => {
          this.success = true;
          this.resetForm();
        })
        .catch(() => {
          this.error = true;
        });
    },
    resetForm: function() {
      this.name = "";
      this.email = "";
      this.message = "";
    }
  }
};
</script>
