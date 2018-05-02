/**
 * Created by jyjs on 2017/4/5.
 */
//产品购物数量限制：（小于等于库存数量）
var onlynum = document.getElementById("spStock");
var buylen = document.getElementById("buyNum");
var btnplus = document.getElementById("spAdd");
btnplus.onclick = function(){var onlylen = parseInt(onlynum.innerHTML);console.log(onlylen,parseInt(buylen.value));if(parseInt(buylen.value) > onlylen){alert("数量大于库存，请重新输入！");buylen.value = onlylen;}};