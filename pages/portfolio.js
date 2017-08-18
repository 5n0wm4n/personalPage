'use strict'

define(
 [

 ],
 function(

 ) {


    return {

        oncreate: function(vnode) {
            
           document.body.className = 'portfolio';
        },

        view: function(vnode) {
            return [

                m("div.container", {align:"center", style:"padding-top:50px"},
                    m("div.row",
                        m("div.col-xs-3",
                            m("div", {class:"hovereffect"},
                                m("a", {href:"/profile", oncreate: m.route.link},
                                    m("img", {src:"img/mtn.jpg", class:"img-thumbnail"},
                                        m("div.overlay"),
                                    )
                                ),
                                m("h2", "Profile")
                            )
                        ),
                        m("div.col-xs-3",
                            m("div", {class:"hovereffect"},
                                m("a", {href:"/resume", oncreate: m.route.link},
                                    m("img", {src:"img/snow.jpg", class:"img-thumbnail"},
                                        m("div.overlay"),
                                    )
                                ),
                                m("h2", "Resume")
                            )
                        ),
                        m("div.col-xs-3",
                            m("div", {class:"hovereffect"},
                                m("a", {href:"/home", oncreate: m.route.link},
                                    m("img", {src:"img/home.jpg", class:"img-thumbnail"},
                                        m("div.overlay"),
                                    )
                                ),
                                m("h2", "Home")
                            )
                        ),
                        m("div.col-xs-3",
                            m("div", {class:"hovereffect"},
                                m("a", {href:"/contact", oncreate: m.route.link},
                                    m("img", {src:"img/snow2.jpg", class:"img-thumbnail"},
                                        m("div.overlay"),
                                    )
                                ),
                                m("h2", "Contact")
                            )
                        )
                    )
                ),
                m("p", {style:"color: white; position: fixed; bottom: 0; left: 40%;"}, "Luke Gallagher: Social Links here")
            ];
        }
        
    }
})