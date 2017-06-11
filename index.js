// import Vue from 'vue'
// import App from './App'

/**
 * Create new global component
 */
Vue.component('app-user', {
  data: () => {
    return {
      users: [{
          name: 'ham',
          age: 24
        },
        {
          name: 'nozo',
          age: 26
        },
        {
          name: 'miya',
          age: 22
        },
      ]
    }
  },
  template: `<div>
                <div class="user" v-for="user in users">
                <p>Username: {{ user.name }}</p>
                </div>
              </div>`
})

/**
 * Instance object #app
 * Overall scope of app.
 */
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    hampton: 'Hampton Brewer',
    cssClass: '',
    clicks: 0,
    show: true,
    persons: [{
        name: 'ham',
        age: 24
      },
      {
        name: 'nozo',
        age: 26
      },
      {
        name: 'miya',
        age: 22
      },
    ]
  },
  methods: {
    changeTitle() {
      this.hampton = 'changed'
    },
    increment() {
      this.clicks++
    }
  },
  //set up a component locally~
  components: {
    'app-userz': {}
  },
  computed: {
    theTitle: () => {
      return this.message.toUpperCase()
    },
    counter() {
      return this.clicks * 2
    }
  },
  //otherway to use filtering
  filters: {
    lowercase: (value) => {
      return value.toLowerCase()
    }
  }
})

//creates filter function
Vue.filter('uppercase', (value) => {
  return value.toUpperCase()
})