<template>
  <section class="container">
    <Breadcrumbs />
    <PageTitle v-bind:title = "title"/>
    <UserEdit v-bind:user="user"/>
  </section>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import UserEdit from '@/components/UserEdit.vue'

export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  },

  async asyncData({$axios, params}) {
    const user = await $axios.$get('https://my-json-server.typicode.com/tatyanabak/Data-for-user/users/' + params.id)
    return {user}
  },

  data() {
    return {
      title: 'Редактирование данных пользователя'
    }
  },

  components: {
    PageTitle,
    Breadcrumbs,
    UserEdit,
  }
}
</script>
