/* Stats, Project Finder, Work-With-Me wizard, skill details. Uses data already on the page (PJ, TOOLS, CATS). */
(()=>{
const SERVICES=['Website Design & Development','UI/UX Design & Prototyping','Social Media Graphics','Digital Content Design'];
const esc=t=>String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const tools=p=>p.t.startsWith('Figma')?['Figma']:[];
// Stats: real counts only
$('#stats-g').innerHTML=[[PJ.length,'Projects'],[TOOLS.length,'Tools & technologies'],[Object.keys(CATS).length,'Skill areas'],[SERVICES.length,'Services']].map(x=>`<div class="stat"><b>${x[0]}</b><span>${x[1]}</span></div>`).join('');

// Project Finder. Types with no matching project say so honestly.
const FT={'💻 Website':p=>p.t.includes('Website'),'🎨 UI/UX':p=>p.c.includes('UI/UX'),'📱 App / Interface':p=>false,'✨ Graphic Design':p=>false,'🎓 Student Project':p=>false,'🤖 AI / Automation':p=>false};
function card(p){const tl=tools(p),rows=[['Overview',p.d],['Type',p.t],tl.length?['Tools',tl.join(', ')]:null].filter(Boolean);
return `<article class="fc"><div class="im">${ic(p.i)}</div><b>${esc(p.n)}</b><p>${esc(p.d)}</p>${tl.length?`<div class="tg">${tl.map(x=>`<span>${x}</span>`).join('')}</div>`:''}<details><summary>Case study details</summary><dl>${rows.map(r=>`<dt>${r[0]}</dt><dd>${esc(r[1])}</dd>`).join('')}</dl></details><a class="btn" href="${p.u.replace(/&/g,'&amp;')}" target="_blank" rel="noopener noreferrer">View Project <span class="sr">(opens in a new tab)</span></a></article>`}
function find(k){const r=PJ.filter(FT[k]);$$('#fchips .chip').forEach(b=>b.setAttribute('aria-pressed',b.dataset.v==k));
$('#fout').innerHTML=r.length?`<div class="fres">${r.map(card).join('')}</div>`:`<p class="empty">No project in this portfolio matches “${k.replace(/^\S+\s/,'')}” yet. You can still ask about it through the form below.</p>`}
$('#fchips').innerHTML=Object.keys(FT).map(k=>`<button class="chip" aria-pressed="false" data-v="${k}">${k}</button>`).join('');
$$('#fchips .chip').forEach(b=>b.onclick=()=>find(b.dataset.v));

// Skill details: relate a tool to existing projects/services without inventing usage
$('#tools').addEventListener('click',()=>{const t=TOOLS.find(x=>x.n==sel);if(!t)return;
const pr=t.n=='Figma'||t.n=='Prototyping'||t.n=='Wireframing'?PJ.filter(p=>p.t.startsWith('Figma')).map(p=>p.n):[];
const sv={dev:[SERVICES[0]],design:[SERVICES[1]]}[t.c]||(t.n=='Canva'?[SERVICES[2],SERVICES[3]]:[]);
$('#det').insertAdjacentHTML('beforeend',`<div class="xtra"><span><b>Used for:</b> ${CATS[t.c][4]}</span><span><b>Existing projects:</b> ${pr.length?pr.join(', '):'No project in this portfolio lists this tool yet.'}</span><span><b>Related services:</b> ${sv.length?sv.join(', '):'No specific service listed.'}</span></div>`)});

// Wizard
const W=[['What are you looking for?',['Website','UI/UX Design','Portfolio Website','Graphic Design','Digital Services','Other'],0],['What’s your project stage?',['Just an idea','Planning','Already started','Need improvements'],0],['What would you like help with?',['UI Design','Development','Content / Graphics','Prototyping','Improving something existing','Not sure yet'],1]];
const A={t:'',s:'',n:[]};let st=0;
const PT={'Portfolio Website':'Portfolio','UI/UX Design':'UI/UX Design'};
function wz(){const w=$('#wz'),bar=`<div class="steps" aria-hidden="true">${[0,1,2,3].map(i=>`<i class="${i<=st?'on':''}"></i>`).join('')}</div>`;
if(st<3){const[q,o,m]=W[st];w.innerHTML=`${bar}<h3>${q}</h3><div class="opts" role="group" aria-label="${q}">${o.map(x=>`<button type="button" class="chip" data-v="${x}" aria-pressed="${st==0?A.t==x:st==1?A.s==x:A.n.includes(x)}">${x}</button>`).join('')}</div><div class="nx">${st?'<button type="button" class="btn g" id="wb">Back</button>':''}<button type="button" class="btn" id="wn" ${(st==0&&!A.t)||(st==1&&!A.s)||(st==2&&!A.n.length)?'disabled style="opacity:.5"':''}>Next</button></div>`;
$$('#wz .chip').forEach(b=>b.onclick=()=>{const v=b.dataset.v;if(st==0)A.t=v;else if(st==1)A.s=v;else A.n=A.n.includes(v)?A.n.filter(x=>x!=v):[...A.n,v];wz()})}
else w.innerHTML=`${bar}<h3>Project Summary</h3><div class="sum"><b>Type:</b> ${A.t}<br><b>Stage:</b> ${A.s}<br><b>Needs:</b> ${A.n.join(' + ')}</div><div class="nx"><button type="button" class="btn g" id="wb">Back</button><button type="button" class="btn" id="wg">Let’s Work Together →</button></div>`;
const n=$('#wn'),b=$('#wb'),g=$('#wg');if(n)n.onclick=()=>{st++;wz()};if(b)b.onclick=()=>{st--;wz()};
if(g)g.onclick=()=>{const f=$('#fm'),pt=PT[A.t]||(['Website','Graphic Design','Digital Services','Other'].includes(A.t)?A.t:'Other');f.ptype.value=pt;f.stage.value=A.s;if(!f.msg.value)f.msg.value=`Hi Joselle! I'm looking for ${A.t.toLowerCase()} help. Stage: ${A.s}. I'd like help with: ${A.n.join(', ')}.`;$('#contact').scrollIntoView({behavior:RM?'auto':'smooth'});setTimeout(()=>f.name.focus({preventScroll:true}),RM?0:600)}}
wz();
})();
