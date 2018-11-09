<template>
  <div class="sign-in sign-in-page">
    <Loader :loading="logging"/>
    <div class="signin-popup">
      <div class="signin-pop">
        <div class="row">
          <div class="col-lg-6">
            <div class="cmp-info">
              <div class="cm-logo">
                <img src="/static/images/cm-logo.png" alt="">
                <p>Adbooster é uma rede social especializada em impulsionamento de vendas. Nela você poderá vender ou comprar seus produtos.</p>
              </div>
              <img src="/static/images/cm-main-img.png" alt="">
            </div>
          </div>
          <div class="col-lg-6">
            <div class="login-sec">
              <ul class="sign-control">
                <li data-tab="tab-1" v-bind:class="{ current: flagLogin }" @click="toggleLogin"><a href="#" title="">Acessar</a></li>
                <li data-tab="tab-2" v-bind:class="{ current: !flagLogin }" @click="toggleLogin"><a href="#" title="">Cadastrar</a></li>
              </ul>
              <div class="sign_in_sec" v-bind:class="{ current: flagLogin }" id="tab-1">

                <h3>Acessar conta</h3>
                <form @submit.prevent="signIn">
                  <div class="row">
                    <div class="col-lg-12 no-pdd">
                      <div class="sn-field">
                        <input type="text" v-model="userLogging.email" name="email" autocomplete="email" placeholder="E-mail">
                        <i class="la la-user"></i>
                      </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                      <div class="sn-field">
                        <input type="password" v-model="userLogging.password" name="password" autocomplete="password" placeholder="Senha">
                        <i class="la la-lock"></i>
                      </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                      <button type="submit" value="submit">Acessar</button>
                    </div>
                  </div>
                </form>
                <div class="login-resources">
                  <h4>Acessar com rede social</h4>
                  <ul>
                    <li><a href="#" title="" class="fb"><i class="fa fa-facebook"></i>Acessar com Facebook</a></li>
                  </ul>
                </div>
              </div>
              <div class="sign_in_sec" v-bind:class="{ current: !flagLogin }" id="tab-2">

                <h3>Criar conta</h3>
                <form  @submit.prevent="signUp">
                  <div class="row">
                    <div class="col-lg-12 no-pdd">
                      <FormGroup :columns="0" :error="getError('name')">
                        <div class="sn-field">
                          <input type="text" v-model="userRegister.name" name="name" placeholder="Nome completo">
                          <i class="la la-user"></i>
                        </div>
                      </FormGroup>
                    </div>
                    <div class="col-lg-12 no-pdd" :error="getError('email')">
                      <FormGroup :columns="0">
                        <div class="sn-field">
                          <input type="text" v-model="userRegister.email" name="email" placeholder="E-mail">
                          <i class="la la-envelope"></i>
                        </div>
                      </FormGroup>
                    </div>
                    <div class="col-lg-12 no-pdd">
                      <FormGroup :columns="0" :error="getError('gender')">
                        <div class="sn-field">
                          <select v-model="userRegister.gender">
                            <option>Gênero</option>
                            <option value="male">Masculino</option>
                            <option value="female">Feminino</option>
                            <option value="other">Outro</option>
                          </select>
                          <i class="la la-dropbox"></i>
                          <span><i class="fa fa-ellipsis-h"></i></span>
                        </div>
                      </FormGroup>
                    </div>
                    <div class="col-lg-12 no-pdd" :error="getError('password')">
                      <FormGroup :columns="0">
                        <div class="sn-field">
                          <input type="password" v-model="userRegister.password" name="password" placeholder="Senha">
                          <i class="la la-lock"></i>
                        </div>
                      </FormGroup>
                    </div>
                    <div class="col-lg-12 no-pdd">
                      <FormGroup :columns="0">
                        <div class="sn-field">
                          <input type="password" v-model="passwordRepeat" name="repeat-password" placeholder="Repetir senha">
                          <i class="la la-lock"></i>
                        </div>
                      </FormGroup>
                    </div>
                    <div class="col-lg-12 no-pdd">
                      <div class="checky-sec st2">
                        <div class="fgt-sec">
                          <input type="checkbox" v-model="acceptTerms" name="cc" id="c2">
                          <label for="c2">
                            <span></span>
                          </label>
                          <small>Sim, eu concordo com os termos e condições de uso do AdBooster.</small>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                      <button type="submit" value="submit">Começar</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footy-sec">
      <div class="container" v-if="false">
        <ul>
          <li><a href="#" title="">Help Center</a></li>
          <li><a href="#" title="">Privacy Policy</a></li>
          <li><a href="#" title="">Community Guidelines</a></li>
          <li><a href="#" title="">Cookies Policy</a></li>
          <li><a href="#" title="">Career</a></li>
          <li><a href="#" title="">Forum</a></li>
          <li><a href="#" title="">Language</a></li>
          <li><a href="#" title="">Copyright Policy</a></li>
        </ul>
        <p><img src="/static/images/copy-icon.png" alt="">Copyright 2018</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { omit } from '@/utils'
  import api from '@/api'
  import notifier from '@/notifier'
  import { mapActions, mapGetters } from 'vuex'
  import Loader from '@/components/Template/Loader'
  import FormGroup from '@/components/Template/FormGroup'

  export default {
    data: () => ({
      flagLogin: true,
      userLogging: {
        email: null,
        password: null
      },
      userRegister: {
        name: '',
        email: '',
        password: '',
        gender: ''
      },
      passwordRepeat: '',
      acceptTerms: false,
      logging: false
    }),
    methods: {
      ...mapActions('user', [
        'addUser'
      ]),
      ...mapActions('errors', [
        'addError',
        'clearErrors'
      ]),
      toggleLogin () {
        this.clearErrors()
        this.flagLogin = !this.flagLogin
      },
      authenticate (user) {
        api.authenticate(user)
          .then(result => {
            this.addUser(result)
            this.$router.push('/')
          })
          .catch(() => notifier.error('Erro ao acessar a conta.', 'Autenticação'))
          .then(() => { this.logging = false })
      },
      signIn (event) {
        this.logging = true

        this.authenticate(this.userLogging)

        event.preventDefault()
      },
      signUp (event) {
        this.clearErrors()
        if (!this.acceptTerms) {
          notifier.error('Você precisa aceitar os termos e condições de uso para se cadastrar.', 'Cadastro de usuário')
          return
        }

        if (this.userRegister.password !== this.passwordRepeat) {
          notifier.error('As duas senhas não conferem. Tente novamente.', 'Cadastro de usuário')
          return
        }

        this.logging = true

        api.register(omit(this.userRegister))
          .then(result => {
            this.authenticate(this.userRegister)
          })
          .catch(errors => {
            notifier.error('Erro ao cadastrar a conta.', 'Cadastro de usuário')
            this.addError(errors.response.data.data)
          })
          .then(() => { this.logging = false })

        event.preventDefault()
      }
    },
    computed: {
      ...mapGetters('errors', [
        'getError'
      ])
    },
    components: {
      Loader,
      FormGroup
    }
  }
</script>

<style lang="sass" scoped>
.sn-field + .t-error
  margin-bottom: 0
</style>
