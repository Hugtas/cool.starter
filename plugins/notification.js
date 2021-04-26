// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
// NOTE not working in this version must implement the notification dealer
import notifications from "~/configs/messages";

export default (context, inject) => {
    inject('notification', {
        build: (type, content) => {
            return {
                type: type,
                content: content
            }
        },
        messages: {
            ...notifications
        },
        types: {
            success: "success",
            info: "info",
            warning: "warning",
            danger: "danger",
        }
    })
}