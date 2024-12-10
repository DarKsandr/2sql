import{S as n}from"./SqlSelectLink-BWrYRJyF.js";import{o as s,c as i,a as t,b as l,d as r,F as a}from"./index-CrHGDJB2.js";const x={__name:"SqlUnion",setup(g){return(d,e)=>(s(),i(a,null,[t("p",null,[e[0]||(e[0]=l("Оператор SQL UNION используется для объединения двух и более запросов оператора ")),r(n),e[1]||(e[1]=l("."))]),e[4]||(e[4]=t("p",null,"Оператор SQL UNION имеет следующий синтаксис:",-1)),e[5]||(e[5]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`
SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2

`,-1)),t("p",null,[e[2]||(e[2]=l("Важно отметить, что каждый из операторов ")),r(n),e[3]||(e[3]=l(" должен иметь в своем запросе одинаковое количество столбцов и типы возвращаемых данных, иначе произойдет ошибка при формировании результирующей таблицы."))]),e[6]||(e[6]=t("hr",null,null,-1)),e[7]||(e[7]=t("p",null,[t("strong",null,"Примеры оператора SQL UNION. "),l("Имеется следующая "),t("abbr",{title:"Singer - Исполнитель; Album - Альбом; Year - Год Выхода; Sale - Число продаж"},"таблица Artists:")],-1)),e[8]||(e[8]=t("table",{border:"1",cellspacing:"0"},[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"Singer")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Album")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Year")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Sale")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"Invaders Must Die"),t("td",{style:{"text-align":"center"}},"2008"),t("td",{style:{"text-align":"center"}},"1200000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"Sinner"),t("td",{style:{"text-align":"center"}},"2001"),t("td",{style:{"text-align":"center"}},"400000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"Mezzanine"),t("td",{style:{"text-align":"center"}},"1998"),t("td",{style:{"text-align":"center"}},"2300000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"Fat of the Land"),t("td",{style:{"text-align":"center"}},"1997"),t("td",{style:{"text-align":"center"}},"600000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"Music For The Jilted Generation"),t("td",{style:{"text-align":"center"}},"1994"),t("td",{style:{"text-align":"center"}},"1500000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"100th Window"),t("td",{style:{"text-align":"center"}},"2003"),t("td",{style:{"text-align":"center"}},"1200000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"Full Circle"),t("td",{style:{"text-align":"center"}},"2007"),t("td",{style:{"text-align":"center"}},"800000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"Danny The Dog"),t("td",{style:{"text-align":"center"}},"2004"),t("td",{style:{"text-align":"center"}},"1900000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"Resilience"),t("td",{style:{"text-align":"center"}},"2013"),t("td",{style:{"text-align":"center"}},"500000")])])],-1)),e[9]||(e[9]=t("p",null,[t("strong",null,"Пример 1. "),l("С помощью оператора SQL UNION вывести название исполнителя и альбома с использованием оператора UNION:")],-1)),e[10]||(e[10]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT Singer FROM Artists
UNION
SELECT Album FROM Artists
`,-1)),e[11]||(e[11]=t("p",null,[t("em",null,"Результат:")],-1)),e[12]||(e[12]=t("table",{border:"1",cellspacing:"0"},[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"Singer")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Album")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"Invaders Must Die")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"Sinner")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"Mezzanine")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"Fat of the Land")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"Music For The Jilted Generation")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"100th Window")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"Full Circle")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"Danny The Dog")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"Resilience")])])],-1))],64))}};export{x as default};
