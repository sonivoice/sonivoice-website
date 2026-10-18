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
function __ic(paths){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+paths+'</svg>';}
var ICONS={
restaurant:__ic('<path d="M4 18h16"/><path d="M6.5 18a5.5 5.5 0 0 1 11 0"/><path d="M12 12.5V10"/><circle cx="12" cy="8.6" r="1" fill="currentColor" stroke="none"/>'),
auto:__ic('<path d="M4 13l1.6-4.4A2 2 0 0 1 7.5 7.2h9a2 2 0 0 1 1.9 1.4L20 13"/><rect x="3" y="13" width="18" height="4.5" rx="1.5"/><circle cx="7.5" cy="17.5" r="1.6"/><circle cx="16.5" cy="17.5" r="1.6"/>'),
home:__ic('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'),
retail:__ic('<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>'),
clinic:__ic('<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8.5v7M8.5 12h7"/>'),
salon:__ic('<circle cx="6" cy="6" r="2.6"/><circle cx="6" cy="18" r="2.6"/><path d="M20 4 8.12 15.88"/><path d="M14.47 14.48 20 20"/><path d="M8.12 8.12 12 12"/>'),
realestate:__ic('<path d="M3 9.5 12 3l9 6.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22v-8h6v8"/>'),
pro:__ic('<rect x="2.5" y="7" width="19" height="13.5" rx="2"/><path d="M16 20.5V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v15.5"/>'),
setup:__ic('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'),
phone:__ic('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>'),
email:__ic('<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m21 7.5-9 5.5-9-5.5"/>'),
mic:__ic('<rect x="9" y="2.5" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0"/><path d="M12 17.5V21"/>')
};

var industries=[
{id:"restaurant",icon:"restaurant",name:"Restaurants & Cafés",ex:"Takes takeout orders by name, confirms items + pickup time, sends order to you."},
{id:"auto",icon:"auto",name:"Automotive Dealers",ex:"Qualifies buyers & service callers: vehicle, budget, trade-in, callback time."},
{id:"home",icon:"home",name:"Home Services",ex:"HVAC, plumbing, electrical: diagnoses the issue, books the visit, texts confirmation."},
{id:"retail",icon:"retail",name:"Retail & E-commerce",ex:"Answers product, hours & order-status questions; captures callback leads."},
{id:"clinic",icon:"clinic",name:"Healthcare & Clinics",ex:"Collects intake details and books appointments when the front desk is busy."},
{id:"salon",icon:"salon",name:"Salons & Spas",ex:"Books services, notes stylist preference, sends reminders & confirmations."},
{id:"realestate",icon:"realestate",name:"Real Estate",ex:"Captures buyer/renter leads, property of interest, and showing requests 24/7."},
{id:"pro",icon:"pro",name:"Professional Services",ex:"Law, accounting, agencies: qualifies the inquiry and books consultations."}
];
var current="restaurant", timer=null;
function renderChat(key){
  var s=scenarios[key]; if(!s) s=scenarios.home;
  document.getElementById('chat').innerHTML=s.chat.map(function(m){return '<div class="msg '+m[0]+'"><small>'+m[1]+'</small>'+m[2]+'</div>'}).join('');
}
function setRing(step){
  ["r1","r2","r3","rAI"].forEach(function(id,i){var el=document.getElementById(id); el.className="ring"+(i<step?" done":i===step?" active":"");});
}
var _ac=null;
function playRing(){
  try{
    _ac=_ac||new (window.AudioContext||window.webkitAudioContext)();
    if(_ac.state==='suspended'){_ac.resume();}
    var t=_ac.currentTime;
    [440,480].forEach(function(f){
      var o=_ac.createOscillator(),g=_ac.createGain();
      o.frequency.value=f; o.type='sine';
      g.gain.setValueAtTime(0.0001,t);
      g.gain.exponentialRampToValueAtTime(0.22,t+0.03);
      g.gain.exponentialRampToValueAtTime(0.0001,t+0.38);
      o.connect(g); g.connect(_ac.destination);
      o.start(t); o.stop(t+0.42);
    });
  }catch(e){}
}
function playDemo(){
  clearTimeout(timer); stopCallAudio(); setRing(0); document.getElementById('chat').innerHTML='<div class="msg ai"><small>Calling…</small>Dialing the business number…</div>';
  var steps=[400,1100,1800,2500]; steps.forEach(function(t,i){timer=setTimeout(function(){setRing(i); playRing(); if(i===3){renderChat(current)}},t);});
}
function playDemoWithAudio(){
  playDemo();
  setTimeout(function(){replayCallAudio();},2600);
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
  b.innerHTML='<div class="icon">'+ICONS[it.icon]+'</div><h3>'+it.name+'</h3><p>'+it.ex+'</p>';
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
var _hi=document.getElementById('heroImg');if(_hi){_hi.src=__img('assets/img-1.webp');}var _sc=document.querySelector('#scenarioBtns .chip');if(_sc){selectScenario('restaurant',_sc);renderChat('restaurant');setRing(4);}if(document.getElementById('missed')){calc();}


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

/* hydrate inline svg icons */
document.querySelectorAll('[data-ic]').forEach(function(el){var k=el.getAttribute('data-ic'); if(window.ICONS&&ICONS[k]){el.innerHTML=ICONS[k];}});

/* sticky mobile CTA bar */
(function(){
  var bar=document.createElement('div');
  bar.className='sticky-cta';
  var home=/(^|\/)index\.html$|\/$/.test(location.pathname);
  bar.innerHTML='<a class="btn btn-cyan" href="'+(home?'#apply':'index.html#apply')+'">Start Pilot &rarr;</a>';
  document.body.appendChild(bar);
  var apply=document.getElementById('apply');
  if(apply&&'IntersectionObserver' in window){
    new IntersectionObserver(function(es){
      for(var i=0;i<es.length;i++){bar.classList.toggle('hidden',es[i].isIntersecting);}
    },{threshold:0.12}).observe(apply);
  }
})();

/* motion: scroll reveals + card hovers */
(function(){
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els=document.querySelectorAll('.kicker,.badge,.title,section h2,.ind,.feature,.step,.faq-item,.stat,.email-card');
  var grids=document.querySelectorAll('#compare .wrap > div[style*="display:grid"], #pilot .wrap > div[style*="display:grid"]');
  var all=Array.prototype.slice.call(els);
  Array.prototype.forEach.call(grids,function(g){Array.prototype.forEach.call(g.children,function(c){c.classList.add('lift');all.push(c);});});
  if(reduce||!('IntersectionObserver' in window)){return;}
  all.forEach(function(el){el.classList.add('rv');});
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}
    });
  },{threshold:0.1,rootMargin:'0px 0px -6% 0px'});
  all.forEach(function(el){
    var sibs=Array.prototype.filter.call(el.parentElement.children,function(c){return c.classList.contains('rv');});
    var idx=sibs.indexOf(el);
    if(idx>0){el.style.transitionDelay=Math.min(idx*70,420)+'ms';}
    io.observe(el);
  });
})();

/* pilot application success confirmation */
(function(){
  var q=new URLSearchParams(location.search);
  if(q.get('applied')!=='1')return;
  var form=document.querySelector('#apply form');
  if(!form)return;
  var d=document.createElement('div');
  d.style.cssText='max-width:520px;margin:22px auto 0;text-align:center;background:rgba(0,217,236,.08);border:1px solid rgba(0,217,236,.3);border-radius:18px;padding:28px 24px';
  d.innerHTML='<svg width="44" height="44" viewBox="0 0 44 44" fill="none" style="margin-bottom:10px"><circle cx="22" cy="22" r="20" stroke="#00D9EC" stroke-width="3"/><path d="M14 22.5l6 6 10-12" stroke="#00D9EC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>'+
   '<h3 style="margin:0 0 8px;color:#fff">Application received!</h3>'+
   '<p style="color:#B9C7DD;margin:0 0 16px">Thanks for applying — we reply within one business day.</p>'+
   '<div style="text-align:left;color:#B9C7DD;font-size:14px;display:grid;gap:10px;max-width:340px;margin:0 auto">'+
   '<div><b style="color:#00D9EC">1.</b> We review your application</div>'+
   '<div><b style="color:#00D9EC">2.</b> We reach out to schedule your setup</div>'+
   '<div><b style="color:#00D9EC">3.</b> You are live in days — done for you</div>'+
   '</div>';
  form.replaceWith(d);
  try{history.replaceState(null,'',location.pathname+'#apply');}catch(e){}
})();
