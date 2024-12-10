import{S as r}from"./SqlLimitLink-C4mCnYQd.js";import{S as s}from"./SqlTopLink-BDzpbO13.js";import{o as a,c as i,a as t,b as n,d as l,e as g,F as o}from"./index-CrHGDJB2.js";const S={__name:"SqlFirst",setup(d){return(u,e)=>(a(),i(o,null,[e[9]||(e[9]=t("p",null,"Оператор SQL FIRST() — функция, возвращающая первое значение столбца или столбцов таблицы.",-1)),e[10]||(e[10]=t("p",null,[t("strong",null,"Используется только в СУБД MS Access!")],-1)),e[11]||(e[11]=t("p",null,"Функция SQL FIRST() имеет следующий синтаксис:",-1)),e[12]||(e[12]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`FIRST(column_name)
`,-1)),t("p",null,[e[0]||(e[0]=n("Аналогом функции SQL FIRST() для ")),e[1]||(e[1]=t("strong",null,"MySQL",-1)),e[2]||(e[2]=n(" будет оператор ")),l(r),e[3]||(e[3]=n(". Для")),e[4]||(e[4]=t("strong",null," MS SQL Server",-1)),e[5]||(e[5]=n(" оператор ")),l(s),e[6]||(e[6]=n(". Для ")),e[7]||(e[7]=t("strong",null,"Oracle",-1)),e[8]||(e[8]=n(" оператор ROWNUM."))]),e[13]||(e[13]=t("p",null,"Примеры аналогов функции SQL FIRST() для различных СУБД описаны ниже.",-1)),e[14]||(e[14]=t("hr",null,null,-1)),e[15]||(e[15]=t("p",null,[t("strong",null,"Примеры оператора SQL FIRST. "),n("Имеется следующая "),t("abbr",{title:"ID - Порядковый номер планеты; PlanetName - Название; Radius - Радиус; SunSeason - Период обращения вокруг Солнца; OpeningYear - Год открытия; HavingRings - Имеет или нет кольца; Opener - Первооткрыватель"},"таблица Planets"),n(":")],-1)),e[16]||(e[16]=t("table",{border:"1",cellspacing:"0"},[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"ID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"PlanetName")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Radius")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"SunSeason")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"OpeningYear")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"HavingRings")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Opener")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Mars"),t("td",{style:{"text-align":"center"}},"3396"),t("td",{style:{"text-align":"center"}},"687"),t("td",{style:{"text-align":"center"}},"1659"),t("td",{style:{"text-align":"center"}},"No"),t("td",{style:{"text-align":"center"}},"Christiaan Huygens")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"2"),t("td",{style:{"text-align":"center"}},"Saturn"),t("td",{style:{"text-align":"center"}},"60268"),t("td",{style:{"text-align":"center"}},"10759.22"),t("td",{style:{"text-align":"center"}},"—"),t("td",{style:{"text-align":"center"}},"Yes"),t("td",{style:{"text-align":"center"}},"—")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Neptune"),t("td",{style:{"text-align":"center"}},"24764"),t("td",{style:{"text-align":"center"}},"60190"),t("td",{style:{"text-align":"center"}},"1846"),t("td",{style:{"text-align":"center"}},"Yes"),t("td",{style:{"text-align":"center"}},"John Couch Adams")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"4"),t("td",{style:{"text-align":"center"}},"Mercury"),t("td",{style:{"text-align":"center"}},"2439"),t("td",{style:{"text-align":"center"}},"115.88"),t("td",{style:{"text-align":"center"}},"1631"),t("td",{style:{"text-align":"center"}},"No"),t("td",{style:{"text-align":"center"}},"Nicolaus Copernicus")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"5"),t("td",{style:{"text-align":"center"}},"Venus"),t("td",{style:{"text-align":"center"}},"6051"),t("td",{style:{"text-align":"center"}},"243"),t("td",{style:{"text-align":"center"}},"1610"),t("td",{style:{"text-align":"center"}},"No"),t("td",{style:{"text-align":"center"}},"Galileo Galilei")])])],-1)),e[17]||(e[17]=g(`<p><strong>Пример 1. </strong>Используя оператор SQL FIRST вывести первое значение столбца PlanetName:</p><p>Решение для <strong>MS Access:</strong></p><pre class="brush: sql; title: ; notranslate" title="">SELECT FIRST(PlanetName)
FROM Planets
</pre><p>Решение для <strong>MySQL:</strong></p><pre class="brush: sql; title: ; notranslate" title="">SELECT PlanetName
FROM Planets
ORDER BY PlanetName ASC
LIMIT 1
</pre><p>Решение для <strong>MS SQL Server:</strong></p><pre class="brush: sql; title: ; notranslate" title="">SELECT TOP 1 PlanetName
FROM Planets
ORDER BY PlanetName ASC
</pre><p>Решение для <strong>Oracle:</strong></p><pre class="brush: sql; title: ; notranslate" title="">SELECT PlanetName
FROM Planets
ORDER BY PlanetName ASC
WHERE ROWNUM &lt;=1
</pre><p><em>Результат:</em></p>`,10)),e[18]||(e[18]=t("table",{border:"1",cellspacing:"0"},[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"PlanetName")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"Mars")])])],-1))],64))}};export{S as default};
