<template>
    <section class="bcard">
        <div class="code">
            <qr :value="link" :options="{ width: 200, color: { light: '#f2e121' }}"></qr>
        </div>
        <div class="person">
            {{ name }}<br>
            {{ job }}<br>
            {{ email }}
        </div>
    </section>
</template>

<script>
    import qr from '@chenfengyuan/vue-qrcode';

    export default {
        components: {
            'qr': qr
        },
        data() {
            return {
                name: null,
                job: null,
                email: null,
                link: null
            }
        },
        mounted() {
            this.$parent.employees.forEach((value) => {
                if(this.$route.params.slug == value.slug) {
                    this.name = value.name;
                    this.job = value.job;
                    this.email = value.email;
                    this.link = value.link;
                }
            });
        }
    }
</script>