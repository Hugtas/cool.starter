// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
export default (context, inject) => {
    inject('dt', () => context.store.state.theme.dark ? 'dt' : '');
}