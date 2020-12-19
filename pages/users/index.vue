<template>
  <section>
    <h1>Список пользователей</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Имя входа</th>
          <th scope="col">Фамилия</th>
          <th scope="col">Имя</th>
          <th scope="col">Отчество</th>
          <th scope="col">Email</th>
          <th scope="col">Телефон</th>
          <th scope="col">Пароль</th>
          <th scope="col">Секретное слово</th>
          <th scope="col">Дата создания</th>
          <th scope="col">Дата изменения</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user of users" :key="user.id">
          <td>{{user.id}}</td>
          <td>{{user.login}}</td>
          <td>{{user.family_name}}</td>
          <td>{{user.first_name}}</td>
          <td>{{user.middle_name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.phone}}</td>
          <td>{{user.password}}</td>
          <td>{{user.secret_word}}</td>
          <td>{{user.created_at}}</td>
          <td>{{user.updated_at}}</td>
          <td>
            <a href="#" @click.prevent="showUser(user)">Просмотреть</a>
            <a href="#" @click.prevent="editUser(user)">Редактировать</a>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  async asyncData({$axios}) {
    const users = await $axios.$get('https://my-json-server.typicode.com/tatyanabak/Data-for-user/users')
    return {users}
  },
  data: () => ({
    users: []
  }),
  methods: {
    showUser(user) {
      this.$router.push('/users/' + user.id + '/show')
    },
    editUser(user) {
      this.$router.push('/users/' + user.id + '/edit')
    }
  }
}
</script>
