import{S as r,a as o}from"./SqlInnerJoinLink-D8U8iJAE.js";import{o as s,c as u,a as t,b as e,d as n,F as i}from"./index-CrHGDJB2.js";const x={__name:"SqlLeftJoin",setup(a){return(g,l)=>(s(),u(i,null,[t("p",null,[l[0]||(l[0]=e("Оператор SQL LEFT JOIN осуществляет формирование таблицы из записей двух или нескольких таблиц. В операторе SQL LEFT JOIN, как и в операторе ")),n(r),l[1]||(l[1]=e(", важен порядок следования таблиц, так как от этого будет зависеть полученный результат. Алгоритм работы оператора следующий:"))]),t("ol",null,[t("li",null,[l[2]||(l[2]=e("Сначала происходит формирование таблицы внутренним соединением (оператор ")),n(o),l[3]||(l[3]=e(") левой и правой таблиц"))]),l[4]||(l[4]=t("li",null,"Затем, в результат добавляются записи левой таблицы не вошедшие в результат формирования таблицы внутренним соединением. Для них, соответствующие записи из правой таблицы заполняются значениями NULL.",-1))]),l[5]||(l[5]=t("p",null,"Оператор SQL LEFT JOIN имеет следующий синтаксис:",-1)),l[6]||(l[6]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT
    column_names [,... n]
FROM
    Table_1 LEFT JOIN Table_2
ON condition
`,-1)),l[7]||(l[7]=t("hr",null,null,-1)),l[8]||(l[8]=t("p",null,[t("strong",null,[e("Примеры"),t("strong",null," оператора SQL LEFT JOIN"),e(". ")]),e("Имеются две таблицы:")],-1)),l[9]||(l[9]=t("p",null,[t("strong",null,[t("abbr",{title:"AuthorID - номер автора; AuthorName - имя автора"},"Authors")]),e(" — содержит в себе информацию об авторах книг:")],-1)),l[10]||(l[10]=t("table",{border:"1",cellspacing:"0"},[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"AuthorID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"AuthorName")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Bruce Eckel")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"2"),t("td",{style:{"text-align":"center"}},"Robert Lafore")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Andrew Tanenbaum")])])],-1)),l[11]||(l[11]=t("p",null,[t("strong",null,[t("abbr",{title:"BookID - номер книги; BookName - название книги"},"Books")]),e(" — содержит в себе информацию о названии книг:")],-1)),l[12]||(l[12]=t("table",{border:"1",cellspacing:"0"},[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"BookID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"BookName")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Modern Operating System")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Thinking in Java")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Computer Architecture")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"4"),t("td",{style:{"text-align":"center"}},"Programming in Scala")])])],-1)),l[13]||(l[13]=t("p",null,"В таблице Books поле BookID являются внешним ключом и ссылаются на таблицу Authors.",-1)),l[14]||(l[14]=t("p",null,[t("strong",null,"Пример 1. "),e("Пользуясь оператором SQL LEFT JOIN вывести, какие книги написали все авторы:")],-1)),l[15]||(l[15]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT *
FROM Authors LEFT JOIN Books
ON Authors.AuthorID = Books.BookID
`,-1)),l[16]||(l[16]=t("p",null,[t("em",null,"Результирующая таблица будет выглядеть следующим образом:")],-1)),l[17]||(l[17]=t("table",{border:"1",cellspacing:"0"},[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"Authors.AuthorID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,[e("Authors."),t("strong",null,"AuthorName")])]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Books.BookID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Books.BookName")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Bruce Eckel"),t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Thinking in Java")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"2"),t("td",{style:{"text-align":"center"}},"Robert Lafore"),t("td",{style:{"text-align":"center"}},"NULL"),t("td",{style:{"text-align":"center"}},"NULL")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Andrew Tanenbaum"),t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Modern Operating System")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Andrew Tanenbaum"),t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Computer Architecture")])])],-1)),l[18]||(l[18]=t("p",null,"Как можно заметить, записи о книгах автора Robert Lafore отсутствуют в базе и поля Books.BookID и Books.BookName дополняются значениями NULL.",-1))],64))}};export{x as default};
