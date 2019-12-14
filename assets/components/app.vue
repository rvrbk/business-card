<template>
    <router-view></router-view>
</template>

<script>
    export default {
        data() {
            return {
                employees: [{
                    slug: 'rikverbeek',
                    name: 'Rik Verbeek',
                    job: 'Co-Founder',
                    email: 'rik@mjlenergize.com',
                    telephone: '+31 6 505 128 42', 
                    link: 'https://www.linkedin.com/in/rik-verbeek-5b145b5/'
                }, {
                    slug: 'evertalink',
                    name: 'Evert Alink',
                    job: 'Co-Founder',
                    email: 'evert@mjlenergize.com',
                    telephone: '+31 6 389 020 90', 
                    link: 'https://www.linkedin.com/in/evertalink/'
                }]
            }
        }
    }
</script>