'use strict';

define([
], function(
) {

    var DefaultLayout = {
        view: function(vnode) {
            return [
                vnode.children
            ]
        }
    }

    var LayoutConstructor = function(Component) {
        return {
            render: function() {
                return m(DefaultLayout, m(Component))
            }
        }
    }

    return LayoutConstructor;

});
