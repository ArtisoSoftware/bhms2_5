const routes = [
  {
    path: "/",
    component: () => import("pages/Loading.vue"),
  },
  {
    path: "/mapview",
    component: () => import("pages/MapView.vue"),
  },
  {
    path: "/listview",
    component: () => import("pages/ListView.vue"),
  },
  {
    path: "/trend",
    component: () => import("pages/Trend.vue"),
  },
  {
    path: "/report",
    component: () => import("pages/Report.vue"),
  },
  {
    path: "/document",
    component: () => import("pages/Document.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
