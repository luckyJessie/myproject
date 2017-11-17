<template lang="pug">
  input(type="file" @change='changeFile' ref="fileInput")
</template>
<script>
 // import crypto from 'crypto'
  export default {
    data () {
      return {

      }
    },
    methods: {
      changeFile () {
        const crypto = require('crypto')
        const hash = crypto.createHash('md5')
        hash.update('Hello, world!')
        hash.update('Hello, nodejs!')
        console.log(hash.digest('hex'))

        console.log(this.$refs.fileInput.value)
        console.log(hash.digest(this.$refs.fileInput.value))
      }
    }
  }
</script>
