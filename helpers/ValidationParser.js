// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
// Inspired by the work of Marina Mosti
// https://github.com/marina-mosti
import * as Validators from 'vuelidate/lib/validators'

export const validationRules = schema => {
    return Object.keys(schema).reduce((rules, elementName) => {
        const item = schema[elementName]
        if (!item.hasOwnProperty('validations')) return rules

        const validations = {}
        for (let rule in item.validations) {
            const params = item.validations[rule].params

            if (params) {
                validations[rule] = Validators[rule](params)
            } else {
                validations[rule] = Validators[rule]
            }
        }

        rules[elementName] = validations
        return rules
    }, {})
}