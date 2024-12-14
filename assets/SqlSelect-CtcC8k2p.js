import{S as i}from"./SqlWhereLink-Cv-PTl2R.js";import{S as a}from"./SqlGroupByLink-Bw44diFU.js";import{S as g}from"./SqlHavingLink-UyM7PXi0.js";import{S as u}from"./SqlOrderByLink-CxmGPzfG.js";import{o as d,c as o,a as t,b as l,d as n,w as s,F as y,r as x}from"./index-BPKUs_jX.js";const b={__name:"SqlSelect",setup(p){return(S,e)=>{const r=x("table-scroll");return d(),o(y,null,[e[9]||(e[9]=t("p",null,[l("Оператор SQL SELECT является одним из основных операторов языка SQL."),t("span",{id:"more-161"}),l(" Именно с его помощью происходит выборка значений, хранящихся в базе данных. В структуру запроса оператора SQL SELECT могут быть включены многие дополнительные операторы: уточняющие условие выборки, производящие группировку, сортировку выходных значений и т.д.")],-1)),e[10]||(e[10]=t("p",null,"Оператор SQL SELECT имеет следующий синтаксис:",-1)),e[11]||(e[11]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT column_list
FROM table_name
[WHERE сondition
GROUP BY expression
HAVING condition
ORDER BY expression]
`,-1)),e[12]||(e[12]=t("p",null,"Необязательные операторы обрамлены квадратными скобками [].",-1)),t("p",null,[e[0]||(e[0]=l("В параметре column_list указываются названия столбцов таблицы, которые необходимо вывести, либо символ “*”, позволяющий вывести все столбцы таблицы. Ключевым словом FROM задается название таблицы или таблиц, из которых следует брать столбцы. Оператор ")),n(i),e[1]||(e[1]=l(" задает дополнительные условия выборки. Оператор ")),n(a),e[2]||(e[2]=l(" используют для группирования результата по столбцу или по нескольким столбцам. Оператор ")),n(g),e[3]||(e[3]=l(" включают в запрос для задания условия агрегатных функций. Наконец, оператор ")),n(u),e[4]||(e[4]=l(" используется для сортировки значений."))]),e[13]||(e[13]=t("hr",null,null,-1)),e[14]||(e[14]=t("p",null,[t("strong",null,"Примеры оператора SQL SELECT. "),l("Имеется следующая "),t("abbr",{title:"ID - Порядковый номер планеты; PlanetName - Название; Radius - Радиус; SunSeason - Период обращения вокруг Солнца; OpeningYear - Год открытия; HavingRings - Имеет или нет кольца; Opener - Первооткрыватель"},"таблица Planets"),l(":")],-1)),n(r,{border:"1",cellspacing:"0"},{default:s(()=>e[5]||(e[5]=[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"ID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"PlanetName")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Radius")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"SunSeason")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"OpeningYear")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"HavingRings")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Opener")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Mars"),t("td",{style:{"text-align":"center"}},"3396"),t("td",{style:{"text-align":"center"}},"687"),t("td",{style:{"text-align":"center"}},"1659"),t("td",{style:{"text-align":"center"}},"No"),t("td",{style:{"text-align":"center"}},"Christiaan Huygens")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"2"),t("td",{style:{"text-align":"center"}},"Saturn"),t("td",{style:{"text-align":"center"}},"60268"),t("td",{style:{"text-align":"center"}},"10759.22"),t("td",{style:{"text-align":"center"}},"—"),t("td",{style:{"text-align":"center"}},"Yes"),t("td",{style:{"text-align":"center"}},"—")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Neptune"),t("td",{style:{"text-align":"center"}},"24764"),t("td",{style:{"text-align":"center"}},"60190"),t("td",{style:{"text-align":"center"}},"1846"),t("td",{style:{"text-align":"center"}},"Yes"),t("td",{style:{"text-align":"center"}},"John Couch Adams")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"4"),t("td",{style:{"text-align":"center"}},"Mercury"),t("td",{style:{"text-align":"center"}},"2439"),t("td",{style:{"text-align":"center"}},"115.88"),t("td",{style:{"text-align":"center"}},"1631"),t("td",{style:{"text-align":"center"}},"No"),t("td",{style:{"text-align":"center"}},"Nicolaus Copernicus")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"5"),t("td",{style:{"text-align":"center"}},"Venus"),t("td",{style:{"text-align":"center"}},"6051"),t("td",{style:{"text-align":"center"}},"243"),t("td",{style:{"text-align":"center"}},"1610"),t("td",{style:{"text-align":"center"}},"No"),t("td",{style:{"text-align":"center"}},"Galileo Galilei")])],-1)])),_:1}),e[15]||(e[15]=t("p",null,[t("strong",null,"Пример 1"),l(". С помощью оператора SQL SELECT вывести названия планет (Name):")],-1)),e[16]||(e[16]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT PlanetName FROM Planets
`,-1)),e[17]||(e[17]=t("p",null,[t("em",null,"Результат:")],-1)),n(r,{border:"1",cellspacing:"0"},{default:s(()=>e[6]||(e[6]=[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"PlanetName")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Mars")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Saturn")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Neptune")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Mercury")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Venus")])],-1)])),_:1}),e[18]||(e[18]=t("p",null,[t("strong",null,"Пример 2. "),l("С помощью оператора SQL SELECT вывести названия планет, у которых есть кольца (HavingRings):")],-1)),e[19]||(e[19]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT PlanetName FROM Planet WHERE HavingRings = 'Yes'
`,-1)),e[20]||(e[20]=t("p",null,[t("em",null,"Результат:")],-1)),n(r,{border:"1",cellspacing:"0"},{default:s(()=>e[7]||(e[7]=[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"PlanetName")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Saturn")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Neptune")])],-1)])),_:1}),e[21]||(e[21]=t("p",null,[t("strong",null,"Пример 3. "),l("С помощью оператора SQL SELECT вывести информацию о планете Нептун:")],-1)),e[22]||(e[22]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT * FROM Planets WHERE PlanetName = 'Neptune'
`,-1)),e[23]||(e[23]=t("p",null,[t("em",null,"Результат:")],-1)),n(r,{border:"1",cellspacing:"0"},{default:s(()=>e[8]||(e[8]=[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"ID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"PlanetName")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Radius")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"SunSeason")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"OpeningYear")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"HavingRings")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Opener")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Neptune"),t("td",{style:{"text-align":"center"}},"24764"),t("td",{style:{"text-align":"center"}},"60190"),t("td",{style:{"text-align":"center"}},"1846"),t("td",{style:{"text-align":"center"}},"Yes"),t("td",{style:{"text-align":"center"}},"John Couch Adams")])],-1)])),_:1})],64)}}};export{b as default};
