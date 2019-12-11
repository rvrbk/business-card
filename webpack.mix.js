let mix = require('laravel-mix');

mix.sass('assets/app.scss', 'css/css')
    .js('assets/app.js', 'js/js');