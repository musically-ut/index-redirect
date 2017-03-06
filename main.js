var app = new Vue({
    el: '#app',
    data: {
        url: "https://example.com"
    },
    methods: {
        selectIndexHTML: function () {
            $('#indexHTML').select();
        }
    }
});
