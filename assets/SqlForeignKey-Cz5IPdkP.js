import{_ as l,o as r,c as s,a,b as t,d as n,F as o}from"./index-DKY3BoG6.js";const i={};function E(u,e){return r(),s(o,null,[e[0]||(e[0]=a(`<p>Оператор SQL FOREIGN KEY (Внешний ключ) служит для указания в одной таблице на Первичный ключ (оператор <a title="Оператор SQL PRIMARY KEY - примеры использования" href="https://web.archive.org/web/20231208195706/http://2sql.ru/advanced/sql-primary-key/" target="_blank">SQL PRIMARY KEY</a>) в другой.</p><p>Оператор SQL FOREIGN KEY имеет следующий синтаксис:</p><p>Для MySQL:</p><pre class="brush: sql; title: ; notranslate" title="">CREATE TABLE table_1 (
ID_1 int NOT NULL
ID_2 int
PRIMARY KEY (ID_1)
FOREIGN KEY (ID_2) REFERENCES table_2(ID_2)
)
</pre><p>Для <strong>MS SQL Server, Oracle, MS Access</strong>:</p><pre class="brush: sql; title: ; notranslate" title="">CREATE TABLE table_1 (
ID_1 int NOT NULL PRIMARY KEY
ID_2 int FOREIGN KEY REFERENCES table_2(ID_2)
)
</pre><hr><p><strong>Примеры оператора SQL FOREIGN KEY. </strong>Имеются две таблицы:</p><p><strong><abbr title="AuthorID - номер автора; AuthorName - имя автора">Authors</abbr></strong> — содержит в себе информацию об авторах книг:</p>`,9)),e[1]||(e[1]=t("table",{border:"1",cellspacing:"0"},[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"AuthorID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"AuthorName")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Bruce Eckel")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"2"),t("td",{style:{"text-align":"center"}},"Robert Lafore")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Andrew Tanenbaum")])])],-1)),e[2]||(e[2]=t("p",null,[t("strong",null,[t("abbr",{title:"BookID - номер книги; BookName - название книги"},"Books")]),n(" — содержит в себе информацию о названии книг:")],-1)),e[3]||(e[3]=t("table",{border:"1",cellspacing:"0"},[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"BookID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"BookName")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Modern Operating System")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"2"),t("td",{style:{"text-align":"center"}},"Object-Oriented Programming in C++")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Thinking in Java")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Computer Architecture")])])],-1)),e[4]||(e[4]=t("p",null,[n("В таблице Books поле BookID являются Внешним ключом и ссылаются на таблицу Authors. Для организации таблиц с подобной структурой используется следующий код (для "),t("strong",null,"MS SQL Server"),n(") с использованием оператора SQL FOREIGN KEY:")],-1)),e[5]||(e[5]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`CREATE TABLE Authors (
AuthorID int NOT NULL PRIMARY KEY,
AuthorName varchar(50)
)

CREATE TABLE Books (
BookID int FOREIGN KEY REFERENCES Authors(AuthorID),
BookName varchar(100)
)
`,-1))],64)}const d=l(i,[["render",E]]);export{d as default};
