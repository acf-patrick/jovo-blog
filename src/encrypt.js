const encrypt = (pwd) => {
  console.log(pwd);
  let ret = "";
  for (let car of pwd) ret += String.fromCharCode(car.charCodeAt(0) + 0xf);
  return ret;
};

export default encrypt;
