/**
 * Created by jyjs on 2017/4/5.
 */
//��Ʒ�����������ƣ���С�ڵ��ڿ��������
var onlynum = document.getElementById("spStock");
var buylen = document.getElementById("buyNum");
var btnplus = document.getElementById("spAdd");
btnplus.onclick = function(){var onlylen = parseInt(onlynum.innerHTML);console.log(onlylen,parseInt(buylen.value));if(parseInt(buylen.value) > onlylen){alert("�������ڿ�棬���������룡");buylen.value = onlylen;}};