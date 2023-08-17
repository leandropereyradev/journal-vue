export default {
  path: "/daybook",
  name: "daybook",
  component: () =>
    import(
      /* webpackChunkName: "Daybook Layout" */ "@/modules/daybook/layouts/DaybookLayout.vue"
    ),
  children: [],
};
