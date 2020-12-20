<template>
  <section class="container">
    <h1>{{item.family_name}} {{item.first_name}} {{item.middle_name}}</h1>
    <dl>
      <dt>id</dt>
      <dd>{{item.id}}</dd>
      <dt>Email</dt>
      <dd>{{item.email}}</dd>
      <dt>Телефон</dt>
      <dd>{{item.phone}}</dd>
      <dt>Имя входа</dt>
      <dd>{{item.login}}</dd>
      <dt>Секретное слово</dt>
      <dd>{{item.secret_word}}</dd>
      <dt>Дата создания</dt>
      <dd>{{item.created_at}}</dd>
      <dt>Дата изменения</dt>
      <dd>{{item.updated_at}}</dd>
    </dl>
  </section>
</template>

<script>
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
      item: []
    }
  }
}
</script>
