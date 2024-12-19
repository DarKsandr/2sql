import{S as i}from"./SqlSelectLink-CivAzRsC.js";import{o as g,c as a,a as t,b as l,d as n,w as s,F as d,r as o}from"./index-Dku5cubG.js";const T={__name:"SqlDistinct",setup(u){return(y,e)=>{const r=o("table-scroll");return g(),a(d,null,[e[5]||(e[5]=t("p",null,[l("Оператор SQL DISTINCT используется для указания на то, что следует работать только с уникальными значениями столбца."),t("span",{id:"more-399"})],-1)),t("p",null,[e[0]||(e[0]=l("Оператор SQL DISTINCT нашел широкое применение в операторе ")),n(i),e[1]||(e[1]=l(", для выборки уникальных значений. Так же используется в агрегатных функциях."))]),e[6]||(e[6]=t("p",null,"Оператор SQL DISTINCT имеет следующий синтаксис:",-1)),e[7]||(e[7]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT DISTINCT column_name FROM table_name
`,-1)),e[8]||(e[8]=t("hr",null,null,-1)),e[9]||(e[9]=t("p",null,[t("strong",null,[l("Примеры"),t("strong",null," оператора SQL DISTINCT"),l(". ")]),l("Имеется следующая "),t("abbr",{title:"Singer - Исполнитель; Album - Альбом; Year - Год Выхода; Sale - Число продаж"},"таблица Artists:")],-1)),n(r,{border:"1",cellspacing:"0"},{default:s(()=>e[2]||(e[2]=[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"Singer")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Album")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Year")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Sale")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"Invaders Must Die"),t("td",{style:{"text-align":"center"}},"2008"),t("td",{style:{"text-align":"center"}},"1200000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"Sinner"),t("td",{style:{"text-align":"center"}},"2001"),t("td",{style:{"text-align":"center"}},"400000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"Mezzanine"),t("td",{style:{"text-align":"center"}},"1998"),t("td",{style:{"text-align":"center"}},"2300000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"Fat of the Land"),t("td",{style:{"text-align":"center"}},"1997"),t("td",{style:{"text-align":"center"}},"600000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"Music For The Jilted Generation"),t("td",{style:{"text-align":"center"}},"1994"),t("td",{style:{"text-align":"center"}},"1500000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"100th Window"),t("td",{style:{"text-align":"center"}},"2003"),t("td",{style:{"text-align":"center"}},"1200000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"Full Circle"),t("td",{style:{"text-align":"center"}},"2007"),t("td",{style:{"text-align":"center"}},"800000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"Danny The Dog"),t("td",{style:{"text-align":"center"}},"2004"),t("td",{style:{"text-align":"center"}},"1900000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"Resilience"),t("td",{style:{"text-align":"center"}},"2013"),t("td",{style:{"text-align":"center"}},"500000")])],-1)])),_:1}),e[10]||(e[10]=t("p",null,[t("strong",null,"Пример 1. "),l("Используя оператор SQL DISTINCT вывести, какие исполнители (Singer) имеются в таблице: ")],-1)),e[11]||(e[11]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT DISTINCT Singer
FROM Artists
`,-1)),e[12]||(e[12]=t("p",null,[t("em",null,"Результат:")],-1)),n(r,{border:"1",cellspacing:"0"},{default:s(()=>e[3]||(e[3]=[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"Singer")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack")])],-1)])),_:1}),e[13]||(e[13]=t("p",null,[t("strong",null,"Пример 2. "),l("Используя оператор SQL DISTINCT вывести количество уникальных исполнителей в таблице: ")],-1)),e[14]||(e[14]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT COUNT(DISTINCT Singer)
AS CountOfSingers
FROM Artists
`,-1)),e[15]||(e[15]=t("p",null,[t("em",null,"Результат:")],-1)),n(r,{border:"1",cellspacing:"0"},{default:s(()=>e[4]||(e[4]=[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"CountOfSingers")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3")])],-1)])),_:1})],64)}}};export{T as default};