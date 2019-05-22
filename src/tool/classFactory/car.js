import Axios from '@/tool/axios.js';

export default class Car {
    constructor(options) {
        options = options || {};
        for (let attr in options) {
            this[attr] = options[attr];
        }
    }

    jsTicket(){
        return Axios({
            url: "/api/wx/jsticket?url=" + encodeURIComponent(location.href),
            method: 'get',
        }).then(
            res => {
                res.data.data = res.data.data || [];
                let list = res.data.data;
                return Promise.resolve(res);
            },
            err => Promise.reject(err)
        );
    }
    getMember(type) {
        return Axios({
            url: `/api/member`,
            method: 'get',
            params: {
                type: type
            }
        }).then(
            res => {
                res.data.data = res.data.data || [];
                let list = res.data.data;
                return Promise.resolve(res);
            },
            err => Promise.reject(err)
        );
    }
    postChat(data) {
        return Axios({
            url: `/api/chat `,
            method: 'post',
            data: data
        }).then(
            res => {
                res.data.data = res.data.data || [];
                let list = res.data.data;
                return Promise.resolve(res);
            },
            err => Promise.reject(err)
        );
    }
    getChat(data) {
        return Axios({
            url: `/api/chat `,
            method: 'get',
            data: data
        }).then(
            res => {
                res.data.data = res.data.data || [];
                let list = res.data.data;
                return Promise.resolve(res);
            },
            err => Promise.reject(err)
        );
    }
    postMember(data) {
        return Axios({
            url: `/api/member`,
            method: 'post',
            data: data
        }).then(
            res => {
                res.data.data = res.data.data || [];
                let list = res.data.data;
                return Promise.resolve(res);
            },
            err => Promise.reject(err)
        );
    }
    updateUserInfo(code) {
        return Axios({
            url: `/api/wx/mp/updateUserInfo`,
            method: 'post',
            isFormData:true,
            data: {
                code:code
            }
        }).then(
            res => {
                res.data.data = res.data.data || [];
                let list = res.data.data;
                return Promise.resolve(res);
            },
            err => Promise.reject(err)
        );
    }

}


