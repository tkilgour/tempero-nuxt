// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ["nuxt-vuefire"],
  vuefire: {
    auth: true,
    config: {
      apiKey: "AIzaSyDk54r9RkREwXVlRynK5YBzX_sZyY3dgUc",
      authDomain: "todo-today-72682.firebaseapp.com",
      projectId: "todo-today-72682",
      storageBucket: "todo-today-72682.appspot.com",
      messagingSenderId: "859812494503",
      appId: "1:859812494503:web:1a48d433a4b917ee906f82",
    },
  },
});
