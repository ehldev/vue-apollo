import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* import VueApollo from 'vue-apollo'
Vue.use(VueApollo)

import ApolloClient from 'apollo-boost'
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory"; */

/* const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'https://rickandmortyapi.com/graphql'
}) */

/* const client = new ApolloClient({
  link: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache({
    addTypename: true
  })
});


const apolloProvider = new VueApollo({
  defaultClient: client,
}) */

import VueApollo from 'vue-apollo'
Vue.use(VueApollo)

import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'https://rickandmortyapi.com/graphql'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
