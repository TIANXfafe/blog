import React, { useState } from 'react';
import { captcha } from "../../service";
import styles from './index.module.less';

const Index = () => {
  const [captchaImg, setCaptchaImg] = useState("");
  const handleRegister = async () => {
    console.log("阻止跳转");
    const res = await captcha.getFormulaCaptcha();
    console.log('res', res)
    setCaptchaImg(res.data.imageBase64)
  }

  return (
    <div className={styles.container}>
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
