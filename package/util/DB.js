
const DB = (function() {
    let store = window.localStorage
    let session = window.sessionStorage
    return {
        setStore: function(key, val) {
            store.setItem(key, val)
        },
        getStore: function(key) {
            return store.getItem(key)
        },
        delStore: function(key) {
            store.removeItem(key)
        },
        clearStore: function() {
            return store.clear()
        },

        setSession: function(key, value) {
            session.setItem(key, value)
        },
        getSession: function(key) {
            if (typeof key === 'number') {
                return session.key(key)
            }
            return session.getItem(key)
        },
        delSession: function(key) {
            session.removeItem(key)
        },
        clearSession: function() {
            session.clear()
        }
    }
})();


export default DB;