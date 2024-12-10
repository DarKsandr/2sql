import{_ as n,o as r,c as s,a,b as t,d as l,F as o}from"./index-BoRpKmuU.js";const i={};function g(u,e){return r(),s(o,null,[e[0]||(e[0]=a(`<p>Оператор SQL RIGHT JOIN осуществляет формирование таблицы из записей двух или нескольких таблиц. В операторе <a title="Оператор SQL RIGHT JOIN - примеры использования" href="https://web.archive.org/web/20231208195709/http://2sql.ru/advanced/sql-right-join/">SQL RIGHT JOIN</a>, как и в операторе <a title="Оператор SQL LEFT JOIN - примеры использования" href="https://web.archive.org/web/20231208195709/http://2sql.ru/advanced/sql-left-join/" target="_blank">SQL LEFT JOIN</a>, важен порядок следования таблиц, так как от этого будет зависеть полученный результат. Алгоритм работы оператора следующий:</p><ol><li>Сначала происходит формирование таблицы внутренним соединением (оператор <a title="Оператор SQL INNER JOIN - примеры использования" href="https://web.archive.org/web/20231208195709/http://2sql.ru/advanced/sql-inner-join/" target="_blank">SQL INNER JOIN</a>) левой и правой таблиц</li><li>Затем, в результат добавляются записи левой таблицы не вошедшие в результат формирования таблицы внутренним соединением. Для них, соответствующие записи из левой таблицы заполняются значениями NULL.</li></ol><p>Оператор SQL RIGHT JOIN имеет следующий синтаксис:</p><pre class="brush: sql; title: ; notranslate" title="">SELECT
    column_names [,... n]
FROM
    Table_1 RIGHT JOIN Table_2 ON condition
</pre><hr><p><strong>Примеры<strong> оператора SQL RIGHT JOIN</strong>. </strong>Имеются две таблицы:</p><p><strong><abbr title="AuthorID - номер автора; AuthorName - имя автора">Authors</abbr></strong> — содержит в себе информацию об авторах книг:</p>`,7)),e[1]||(e[1]=t("table",{border:"1",cellspacing:"0"},[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"AuthorID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"AuthorName")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Bruce Eckel")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"2"),t("td",{style:{"text-align":"center"}},"Robert Lafore")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Andrew Tanenbaum")])])],-1)),e[2]||(e[2]=t("p",null,[t("strong",null,[t("abbr",{title:"BookID - номер книги; BookName - название книги"},"Books")]),l(" — содержит в себе информацию о названии книг:")],-1)),e[3]||(e[3]=t("table",{border:"1",cellspacing:"0"},[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"BookID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"BookName")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Modern Operating System")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Thinking in Java")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Computer Architecture")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"4"),t("td",{style:{"text-align":"center"}},"Programming in Scala")])])],-1)),e[4]||(e[4]=t("p",null,"В таблице Books поле BookID являются внешним ключом и ссылаются на таблицу Authors.",-1)),e[5]||(e[5]=t("p",null,[t("strong",null,"Пример 1. "),l("С помощью оператора SQL RIGHT JOIN вывести авторов всех книг:")],-1)),e[6]||(e[6]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT * FROM Authors
RIGHT JOIN Books ON Authors.AuthorID = Books.BookID
`,-1)),e[7]||(e[7]=t("p",null,[t("em",null,"Результирующая таблица будет выглядеть следующим образом:")],-1)),e[8]||(e[8]=t("table",{border:"1",cellspacing:"0"},[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"Authors.AuthorID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,[l("Authors."),t("strong",null,"AuthorName")])]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Books.BookID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Books.BookName")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Andrew Tanenbaum"),t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Modern Operating System")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Bruce Eckel"),t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Thinking in Java")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Andrew Tanenbaum"),t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Computer Architecture")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"NULL"),t("td",{style:{"text-align":"center"}},"NULL"),t("td",{style:{"text-align":"center"}},"4"),t("td",{style:{"text-align":"center"}},"Programming in Scala")])])],-1)),e[9]||(e[9]=t("p",null,"Информация об авторе книги Programming in Scala отсутствует в таблице Authors, поэтому соответствующие значения заменены NULL.",-1))],64)}const y=n(i,[["render",g]]);export{y as default};