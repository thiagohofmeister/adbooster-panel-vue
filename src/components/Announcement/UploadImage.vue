<template>
  <div>
    <Container :drop="onDrop" @drop="onDrop" orientation="horizontal">
      <Draggable v-for="image in uploadedFiles" :key="image">
        <div class="image-container">
          <img :src="image" alt="">
        </div>
      </Draggable>
    </Container>

    <div class="image-container image-container-fake" v-if="saving && uploadedFiles.length < (limitFiles - 2)">
      <Loader :loading="true"></Loader>
    </div>

    <div class="dropbox" v-if="uploadedFiles.length < limitFiles" v-bind:class="{ isEmpty: !uploadedFiles.length }">

      <input type="file" id="file" multiple :name="uploadFieldName" :disabled="saving" @change="filesChange($event.target.name, $event.target.files)" class="input-file">
      <div class="center">
        <i class="la la-image"></i>
        <p>Mais {{ limitFiles - uploadedFiles.length }} fotos</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { Container, Draggable } from 'vue-smooth-dnd'
  import api from '@/api'
  import notifier from '@/notifier'
  import Loader from '@/components/Template/Loader'
  import { applyDrag } from '@/utils/helpers'

  export default {
    data: () => ({
      saving: false,
      uploadedFiles: [],
      uploadFieldName: 'images[]',
      limitFiles: 5,
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
      onDrop (dropResult) {
        this.uploadedFiles = applyDrag(this.uploadedFiles, dropResult)
      },
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
    watch: {
      uploadedFiles (value) {
        this.$emit('change', value)
      }
    },
    components: {
      Loader,
      Container,
      Draggable
    }
  }
</script>

<style lang="sass" scoped>
  .teste
    border: 1px solid #f00
    background: #F00

  .smooth-dnd-container.horizontal
    display: inline-block
    margin-bottom: 10px

  .smooth-dnd-draggable-wrapper
    &:not(:first-child)
      margin-left: 5px

  .image-container
    width: 95px
    height: 95px
    margin-bottom: 5px
    display: inline-block
    vertical-align: top
    position: relative

    img
      width: 100%
      height: 100%

    &-fake
      border: 2px solid #f00

  .dropbox
    border: 2px dashed #d2cdcd
    background: #f8f8f8
    color: dimgray
    padding: 23px 10px
    width: 95px
    height: 95px
    position: relative
    cursor: pointer
    margin-bottom: 20px
    display: inline-block
    vertical-align: top

    &:not(.isEmpty)
      margin-left: 5px

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
