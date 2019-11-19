<template>
  <div id="contactFormWrap">
    <form
      name="contact"
      action="/thanks"
      method="POST"
      v-on:submit.prevent="handleSubmit"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p class="hidden">
        <label>
          Don’t fill this out if you're human:
          <input name="bot-field" />
        </label>
      </p>
      <p class="mb-6">
        <label
          for="name"
          class="block font-sans text-xs uppercase tracking-widest text-green-600 opacity-50 mb-1"
        >Your Name:</label>
        <input
          type="text"
          name="name"
          class="block w-full bg-white rounded shadow border-green-200 border focus:outline-none focus:shadow-md px-5 py-2 text-base text-indigo-700"
          placeholder="John Doe"
          v-model="formData.name"
          autocomplete="off"
          required
        />
      </p>
      <p class="mb-6">
        <label
          for="email"
          class="block font-sans text-xs uppercase tracking-widest text-green-600 opacity-50 mb-1"
        >Your Email:</label>
        <input
          type="email"
          name="email"
          class="block w-full bg-white rounded shadow border-green-200 border focus:outline-none focus:shadow-md px-5 py-2 text-base text-indigo-700"
          placeholder="johnd@example.com"
          v-model="formData.email"
          autocomplete="off"
          required
        />
      </p>
      <div class="mb-6">
        <label
          for="services"
          class="block font-sans text-xs uppercase tracking-widest text-green-600 opacity-50 mb-1"
        >Select Interest:</label>
        <div
          class="selection-wrap relative w-full bg-white rounded shadow border-green-200 border focus:outline-none focus:shadow-md px-5 py-2 text-base text-indigo-700"
        >
          <select
            name="services"
            id="services"
            v-model="formData.service"
            class="block w-full bg-transparent text-indigo-700 focus:outline-none"
          >
            <option value="Web Design">Web Design</option>
            <option value="Static Web Development">Static Web Development</option>
            <option value="CMS Integration">CMS Integration</option>
            <option value="Web Management">Web Management</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <p class="mb-6">
        <label
          for="name"
          class="block font-sans text-xs uppercase tracking-widest text-green-600 opacity-50 mb-1"
        >How can I help:</label>
        <textarea
          name="message"
          class="block w-full bg-white rounded shadow border-green-200 border focus:outline-none focus:shadow-md px-5 py-2 text-base text-indigo-700"
          placeholder="I have a couple of questions..."
          v-model="formData.message"
          autocomplete="off"
        ></textarea>
      </p>
      <p>
        <button type="submit" name="submit form" class="button bg-red-700 text-red-100">Send</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => this.$router.push("/thanks"))
        .catch(error => alert(error));
    }
  }
};
</script>

<style>
input,
textarea {
  transition: all 200ms;
  transform: translateY(0);
}
input:focus,
textarea:focus {
  transform: translateY(-5%);
}
</style>