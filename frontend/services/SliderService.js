class SliderService {

    constructor() {
        this.URI = `http://ec2-54-215-64-77.us-west-1.compute.amazonaws.com/:4000/api/v2/slider`;
    }

    async getSliders() {
        const response = await fetch(this.URI);    
        const sliders = await response.json();
        return sliders;
    }

    async postSlider(slider) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: slider
        });
        const data = await res.json();
    }

    async deleteSlider(sliderId) {
        const res = await fetch(`${this.URI}/${sliderId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'Delete'
        });
        const data = await res.json();
        console.log(data);
    }

}

export default SliderService;