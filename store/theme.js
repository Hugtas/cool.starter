// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
export const state = () => ({
    dark: false
});

export const mutations = {
    TOGGLE_DARK: state => {
        state.dark = !state.dark;
    }
}

export const actions = {
    toggleDark({ commit }) {
        commit("TOGGLE_DARK");
        return;
    }
}