<template>

    <div class="row">
        <div class="col-lg-6 p-4 mt-9 lg:mt-0">
            <h2 class="title-section text-2xl">
                {{ $t('skillsAndExperience.title[0]') }}
                <span class="marked">
                    {{ $t('skillsAndExperience.title[1]') }}
                </span>
            </h2>
            <div class="divider"></div>
            <div class="mb-4">

            </div>
            <div class="container mx-auto px-4">
                <div class="relative border-l-2 border-gray-300 pl-6">
                    <!-- Item 1 -->
                    <div class="mb-10">
                        <div
                            class="absolute w-8 h-8 bg-green-500 rounded-full -left-4 top-0 d-flex justify-center align-center">
                            <i class="fa-solid fa-briefcase white" color="white"></i>
                        </div>
                        <h3 class="text-lg font-semibold">  </h3>
                        <p class="text-sm text-gray-600">Company ABC - 2021 to Present</p>
                        <p class="text-gray-700">
                            Designing and implementing user-centric interfaces for modern web applications.
                        </p>
                    </div>
                    <!-- Item 2 -->
                    <div class="mb-10">
                        <div
                            class="absolute w-8 h-8 bg-green-500 rounded-full -left-4 d-flex justify-center align-center">
                            <i class="fa-solid fa-briefcase white" color="white"></i>
                        </div>
                        <h3 class="text-lg font-semibold">UI Designer</h3>
                        <p class="text-sm text-gray-600">Company XYZ - 2018 to 2021</p>
                        <p class="text-gray-700">
                            Focused on creating intuitive designs for a diverse range of applications.
                        </p>
                    </div>

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
</template>

<script>
export default {
    name: 'Career',
    data() {
        return {
        }
    },
}
</script>