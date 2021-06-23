
import {createStore } from 'vuex'
import getters from './getters'


const modulesFiles = import.meta.glob('./modules/**/\.js$/')
console.log(modulesFiles)

// const modules = modulesFiles.keys().reduce((modules, modulePath) => {

//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})
const modules = Object
  .keys(modulesFiles)
  .reduce((pre, k) => [...pre, ...routesMod[k].default], []);


const store = createStore ({
  modules,
  getters
})

export default store