import{_ as n,o as s,c as r,a as i,b as t,d as l,F as a}from"./index-BoRpKmuU.js";const g={};function d(y,e){return s(),r(a,null,[e[0]||(e[0]=i(`<p>Оператор SQL BETWEEN задает диапазон, в котором будет осуществляться проверка условия.</p><p>Оператор SQL BETWEEN имеет следующий синтаксис:</p><pre class="brush: sql; title: ; notranslate" title="">test_expression [NOT] BETWEEN begin_expression AND end_expression
</pre><ul><li><em>test_expression</em> — задает объект для проверки по диапазону;</li><li><em>start_expression</em> — начальное значение диапазона;</li><li><em>end_expression</em> — конечное значение диапазона;</li></ul><hr><p><strong>Примеры оператора SQL BETWEEN:</strong> Имеется следующая <abbr title="ID - Порядковый номер; UniversityName - Название университета; Students - Количество студентов; Faculties - Количество факультетов; Professores - Количество преподавателей; Location - Местоположение университета; Site - Сайт">таблица Universities</abbr>:</p>`,6)),e[1]||(e[1]=t("table",{border:"1",cellspacing:"1",cellpadding:"1"},[t("thead",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"ID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"UniversityName")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Students")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Faculties")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Professores")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Location")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Site")])])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Perm State National Research University"),t("td",{style:{"text-align":"center"}},"12400"),t("td",{style:{"text-align":"center"}},"12"),t("td",{style:{"text-align":"center"}},"1229"),t("td",{style:{"text-align":"center"}},"Perm"),t("td",{style:{"text-align":"center"}},"psu.ru")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"2"),t("td",{style:{"text-align":"center"}},"Saint Petersburg State University"),t("td",{style:{"text-align":"center"}},"21300"),t("td",{style:{"text-align":"center"}},"24"),t("td",{style:{"text-align":"center"}},"13126"),t("td",{style:{"text-align":"center"}},"Saint-Petersburg"),t("td",{style:{"text-align":"center"}}," spbu.ru")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Novosibirsk State University"),t("td",{style:{"text-align":"center"}},"7200"),t("td",{style:{"text-align":"center"}},"13"),t("td",{style:{"text-align":"center"}},"1527"),t("td",{style:{"text-align":"center"}},"Novosibirsk"),t("td",{style:{"text-align":"center"}},"nsu.ru")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"4"),t("td",{style:{"text-align":"center"}},"Moscow State University"),t("td",{style:{"text-align":"center"}},"35100"),t("td",{style:{"text-align":"center"}},"39"),t("td",{style:{"text-align":"center"}},"14358"),t("td",{style:{"text-align":"center"}},"Moscow"),t("td",{style:{"text-align":"center"}},"msu.ru")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"5"),t("td",{style:{"text-align":"center"}},"Higher School of Economics"),t("td",{style:{"text-align":"center"}},"20335"),t("td",{style:{"text-align":"center"}},"12"),t("td",{style:{"text-align":"center"}},"1615"),t("td",{style:{"text-align":"center"}},"Moscow"),t("td",{style:{"text-align":"center"}},"hse.ru")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"6"),t("td",{style:{"text-align":"center"}},"Ural Federal University"),t("td",{style:{"text-align":"center"}},"57000"),t("td",{style:{"text-align":"center"}},"19"),t("td",{style:{"text-align":"center"}},"5640"),t("td",{style:{"text-align":"center"}},"Yekaterinburg"),t("td",{style:{"text-align":"center"}},"urfu.ru")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"7"),t("td",{style:{"text-align":"center"}},"National Research Nuclear University"),t("td",{style:{"text-align":"center"}},"8600"),t("td",{style:{"text-align":"center"}},"10"),t("td",{style:{"text-align":"center"}},"936"),t("td",{style:{"text-align":"center"}},"Moscow"),t("td",{style:{"text-align":"center"}},"mephi.ru")])])],-1)),e[2]||(e[2]=t("p",null,[t("strong",null,"Пример 1. "),l("Используя оператор SQL BETWEEN вывести записи тех университетов, число студентов (Students) которых от 10000 до 30000:")],-1)),e[3]||(e[3]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT *
FROM Universities
WHERE Students BETWEEN 10000 AND 30000
`,-1)),e[4]||(e[4]=t("p",null,[t("em",null,"Результат:")],-1)),e[5]||(e[5]=t("table",{border:"1",cellspacing:"1",cellpadding:"1"},[t("thead",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"ID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"UniversityName")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Students")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Faculties")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Professores")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Location")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Site")])])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Perm State National Research University"),t("td",{style:{"text-align":"center"}},"12400"),t("td",{style:{"text-align":"center"}},"12"),t("td",{style:{"text-align":"center"}},"1229"),t("td",{style:{"text-align":"center"}},"Perm"),t("td",{style:{"text-align":"center"}},"psu.ru")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"2"),t("td",{style:{"text-align":"center"}},"Saint Petersburg State University"),t("td",{style:{"text-align":"center"}},"21300"),t("td",{style:{"text-align":"center"}},"24"),t("td",{style:{"text-align":"center"}},"13126"),t("td",{style:{"text-align":"center"}},"Saint-Petersburg"),t("td",{style:{"text-align":"center"}}," spbu.ru")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"5"),t("td",{style:{"text-align":"center"}},"Higher School of Economics"),t("td",{style:{"text-align":"center"}},"20335"),t("td",{style:{"text-align":"center"}},"12"),t("td",{style:{"text-align":"center"}},"1615"),t("td",{style:{"text-align":"center"}},"Moscow"),t("td",{style:{"text-align":"center"}},"hse.ru")])])],-1)),e[6]||(e[6]=t("p",null,[l("Данный пример можно так же записать и с помощью операторов сравнения (<,>,=) и оператора "),t("a",{title:"Оператор SQL WHERE - примеры использования",href:"https://web.archive.org/web/20231208195705/http://2sql.ru/basic/sql-where/",target:"_blank"},"SQL WHERE"),l(". Так, нижеприведенный код будет выведет точно такой же результат:")],-1)),e[7]||(e[7]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT *
FROM Universities
WHERE Students > 10000 AND Students < 30000
`,-1)),e[8]||(e[8]=t("p",null,[t("strong",null,"Пример 2. "),l("Используя оператор SQL BETWEEN вывести записи университетов, число преподавателей (Professores) которых менее 2000 и более 14000:")],-1)),e[9]||(e[9]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`SELECT *
FROM Universities
WHERE Professores NOT BETWEEN 2000 AND 14000
`,-1)),e[10]||(e[10]=t("p",null,[t("em",null,"Результат:")],-1)),e[11]||(e[11]=t("table",{border:"1",cellspacing:"1",cellpadding:"1"},[t("thead",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"ID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"UniversityName")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Students")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Faculties")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Professores")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Location")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Site")])])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Perm State National Research University"),t("td",{style:{"text-align":"center"}},"12400"),t("td",{style:{"text-align":"center"}},"12"),t("td",{style:{"text-align":"center"}},"1229"),t("td",{style:{"text-align":"center"}},"Perm"),t("td",{style:{"text-align":"center"}},"psu.ru")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Novosibirsk State University"),t("td",{style:{"text-align":"center"}},"7200"),t("td",{style:{"text-align":"center"}},"13"),t("td",{style:{"text-align":"center"}},"1527"),t("td",{style:{"text-align":"center"}},"Novosibirsk"),t("td",{style:{"text-align":"center"}},"nsu.ru")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"4"),t("td",{style:{"text-align":"center"}},"Moscow State University"),t("td",{style:{"text-align":"center"}},"35100"),t("td",{style:{"text-align":"center"}},"39"),t("td",{style:{"text-align":"center"}},"14358"),t("td",{style:{"text-align":"center"}},"Moscow"),t("td",{style:{"text-align":"center"}},"msu.ru")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"5"),t("td",{style:{"text-align":"center"}},"Higher School of Economics"),t("td",{style:{"text-align":"center"}},"20335"),t("td",{style:{"text-align":"center"}},"12"),t("td",{style:{"text-align":"center"}},"1615"),t("td",{style:{"text-align":"center"}},"Moscow"),t("td",{style:{"text-align":"center"}},"hse.ru")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"7"),t("td",{style:{"text-align":"center"}},"National Research Nuclear University"),t("td",{style:{"text-align":"center"}},"8600"),t("td",{style:{"text-align":"center"}},"10"),t("td",{style:{"text-align":"center"}},"936"),t("td",{style:{"text-align":"center"}},"Moscow"),t("td",{style:{"text-align":"center"}},"mephi.ru")])])],-1))],64)}const x=n(g,[["render",d]]);export{x as default};
