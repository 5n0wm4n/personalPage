define([
    'layout',
    'pages/home',
    'pages/profile',
    'pages/resume',
    'pages/portfolio',
    'pages/contact'
], function (
    Layout,
    PageHome,
    PageProfile,
    PageResume,
    PagePortfolio,
    PageContact
) {

  return {
    init: function() {
      m.route(document.body, "/", {
        "/": Layout(PageHome),
        "/profile": Layout(PageProfile),
        "/resume": Layout(PageResume),
        "/portfolio": Layout(PagePortfolio),
        "/contact": Layout(PageContact),
      })
    }
  }
})
