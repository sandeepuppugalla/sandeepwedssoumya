const target=new Date('2026-09-04T10:35:00');

function update(){
  const d=target-new Date();

  if(d<0) return;

  const days=Math.floor(d/86400000);

  document.getElementById('countdown').innerHTML=
    days + ' days to go';
}

update();
setInterval(update,1000);
