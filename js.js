
// 同期通信
$.ajax({
  type: "GET", 
  url: "preference.json",
  async: false
  success: function(data){
    hoge = data.param;
  }
});
