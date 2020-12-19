<template>
  <section class="container">
    <h1>{{user.family_name}} {{user.first_name}} {{user.middle_name}}</h1>
    <dl>
      <dt>id</dt>
      <dd>{{user.id}}</dd>
      <dt>Email</dt>
      <dd>{{user.email}}</dd>
      <dt>Телефон</dt>
      <dd>{{user.phone}}</dd>
      <dt>Имя входа</dt>
      <dd>{{user.login}}</dd>
      <dt>Пароль</dt>
      <dd>{{user.password}}</dd>
      <dt>Секретное слово</dt>
      <dd>{{user.secret_word}}</dd>
      <dt>Дата создания</dt>
      <dd>{{user.created_at}}</dd>
      <dt>Дата изменения</dt>
      <dd>{{user.updated_at}}</dd>
    </dl>
  </section>
</template>

<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({$axios, params}) {
    const user = await $axios.$get('https://my-json-server.typicode.com/tatyanabak/Data-for-user/users/' + params.id)
    return {user}
  },
}
</script>
