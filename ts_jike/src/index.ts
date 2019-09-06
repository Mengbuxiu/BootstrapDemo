import { Message} from "./enum";


let str = "显示第1页，共 324 页";
console.log(str.split("，")[1].split(" ")[1])


//以字母开头，并包含数字，长度在8-30
// let pwd:string = "S_1ss00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000S_1ss00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
// let reg = pwd.match("^[a-zA-Z][0-9a-zA-Z_]{8,30}")
// console.log(reg);


//正则匹配 以Sys开头的字符串
//let hello:string = "SystemAdmin";
// let reg = hello.match("\\Sys\\w*")
// if(reg != null){
//     console.log(reg)
// }
// document.querySelectorAll(".app")[0].innerHTML = hello;
// enum Role {
//     Repoter1 = 1,
//     Developer1,
//     Maintainer1,
//     Owner1,
//     Guest1
// }
// console.log(Role.Repoter1);
// console.log(Message.Success);