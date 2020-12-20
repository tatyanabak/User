<template>
  <section class="container">
    <h1>Редактировать</h1>

    <b-form v-if="show">
      <b-form-group id="id"
      label="id"
      label-for="id">
        <b-form-input id="id"
        v-model="user.id"
        type="number"
        placeholder="id"
        v-bind:value="user.id"
        disabled>
        </b-form-input>
      </b-form-group>

      <b-row>
        <b-col>
          <b-form-group id="familyName"
          label="Фамилия"
          label-for="familyName">
            <b-form-input id="familyName"
            v-model="user.family_name"
            type="text"
            placeholder="Фамилия"
            v-bind:value="user.family_name">
            </b-form-input>
          </b-form-group>

          <b-form-group id="firstName"
          label="Имя"
          label-for="firstName"
          label-cols-sd>
            <b-form-input id="firstName"
            v-model="user.first_name"
            type="text"
            placeholder="Имя"
            v-bind:value="user.first_name">
            </b-form-input>
          </b-form-group>

          <b-form-group id="middleName"
          label="Отчество"
          label-for="middleName"
          label-cols-sd>
            <b-form-input id="middleName"
            v-model="user.middle_name"
            type="text"
            placeholder="Отчество"
            v-bind:value="user.middle_name">
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group id="email"
          label="Email"
          label-for="email">
            <b-form-input id="email"
            v-model="user.email"
            type="email"
            placeholder="Email"
            v-bind:value="user.email">
            </b-form-input>
          </b-form-group>

          <b-form-group id="phone"
          label="Телефон"
          label-for="phone">
            <b-form-input id="phone"
            v-model="user.phone"
            type="tel"
            placeholder="Телефон"
            v-bind:value="user.phone">
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group id="login"
          label="Имя входа"
          label-for="login">
            <b-form-input id="login"
            v-model="user.login"
            type="text"
            placeholder="Имя входа"
            v-bind:value="user.login">
            </b-form-input>
          </b-form-group>

          <b-form-group id="password"
          label="Пароль"
          label-for="password">
            <b-form-input id="password"
            v-model="user.password"
            type="password"
            placeholder="Пароль"
            v-bind:value="user.password">
            </b-form-input>
          </b-form-group>

          <b-form-group id="secretWord"
          label="Секретное слово"
          label-for="secretWord">
            <b-form-input id="secretWord"
            v-model="user.secret_word"
            type="text"
            placeholder="Секретное слово"
            v-bind:value="user.secret_word">
            </b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <label for="createdAt">Дата создания</label>
            <b-form-datepicker
            id="createdAt"
            v-model="user.created_at"
            v-bind:value="user.created_at"
            v-bind:placeholder="user.created_at"
            class="mb-2">
          </b-form-datepicker>

          <label for="updatedAt">Дата изменения</label>
            <b-form-datepicker
            id="updatedAt"
            v-model="user.updated_at"
            v-bind:value="user.updated_at"
            v-bind:placeholder="user.updated_at"
            class="mb-2">
          </b-form-datepicker>
        </b-col>
      </b-row>

      <b-button type="submit" variant="primary">Сохранить</b-button>
    </b-form>
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

  data() {
    return {
      user: {
        login: '',
        family_name: '',
        first_name: '',
        middle_name: '',
        email: '',
        phone: '',
        password: '',
        secret_word: '',
        created_at: '',
        updated_at: '',
      },
      show: true
    }
  },
}
</script>
