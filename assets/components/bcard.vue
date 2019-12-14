<template>
    <section class="bcard">
        <div class="left">
            <div class="code">
                <qr :value="link" :options="{ width: 300, color: { light: '#f2e121' }}"></qr>
            </div>
        </div>
        <div class="right">
            <div class="person">
                <h1>{{ name }}</h1>
                <div class="meta">
                    <span><i class="material-icons">rowing</i>{{ job }}</span>
                    <span><i class="material-icons">mail</i><a :href="'mailto:' + email">{{ email }}</a></span>
                    <span><i class="material-icons">call</i><a :href="'tel:' + telephone">{{ telephone }}</a></span>
                </div>
            </div>
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
                telephone: null,
                link: null
            }
        },
        mounted() {
            this.$parent.employees.forEach((value) => {
                if(this.$route.params.slug == value.slug) {
                    this.name = value.name;
                    this.job = value.job;
                    this.telephone = value.telephone;
                    this.email = value.email;
                    this.link = value.link;
                }
            });
        }
    }
</script>