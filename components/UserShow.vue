<template>
  <dl>
    <dt>id</dt>
    <dd>{{item.id}}</dd>
    <dt>ФИО</dt>
    <dd>{{item.family_name}} {{item.first_name}} {{item.middle_name}}</dd>
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
</template>

<script>
export default {
  name: "UserShow",

  props: ['item'],
}
</script>

<style scoped>

</style>
