import productionsApi from '../api/productions'
import { sortProductions, sortByName } from '../../lib/sorting'
import {
  LOAD_PRODUCTIONS_START,
  LOAD_PRODUCTIONS_ERROR,
  LOAD_PRODUCTIONS_END,

  LOAD_OPEN_PRODUCTIONS_START,
  LOAD_OPEN_PRODUCTIONS_ERROR,
  LOAD_OPEN_PRODUCTIONS_END,

  LOAD_PRODUCTION_STATUS_START,
  LOAD_PRODUCTION_STATUS_ERROR,
  LOAD_PRODUCTION_STATUS_END,

  EDIT_PRODUCTION_START,
  EDIT_PRODUCTION_ERROR,
  EDIT_PRODUCTION_END,

  DELETE_PRODUCTION_START,
  DELETE_PRODUCTION_ERROR,
  DELETE_PRODUCTION_END,

  RESET_ALL
} from '../mutation-types'

const state = {
  productions: [],
  openProductions: [],
  productionStatus: [],

  isProductionsLoading: false,
  isProductionsLoadingError: false,

  editProduction: {
    isLoading: false,
    isError: false
  },

  deleteProduction: {
    isLoading: false,
    isError: false
  }
}

const getters = {
  productions: state => state.productions,
  openProductions: state => state.openProductions,
  productionStatus: state => state.productionStatus,

  isProductionsLoading: state => state.isProductionsLoading,
  isProductionsLoadingError: state => state.isProductionsLoadingError,

  editProduction: state => state.editProduction,
  deleteProduction: state => state.deleteProduction,

  getProduction: (state, getters) => (id) => {
    return state.productions.find(
      (production) => production.id === id
    )
  },
  getProductionStatus: (state, getters) => (id) => {
    return state.productionStatus.find(
      (productionStatus) => productionStatus.id === id
    )
  },
  getProductionStatusOptions: state => state.productionStatus.map(
    (status) => { return { label: status.name, value: status.id } }
  ),
  getOpenProductionOptions: state => state.openProductions.map(
    (production) => { return { label: production.name, value: production.id } }
  )
}

const actions = {

  loadProductionStatus ({ commit, state }, callback) {
    commit(LOAD_PRODUCTION_STATUS_START)
    productionsApi.getProductionStatus((err, productionStatus) => {
      if (err) commit(LOAD_PRODUCTION_STATUS_ERROR)
      else commit(LOAD_PRODUCTION_STATUS_END, productionStatus)
      if (callback) callback(err)
    })
  },

  loadOpenProductions ({ commit, state }, callback) {
    commit(LOAD_OPEN_PRODUCTIONS_START)
    productionsApi.getOpenProductions((err, productions) => {
      if (err) commit(LOAD_OPEN_PRODUCTIONS_ERROR)
      else commit(LOAD_OPEN_PRODUCTIONS_END, productions)
      if (callback) callback(err)
    })
  },

  loadProductions ({ commit, state }, callback) {
    commit(LOAD_PRODUCTIONS_START)
    productionsApi.getProductions((err, productions) => {
      if (err) commit(LOAD_PRODUCTIONS_ERROR)
      else commit(LOAD_PRODUCTIONS_END, productions)
      if (callback) callback(err)
    })
  },

  newProduction ({ commit, state }, payload) {
    commit(EDIT_PRODUCTION_START, payload.data)
    productionsApi.newProduction(payload.data, (err, production) => {
      if (err) {
        commit(EDIT_PRODUCTION_ERROR)
      } else {
        commit(EDIT_PRODUCTION_END, production)
      }
      if (payload.callback) payload.callback(err)
    })
  },

  editProduction ({ commit, state }, payload) {
    commit(EDIT_PRODUCTION_START)
    productionsApi.updateProduction(payload.data, (err, production) => {
      if (err) {
        commit(EDIT_PRODUCTION_ERROR)
      } else {
        commit(EDIT_PRODUCTION_END, production)
      }
      if (payload.callback) payload.callback(err)
    })
  },

  deleteProduction ({ commit, state }, payload) {
    commit(DELETE_PRODUCTION_START)
    const production = payload.production
    productionsApi.deleteProduction(production, (err) => {
      if (err) {
        commit(DELETE_PRODUCTION_ERROR)
      } else {
        commit(DELETE_PRODUCTION_END, production)
      }
      if (payload.callback) payload.callback(err)
    })
  }
}

const mutations = {
  [LOAD_PRODUCTIONS_START] (state) {
    state.isProductionsLoading = true
    state.isProductionsLoadingError = false
  },

  [LOAD_PRODUCTIONS_ERROR] (state) {
    state.isProductionsLoading = false
    state.isProductionsLoadingError = true
  },

  [LOAD_PRODUCTIONS_END] (state, productions) {
    state.isProductionsLoading = false
    state.isProductionsLoadingError = false
    state.productions = productions
    state.productions = sortProductions(state.productions)
  },

  [LOAD_OPEN_PRODUCTIONS_START] (state) {
    state.openProductions = []
  },
  [LOAD_OPEN_PRODUCTIONS_ERROR] (state) {
  },
  [LOAD_OPEN_PRODUCTIONS_END] (state, productions) {
    state.openProductions = sortByName(productions)
  },

  [LOAD_PRODUCTION_STATUS_START] (state) {
    state.productionStatus = []
  },
  [LOAD_PRODUCTION_STATUS_ERROR] (state) {
  },
  [LOAD_PRODUCTION_STATUS_END] (state, productionStatus) {
    state.productionStatus = productionStatus
  },

  [EDIT_PRODUCTION_START] (state, data) {
    state.editProduction.isLoading = true
    state.editProduction.isError = false
  },

  [EDIT_PRODUCTION_ERROR] (state) {
    state.editProduction.isLoading = false
    state.editProduction.isError = true
  },

  [EDIT_PRODUCTION_END] (state, newProduction) {
    const production = getters.getProduction(state)(newProduction.id)
    const productionStatus = getters.getProductionStatus(state)(
      newProduction.project_status_id
    )
    newProduction.project_status_name = productionStatus.name

    if (production) {
      Object.assign(production, newProduction)
    } else {
      state.productions.push(newProduction)
      state.openProductions.push(newProduction)
      state.productions = sortProductions(state.productions)
      state.openProductions = sortByName(state.openProductions)
    }
    state.editProduction = {
      isLoading: false,
      isError: false
    }
  },

  [DELETE_PRODUCTION_START] (state) {
    state.deleteProduction = {
      isLoading: true,
      isError: false
    }
  },
  [DELETE_PRODUCTION_ERROR] (state) {
    state.deleteProduction = {
      isLoading: false,
      isError: true
    }
  },
  [DELETE_PRODUCTION_END] (state, productionToDelete) {
    const productionToDeleteIndex = state.productions.findIndex(
      (production) => production.id === productionToDelete.id
    )
    state.productions.splice(productionToDeleteIndex, 1)

    state.deleteProduction = {
      isLoading: false,
      isError: false
    }
  },

  [RESET_ALL] (state) {
    state.productions = []
    state.productionStatus = []
    state.isProductionsLoading = false
    state.isProductionsLoadingError = false

    state.editProduction = {
      isLoading: false,
      isError: false
    }

    state.deleteProduction = {
      isLoading: false,
      isError: false
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
