import{S as a}from"./SqlCreateLink-B6vdLIYU.js";import{_ as i,r as u,o as r,f as p,w as L,b as e,c as m,a as t,d as s,F as E}from"./index-CrHGDJB2.js";const f={};function S(o,l){const n=u("RouterLink");return r(),p(n,{to:{name:"sql-insert"},title:"Оператор SQL INSERT - примеры использования"},{default:L(()=>l[0]||(l[0]=[e("SQL INSERT")])),_:1})}const T=i(f,[["render",S]]),R={__name:"SqlDefault",setup(o){return(l,n)=>(r(),m(E,null,[n[5]||(n[5]=t("p",null,"Оператор SQL DEFAULT определяет значение, которым будет заполнен тот или иной столбец по умолчанию при создании таблицы. Данное значение будет вставляться в запись, если иное не указано.",-1)),n[6]||(n[6]=t("p",null,"Оператор SQL DEFAULT имеет следующий синтаксис:",-1)),n[7]||(n[7]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`CREATE TABLE table_name (
column_name1 data_type(size) DEFAULT 'default_name'
)
`,-1)),n[8]||(n[8]=t("hr",null,null,-1)),t("p",null,[n[0]||(n[0]=t("strong",null,"Пример оператора SQL DEFAULT. ",-1)),n[1]||(n[1]=e("По аналогии с примером 1 оператора ")),s(a),n[2]||(n[2]=e(" создать таблицу Planets, где по умолчанию, с помощью оператора SQL DEFAULT в столбце HavingRings должно стоять значение ‘No':"))]),n[9]||(n[9]=t("pre",{class:"brush: sql; title: ; notranslate",title:""},`CREATE TABLE Planets (
ID int,
PlanetName varchar(10),
Radius float (10),
SunSeason float(10),
OpeningYear int,
HavingRings bit DEFAULT 'No',
Opener varchar(30)
)
`,-1)),t("p",null,[n[3]||(n[3]=e("Теперь при заполнении таблицы оператором ")),s(T),n[4]||(n[4]=e(", если мы не станем указывать значение поля HavingRings, в него будет автоматически проставлено значение ‘No’."))])],64))}};export{R as default};
