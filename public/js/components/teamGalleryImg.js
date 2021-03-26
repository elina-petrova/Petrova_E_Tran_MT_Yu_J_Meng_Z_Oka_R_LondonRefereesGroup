export default {
    props: ['img'],
    template: `
    <div>
    <img v-on:click="changeImage($event)" :src="img.src" alt="LRG gallery image" >
    </div>
    `,
    methods: {
        changeImage(event) {
            console.log(event.target.parentElement.classList);
            if (event.target.parentElement.classList.contains("right_one")) {
                console.log('right');
                this.slideNext();
            } else if (event.target.parentElement.classList.contains("left_one")) {
                console.log('left');
                this.slideBack();
            }
        },
        slideNext() {
            this.$parent.slideNext();
        },
        slideBack() {
            this.$parent.slideBack();
        }
    }
}