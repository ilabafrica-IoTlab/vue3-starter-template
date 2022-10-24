const CartModule = () => import('./CartRootModule.vue')
const HomeView = () => import('./views/CartHomeView.vue')

// add routes on this object
// This will be loaded in the main.js file

const moduleRoute = {
  path: '/cart',
  component: CartModule,
  children: [
    {
      path: 'hello',
      component: HomeView,
      meta: {
        title: 'hello',
      },
    },
  ],
}

export default (router) => {
  router.addRoute(moduleRoute)
}
