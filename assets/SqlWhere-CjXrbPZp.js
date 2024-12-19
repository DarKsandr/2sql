import{S as x}from"./SqlAndOrLink-D6Z1GglG.js";import{_ as g,r as i,o as a,f as d,w as s,b as n,c as y,a as t,d as r,F as c}from"./index-Dku5cubG.js";const p={};function m(o,l){const e=i("RouterLink");return a(),d(e,{to:{name:"sql-not"},title:"Оператор SQL NOT - примеры использования"},{default:s(()=>l[0]||(l[0]=[n("NOT")])),_:1})}const E=g(p,[["render",m]]),N={};function L(o,l){const e=i("RouterLink");return a(),d(e,{to:{name:"sql-like"},title:"Оператор SQL LIKE - примеры использования"},{default:s(()=>l[0]||(l[0]=[n("LIKE")])),_:1})}const R=g(N,[["render",L]]),S={};function f(o,l){const e=i("RouterLink");return a(),d(e,{to:{name:"sql-between"},title:"Оператор SQL BETWEEN - примеры использования"},{default:s(()=>l[0]||(l[0]=[n("BETWEEN")])),_:1})}const O=g(S,[["render",f]]),k={};function b(o,l){const e=i("RouterLink");return a(),d(e,{to:{name:"sql-in"},title:"Оператор SQL IN - примеры использования"},{default:s(()=>l[0]||(l[0]=[n("IN")])),_:1})}const q=g(k,[["render",b]]),P={__name:"SqlWhere",setup(o){return(l,e)=>{const u=i("table-scroll");return a(),y(c,null,[e[11]||(e[11]=t("p",null,"Оператор SQL WHERE служит для задания дополнительного условия выборки, операций вставки, редактирования и удаления записей.",-1)),e[12]||(e[12]=t("p",null,"Оператор SQL WHERE имеет следующий синтаксис:",-1)),e[13]||(e[13]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`WHERE condition
`,-1)),t("p",null,[e[0]||(e[0]=n("Условие (")),e[1]||(e[1]=t("em",null,"condition",-1)),e[2]||(e[2]=n(") может включать в себя предикаты ")),r(x),e[3]||(e[3]=n(", ")),r(E),e[4]||(e[4]=n(", ")),r(R),e[5]||(e[5]=n(", ")),r(O),e[6]||(e[6]=n(", ")),r(q),e[7]||(e[7]=n(", ключевое слово NULL, операторы сравнения и равенства (<, >, =)."))]),e[14]||(e[14]=t("hr",null,null,-1)),e[15]||(e[15]=t("p",null,[t("strong",null,[n("Примеры"),t("strong",null," оператора SQL WHERE"),n(". ")]),n("Имеется следующая "),t("abbr",{title:"ID - Порядковый номер планеты; PlanetName - Название; Radius - Радиус; SunSeason - Период обращения вокруг Солнца; OpeningYear - Год открытия; HavingRings - Имеет или нет кольца; Opener - Первооткрыватель"},"таблица Planets"),n(":")],-1)),r(u,{border:"1",cellspacing:"0"},{default:s(()=>e[8]||(e[8]=[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"ID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"PlanetName")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Radius")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"SunSeason")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"OpeningYear")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"HavingRings")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Opener")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Mars"),t("td",{style:{"text-align":"center"}},"3396"),t("td",{style:{"text-align":"center"}},"687"),t("td",{style:{"text-align":"center"}},"1659"),t("td",{style:{"text-align":"center"}},"No"),t("td",{style:{"text-align":"center"}},"Christiaan Huygens")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"2"),t("td",{style:{"text-align":"center"}},"Saturn"),t("td",{style:{"text-align":"center"}},"60268"),t("td",{style:{"text-align":"center"}},"10759.22"),t("td",{style:{"text-align":"center"}},"-"),t("td",{style:{"text-align":"center"}},"Yes"),t("td",{style:{"text-align":"center"}},"-")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Neptune"),t("td",{style:{"text-align":"center"}},"24764"),t("td",{style:{"text-align":"center"}},"60190"),t("td",{style:{"text-align":"center"}},"1846"),t("td",{style:{"text-align":"center"}},"Yes"),t("td",{style:{"text-align":"center"}},"John Couch Adams")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"4"),t("td",{style:{"text-align":"center"}},"Mercury"),t("td",{style:{"text-align":"center"}},"2439"),t("td",{style:{"text-align":"center"}},"115.88"),t("td",{style:{"text-align":"center"}},"1631"),t("td",{style:{"text-align":"center"}},"No"),t("td",{style:{"text-align":"center"}},"Nicolaus Copernicus")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"5"),t("td",{style:{"text-align":"center"}},"Venus"),t("td",{style:{"text-align":"center"}},"6051"),t("td",{style:{"text-align":"center"}},"243"),t("td",{style:{"text-align":"center"}},"1610"),t("td",{style:{"text-align":"center"}},"No"),t("td",{style:{"text-align":"center"}},"Galileo Galilei")])],-1)])),_:1}),e[16]||(e[16]=t("p",null,[t("strong",null,"Пример 1."),n(" Используя оператор SQL WHERE вывести записи, значение радиуса (Radius) которых находится в пределах от 3000 до 9000:")],-1)),e[17]||(e[17]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT * FROM Planets WHERE Radius BETWEEN 3000 AND 9000
`,-1)),e[18]||(e[18]=t("p",null,[t("em",null,"Результат:")],-1)),r(u,{border:"1",cellspacing:"0"},{default:s(()=>e[9]||(e[9]=[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"ID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"PlanetName")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Radius")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"SunSeason")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"OpeningYear")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"HavingRings")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Opener")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Mars"),t("td",{style:{"text-align":"center"}},"3396"),t("td",{style:{"text-align":"center"}},"687"),t("td",{style:{"text-align":"center"}},"1659"),t("td",{style:{"text-align":"center"}},"No"),t("td",{style:{"text-align":"center"}},"Christiaan Huygens")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"5"),t("td",{style:{"text-align":"center"}},"Venus"),t("td",{style:{"text-align":"center"}},"6051"),t("td",{style:{"text-align":"center"}},"243"),t("td",{style:{"text-align":"center"}},"1610"),t("td",{style:{"text-align":"center"}},"No"),t("td",{style:{"text-align":"center"}},"Galileo Galilei")])],-1)])),_:1}),e[19]||(e[19]=t("p",null,[t("strong",null,"Пример 2. "),n("Используя оператор SQL WHERE вывести название планеты (PlanetName), год ее открытия (OpeningYear) и имя первооткрывателя (Opener), планет, чье название не начинается или не заканчивается на букву «s»:")],-1)),e[20]||(e[20]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT PlanetName, OpeningYear, Opener
FROM Planets
WHERE PlanetName NOT LIKE '%s'
AND PlanetName NOT LIKE 'S%'
`,-1)),e[21]||(e[21]=t("p",null,[t("em",null,"Результат:")],-1)),r(u,{border:"1",cellspacing:"0"},{default:s(()=>e[10]||(e[10]=[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"PlanetName")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"OpeningYear")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Opener")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Neptune"),t("td",{style:{"text-align":"center"}},"1846"),t("td",{style:{"text-align":"center"}},"John Couch Adams")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Mercury"),t("td",{style:{"text-align":"center"}},"1631"),t("td",{style:{"text-align":"center"}},"Nicolaus Copernicus")])],-1)])),_:1})],64)}}};export{P as default};