
function opn1(){
  var dv= document.getElementById('divs1')
  var ent = document.getElementById('enter')
  if(dv.style.display == 'none'){
  dv.style.display = 'block';
  ent.textContent="OUVERT";
  ent.style.textAlign='right';
  ent.style.left='0';
  ent.style.right='0';
  ent.style.position='fixed'
  ent.style.bottom='6.8%';
  ent.style.top='89%';
}else{
  dv.style.display = 'none';
  ent.textContent='ENTER';
  ent.style.position='fixed';
  ent.style.textAlign='left';
  ent.style.top='13%';
  ent.style.bottom='83%'
}}
function detail(){
  var term = document.getElementById('terminal');
  var ss = document.getElementById('saisie')
  var conta = document.getElementById('contact');
  var deta = document.getElementById('detail');
  var bt =document.getElementById('bdetail');
  var rbt = document.getElementById('retour');
  var exbt=document.getElementById('exec');
  exbt.style.display='none'
  rbt.style.display='block';
  term.style.display='none';
  ss.style.display='none';
  conta.style.display='none';
  deta.style.display='block';
  bt.style.backgroundColor='transparent';
}
function contact(){
  var term = document.getElementById('terminal');
  var ss = document.getElementById('saisie')
  var conta = document.getElementById('contact');
  var det = document.getElementById('detail');
  var bt =document.getElementById('bcontact')
  var rbt = document.getElementById('retour');
  var exbt=document.getElementById('exec');
  exbt.style.display='none'
  rbt.style.display='block';
  term.style.display ='none';
  ss.style.display='none';
  det.style.display='none';
  conta.style.display='block';
  bt.style.backgroundColor='transparent';
}
function retour(){
  var term = document.getElementById('terminal');
  var ss = document.getElementById('saisie');
  var conta = document.getElementById('contact');
  var deta = document.getElementById('detail');
  var rbt = document.getElementById('retour');
  var exbt=document.getElementById('exec');
  exbt.style.display='block'
  rbt.style.display='none';
  term.style.display = 'block';
  ss.style.display = 'block';
  conta.style.display = 'none';
  deta.style.display = 'none';
}
function rech(){
  var Nm = document.getElementById('nom');
  var pic0 = document.getElementById('pic0');
  var leg =document.getElementById('mdz');
  if(Nm.value=='Steven'){
    pic0.src='me.jpg';
    leg.textContent='STEVEN KAT';
  }else{
    leg.textContent='UserMDZ#';
    pic0.src='pic0.jpg'
    }
}
function testrc(){
  var Nm = document.getElementById('nom');
  var num = document.getElementById('number');
  var scrp = document.getElementById('met')
  Nm.value='TesT';
  num.value='0001';
  scrp.value='Login';
}
function login(){
  var Nm = document.getElementById('nom');
  var num = document.getElementById('number');
  var scrp = document.getElementById('met');
  var med = document.getElementById('meduz');
  var photo = document.getElementById('photo')
  var err = document.getElementById('error')
  if (Nm.value=='Steven' && num.value=="0971471161" && scrp.value=='Login'){
  med.style.display='none';
} else if(num.value=='2024'){med.style.display='none';}else if(Nm.value=='TesT' && num.value=="0001" && scrp.value=='Login'){
  var code =prompt('Ecrivez "meduze"');
  if(code=='meduze'){
    med.style.display='none';
  }else{
    return code
  }
}else{
  alert('Badge non reconnu !!!');
  err.style.display='block';
  photo.style.display='none';
};
}
function smenu(){
  var fmenu= document.getElementById('menu')
  if(fmenu.style.display=='none'){
    fmenu.style.display='block'
  }else{
    fmenu.style.display='none'
  };
}
function vpn(){
  var svpn= document.getElementById('formvpn')
  if (svpn.style.display=='none'){
    svpn.style.display='block'  
  }else{
    svpn.style.display='none'
  }
}