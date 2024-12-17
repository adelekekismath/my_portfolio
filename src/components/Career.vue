<template>
    <div class="container mx-auto py-7 w-screen">
        <div class="row sm:mx-8  w-screen">
        <div class="col-lg-6  mt-9 lg:mt-0">
            <h2 class="title-section text-2xl">
                {{ $t('career.title') }}
            </h2>
            <div class="divider"></div>

            <div class="container  px-4">
                <div class="relative border-l-2 border-gray-300 pl-6">
                    <CareerItem 
                        v-for="(career, index) in getCareerItems()" 
                        :key="index" 
                        :career="career" 
                    />
                </div>
            </div>

        </div>
        <div class="col-lg-6 py-3 wow zoomIn">
            <div class="img-place text-center">
                <lottie-player src="https://lottie.host/0634f73c-13ea-45c0-ba69-411f0a58f2b0/7HePBzo9CW.json"
                    background="transparent" speed="0.5" style="max-width: 500px; max-height: 500px"
                    autoplay></lottie-player>
            </div>
        </div>
    </div>
    </div>
    

</template>

<script>
import CareerItem from './CareerItem';
export default {
    name: 'Career',
    components: {
        CareerItem
    },
    methods: {
        toggleWorksDetails(index) {
            this.readMoreActivated[index] = !this.readMoreActivated[index];
        },
        getCareerItems() {
            const items = [];
            const itemCount = 2; 
            for (let i = 0; i < itemCount; i++) {
                const moreDetails = [];
                for (let j = 0; j < 4; j++) {
                    if(this.$t(`career.items[${i}].moreDetails[${j}]`) !== `career.items[${i}].moreDetails[${j}]`) 
                        moreDetails.push(this.$t(`career.items[${i}].moreDetails[${j}]`));
                }
                items.push({
                    title: this.$t(`career.items[${i}].title`),
                    company: this.$t(`career.items[${i}].company`),
                    description: this.$t(`career.items[${i}].description`),
                    moreDetails: moreDetails
                });
            }
            return items;
        }
    }
}
</script>

