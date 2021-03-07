
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'pages', component: () => import('pages/Index.vue') },
      { path: 'pages/todont', component: () => import('pages/TodontPage.vue') },
      { path: 'pages/horizontal-todonts', component: () => import('pages/HorizontalTodontsPage.vue') },
      { path: 'pages/languages', component: () => import('pages/LanguagesPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
