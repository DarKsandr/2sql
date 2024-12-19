import{S as o}from"./SqlHavingLink-BC6sn8gi.js";import{_ as u,r as a,o as g,f as y,w as r,b as l,c as x,a as t,d as n,F as S}from"./index-Dku5cubG.js";const p={};function c(d,s){const e=a("RouterLink");return g(),y(e,{to:{name:"sql-as"},title:"Оператор SQL AS - примеры использования"},{default:r(()=>s[0]||(s[0]=[l("SQL AS")])),_:1})}const A=u(p,[["render",c]]),P={__name:"SqlGroupBy",setup(d){return(s,e)=>{const i=a("table-scroll");return g(),x(S,null,[e[8]||(e[8]=t("p",null,"Оператор SQL GROUP BY используется для объединения результатов выборки по одному или нескольким столбцам.",-1)),e[9]||(e[9]=t("p",null,"Оператор SQL GROUP BY имеет следующий синтаксис:",-1)),e[10]||(e[10]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`GROUP BY column_name
`,-1)),t("p",null,[e[0]||(e[0]=l("С использованием оператора SQL GROUP BY тесно связано использование ")),e[1]||(e[1]=t("abbr",{title:"Функция, возвращающая одно значение от набора значений столбца. Пример: SUM(), MAX(), MIN()."},"агрегатных функций",-1)),e[2]||(e[2]=l(" и оператор ")),n(o)]),e[11]||(e[11]=t("hr",null,null,-1)),e[12]||(e[12]=t("p",null,[t("strong",null,[l("Примеры"),t("strong",null," оператора SQL GROUP BY"),l(". ")]),l("Имеется следующая "),t("abbr",{title:"Singer - Исполнитель; Album - Альбом; Year - Год Выхода; Sale - Число продаж"},"таблица Artists:")],-1)),n(i,{border:"1",cellspacing:"0"},{default:r(()=>e[3]||(e[3]=[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"Singer")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Album")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Year")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Sale")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"Invaders Must Die"),t("td",{style:{"text-align":"center"}},"2008"),t("td",{style:{"text-align":"center"}},"1200000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"Sinner"),t("td",{style:{"text-align":"center"}},"2001"),t("td",{style:{"text-align":"center"}},"400000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"Mezzanine"),t("td",{style:{"text-align":"center"}},"1998"),t("td",{style:{"text-align":"center"}},"2300000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"Fat of the Land"),t("td",{style:{"text-align":"center"}},"1997"),t("td",{style:{"text-align":"center"}},"600000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"Music For The Jilted Generation"),t("td",{style:{"text-align":"center"}},"1994"),t("td",{style:{"text-align":"center"}},"1500000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"100th Window"),t("td",{style:{"text-align":"center"}},"2003"),t("td",{style:{"text-align":"center"}},"1200000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"Full Circle"),t("td",{style:{"text-align":"center"}},"2007"),t("td",{style:{"text-align":"center"}},"800000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"Danny The Dog"),t("td",{style:{"text-align":"center"}},"2004"),t("td",{style:{"text-align":"center"}},"1900000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"Resilience"),t("td",{style:{"text-align":"center"}},"2013"),t("td",{style:{"text-align":"center"}},"500000")])],-1)])),_:1}),e[13]||(e[13]=t("p",null,[t("strong",null,"Пример 1."),l(" Используя оператор SQL GROUP BY найти сумму продаж альбомов (Sale) всех исполнителей (Singer):")],-1)),e[14]||(e[14]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT Singer, SUM(Sale) AS AllSales
FROM Artists
GROUP BY Singer
`,-1)),e[15]||(e[15]=t("p",null,[t("em",null,"Результат:")],-1)),n(i,{border:"1",cellspacing:"0"},{default:r(()=>e[4]||(e[4]=[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"Singer")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"AllSales")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"1700000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"5400000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"3300000")])],-1)])),_:1}),t("p",null,[e[5]||(e[5]=l("В данном запросе используется оператор ")),n(A),e[6]||(e[6]=l(", позволяющий задать новое имя столбца AllSales на выходе. В нашем случае это сделано для наглядности. "))]),e[16]||(e[16]=t("p",null,[t("strong",null,"Пример 2. "),l("Узнать в каком году был выпущен последний альбом каждой из групп используя оператор SQL GROUP BY:")],-1)),e[17]||(e[17]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT Singer, MAX(Year) AS LastAlbumYear
FROM Artists
GROUP BY Singer
`,-1)),e[18]||(e[18]=t("p",null,[t("em",null,"Результат:")],-1)),n(i,{border:"1",cellspacing:"0"},{default:r(()=>e[7]||(e[7]=[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"Singer")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"LastAlbumYear")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"2013")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"2004")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"2008")])],-1)])),_:1})],64)}}};export{P as default};