<template>
  <div class="data-list">
    <div class="datatable-wrapper" ref="body" v-scroll="onBodyScroll">
      <table class="datatable">
        <thead class="datatable-head">
          <tr>
            <th scope="col" class="name datatable-row-header">
              {{ $t('asset_types.fields.name') }}
            </th>
            <th scope="col" class="validation">{{ $t('main.all') }}</th>
            <th
              scope="col"
              class="validation validation-cell"
              :key="columnId"
              v-for="columnId in validationColumns"
              v-if="!isLoading"
            >
              <div
                class="flexrow validation-content"
                :style="getValidationStyle(columnId)"
              >
                <router-link
                  class="flexrow-item"
                  :to="taskTypePath(columnId)"
                  v-if="!isCurrentUserClient"
                >
                  {{ taskTypeMap.get(columnId).name }}
                </router-link>
                <span class="flexrow-item" v-else>
                  {{ taskTypeMap.get(columnId).name }}
                </span>
              </div>
            </th>
            <th scope="col" class="actions"></th>
          </tr>
        </thead>
        <tbody class="datatable-body" v-if="!isLoading">
          <tr class="all-line datatable-row" v-if="showAll && !isEmptyList">
            <th scope="row" class="name datatable-row-header">
              {{ $t('asset_types.all_asset_types') }}
            </th>

            <stats-cell
              :colors="chartColors('all', 'all')"
              :data="chartData('all', 'all')"
              :displayMode="displayMode"
            />

            <stats-cell
              :style="getValidationStyle(columnId)"
              :key="'all-' + columnId"
              :colors="chartColors('all', columnId)"
              :data="chartData('all', columnId)"
              :displayMode="displayMode"
              v-for="columnId in validationColumns"
            />

            <td class="actions"></td>
          </tr>

          <tr class="datatable-row" :key="entry.id" v-for="entry in entries">
            <td scope="row" class="name datatable-row-header">
              {{ entry.name }}
            </td>

            <stats-cell
              :colors="chartColors(entry.id, 'all')"
              :data="chartData(entry.id, 'all')"
              :displayMode="displayMode"
              v-if="isStats(entry.id, 'all')"
            />
            <td v-else></td>

            <stats-cell
              :key="entry.id + columnId"
              :style="getValidationStyle(columnId)"
              :colors="chartColors(entry.id, columnId)"
              :data="chartData(entry.id, columnId)"
              :displayMode="displayMode"
              v-if="isStats(entry.id, columnId)"
              v-for="columnId in validationColumns"
            />
            <td :style="getValidationStyle(columnId)" v-else></td>

            <td class="actions"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <table-info :is-loading="isLoading" :is-error="isError" />

    <div
      class="has-text-centered"
      v-if="isEmptyList && !isCurrentUserClient && !isLoading"
    >
      <p class="info">
        <img src="../../assets/illustrations/empty_asset.png" />
      </p>
      <p class="info">{{ $t('assets.empty_list') }}</p>
      <button-link
        class="level-item big-button"
        :text="$t('assets.new_asset')"
        :path="newAssetPath"
      />
    </div>
    <div
      class="has-text-centered"
      v-if="isEmptyList && isCurrentUserClient && !isLoading"
    >
      <p class="info">
        <img src="../../assets/illustrations/empty_asset.png" />
      </p>
      <p class="info">{{ $t('assets.empty_list_client') }}</p>
    </div>

    <p
      class="has-text-centered nb-asset-types"
      v-if="!isEmptyList && !isLoading"
    >
      {{ displayedAssetTypesLength }}
      {{ $tc('asset_types.number', displayedAssetTypesLength) }}
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { entityListMixin } from '@/components/mixins/entity_list'
import { getChartColors, getChartData } from '@/lib/stats'
import ButtonLink from '@/components/widgets/ButtonLink'
import StatsCell from '@/components/cells/StatsCell'
import TableInfo from '@/components/widgets/TableInfo'

export default {
  name: 'production-asset-type-list',
  mixins: [entityListMixin],

  props: {
    displayMode: {
      type: String,
      default: 'pie'
    },
    entries: {
      type: Array,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    },
    assetTypeStats: {
      type: Object,
      default: () => {}
    },
    showAll: {
      type: Boolean,
      default: false
    },
    validationColumns: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      busy: false,
      lastSelection: null
    }
  },

  components: {
    ButtonLink,
    StatsCell,
    TableInfo
  },

  computed: {
    ...mapGetters([
      'assetTypeSearchText',
      'currentEpisode',
      'currentProduction',
      'displayedAssetTypesLength',
      'isCurrentUserClient',
      'isTVShow',
      'taskTypeMap'
    ]),

    isEmptyList() {
      return (
        this.entries &&
        this.entries.length === 0 &&
        !this.isLoading &&
        !this.isError &&
        (!this.assetTypeSearchText || this.assetTypeSearchText.length === 0)
      )
    },

    newAssetPath() {
      const route = {
        name: 'new-asset',
        params: {
          production_id: this.currentProduction.id
        }
      }

      if (this.isTVShow && this.currentEpisode) {
        route.name = 'episode-new-asset'
        route.params.episode_id = this.currentEpisode.id
      }

      return route
    }
  },

  methods: {
    ...mapActions([]),

    chartColors(entryId, columnId) {
      return getChartColors(this.assetTypeStats, entryId, columnId)
    },

    chartData(entryId, columnId) {
      return getChartData(this.assetTypeStats, entryId, columnId)
    },

    isStats(entryId, columnId) {
      return (
        this.assetTypeStats[entryId] && this.assetTypeStats[entryId][columnId]
      )
    },

    onHeaderScroll(event, position) {
      this.$refs.tableWrapper.scrollLeft = position.scrollLeft
    },

    onBodyScroll(event, position) {
      this.$emit('scroll', position.scrollTop)
    },

    setScrollPosition(scrollPosition) {
      if (this.$refs.body) {
        this.$refs.body.scrollTop = scrollPosition
      }
    },

    taskTypePath(taskTypeId) {
      const route = {
        name: 'task-type',
        params: {
          production_id: this.currentProduction.id,
          task_type_id: taskTypeId,
          type: 'assets'
        }
      }

      if (this.isTVShow && this.currentEpisode) {
        route.name = 'episode-task-type'
        route.params.episode_id = this.currentEpisode.id
      }

      return route
    }
  }
}
</script>

<style lang="scss" scoped>
.datatable-body tr:first-child th,
.datatable-body tr:first-child td {
  border-top: 0;
}
.name {
  min-width: 200px;
  width: 200px;
  font-weight: bold;
}

.name a {
  color: inherit;
}

td.name {
  font-size: 1.2em;
}

.validation {
  min-width: 170px;
  max-width: 170px;
  width: 170px;
  word-wrap: break-word;
}

.actions {
  min-width: 100px;
}

th.actions {
  padding: 0.4em;
}

.info img {
  max-width: 80vh;
}
</style>
