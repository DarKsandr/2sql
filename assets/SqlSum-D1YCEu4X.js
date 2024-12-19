import{_ as s,o as r,c as i,e as n,d as a,w as c,a as t,F as g,r as o}from"./index-Dku5cubG.js";const d={};function y(x,e){const l=o("table-scroll");return r(),i(g,null,[e[1]||(e[1]=n(`<p>Оператор SQL SUM() — функция, возвращающая сумму значений столбца таблицы. Используется только для числовых столбцов.</p><p>Функция SQL SUM() имеет следующий синтаксис:</p><pre class="brush: sql; title: ; notranslate" title="">SUM ( [ALL | DISTINCT] expression )
</pre><p>Параметр <strong>ALL</strong> — является параметром по умолчанию. Считается сумма всех строк.</p><p>При указании параметра <strong>DISTINCT</strong> — происходит подсчет только уникальных значений.</p><hr><p><strong>Примеры оператора SQL SUM:</strong> Имеется следующая <abbr title="ID - Порядковый номер; UniversityName - Название университета; Students - Количество студентов; Faculties - Количество факультетов; Professores - Количество преподавателей; Location - Местоположение университета; Site - Сайт">таблица Universities</abbr>:</p>`,7)),a(l,{border:"1",cellspacing:"0",cellpadding:"3"},{default:c(()=>e[0]||(e[0]=[t("thead",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},[t("strong",null,"ID")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"UniversityName")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Students")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Faculties")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Professores")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Location")]),t("td",{style:{"text-align":"center"}},[t("strong",null,"Site")])])],-1),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"Perm State National Research University"),t("td",{style:{"text-align":"center"}},"12400"),t("td",{style:{"text-align":"center"}},"12"),t("td",{style:{"text-align":"center"}},"1229"),t("td",{style:{"text-align":"center"}},"Perm"),t("td",{style:{"text-align":"center"}},"psu.ru")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"2"),t("td",{style:{"text-align":"center"}},"Saint Petersburg State University"),t("td",{style:{"text-align":"center"}},"21300"),t("td",{style:{"text-align":"center"}},"24"),t("td",{style:{"text-align":"center"}},"13126"),t("td",{style:{"text-align":"center"}},"Saint-Petersburg"),t("td",{style:{"text-align":"center"}}," spbu.ru")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"Novosibirsk State University"),t("td",{style:{"text-align":"center"}},"7200"),t("td",{style:{"text-align":"center"}},"13"),t("td",{style:{"text-align":"center"}},"1527"),t("td",{style:{"text-align":"center"}},"Novosibirsk"),t("td",{style:{"text-align":"center"}},"nsu.ru")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"4"),t("td",{style:{"text-align":"center"}},"Moscow State University"),t("td",{style:{"text-align":"center"}},"35100"),t("td",{style:{"text-align":"center"}},"39"),t("td",{style:{"text-align":"center"}},"14358"),t("td",{style:{"text-align":"center"}},"Moscow"),t("td",{style:{"text-align":"center"}},"msu.ru")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"5"),t("td",{style:{"text-align":"center"}},"Higher School of Economics"),t("td",{style:{"text-align":"center"}},"20335"),t("td",{style:{"text-align":"center"}},"12"),t("td",{style:{"text-align":"center"}},"1615"),t("td",{style:{"text-align":"center"}},"Moscow"),t("td",{style:{"text-align":"center"}},"hse.ru")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"6"),t("td",{style:{"text-align":"center"}},"Ural Federal University"),t("td",{style:{"text-align":"center"}},"57000"),t("td",{style:{"text-align":"center"}},"19"),t("td",{style:{"text-align":"center"}},"5640"),t("td",{style:{"text-align":"center"}},"Yekaterinburg"),t("td",{style:{"text-align":"center"}},"urfu.ru")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"7"),t("td",{style:{"text-align":"center"}},"National Research Nuclear University"),t("td",{style:{"text-align":"center"}},"8600"),t("td",{style:{"text-align":"center"}},"10"),t("td",{style:{"text-align":"center"}},"936"),t("td",{style:{"text-align":"center"}},"Moscow"),t("td",{style:{"text-align":"center"}},"mephi.ru")])],-1)])),_:1}),e[2]||(e[2]=n(`<p><strong>Пример 1.</strong> Используя оператор SQL SUM найти количество студентов (Students) всех университетов в таблице:</p><pre class="brush: sql; title: ; notranslate" title="">SELECT SUM(Students)
FROM Universities
</pre><p><em>Ответ: 161935</em></p><p><strong>Пример 2.</strong> Используя оператор SQL SUM найти количество преподавателей московских университетов:</p><pre class="brush: sql; title: ; notranslate" title="">SELECT SUM(Professores)
FROM Universities
WHERE Location = &#39;Moscow&#39;
</pre><p><em>Ответ: 16909</em></p><p><strong>Пример 3. </strong>Используя оператор SQL SUM произвести подсчет уникальных значений столбца Faculties:</p><pre class="brush: sql; title: ; notranslate" title="">SELECT SUM(DISTINCT Faculties)
FROM Universities
</pre><p><em>Ответ: 117 <span style="font-size:x-small;">(примечание: в столбце Faculties присутствует 2 одинаковых записи, под ID 1 и 5. Значение столбца под ID 5 не суммируется.)</span></em></p>`,9))],64)}const p=s(d,[["render",y]]);export{p as default};