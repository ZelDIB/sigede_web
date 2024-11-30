export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["bulma/css/bulma.css"],
  plugins: ["~/plugins/axios.js", "~/plugins/pinia.js"],
  modules: ["@nuxtjs/cloudinary", "@nuxt/image"],
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    useComponent: true, // Esto activa los componentes como `CldImage`
  },
  runtimeConfig: {
    public: {
      CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    },
  },
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dpkl7ms3o/image/upload/",
    },
  },
});
