<template>
     <div class="bg-indigo-50 py-5 page-section">
    <div class="container">
      <div class="text-center wow fadeInUp">
        <div class="text-2xl mb-3"> {{ $t("personnality.title") }} </div>
        <h3 class="title-section">
          <span class="">"{{ $t("personnality.description[0]") }}</span>
          {{ $t("personnality.description[1]") }}"
        </h3>
        <div class="divider mx-auto"></div>
      </div>

      <div
        class="flex flex-col lg:flex-row items-center justify-evenly space-x-4 h-full text-left py-5">
        <div
        class="bg-white rounded-xl mt-3 drop-shadow-md col-lg-4 ml-2 py-1 px-5 h-70 hover:-mt-3 cursor-default hover:shadow-lg hover:shadow-indigo-100">
        <lord-icon
            src="https://cdn.lordicon.com/xmaezqzk.json"
            trigger="hover"
            colors="primary:#121331,secondary:#6c55f9"
            style="width: 100px; height: 100px"
            class="hidden lg:flex"></lord-icon>

          <div class="text-2xl font-semibold  mt-4 pl-1">
            {{ $t("personnality.quickLearning.title") }}
          </div>
          <p class="text-left text-base lg:text-sm leading-relaxed">
            {{ $t("personnality.quickLearning.description") }}
          </p>
        </div>

        <div
          class="bg-white rounded-xl mt-3 drop-shadow-md col-lg-4 ml-2 py-1 px-5 h-70 hover:-mt-3 cursor-default hover:shadow-lg hover:shadow-indigo-100">
          <lord-icon
            src="https://cdn.lordicon.com/ncmnezgk.json"
            colors="primary:#121331,secondary:#6c55f9"
            trigger="hover"
            style="width: 100px; height: 100px"
            class="hidden lg:flex"></lord-icon>

          <div class="text-2xl font-semibold  mt-4 pl-1">
            {{ $t("personnality.problemSolving.title") }}
          </div>
          <p class="text-left text-base lg:text-sm leading-relaxed">
            {{ $t("personnality.problemSolving.description") }}
          </p>
        </div>

        <div
          class="bg-white rounded-xl drop-shadow-md mt-3 col-lg-4 ml-2 py-1 px-5 h-70 hover:-mt-3 cursor-default hover:shadow-lg hover:shadow-indigo-100">
          <lord-icon
            src="https://cdn.lordicon.com/bduzytli.json"
            colors="primary:#121331,secondary:#6c55f9"
            trigger="morph"
            style="width: 100px; height: 100px"
            class="hidden lg:flex"></lord-icon>

          <div class="text-2xl font-semibold  mt-4 pl-1">
            {{ $t("personnality.admitMistakes.title") }}
          </div>
          <p class="text-left text-base lg:text-sm leading-relaxed">
            {{ $t("personnality.admitMistakes.description") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import lottie from "lottie-web";
    import { defineElement } from "@lordicon/element";

    defineElement(lottie.loadAnimation);
    export default {
        name: "Personnality",
    };
</script>