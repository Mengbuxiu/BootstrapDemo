<template>
  <div class="hello">
    <h3>{{ title }}</h3>
    <label for="val"><i>TODO: </i>
      <input id="val" v-model="newItem" @keyup.exact.enter="addVal"/>
    </label>
    <ul class="ul">
      <li v-for="(item, index) in items" :key="index" v-bind:class="{finished: item.isFinished}">
        {{index}} -> {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: 'Welcome to Your Vue.js App',
      newItem: '',
      items: []
    }
  },
  methods: {
    addVal: function (val) {
      this.items.push({label: this.newItem, isFinished: false})
      this.newItem = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style: none;
  }
</style>
