export const navbarModule = {
  state: () => ({
    links: [
      {
        id: 0,
        route: '/',
        page: 'about me',
      },
      {
        id: 1,
        route: '/projects',
        page: 'projects',
      },
      {
        id: 2,
        route: '/skills',
        page: 'skills',
      }
    ],
    currentNavbarPage: undefined
  }),
  getters: {
    navbarLinks: state => {
      return state.links;
    },
    currentPage: state => {
      return state.currentNavbarPage;
    }
  },
  mutations: {
    setNavbarPage (state, id) {
      state.id = id;
    }
  },
  actions: {}
};
