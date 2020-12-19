<template>
  <section class="container">
    <h1>Редактировать</h1>
    <form>
      <div class="form-group">
        <label for="familyName">id</label>
        <input type="text" class="form-control" id="userId" placeholder="id" v-bind:value="user.id" disabled>
      </div>
      <div class="form-group">
        <label for="familyName">Фамилия</label>
        <input type="text" class="form-control" id="familyName" placeholder="Фамилия" v-bind:value="user.family_name">
      </div>
      <div class="form-group">
        <label for="firstName">Имя</label>
        <input type="text" class="form-control" id="firstName" placeholder="Имя" v-bind:value="user.first_name">
      </div>
      <div class="form-group">
        <label for="middleName">Отчество</label>
        <input type="text" class="form-control" id="middleName" placeholder="Отчество" v-bind:value="user.middle_name">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="phone" class="form-control" id="phone" placeholder="Email" v-bind:value="user.phone">
      </div>
      <div class="form-group">
        <label for="email">Телефон</label>
        <input type="email" class="form-control" id="email" placeholder="Телефон" v-bind:value="user.email">
      </div>
      <div class="form-group">
        <label for="login">Имя входа</label>
        <input type="text" class="form-control" id="login" placeholder="Имя входа" v-bind:value="user.login">
      </div>
      <div class="form-group">
        <label for="login">Пароль</label>
        <input type="password" class="form-control" id="password" placeholder="Пароль" v-bind:value="user.password">
      </div>
      <div class="form-group">
        <label for="secretWord">Секретное слово</label>
        <input type="text" class="form-control" id="secretWord" placeholder="Секретное слово" v-bind:value="user.secret_word">
      </div>
      <div class="form-group">
        <label for="createdDate">Дата создания</label>
        <input type="text" class="form-control" id="createdDate" placeholder="Дата создания" v-bind:value="user.created_at">
      </div>
      <div class="form-group">
        <label for="updatedDate">Дата изменения</label>
        <input type="text" class="form-control" id="updatedDate" placeholder="Дата изменения" v-bind:value="user.updated_at">
      </div>
    </form>
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
