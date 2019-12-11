<template>
    <div>
        <qr value="Hello, World!" :options="{ width: 200 }"></qr>
    </div>
</template>

<script>
    import qr from '@chenfengyuan/vue-qrcode';

    export default {
        components: {
            'qr': qr
        }
    }
</script>