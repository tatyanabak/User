<template>
  <div>
    <b-table striped hover small :fields="fields" :items="items">

      <template #cell(id)="data">
        {{data.item.id}}
      </template>

      <template #cell(login)="data">
        {{data.item.login}}
      </template>

      <template #cell(family_name)="data">
        {{data.item.family_name}}
      </template>

      <template #cell(first_name)="data">
        {{data.item.first_name}}
      </template>

      <template #cell(middle_name)="data">
        {{data.item.middle_name}}
      </template>

      <template #cell(email)="data">
        {{data.item.email}}
      </template>

      <template #cell(phone)="data">
        {{data.item.phone}}
      </template>

      <template #cell(secret_word)="data">
        {{data.item.secret_word}}
      </template>

      <template #cell(created_at)="data">
        {{data.item.created_at}}
      </template>

      <template #cell(updated_at)="data">
        {{data.item.updated_at}}
      </template>

      <template #cell(admin)="data">
        <b-button class="btn btn--show" @click.prevent="showUser(data.item)"></b-button>

        <b-button class="btn btn--edit" @click.prevent="editUser(data.item)"></b-button>
      </template>

    </b-table>
  </div>
</template>

<script>
export default {
  name: "UserList",

  props: ['items'],

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
    //items: []
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

<style scoped>

</style>
