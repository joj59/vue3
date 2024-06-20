const app = Vue.createApp({
    // template: '<h2>i am a h2</h2>',
    data() {
        return {
            title: 'final empire',
            age: 20,
        };
    },
    methods: {
        incAge(age) {
            this.age *= 2;
        },
    },
});

app.mount('#app');
