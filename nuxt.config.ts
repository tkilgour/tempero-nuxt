// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  // devtools: { enabled: true },
  modules: ["nuxt-vuefire"],
  vuefire: {
    auth: true,
    config: {
      apiKey: "AIzaSyAhIRYgRnJF1w0hI1l9ex7gdcvVXHqCEXI",
      authDomain: "tempero-a4h2l4.firebaseapp.com",
      projectId: "tempero-a4h2l4",
      storageBucket: "tempero-a4h2l4.appspot.com",
      messagingSenderId: "953597715472",
      appId: "1:953597715472:web:2a1e736e886d1eea325695",
    },
  },
});
