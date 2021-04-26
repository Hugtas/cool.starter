// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,
    // // Auto import components: https://go.nuxtjs.dev/config-components
    components: [{
        path: '~/components', // will get any components nested in let's say /components/test too
        pathPrefix: false,
    }, ],
    // Enable to test on local network (mobile devices) - Comment to host on localhost
    server: {
        port: 8000,
        host: '0.0.0.0',
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'cool.starter',
        htmlAttrs: {
            lang: 'fr'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/scss/main.scss"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: "~/plugins/vue-ellipse-progress.js", mode: "client" },
        { src: "~/plugins/vue2-touch-events.js", mode: "client" },
        { src: "~/plugins/darktheme.js", mode: "client" },
        "~/plugins/vuelidate.js",
        "~/plugins/notification.js",
        "~/plugins/dateparser.js",
        "~/plugins/tracktip.js"
    ],



    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ["@nuxtjs/google-fonts"],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/style-resources",
        '@nuxtjs/axios',
        "@nuxtjs/dayjs",
        "v-shared-element/nuxt", [
            "nuxt-fontawesome",
            {
                component: "fa", //customize component name
                imports: [{
                        set: "@fortawesome/free-solid-svg-icons",
                        icons: [
                            "faFolder",
                        ]
                    },
                    {
                        set: "@fortawesome/free-brands-svg-icons",
                        icons: []
                    },
                    {
                        set: "@fortawesome/free-regular-svg-icons",
                        icons: []
                    }
                ]
            }
        ]
    ],
    styleResources: {
        scss: ["./assets/scss/main.scss"]
    },
    googleFonts: {
        families: {
            Roboto: true,
            OpenSans: true,
            Montserrat: true
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}