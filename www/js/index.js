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
$("#fatorial").click(function(){
  var val = $("#tela").val();
  var res = 1;
  for(var count=1 ; count<=val ; count++){
   res *= count; 
}
$("#tela").val(res);
  
});
