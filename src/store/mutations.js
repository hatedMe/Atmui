const mutations = {
    changeLoc(state,loc) {
        console.log( state,loc,'===' );
        state.pos = loc
    }
}

export default mutations;