<template>
   

  <div class="bg-indigo-50 pt-8 page-section my-[76px]">
    <div class="container">
      <div class="row">
        <div
          class="relative lg:hidden col-md-6 col-lg-3 py-3 wow fadeInUp">
          <div class="bg-green-400 card-blog">
            <div class="header">
              <div class="entry-NavbarFooter">
                <div class="post-author text-medium text-white">
                  Welcome to Blogs
                </div>
                <a href="#" class="post-date"></a>
              </div>
            </div>
            <div class="body">
              <div class="pl-2 text-white text-2xl font-medium">
                <a>
                  Share My Knowledge
                  <br />
                  Research Skills
                  <br />
                  Makes More Employable
                </a>
              </div>

              <div
                class="NavbarFooter text-green-600 after:no-underline font-medium btn bg-green-200">
                <a href="https://prmblogs.tistory.com/">
                  Visit Prime Blogs
                  <span class="mai-chevron-forward text-sm"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div v-for="(a, i) in blog" :key="a" class="col-md-6 col-lg-4 py-3">
          <div

            class="card-blog bg-white">
            <div class="header">
              <div class="avatar">
                <img :src="blog[i].profile" />
              </div>
              <div class="entry-NavbarFooter">
                <div class="post-author">{{ blog[i].username }}</div>
                <a class="post-date">{{ blog[i].date }}</a>
              </div>
            </div>

            <div class="body">
              <div class="post-title">
                <a>{{ blog[i].title }}</a>
              </div>
              <div class="post-excerpt">
                {{ blog[i].intro }}
              </div>
            </div>
            <div class="NavbarFooter ml-2">
              <a href="https://prmblogs.tistory.com/">
                Read More
                <span class="mai-chevron-forward text-sm"></span>
              </a>
            </div>
          </div>
        </div>

        <div class="col-12 mt-5">
          <nav aria-label="Page Navigation">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a
                  class="page-link"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true">
                  Previous
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item active" aria-current="page">
                <a class="page-link" href="#">
                  2
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Data from "../data/data.js";

export default {
  name: "Blog Page",
  data() {
    return {
      blog: Data,
    };
  }
};
</script>

<style scoped>
.space-on-top {
  top: 60px;
}
</style>
