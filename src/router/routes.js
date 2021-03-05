
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'pages', component: () => import('pages/Index.vue') },
      { path: 'pages/todo', component: () => import('pages/TodoPage.vue') },
      { path: 'pages/horizontal-todos', component: () => import('pages/HorizontalTodosPage.vue') },
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
