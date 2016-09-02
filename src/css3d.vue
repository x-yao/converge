<template>
  <div id="app">
    <div class="btn opennew" v-for="item in list" @click="opennew(item.path)">{{item.name}}</div>
  </div>
</template>

<script>
import Webview from './components/webview'
import {ipcRenderer,remote} from 'electron'

export default {
  data (){
    return {
      basePath:'/css3dtutorial',
      list:[{
        name:'base',
        path:'/base.html'
      },
      {
        name:'perspective',
        path:'/perspective.html'
      },
      {
        name:'tong',
        path:'/tong.html'
      }]
    }
  },
  methods:{
    opennew (url){
      ipcRenderer.send('open-new-url',this.basePath+url);
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}
</style>
