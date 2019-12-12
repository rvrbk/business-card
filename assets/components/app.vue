<template>
    <router-view></router-view>
</template>

<script>
    export default {
        data() {
            return {
                employees: [{
                    slug: "rikverbeek",
                    name: "Rik Verbeek",
                    job: "Founder",
                    email: "rik@mjlenergize.com",
                    link: "https://www.linkedin.com/in/rik-verbeek-5b145b5/"
                }]
            }
        }
    }
</script>