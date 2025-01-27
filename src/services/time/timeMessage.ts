import moment from "moment";

export const timeMessage = (time: number) => {
    if (moment.unix(time).isSame(moment().clone().subtract(1, 'day'), 'day')) {
        return 'Вчера';
    } else {
        return moment.unix(time).format('DD-MM-YYYY HH:mm');
    }
}