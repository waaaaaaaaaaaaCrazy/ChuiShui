import {defineStore} from "pinia";
import {ref} from "vue";
import {getCurrentUser} from "../api/user.js";

export const useLoginUserStore = defineStore('loginUser', () => {
    const loginUser = ref({
        userName: '未登录',
    });

    //远程获取用户登录信息
    async function fetchLoginUser() {
        const res = await getCurrentUser();
        //code确保返回到，data确保有值
        if (res.data.code === 0 && res.data.data) {
            loginUser.value = res.data.data;
        }else {
            setTimeout(() => {
                loginUser.value = {userName: '牛魔',id: 1};
            }, 2000);
        }
    }

    //单独设置信息
    function setLoginUser(newLoginUser) {
        loginUser.value = newLoginUser;
    }

    return { loginUser, fetchLoginUser, setLoginUser }
})