$(function () {
  // var flag = false;
  $("#about-me").click(function () {
    let arr = ["A","b"];
    console.log(arr.indexOf("c"))
    console.log(arr.indexOf("b"))
    let json = {
      "a": 1,
      "b": 2
    };
    let obj = { c: 3 };
    obj['aaa']='aaa'; 
    console.log(obj)
    console.log(JSON.stringify(obj));

    json['f'] = JSON.stringify(obj);
    console.log(json);

    
    // let obj = { c: 3 ,c2: 3 ,c1: 3 ,};
    // let json = {
    //     "a": 1,
    //     "b": 2,
    //     ...obj
    //   };
    //   console.log(json)
  })


  //var currentDateLong = new Date(currentdate.replace(new RegExp("-", "gm"), "/")).getTime()     //当前时间转换成long型 

  //console.log($("#filter-test p").filter(".border-line"));




})



