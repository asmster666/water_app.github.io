const get_cur_amount = (data) => ({type: 'CUR_AMOUNT', payload: data});
const get_type = (data) => ({type: 'TYPE', payload: data});
const get_cur_daily_amount = (data) => ({type: 'CUR_DAILY_AMOUNT', payload: data});
const get_cookie_data = (data) => ({type: 'COOKIE_DATA', payload: data})

export {
    get_cur_amount,
    get_type,
    get_cur_daily_amount, 
    get_cookie_data,
};