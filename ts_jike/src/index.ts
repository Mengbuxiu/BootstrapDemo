import { Message} from "./enum";

let hello:string = "hello,world";
document.querySelectorAll(".app")[0].innerHTML = hello;
enum Role {
    Repoter1 = 1,
    Developer1,
    Maintainer1,
    Owner1,
    Guest1
}
console.log(Role.Repoter1);
console.log(Message.Success);