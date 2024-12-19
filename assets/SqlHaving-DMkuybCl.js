import{_ as u,r as i,o,f as g,w as s,b as n,c as x,a as t,d as r,F as y}from"./index-Dku5cubG.js";import{S}from"./SqlWhereLink-geH-ywr3.js";import{S as m}from"./SqlGroupByLink-S5w6u1y8.js";const L={};function p(a,l){const e=i("RouterLink");return o(),g(e,{to:{name:"sql-count"},title:"Функция SQL COUNT() - примеры использования"},{default:s(()=>l[0]||(l[0]=[n("SQL COUNT()")])),_:1})}const f=u(L,[["render",p]]),c={};function k(a,l){const e=i("RouterLink");return o(),g(e,{to:{name:"sql-min"},title:"Функция SQL MIN() - примеры использования"},{default:s(()=>l[0]||(l[0]=[n("SQL MIN()")])),_:1})}const A=u(c,[["render",k]]),M={};function N(a,l){const e=i("RouterLink");return o(),g(e,{to:{name:"sql-max"},title:"Функция SQL MAX() - примеры использования"},{default:s(()=>l[0]||(l[0]=[n("SQL MAX()")])),_:1})}const b=u(M,[["render",N]]),Q={};function q(a,l){const e=i("RouterLink");return o(),g(e,{to:{name:"sql-avg"},title:"Функция SQL AVG() - примеры использования"},{default:s(()=>l[0]||(l[0]=[n("SQL AVG()")])),_:1})}const G=u(Q,[["render",q]]),I={};function R(a,l){const e=i("RouterLink");return o(),g(e,{to:{name:"sql-sum"},title:"Функция SQL SUM() - примеры использования"},{default:s(()=>l[0]||(l[0]=[n("SQL SUM()")])),_:1})}const V=u(I,[["render",R]]),H={__name:"SqlHaving",setup(a){return(l,e)=>{const d=i("table-scroll");return o(),x(y,null,[t("p",null,[e[0]||(e[0]=n("Оператор SQL HAVING является указателем на результат выполнения агрегатных функций. Агрегатной функцией в языке SQL называется функция, возвращающая какое-либо одно значение по набору значений столбца. Такими функциями являются: ")),r(f),e[1]||(e[1]=n(", ")),r(A),e[2]||(e[2]=n(", ")),r(b),e[3]||(e[3]=n(", ")),r(G),e[4]||(e[4]=n(", ")),r(V),e[5]||(e[5]=n("."))]),e[12]||(e[12]=t("p",null,"Оператор SQL HAVING имеет следующий синтаксис:",-1)),e[13]||(e[13]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`HAVING aggregate_function(column_name) operator value
`,-1)),t("p",null,[e[6]||(e[6]=n("Оператор SQL HAVING аналогичен оператору ")),r(S),e[7]||(e[7]=n(" за тем исключением, что применяется не для всего набора столбцов таблицы, а для набора созданного оператором ")),r(m),e[8]||(e[8]=n(" и применяется всегда строго после него."))]),e[14]||(e[14]=t("hr",null,null,-1)),e[15]||(e[15]=t("p",null,[t("strong",null,[n("Примеры "),t("strong",null,"оператора SQL HAVING"),n(". ")]),n("Имеется следующая "),t("abbr",{title:"Singer - Исполнитель; Album - Альбом; Year - Год Выхода; Sale - Число продаж"},"таблица Artists:")],-1)),r(d,{border:"1",cellspacing:"0"},{default:s(()=>e[9]||(e[9]=[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"Singer")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Album")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Year")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Sale")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"Invaders Must Die"),t("td",{style:{"text-align":"center"}},"2008"),t("td",{style:{"text-align":"center"}},"1200000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"Sinner"),t("td",{style:{"text-align":"center"}},"2001"),t("td",{style:{"text-align":"center"}},"400000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"Mezzanine"),t("td",{style:{"text-align":"center"}},"1998"),t("td",{style:{"text-align":"center"}},"2300000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"Fat of the Land"),t("td",{style:{"text-align":"center"}},"1997"),t("td",{style:{"text-align":"center"}},"600000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"Music For The Jilted Generation"),t("td",{style:{"text-align":"center"}},"1994"),t("td",{style:{"text-align":"center"}},"1500000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"100th Window"),t("td",{style:{"text-align":"center"}},"2003"),t("td",{style:{"text-align":"center"}},"1200000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"Full Circle"),t("td",{style:{"text-align":"center"}},"2007"),t("td",{style:{"text-align":"center"}},"800000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"Danny The Dog"),t("td",{style:{"text-align":"center"}},"2004"),t("td",{style:{"text-align":"center"}},"1900000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"Resilience"),t("td",{style:{"text-align":"center"}},"2013"),t("td",{style:{"text-align":"center"}},"500000")])],-1)])),_:1}),e[16]||(e[16]=t("p",null,[t("strong",null,"Пример 1. "),n("Используя оператор SQL HAVING вывести название исполнителей (Singer) число продаж альбомов (Sale) которого больше 2000000:")],-1)),e[17]||(e[17]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT Singer, SUM(Sale)
FROM Artists
GROUP BY Singer
HAVING SUM(Sale) > 2000000
`,-1)),e[18]||(e[18]=t("p",null,[t("em",null,"Результат:")],-1)),r(d,{border:"1",cellspacing:"0"},{default:s(()=>e[10]||(e[10]=[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"Singer")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Sum(Sale)")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"54000000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"33000000")])],-1)])),_:1}),e[19]||(e[19]=t("p",null,"В результат не попала группа Drowning Pool, так как общее число проданных ею пластинок равняется 1700000",-1)),e[20]||(e[20]=t("p",null,[t("strong",null,"Пример 2. "),n("Используя оператор SQL HAVING вывести название исполнителя, который исполнялся еще до 1995 года:")],-1)),e[21]||(e[21]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT Singer, MIN(Year)
FROM Artists
GROUP BY Singer
HAVING MIN(Year) < 1995
`,-1)),e[22]||(e[22]=t("p",null,[t("em",null,"Результат:")],-1)),r(d,{border:"1",cellspacing:"0"},{default:s(()=>e[11]||(e[11]=[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",{style:{"text-align":"center"}},"Singer")]),t("td",{style:{"text-align":"center"}},[t("b",null,"MIN(Year)")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"1994")])],-1)])),_:1})],64)}}};export{H as default};