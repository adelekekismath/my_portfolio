<template>
    <div class="  bg-indigo-50 md:px-6  py-7 w-screen">
        <div class="container">
            <div class="row">
        <div class="col-lg-7  mt-9 lg:mt-0">
            <h2 class="font-bold text-gradient text-2xl">
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
        <div class="col-lg-5 py-3 wow zoomIn my-auto">
            <div class="img-place text-center">
                <lottie-player src="https://lottie.host/0634f73c-13ea-45c0-ba69-411f0a58f2b0/7HePBzo9CW.json"
                    background="transparent" speed="0.5" style="max-width: 500px; max-height: 500px"
                    autoplay
                    loop
                >
                </lottie-player>
            </div>
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
                const tasks = [];
                const result = [];
                for (let j = 0; j < 4; j++) {
                    if(this.$t(`career.items[${i}].tasks.content[${j}]`) !== `career.items[${i}].tasks.content[${j}]`) 
                        tasks.push(this.$t(`career.items[${i}].tasks.content[${j}]`));
                }
                for (let j = 0; j < 4; j++) {
                    if(this.$t(`career.items[${i}].results.content[${j}]`) !== `career.items[${i}].results.content[${j}]`) 
                        result.push(this.$t(`career.items[${i}].results.content[${j}]`));
                }
                items.push({
                    title: this.$t(`career.items[${i}].title`),
                    company: this.$t(`career.items[${i}].company`),
                    context: this.$t(`career.items[${i}].context`),
                    tasks: {
                        title: this.$t(`career.items[${i}].tasks.title`),
                        content: tasks
                    },
                    results: {
                        title: this.$t(`career.items[${i}].results.title`),
                        content: result
                    },
                    tools: {
                        title: this.$t(`career.items[${i}].tools.title`),
                        content: this.$t(`career.items[${i}].tools.content`)
                    },
                    team: {
                        title: this.$t(`career.items[${i}].team.title`),
                        content: this.$t(`career.items[${i}].team.content`)
                    },
                });
            }
            return items;
        }
    }
}
</script>

