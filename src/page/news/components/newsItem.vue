<template>
  <router-link tag='div' :to='`/news/${news.id}`' replace class="news-item">
    <section class="news-item--body">
      <h2>{{ title }}</h2>
      <p>
        <i class="news-cate">{{ cate }}</i>
        <span>作者 {{ author }}</span><span>・{{ hits }}浏览</span><span>・{{ time | time2tips }}</span>
      </p>
    </section>
    <div class="news-item--poster" v-if='image'>
      <img v-lazyload="image">
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'news-item',
  props: ['news'],
  data() {
    return {
      hits: 0,
      cate: null,
      image: null,
      title: null,
      author: null,
      time: ''
    };
  },
  methods: {
    formatData() {
      const {
        hits = 0,
        author = '',
        image = {},
        title = '',
        created_at: createdAt,
        category = {}
      } = this.news;
      this.hits = hits;
      this.title = title;
      this.author = author;
      this.time = createdAt;
      this.cate = category.name;
      this.image = image ? `/api/v2/files/${image.id}` : null;
    }
  },
  mounted() {
    this.formatData();
  }
};
</script>
<style lang='less' src='../style/newsItem.less'>

</style>
