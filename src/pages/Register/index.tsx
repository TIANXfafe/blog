import React, { useState } from 'react';
import { captcha } from "../../service";

const Index = () => {
  const [captchaImg, setCaptchaImg] = useState("");
  const handleRegister = async () => {
    console.log("阻止跳转");
    const res = await captcha.getCaptchaImage();
    console.log('res', res)
    setCaptchaImg(res.data.imageBase64)
  }

  return (
    <div>
      <form action="">
        <input type="text" placeholder="用户名"/>
        <input type="password" placeholder="密码" />
      </form>
      <img src={captchaImg} alt=""/>
      <button onClick={handleRegister}>提交</button>
    </div>
  );
};

export default Index;