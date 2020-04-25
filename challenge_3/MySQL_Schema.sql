DROP DATABASE IF EXISTS orders;

CREATE DATABASE orders;
USE orders;

CREATE TABLE customerInfo (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE addresses (
  id INTEGER NOT NULL AUTO_INCREMENT,
  customer INTEGER NOT NULL REFERENCES customerInfo(id),
  line1 VARCHAR(30) NOT NULL,
  line2 VARCHAR(10) NOT NULL,
  city VARCHAR(20) NOT NULL,
  st VARCHAR(2) NOT NULL,
  zip VARCHAR(5) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE ccInfo (
  id INT NOT NULL AUTO_INCREMENT,
  customer INT NOT NULL REFERENCES customerInfo(id),
  exp DATE NOT NULL,
  cvv INT NOT NULL,
  billZip INT NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO customerInfo (name, email, password) VALUES ('Tim', 'tim@tim.com', 'psswordtest');
INSERT INTO customerInfo (name, email, password) VALUES ('Marry', 'marry@yahoo.com', 'psswordtest');
INSERT INTO customerInfo (name, email, password) VALUES ('Jorge', 'silly@spainrocks.com', 'psswordtest');

INSERT INTO addresses (customer, line1, line2, city, st, zip) VALUES ((SELECT id from customerInfo WHERE name='Marry'), '733 BridgeWalker Lane', 'Apt 310', 'Lakewood', 'WA', 98499);

INSERT INTO addresses (customer, line1, line2, city, st, zip) VALUES ((SELECT id from customerInfo WHERE name='Jorge'), '45556 Serendipity Ct', '', 'Salt Lake City', 'UT', 12345);

INSERT INTO addresses (customer, line1, line2, city, st, zip) VALUES ((SELECT id from customerInfo WHERE name='Tim'), '234 John Tyler HWY', '#310', 'Wake Forest', 'NC', 44335);

INSERT INTO ccInfo (customer, exp, cvv, billzip) VALUES ((SELECT id from customerInfo WHERE name='Marry'), '2021-01-31', 123, 98499);
INSERT INTO ccInfo (customer, exp, cvv, billzip) VALUES ((SELECT id from customerInfo WHERE name='Marry'), '2020-10-31', 456, 98499);
INSERT INTO ccInfo (customer, exp, cvv, billzip) VALUES ((SELECT id from customerInfo WHERE name='Jorge'), '2023-02-14', 987, 12345);