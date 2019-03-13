$(function () {
  // var flag = false;
  $("#about-me img").click(function () {
    //alert("x");
    //  if(flag == false){
    $(this).css("width", "auto");
    $(this).css("height", "auto");
    //flag = true;
    // }
  })

  console.log($("#filter-test p").filter(".border-line"));
  


  $("button[name='test']").click(() => {
    $('#tree').treeview({ data: getTree() });
  })
  })

  function getTree() {
    // Some logic to retrieve, or generate tree structure
    return [
            {
              text: "Parent 1",
              nodes: [
                {
                  text: `<div class="row">
                          <a>111111</a>
                          <a>222222</a>
                          <a>333333</a>
                         </div>`
                  // nodes: [
                  //   {
                  //     text: "Grandchild 1"
                  //   },
                  //   {
                  //     text: "Grandchild 2"
                  //   }
                  //]
                },
                {
                  text: "Child 2"
                }
              ]
            }
          ];
  }

 