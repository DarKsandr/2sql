import{_ as n,o as r,c as s,a as t,b as l,F as i}from"./index-CrHGDJB2.js";const g={};function a(d,e){return r(),s(i,null,[e[0]||(e[0]=t("p",null,[l("Оператор SQL NOT служит для задания противоположно заданного условия. Является эквивалентом операции инверсии в математической логике и может применяется только для "),t("abbr",{title:"Принимающих только два параметра: TRUE или FALSE"},"булевых значений"),l(".")],-1)),e[1]||(e[1]=t("p",null,"Оператор SQL NOT имеет следующий синтаксис:",-1)),e[2]||(e[2]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`[ NOT ] boolean_expression
`,-1)),e[3]||(e[3]=t("hr",null,null,-1)),e[4]||(e[4]=t("p",null,[t("strong",null,"Примеры оператора SQL NOT. "),l("Имеется следующая "),t("abbr",{title:"Singer - Исполнитель; Album - Альбом; Year - Год Выхода; Sale - Число продаж"},"таблица Artists:")],-1)),e[5]||(e[5]=t("table",{border:"1",cellspacing:"0"},[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"Singer")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Album")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Year")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Sale")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"Invaders Must Die"),t("td",{style:{"text-align":"center"}},"2008"),t("td",{style:{"text-align":"center"}},"1200000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"Sinner"),t("td",{style:{"text-align":"center"}},"2001"),t("td",{style:{"text-align":"center"}},"400000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"Mezzanine"),t("td",{style:{"text-align":"center"}},"1998"),t("td",{style:{"text-align":"center"}},"2300000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"Fat of the Land"),t("td",{style:{"text-align":"center"}},"1997"),t("td",{style:{"text-align":"center"}},"600000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"Music For The Jilted Generation"),t("td",{style:{"text-align":"center"}},"1994"),t("td",{style:{"text-align":"center"}},"1500000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"100th Window"),t("td",{style:{"text-align":"center"}},"2003"),t("td",{style:{"text-align":"center"}},"1200000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"Full Circle"),t("td",{style:{"text-align":"center"}},"2007"),t("td",{style:{"text-align":"center"}},"800000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"Danny The Dog"),t("td",{style:{"text-align":"center"}},"2004"),t("td",{style:{"text-align":"center"}},"1900000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"Resilience"),t("td",{style:{"text-align":"center"}},"2013"),t("td",{style:{"text-align":"center"}},"500000")])])],-1)),e[6]||(e[6]=t("p",null,[t("strong",null,"Пример 1. "),l("Используя оператор SQL NOT вывести записи таблицы, без исполнителя Drowning Pool и Massive Attack:")],-1)),e[7]||(e[7]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT * FROM Artists WHERE Singer NOT IN ('Drowning Pool', 'Massive Attack')
`,-1)),e[8]||(e[8]=t("p",null,[t("em",null,"Результат:")],-1)),e[9]||(e[9]=t("table",{border:"1",cellspacing:"0"},[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"Singer")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Album")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Year")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Sale")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"Invaders Must Die"),t("td",{style:{"text-align":"center"}},"2008"),t("td",{style:{"text-align":"center"}},"1200000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"Fat of the Land"),t("td",{style:{"text-align":"center"}},"1997"),t("td",{style:{"text-align":"center"}},"600000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"The Prodigy"),t("td",{style:{"text-align":"center"}},"Music For The Jilted Generation"),t("td",{style:{"text-align":"center"}},"1994"),t("td",{style:{"text-align":"center"}},"1500000")])])],-1)),e[10]||(e[10]=t("p",null,"Очевидно, что в нашем случае, с такой небольшой таблицей удобней было бы использовать запрос:",-1)),e[11]||(e[11]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`
SELECT * FROM Artists WHERE Singer = "The Prodigy"

`,-1)),e[12]||(e[12]=t("p",null,"Однако, в случае огромных таблиц с тысячами записей где надо получить выборку исключающего множества, оператор SQL NOT подходит как нельзя лучше.",-1)),e[13]||(e[13]=t("p",null,[t("strong",null,"Пример 2. "),l("Вывести записи таблицы, в которых название альбома содержит одно слово:")],-1)),e[14]||(e[14]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT * FROM Artists WHERE Album NOT LIKE "% %"
`,-1)),e[15]||(e[15]=t("p",null,[t("em",null,"Результат:")],-1)),e[16]||(e[16]=t("table",{border:"1",cellspacing:"0"},[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"Singer")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Album")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Year")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Sale")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"Sinner"),t("td",{style:{"text-align":"center"}},"2001"),t("td",{style:{"text-align":"center"}},"400000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Massive Attack"),t("td",{style:{"text-align":"center"}},"Mezzanine"),t("td",{style:{"text-align":"center"}},"1998"),t("td",{style:{"text-align":"center"}},"2300000")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Drowning Pool"),t("td",{style:{"text-align":"center"}},"Resilience"),t("td",{style:{"text-align":"center"}},"2013"),t("td",{style:{"text-align":"center"}},"500000")])])],-1))],64)}const o=n(g,[["render",a]]);export{o as default};