<template>
  <div>
    <b-table striped hover small :fields="fields" :items="items">

      <template #cell(id)="data">
        {{ data.item.id }}
      </template>

      <template #cell(login)="data">
        {{ data.item.login }}
      </template>

      <template #cell(family_name)="data">
        {{ data.item.family_name }}
      </template>

      <template #cell(first_name)="data">
        {{ data.item.first_name }}
      </template>

      <template #cell(middle_name)="data">
        {{ data.item.middle_name }}
      </template>

      <template #cell(email)="data">
        {{ data.item.email }}
      </template>

      <template #cell(phone)="data">
        {{ data.item.phone }}
      </template>

      <template #cell(secret_word)="data">
        {{ data.item.secret_word }}
      </template>

      <template #cell(created_at)="data">
        {{ data.item.created_at }}
      </template>

      <template #cell(updated_at)="data">
        {{ data.item.updated_at }}
      </template>

      <template #cell(admin)="data">
        <btn @click.prevent="showUser(data.item)">
          <img src="~/assets/image/show.png" alt="Просмотреть">
        </btn>

        <btn @click.prevent="editUser(data.item)">
          <img src="~/assets/image/edit.png" alt="Редактировать">
        </btn>
      </template>

    </b-table>
  </div>
</template>

<script>
export default {
  async asyncData({$axios}) {
    const items = await $axios.$get('https://my-json-server.typicode.com/tatyanabak/Data-for-user/users')
    return {items}
  },

  data: () => ({
    fields: [
      'id',
      {key: 'login', label: 'Имя входа'},
      {key: 'family_name', label: 'Фамилия'},
      {key: 'first_name', label: 'Имя'},
      {key: 'middle_name', label: 'Отчество'},
      {key: 'email', label: 'Email'},
      {key: 'phone', label: 'Телефон'},
      {key: 'secret_word', label: 'Секретное слово'},
      {key: 'created_at', label: 'Дата создания'},
      {key: 'updated_at', label: 'Дата изменения'},
      {key: 'admin', label: ''}
     ],
    items: []
  }),

  methods: {
    showUser(item) {
      this.$router.push('/users/' + item.id + '/show')
    },
    editUser(item) {
      this.$router.push('/users/' + item.id + '/edit')
    }
  }
}
</script>
