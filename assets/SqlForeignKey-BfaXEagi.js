import{_ as E,r as a,o as i,f as g,w as o,b as n,c as d,a as t,d as r,e as p,F as c}from"./index-Dku5cubG.js";const R={};function I(u,l){const e=a("RouterLink");return i(),g(e,{to:{name:"sql-primary-key"},title:"Оператор SQL PRIMARY KEY - примеры использования"},{default:o(()=>l[0]||(l[0]=[n("SQL PRIMARY KEY")])),_:1})}const y=E(R,[["render",I]]),N={__name:"SqlForeignKey",setup(u){return(l,e)=>{const s=a("table-scroll");return i(),d(c,null,[t("p",null,[e[0]||(e[0]=n("Оператор SQL FOREIGN KEY (Внешний ключ) служит для указания в одной таблице на Первичный ключ (оператор ")),r(y),e[1]||(e[1]=n(") в другой."))]),e[4]||(e[4]=p(`<p>Оператор SQL FOREIGN KEY имеет следующий синтаксис:</p><p>Для MySQL:</p><pre class="brush: sql; title: ; notranslate" title="">CREATE TABLE table_1 (
ID_1 int NOT NULL
ID_2 int
PRIMARY KEY (ID_1)
FOREIGN KEY (ID_2) REFERENCES table_2(ID_2)
)
</pre><p>Для <strong>MS SQL Server, Oracle, MS Access</strong>:</p><pre class="brush: sql; title: ; notranslate" title="">CREATE TABLE table_1 (
ID_1 int NOT NULL PRIMARY KEY
ID_2 int FOREIGN KEY REFERENCES table_2(ID_2)
)
</pre><hr><p><strong>Примеры оператора SQL FOREIGN KEY. </strong>Имеются две таблицы:</p><p><strong><abbr title="AuthorID - номер автора; AuthorName - имя автора">Authors</abbr></strong> — содержит в себе информацию об авторах книг:</p>`,8)),r(s,{border:"1",cellspacing:"0"},{default:o(()=>e[2]||(e[2]=[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"AuthorID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"AuthorName")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Bruce Eckel")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"2"),t("td",{style:{"text-align":"center"}},"Robert Lafore")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Andrew Tanenbaum")])],-1)])),_:1}),e[5]||(e[5]=t("p",null,[t("strong",null,[t("abbr",{title:"BookID - номер книги; BookName - название книги"},"Books")]),n(" — содержит в себе информацию о названии книг:")],-1)),r(s,{border:"1",cellspacing:"0"},{default:o(()=>e[3]||(e[3]=[t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"BookID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"BookName")])]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Modern Operating System")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"2"),t("td",{style:{"text-align":"center"}},"Object-Oriented Programming in C++")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Thinking in Java")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Computer Architecture")])],-1)])),_:1}),e[6]||(e[6]=t("p",null,[n("В таблице Books поле BookID являются Внешним ключом и ссылаются на таблицу Authors. Для организации таблиц с подобной структурой используется следующий код (для "),t("strong",null,"MS SQL Server"),n(") с использованием оператора SQL FOREIGN KEY:")],-1)),e[7]||(e[7]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`CREATE TABLE Authors (
AuthorID int NOT NULL PRIMARY KEY,
AuthorName varchar(50)
)

CREATE TABLE Books (
BookID int FOREIGN KEY REFERENCES Authors(AuthorID),
BookName varchar(100)
)
`,-1))],64)}}};export{N as default};
