<template>
  <section class="container">
    <Breadcrumbs />
    <PageTitle v-bind:title="title" />
    <UserShow v-bind:item="item"/>
  </section>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import UserShow from '@/components/UserShow.vue'

export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  },

  async asyncData({$axios, params}) {
    const item = await $axios.$get('https://my-json-server.typicode.com/tatyanabak/Data-for-user/users/' + params.id)
    return {item}
  },

  data() {
    return {
      title: "Просмотр данных пользователя"
    }
  },

  components: {
    Breadcrumbs,
    PageTitle,
    UserShow
  }

}
</script>
