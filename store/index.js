import axios from "axios";

export const state = () => ({
    monsters: "monsters"
})

export const mutations = {
    init(state, monsters) {
        state.monsters = monsters
    },
}

export const actions = {
    async nuxtServerInit({commit}) {
        const monsters = await axios.get("http://dnd5eapi.co/api/monsters/").then(({data}) => data)
        commit("init", monsters)
    },
    async apiPing() {
        const ping = await axios.get("/ping")
        console.log(ping)
    }
}