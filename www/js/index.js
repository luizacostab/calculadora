// This is a JavaScript file
$(".num").click(function(){
  $("#tela").val($("#tela").val() + $(this).val());
});
$("#apagar").click(function(){
  $("#tela").val("")
});
$("#quadrado").click(function(){
  $("#tela").val(Math.pow($("#tela").val(), 2));
});
$(".operacao").click(function(){
  $(".hidden").val($(".hidden").val()+($("#tela").val()+$(this).val()));
  $("#tela").val("");
});
$("#igual").click(function(){
  $(".hidden").val($(".hidden").val()+$("#tela").val());
  var res = eval($(".hidden").val());
  $("#tela").val(res);
  $(".hidden").val("");
});
