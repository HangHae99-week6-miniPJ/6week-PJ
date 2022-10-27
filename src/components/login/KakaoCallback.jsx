import React, { Component } from "react";
import axios from 'axios';

class KakaoCallback extends Component{

    constructor(props) {
        super(props);
        this.callback();
    }

    async callback() {
        console.log("IM CALLED")
        let code = new URL(window.location.href).searchParams.get("code");

            try {
            console.log("TRY")
            const { data } = await axios({
                method: "GET",
                url: 'http://' + process.env.REACT_APP_REDIRECT_BACK + code
            });
            
            const { accessToken, refreshToken } = data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);

            window.location.href = "/board-list";
            return;
        } catch(error) {
            window.location.href = "/";
            return;
        }
    }

    render() {
        return(
            <div>
                HI
            </div>
        );
    }
}


export default KakaoCallback;