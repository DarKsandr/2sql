import{S as r,a as o}from"./SqlInnerJoinLink-DWEiDmZN.js";import{S as s}from"./SqlLeftJoinLink-CuxWKEb3.js";import{o as i,c as u,a as t,b as n,d as e,F as g}from"./index-BM4DG5Fm.js";const p={__name:"SqlRightJoin",setup(a){return(d,l)=>(i(),u(g,null,[t("p",null,[l[0]||(l[0]=n("Оператор SQL RIGHT JOIN осуществляет формирование таблицы из записей двух или нескольких таблиц. В операторе ")),e(r),l[1]||(l[1]=n(", как и в операторе ")),e(s),l[2]||(l[2]=n(", важен порядок следования таблиц, так как от этого будет зависеть полученный результат. Алгоритм работы оператора следующий:"))]),t("ol",null,[t("li",null,[l[3]||(l[3]=n("Сначала происходит формирование таблицы внутренним соединением (оператор ")),e(o),l[4]||(l[4]=n(") левой и правой таблиц"))]),l[5]||(l[5]=t("li",null,"Затем, в результат добавляются записи левой таблицы не вошедшие в результат формирования таблицы внутренним соединением. Для них, соответствующие записи из левой таблицы заполняются значениями NULL.",-1))]),l[6]||(l[6]=t("p",null,"Оператор SQL RIGHT JOIN имеет следующий синтаксис:",-1)),l[7]||(l[7]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT
    column_names [,... n]
FROM
    Table_1 RIGHT JOIN Table_2 ON condition
`,-1)),l[8]||(l[8]=t("hr",null,null,-1)),l[9]||(l[9]=t("p",null,[t("strong",null,[n("Примеры"),t("strong",null," оператора SQL RIGHT JOIN"),n(". ")]),n("Имеются две таблицы:")],-1)),l[10]||(l[10]=t("p",null,[t("strong",null,[t("abbr",{title:"AuthorID - номер автора; AuthorName - имя автора"},"Authors")]),n(" — содержит в себе информацию об авторах книг:")],-1)),l[11]||(l[11]=t("table",{border:"1",cellspacing:"0"},[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"AuthorID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"AuthorName")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Bruce Eckel")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"2"),t("td",{style:{"text-align":"center"}},"Robert Lafore")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Andrew Tanenbaum")])])],-1)),l[12]||(l[12]=t("p",null,[t("strong",null,[t("abbr",{title:"BookID - номер книги; BookName - название книги"},"Books")]),n(" — содержит в себе информацию о названии книг:")],-1)),l[13]||(l[13]=t("table",{border:"1",cellspacing:"0"},[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"BookID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"BookName")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Modern Operating System")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Thinking in Java")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Computer Architecture")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"4"),t("td",{style:{"text-align":"center"}},"Programming in Scala")])])],-1)),l[14]||(l[14]=t("p",null,"В таблице Books поле BookID являются внешним ключом и ссылаются на таблицу Authors.",-1)),l[15]||(l[15]=t("p",null,[t("strong",null,"Пример 1. "),n("С помощью оператора SQL RIGHT JOIN вывести авторов всех книг:")],-1)),l[16]||(l[16]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT * FROM Authors
RIGHT JOIN Books ON Authors.AuthorID = Books.BookID
`,-1)),l[17]||(l[17]=t("p",null,[t("em",null,"Результирующая таблица будет выглядеть следующим образом:")],-1)),l[18]||(l[18]=t("table",{border:"1",cellspacing:"0"},[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"Authors.AuthorID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,[n("Authors."),t("strong",null,"AuthorName")])]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Books.BookID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Books.BookName")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Andrew Tanenbaum"),t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Modern Operating System")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Bruce Eckel"),t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Thinking in Java")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Andrew Tanenbaum"),t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Computer Architecture")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"NULL"),t("td",{style:{"text-align":"center"}},"NULL"),t("td",{style:{"text-align":"center"}},"4"),t("td",{style:{"text-align":"center"}},"Programming in Scala")])])],-1)),l[19]||(l[19]=t("p",null,"Информация об авторе книги Programming in Scala отсутствует в таблице Authors, поэтому соответствующие значения заменены NULL.",-1))],64))}};export{p as default};