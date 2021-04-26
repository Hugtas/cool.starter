// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
export default (context, inject) => {
    inject('dateparser', {
        formatFromTimestamp: (unixTimestamp) => {
            return context.$dayjs(unixTimestamp).format('DD/MM/YYYY');
        },
        formatFromTimestampToBirthdate: (unixTimestamp) => {
            return context.$dayjs(unixTimestamp).format('YYYY-MM-DD');
        },
        formatFromBirthdateToTimestamp: (birthDate) => {
            return context.$dayjs(birthDate).format('YYYY-MM-DDTHH:mm:ssZ[Z]');
        },
    })
}