<template>
  <div>
    <PageTitle v-bind:title="title" />
    <UserList v-bind:items="items"/>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import UserList from '@/components/UserList.vue'

export default {
  async asyncData({$axios}) {
    const items = await $axios.$get('https://my-json-server.typicode.com/tatyanabak/Data-for-user/users')
    return {items}
  },

  data() {
    return {
      title: 'Список пользователей'
    }
  },

  components: {
    PageTitle,
    UserList
  }
}
</script>
