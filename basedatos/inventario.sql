/*
  Crear la base de datos para
   control de inventario
  Producto, clientes
*/

/*comando para conectarme*/
mysql -u root 

show databases;
use mysql;
show tables;

/*Creando una base de datos*/
create database inventario;
/*Tipos de datos 
 entero int -> longitud 3 
 string varchar 10
 comaflotante float 3,5
*/

/*
 unique
 primary key
 foreingkey -> llave secundaria
*/
create table product( 
  id int not null primary key auto_increment,
  name varchar(30) not null,
  price int not null 
);

create table product2( 
  id int not null primary key AUTO_INCREMENT,
  name varchar(30) not null,
  price int not null 
)AUTO_INCREMENT=1000;

CREATE TABLE IF NOT EXISTS Departments
(
  Dept_ID int AUTO_INCREMENT, 
  Dept_Name varchar(255), 
  Dept_Address varchar(255), 
  Dept_Tel int,
  PRIMARY KEY (Dept_ID)
) AUTO_INCREMENT=1000;

/*describe o desc me muestra la estructura de una tbl*/

create table client(
  id int not null primary key auto_increment,
  name varchar(30) not null,
  document varchar(30) not null  
);

INSERT INTO product VALUES(null,'papa',3000);
INSERT INTO product VALUES(null,'arroz',2000);
INSERT INTO product VALUES(null,'lentejas',1500);

INSERT INTO product VALUES(null,'frijoles',3000);
INSERT INTO product VALUES(null,'aceite',2000);
INSERT INTO product VALUES(null,'sal',1500);

INSERT INTO product2 VALUES(null,'papa',3000);

SELECT * FROM product;

INSERT INTO client VALUES(null,'gabi',111);
INSERT INTO client VALUES(null,'diana',222);
INSERT INTO client VALUES(null,'kelly',333);

SELECT * FROM client;

SELECT name FROM product WHERE price > 1500; 

SELECT id, name FROM product 
WHERE price BETWEEN 1500 AND 2000; 

SELECT COUNT(*) total FROM product;

UPDATE client SET document='111', name='gabimodificada'
WHERE id = 1;

DELETE FROM client WHERE id = 1; 
TRUNCATE TABLE client;
SELECT SUM(price) AS sumatoria FROM product;

SELECT price, 0, null FROM product;

SELECT id,name FROM product
ORDER BY id DESC;

SELECT DISTINCT id,name FROM product;

INSERT INTO client VALUES(null,'santiago',3111);
INSERT INTO client VALUES(null,'santiago',2422);
INSERT INTO client VALUES(null,'santiago',3453);

SELECT * FROM client
GROUP BY name;

SELECT DISTINCT id,name FROM client
ORDER BY name;

SELECT DISTINCT name FROM client;

SELECT * FROM product WHERE id NOT IN(2,4);

SELECT * FROM product WHERE
id <> 2 AND id <> 4;

INNER JOIN -> 
LEFT JOIN ->

JOBS -> WORKERS 

FUNNEL -> JOIN