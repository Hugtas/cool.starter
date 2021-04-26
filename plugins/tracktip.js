// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
export default (context, inject) => {
    inject('tracktip', {
        positions: {
            LEFT: 'LEFT',
            RIGHT: 'RIGHT',
            TOP: 'TOP',
            BOTTOM: 'BOTTOM'
        },
        on: (content, position) => {
            return context.store.dispatch('layout/toggleTooltipAndSetContent', { content, position });
        },
        off: () => {
            return context.store.dispatch("layout/dismissTooltip");
        }
    });
}