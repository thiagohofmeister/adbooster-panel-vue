<template>
  <div class="sign-in sign-in-page">
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
                <li data-tab="tab-1" class="current"><a href="#" title="">Sign in</a></li>
                <li data-tab="tab-2"><a href="#" title="">Sign up</a></li>
              </ul>
              <div class="sign_in_sec current" id="tab-1">

                <h3>Acessar conta</h3>
                <form @submit.prevent="signIn">
                  <div class="row">
                    <div class="col-lg-12 no-pdd">
                      <div class="sn-field">
                        <input type="text" v-model="userLogging.email" name="email" placeholder="E-mail">
                        <i class="la la-user"></i>
                      </div>
                    </div>
                    <div class="col-lg-12 no-pdd">
                      <div class="sn-field">
                        <input type="password" v-model="userLogging.password" name="senha" placeholder="Senha">
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
              <div class="sign_in_sec" id="tab-2">
                <div class="signup-tab">
                  <i class="fa fa-long-arrow-left"></i>
                  <h2>johndoe@example.com</h2>
                  <ul>
                    <li data-tab="tab-3" class="current"><a href="#" title="">User</a></li>
                    <li data-tab="tab-4"><a href="#" title="">Company</a></li>
                  </ul>
                </div>
                <div class="dff-tab current" id="tab-3">
                  <form>
                    <div class="row">
                      <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                          <input type="text" name="name" placeholder="Full Name">
                          <i class="la la-user"></i>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                          <input type="text" name="country" placeholder="Country">
                          <i class="la la-globe"></i>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                          <select>
                            <option>Category</option>
                          </select>
                          <i class="la la-dropbox"></i>
                          <span><i class="fa fa-ellipsis-h"></i></span>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                          <input type="password" name="password" placeholder="Password">
                          <i class="la la-lock"></i>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                          <input type="password" name="repeat-password" placeholder="Repeat Password">
                          <i class="la la-lock"></i>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <div class="checky-sec st2">
                          <div class="fgt-sec">
                            <input type="checkbox" name="cc" id="c2">
                            <label for="c2">
                              <span></span>
                            </label>
                            <small>Yes, I understand and agree to the workwise Terms & Conditions.</small>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <button type="submit" value="submit">Get Started</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="dff-tab" id="tab-4">
                  <form>
                    <div class="row">
                      <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                          <input type="text" name="company-name" placeholder="Company Name">
                          <i class="la la-building"></i>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                          <input type="text" name="country" placeholder="Country">
                          <i class="la la-globe"></i>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                          <input type="password" name="password" placeholder="Password">
                          <i class="la la-lock"></i>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <div class="sn-field">
                          <input type="password" name="repeat-password" placeholder="Repeat Password">
                          <i class="la la-lock"></i>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <div class="checky-sec st2">
                          <div class="fgt-sec">
                            <input type="checkbox" name="cc" id="c3">
                            <label for="c3">
                              <span></span>
                            </label>
                            <small>Yes, I understand and agree to the workwise Terms & Conditions.</small>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12 no-pdd">
                        <button type="submit" value="submit">Get Started</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footy-sec">
      <div class="container">
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
import api from '@/api'
import notifier from '@/notifier'
import { mapActions } from 'vuex'

export default {
  data: () => ({
    userLogging: {
      email: null,
      password: null
    }
  }),
  methods: {
    ...mapActions('user', [
      'addUser'
    ]),
    signIn (event) {
      api.authenticate(this.userLogging)
        .then(result => {
          this.addUser(result)
          this.$router.push('/')
        })
        .catch(() => notifier.error('Erro ao acessar a conta.', 'Erro'))

      event.preventDefault()
    }
  }
}
</script>

<style scoped>
body {
  background: #e75348 !important
}
</style>
