// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
export const state = () => ({
    tooltipIsActive: false,
    tooltipXTranslation: 0,
    tooltipYTranslation: 0,
    tooltipContent: 'Hello world',
    tooltipPosition: 'RIGHT',
});

export const mutations = {

    SET_TOOLTIP_IS_ACTIVE: (state) => {
        state.tooltipIsActive = true;
    },
    SET_TOOLTIP_POSITION: (state, position) => {
        state.tooltipPosition = position;
    },
    DISMISS_TOOLTIP: (state) => {
        state.tooltipIsActive = false;
    },
    SET_TOOLTIP_CONTENT: (state, content) => {
        state.tooltipContent = content;
    },
    SET_TOOLTIP_Y_TRANSLATION: (state, yValue) => {
        state.tooltipYTranslation = yValue;
    },
    SET_TOOLTIP_X_TRANSLATION: (state, xValue) => {
        state.tooltipXTranslation = xValue;
    },
};

export const actions = {
    toggleTooltipAndSetContent({ commit }, payload) {
        commit("SET_TOOLTIP_CONTENT", payload.content);
        commit("SET_TOOLTIP_POSITION", payload.position);
        commit("SET_TOOLTIP_IS_ACTIVE");
    },
    dismissTooltip({ commit }, payload) {
        commit("DISMISS_TOOLTIP");
    },
    mooveTooltip({ commit }, payload) {
        commit("SET_TOOLTIP_X_TRANSLATION", payload.mouseX);
        commit("SET_TOOLTIP_Y_TRANSLATION", payload.mouseY);
    },
};