<template>
  <div>
    <div class="image-container" v-for="image in uploadedFiles" :key="image">
      <img :src="image" alt="">
    </div>

    <div class="image-container image-container-fake" v-if="saving && uploadedFiles.length < (limitFiles - 2)">
      <Loader :loading="true"></Loader>
    </div>

    <div class="dropbox" v-if="uploadedFiles.length < limitFiles">

      <input type="file" id="file" multiple :name="uploadFieldName" :disabled="saving" @change="filesChange($event.target.name, $event.target.files)" class="input-file">
      <div class="center">
        <i class="la la-image"></i>
        <p>Mais {{ limitFiles - uploadedFiles.length }} fotos</p>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '@/api'
  import notifier from '@/notifier'
  import Loader from '@/components/Template/Loader'

  export default {
    data: () => ({
      saving: false,
      uploadedFiles: [],
      uploadFieldName: 'images[]',
      limitFiles: 10,
      fileType: [
        'image/jpeg',
        'image/jpg',
        'image/gif',
        'image/png'
      ],
      limitFileSize: 15
    }),
    mounted () {
      this.reset()
    },
    methods: {
      reset () {
        const input = document.getElementById('file')
        if (input) {
          input.value = ''
        }
      },
      validateFile (file) {
        if (this.fileType.indexOf(file.type) === -1) {
          notifier.error('Extensão do arquivo selecionado inválida', 'Erro')
          return false
        }

        if ((file.size / 1048576) > this.limitFileSize) {
          notifier.error(`Tamanho do arquivo não deve ultrapassar os ${this.limitFileSize}MB.`, 'Erro')
          return false
        }

        return true
      },
      save (formData) {
        this.saving = true
        api.uploadImage(formData)
          .then(user => {
            return new Promise(resolve => setTimeout(() => resolve(user), 100))
          })
          .then(result => {
            result.urls.map(url => {
              console.log(url)
              this.uploadedFiles.push(url)
            })
          })
          .catch(() => {})
          .then(() => {
            this.reset()
            this.saving = false
          })
      },
      filesChange (fieldName, fileList) {
        const formData = new FormData()

        if (!fileList.length) {
          notifier.error('Nenhum arquivo selecionado.', 'Erro')
          return
        }

        Array
          .from(Array(fileList.length).keys())
          .map(x => {
            if (this.validateFile(fileList[x])) {
              formData.append(fieldName, fileList[x], fileList[x].name)
            }
          })

        this.save(formData)
      }
    },
    components: {
      Loader
    }
  }
</script>

<style lang="sass" scoped>
  .image-container
    width: 100px
    height: 100px
    margin-right: 5px
    margin-bottom: 5px
    display: inline-block
    vertical-align: top
    position: relative

    img
      width: 100%
      height: 100px

    &-fake
      border: 2px solid #f00

  .dropbox
    border: 2px dashed #d2cdcd
    background: #f8f8f8
    color: dimgray
    padding: 23px 10px
    width: 100px
    height: 100px
    position: relative
    cursor: pointer
    margin-bottom: 20px
    display: inline-block
    vertical-align: top

    .input-file
      opacity: 0
      width: 100%
      height: 100px
      position: absolute
      cursor: pointer
      z-index: 1
      margin: -23px -10px

    .center
      text-align: center

      i
        font-size: 30px

    .icon-cloud-upload
      font-size: 20px
      margin-bottom: 10px

    .icon-cross
      font-size: 8px
      cursor: pointer
      margin-top: 3px
      margin-left: 3px
</style>
