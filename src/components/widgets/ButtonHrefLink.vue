<template>
  <a class="button" :title="title" :href="path" :target="target">
    <plus-icon class="icon is-small" v-if="icon === 'plus'" />
    <download-icon class="icon is-small" v-if="icon === 'download'" />
    <upload-icon class="icon is-small" v-if="icon === 'upload'" />
    <list-icon class="icon is-small" v-if="icon === 'list'" />
    <span class="text is-hidden-touch" v-if="text">
      {{ text }}
    </span>
  </a>
</template>

<script>
import { DownloadIcon, ListIcon, PlusIcon, UploadIcon } from 'vue-feather-icons'

export default {
  name: 'button-href-link',
  components: {
    DownloadIcon,
    ListIcon,
    PlusIcon,
    UploadIcon
  },
  props: {
    text: {
      default: '',
      type: String
    },
    path: {
      default: '',
      type: String
    },
    icon: {
      default: '',
      type: String
    },
    title: {
      default: '',
      type: String
    },
    styleclass: {
      default: '',
      type: String
    },
    target: {
      default: '_self',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.button .icon.is-small {
  margin: 0;
}
</style>
