window.__img=function(p){return (window.SONIVOICE_IMAGES&&window.SONIVOICE_IMAGES[p])||p;};

var scenarios={
restaurant:{badge:"EXAMPLE • RESTAURANT",title:"Takes the order, by name.",img:__img("assets/img-2.webp"),alt:"Busy restaurant during dinner service",desc:"During the dinner rush, nobody can reach the phone. SoniVoice answers, takes the full order, repeats it back, confirms pickup time — and sends it straight to you.",chat:[["ai","SoniVoice AI","Thanks for calling Bella's! We're on the line with guests — I can take your order right now. What name is it under?"],["user","Caller","Maria Garcia."],["ai","SoniVoice AI","Hi Maria! What can we get started for you?"],["user","Caller","Large pepperoni, garlic knots, pickup please."],["ai","SoniVoice AI","Got it — large pepperoni + garlic knots for Maria, pickup in ~25 min. I've taken your order and I'm sending the full details to the team now by email with this recording. Anything else?"]]},
auto:{badge:"EXAMPLE • AUTO DEALER",title:"Qualifies the lead like a human.",img:__img("assets/img-3.webp"),alt:"Modern automotive dealership showroom",desc:"A buyer calls after hours about a car. SoniVoice captures the vehicle, budget, trade-in, and callback window — and emails your sales team a ready-to-work lead with the recording.",chat:[["ai","SoniVoice AI","Thanks for calling City Auto! The showroom's closed, but I can help. Are you calling about a vehicle, service, or parts?"],["user","Caller","Vehicle — the silver SUV online."],["ai","SoniVoice AI","Great pick. Can I get your name and best number? Then I'll note your budget and if you have a trade-in."],["user","Caller","James Lee, looking around $28k, have a trade-in."],["ai","SoniVoice AI","Perfect, James. I sent your details to sales — they'll call tomorrow by 10am. I also texted you a confirmation."]]},
home:{badge:"EXAMPLE • HOME SERVICES",title:"Books the job, sends the confirmation.",img:__img("assets/img-4.webp"),alt:"HVAC technician servicing a home air conditioning unit",desc:"HVAC, plumbing, electrical, cleaning — when you're on a job, SoniVoice answers, asks what's wrong, offers the next slot, books it, and texts the customer a confirmation.",chat:[["ai","SoniVoice AI","Thanks for calling ProFlow! We're out on a job — I can book you right now. What's going on?"],["user","Caller","No AC, it's blowing warm air."],["ai","SoniVoice AI","Sorry to hear that. I have tomorrow 9–11am or 1–3pm. Which works? And what's the address?"],["user","Caller","9–11 works. 412 Oak Street."],["ai","SoniVoice AI","Booked — tomorrow 9–11am at 412 Oak St. I texted you a confirmation. We'll email the shop your details + this recording."]]},
clinic:{badge:"EXAMPLE • CLINIC / HEALTHCARE",title:"Collects intake, books the visit.",img:__img("assets/img-5.webp"),alt:"Modern medical clinic reception area",desc:"Front desk overwhelmed? SoniVoice collects name, reason for visit, insurance basics, and preferred time — then sends a clean intake summary to your team.",chat:[["ai","SoniVoice AI","Thanks for calling BrightCare Clinic! I can help book your visit. What's your name?"],["user","Caller","Priya Patel, need a check-up this week."],["ai","SoniVoice AI","Hi Priya, I have Thursday 10:30am or Friday 2pm. Do either work?"],["user","Caller","Thursday works."],["ai","SoniVoice AI","You're booked for Thursday 10:30am. I sent the clinic your intake details and texted you a confirmation."]]},
retail:{badge:"EXAMPLE • RETAIL",title:"Answers questions, captures the lead.",img:__img("assets/img-6.webp"),alt:"Bright modern retail store interior",desc:"A shopper calls about stock and hours. SoniVoice answers product and order-status questions, and captures a callback lead when it can't close the loop.",chat:[["ai","SoniVoice AI","Thanks for calling UrbanNest! How can I help you today?"],["user","Caller","Do you have the oak bookshelf in stock? And what time do you close?"],["ai","SoniVoice AI","We close at 9pm tonight. Good news — we have three oak bookshelves in stock downtown. Want me to hold one for pickup?"],["user","Caller","Yes please, name's Daniel."],["ai","SoniVoice AI","Done, Daniel — one oak bookshelf on hold till tomorrow 6pm. I texted your confirmation and sent the store your details."]]},
salon:{badge:"EXAMPLE • SALON & SPA",title:"Books the chair, notes the preference.",img:__img("assets/img-7.webp"),alt:"Elegant hair salon interior",desc:"A client calls to book. SoniVoice books the service, notes stylist preference, and sends reminders and confirmations.",chat:[["ai","SoniVoice AI","Thanks for calling Glow Studio! I can book your appointment right now. Which service are you looking for?"],["user","Caller","A haircut and color, preferably with Ava."],["ai","SoniVoice AI","Ava has Thursday 2pm or Friday 11am open. Which suits you?"],["user","Caller","Thursday 2pm. Name's Sofia."],["ai","SoniVoice AI","Booked, Sofia — cut and color with Ava, Thursday 2pm. I texted your confirmation and sent the studio your booking."]]},
realestate:{badge:"EXAMPLE • REAL ESTATE",title:"Captures the lead, books the showing.",img:__img("assets/img-8.webp"),alt:"Modern suburban home exterior",desc:"A buyer calls about a listing after hours. SoniVoice captures the property of interest and the showing request — twenty-four seven.",chat:[["ai","SoniVoice AI","Thanks for calling Evergreen Realty! Are you calling about buying, selling, or a specific listing?"],["user","Caller","The Maple Street townhouse. Is it still available?"],["ai","SoniVoice AI","It is — listed at four twenty-five. Can I get your name and number? I'll set up a showing and have an agent confirm."],["user","Caller","Chris, and mornings work best."],["ai","SoniVoice AI","Thanks Chris — your showing request is with the team, and they'll call tomorrow morning to confirm."]]},
pro:{badge:"EXAMPLE • PROFESSIONAL SERVICES",title:"Qualifies the inquiry, books the consult.",img:__img("assets/img-9.webp"),alt:"Modern professional office interior",desc:"A potential client calls the firm. SoniVoice qualifies the matter, captures urgency, and books a consultation.",chat:[["ai","SoniVoice AI","Thanks for calling Hartley and Associates! I can get you scheduled. What is this regarding?"],["user","Caller","I need help reviewing a vendor contract, fairly urgent."],["ai","SoniVoice AI","Understood — contract review, urgent. Can I take your name and best callback number?"],["user","Caller","Amara. This week if possible."],["ai","SoniVoice AI","Thanks Amara — I've flagged this as urgent and sent your details to the team. They'll call you back today with consult times."]]},

};
var industries=[
{id:"restaurant",icon:"🍽️",name:"Restaurants & Cafés",ex:"Takes takeout orders by name, confirms items + pickup time, sends order to you."},
{id:"auto",icon:"🚗",name:"Automotive Dealers",ex:"Qualifies buyers & service callers: vehicle, budget, trade-in, callback time."},
{id:"home",icon:"🔧",name:"Home Services",ex:"HVAC, plumbing, electrical: diagnoses the issue, books the visit, texts confirmation."},
{id:"retail",icon:"🛍️",name:"Retail & E-commerce",ex:"Answers product, hours & order-status questions; captures callback leads."},
{id:"clinic",icon:"🏥",name:"Healthcare & Clinics",ex:"Collects intake details and books appointments when the front desk is busy."},
{id:"salon",icon:"💇",name:"Salons & Spas",ex:"Books services, notes stylist preference, sends reminders & confirmations."},
{id:"realestate",icon:"🏠",name:"Real Estate",ex:"Captures buyer/renter leads, property of interest, and showing requests 24/7."},
{id:"pro",icon:"💼",name:"Professional Services",ex:"Law, accounting, agencies: qualifies the inquiry and books consultations."}
];
var current="restaurant", timer=null;
function renderChat(key){
  var s=scenarios[key]; if(!s) s=scenarios.home;
  document.getElementById('chat').innerHTML=s.chat.map(function(m){return '<div class="msg '+m[0]+'"><small>'+m[1]+'</small>'+m[2]+'</div>'}).join('');
}
function setRing(step){
  ["r1","r2","r3","rAI"].forEach(function(id,i){var el=document.getElementById(id); el.className="ring"+(i<step?" done":i===step?" active":"");});
}
function playDemo(){
  clearTimeout(timer); setRing(0); document.getElementById('chat').innerHTML='<div class="msg ai"><small>Calling…</small>Dialing the business number…</div>';
  var steps=[400,1100,1800,2500]; steps.forEach(function(t,i){timer=setTimeout(function(){setRing(i); if(i===3){renderChat(current)}},t);});
}

var callAudio=null;
function stopCallAudio(){if(callAudio){try{callAudio.pause();}catch(e){}callAudio=null;}if('speechSynthesis' in window){try{speechSynthesis.cancel();}catch(e){}}}
function loadCallAudio(key,cb){
  if(window.SONIVOICE_AUDIO&&window.SONIVOICE_AUDIO[key]){cb();return;}
  var el=document.createElement('script');
  el.src='assets/audio-'+key+'.js';
  el.onload=function(){cb();};el.onerror=function(){cb();};
  document.head.appendChild(el);
}
function replayCallAudio(){
  stopCallAudio();
  var key=current||'restaurant';
  loadCallAudio(key,function(){
  var uri=(window.SONIVOICE_AUDIO&&window.SONIVOICE_AUDIO[key])||null;
  if(uri){callAudio=new Audio(uri);try{var pr=callAudio.play();if(pr&&pr.catch){pr.catch(function(){});}}catch(e){}return;}
  if(!('speechSynthesis' in window)){return;}
  speechSynthesis.cancel();
  var s=scenarios[key]||scenarios.restaurant;
  var vs=speechSynthesis.getVoices(),v=null;
  var prefs=[/google us english/i,/samantha/i,/zira/i,/aria/i,/jenny/i,/female/i];
  for(var i=0;i<prefs.length&&!v;i++){for(var j=0;j<vs.length;j++){var lg=vs[j].lang||'';if(/^en/i.test(lg)&&prefs[i].test(vs[j].name||'')){v=vs[j];break;}}}
  if(!v){for(var k=0;k<vs.length;k++){if(/^en/i.test(vs[k].lang||'')){v=vs[k];break;}}}
  s.chat.forEach(function(m){
    var u=new SpeechSynthesisUtterance(m[2]);
    if(v){u.voice=v;}
    if(m[0]==='ai'){u.pitch=1.15;u.rate=1.03;}else{u.pitch=0.85;u.rate=0.97;}
    speechSynthesis.speak(u);
  });
  });
}
if('speechSynthesis' in window){speechSynthesis.onvoiceschanged=function(){};}
function setT(id,t){var e=document.getElementById(id);if(e)e.textContent=t;}
function selectScenario(key,el){   stopCallAudio();   current=key;   var sb=document.getElementById('scenarioBtns');   if(sb){sb.querySelectorAll('.chip').forEach(function(c){c.classList.remove('active')});}   if(el) el.classList.add('active');   var s=scenarios[key]||scenarios.restaurant;   setT('demoBadge',s.badge); setT('demoTitle',s.title); setT('demoDesc',s.desc);   var di=document.getElementById('demoImg'); if(di){di.src=s.img;di.alt=s.alt;}   var dc=document.getElementById('demoConvo'); if(dc){dc.innerHTML=s.chat.map(function(m){return '<div><b style="color:'+(m[0]==='ai'?'#00D9EC':'#fff')+'">'+m[1]+':</b> '+m[2]+'</div>'}).join('');}   document.querySelectorAll('.ind').forEach(function(c){c.classList.toggle('active',c.dataset.id===key)});   if(document.getElementById('chat')){playDemo();} } var _sb=document.getElementById('scenarioBtns');if(_sb){_sb.addEventListener('click',function(e){var b=e.target.closest('.chip'); if(b) selectScenario(b.dataset.s,b);});}
var grid=document.getElementById('indGrid');
if(grid){
industries.forEach(function(it){
  var b=document.createElement('button'); b.className='ind'+(it.id==='restaurant'?' active':''); b.dataset.id=it.id;
  b.innerHTML='<div class="icon">'+it.icon+'</div><h3>'+it.name+'</h3><p>'+it.ex+'</p>';
  b.onclick=function(){var key=scenarios[it.id]?it.id:'home'; var chip=document.querySelector('#scenarioBtns [data-s="'+key+'"]'); selectScenario(key,chip); document.getElementById('demoBox').scrollIntoView({behavior:'smooth',block:'center'});};
  grid.appendChild(b);
});}
function calc(){
  var m=+document.getElementById('missed').value, v=+document.getElementById('jobvalue').value;
  document.getElementById('missedVal').textContent=m; document.getElementById('valueVal').textContent=v;
  var saved=Math.round(m*4.33/3); var total=saved*v;
  document.getElementById('recovered').textContent='$'+total.toLocaleString();
  document.getElementById('recoveredYear').textContent='$'+(total*12).toLocaleString();
  document.getElementById('calcNote').textContent="That's ~"+saved+" saved customers a month you would have lost to voicemail.";
  document.getElementById('calcCalls').textContent="SoniVoice would answer ~"+Math.round(m*4.33)+" of those calls for you — nights, weekends, holidays included.";
}
var _m=document.getElementById('missed');if(_m){_m.addEventListener('input',calc);}
var _jv=document.getElementById('jobvalue');if(_jv){_jv.addEventListener('input',calc);}
document.querySelectorAll('.faq-item button').forEach(function(b){b.onclick=function(){b.parentElement.classList.toggle('open'); b.querySelector('span').textContent=b.parentElement.classList.contains('open')?'−':'+';};});
var _hi=document.getElementById('heroImg');if(_hi){_hi.src=__img('assets/img-1.webp');}var _sc=document.querySelector('#scenarioBtns .chip');if(_sc){selectScenario('restaurant',_sc);}if(document.getElementById('missed')){calc();}


/* SoniVoice analytics events (Umami) — safe no-op if Umami hasn't loaded */
(function(){
  function svTrack(name, data){
    try{ if(window.umami && umami.track){ umami.track(name, data||{}); } }catch(e){}
  }
  // Pilot application form submissions — the money metric
  document.querySelectorAll('form[action*="formsubmit.co"]').forEach(function(f){
    f.addEventListener('submit', function(){ svTrack('pilot-application'); });
  });
  // Industry scenario tab clicks
  var scenarioBtns = document.getElementById('scenarioBtns');
  if(scenarioBtns){
    scenarioBtns.addEventListener('click', function(e){
      var b = e.target.closest('.chip');
      if(b){ svTrack('industry-tab', { industry: b.dataset.s }); }
    });
  }
  // Industry grid card clicks
  var indGrid = document.getElementById('indGrid');
  if(indGrid){
    indGrid.addEventListener('click', function(e){
      var b = e.target.closest('.ind');
      if(b){ svTrack('industry-card', { industry: b.dataset.id }); }
    });
  }
  // "Listen to this call" audio plays
  if(typeof window.replayCallAudio === 'function'){
    var _replay = window.replayCallAudio;
    window.replayCallAudio = function(){
      svTrack('call-audio-play', { industry: window.current || 'restaurant' });
      return _replay.apply(this, arguments);
    };
  }
  // Hero call-simulation replay clicks
  if(typeof window.playDemo === 'function'){
    var _play = window.playDemo;
    window.playDemo = function(){
      svTrack('hero-replay');
      return _play.apply(this, arguments);
    };
  }
})();

/* mobile nav: build hamburger menu from the desktop nav links */
(function(){
  var nav = document.querySelector('.topbar .nav');
  var bar = document.querySelector('.topbar-in');
  if(!nav || !bar || bar.querySelector('.menu-btn')) return;
  var btn = document.createElement('button');
  btn.className = 'menu-btn';
  btn.setAttribute('aria-label', 'Menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = '<span></span><span></span><span></span>';
  var mnav = document.createElement('nav');
  mnav.className = 'mnav';
  mnav.setAttribute('aria-label', 'Mobile');
  mnav.innerHTML = nav.innerHTML;
  bar.appendChild(btn);
  bar.appendChild(mnav);
  function close(){
    mnav.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
  btn.addEventListener('click', function(e){
    e.stopPropagation();
    var open = mnav.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  mnav.addEventListener('click', function(e){ if(e.target.closest('a')) close(); });
  document.addEventListener('click', function(e){ if(!e.target.closest('.topbar')) close(); });
})();
