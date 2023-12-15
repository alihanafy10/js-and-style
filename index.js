document.body.style.cssText=`margin: 0;background-color: #eee;`
//nav
let nav = document.createElement(`div`);
nav.style.cssText = `display: flex;
justify-content: space-between;
align-items: center;
padding: 0 10px;
background-color: #fff;`

let icon = document.createElement(`h1`);
icon.innerHTML = `Ali`;
icon.style.color = `#0da50d`;

let lista = document.createElement(`ul`);
lista.style.cssText=`display:flex;`

let arr = [`Home`,`About`, `Services`, `Contact`];
for (let i = 0; i < 4; i++){
  let li = document.createElement(`li`);
  li.style.cssText=`list-style: none; padding: 10px; color: #ababab; `
  let a = document.createElement(`a`);
  a.textContent = `${arr[i]}`;
  li.appendChild(a);
  lista.appendChild(li);
}
nav.appendChild(icon);
nav.appendChild(lista);
document.body.append(nav);

//content
let header = document.createElement(`header`);
header.style.cssText = `display: flex; flex-wrap:wrap;`;
for (let i = 1; i <= 15; i++) { 
  let div = document.createElement(`div`);
  div.style.cssText = `width: calc(100% / 3 - 40px);
   height: 100px;
   background-color: white;
   margin: 10px;
   padding: 10px;
   display: flex;
  flex-direction: column;
   justify-content: center;
   align-items: center;
   font-family: monospace;`;
  let p = document.createElement(`p`);
p.style.cssText=`font-size:30px; margin:0; font-weight:bold`
  let span = document.createElement(`span`);
  span.style.cssText=`color: #ababab;`
  span.innerHTML = `product`;
  p.innerHTML = `${i}`;
  div.appendChild(p);
  div.appendChild(span);
  header.appendChild(div);
}
document.body.append(header);


//footer
let footer = document.createElement('footer');

footer.style.cssText = `text-align: center;
padding: 20px; 
background-color:#0da50d;`
let creat = document.createElement('p');
creat.style.color = `white`;
creat.innerHTML = `Created by Ali Hanafy`;
footer.appendChild(creat);
document.body.append(footer);