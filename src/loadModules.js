import router from './router'

const loadModule = ({ module }) => {
  if (module.router) {
    module.router(router)
  }
}

export const loadModules = (modules) => {
  Object.keys(modules).forEach((moduleKey) => {
    const module = modules[moduleKey]
    loadModule({ modulename: moduleKey, module })
  })
}
