drop table if exists users;

create table users (
	id serial primary key,
  name text not null,
  email text not null,
  age integer not null,
  country text not null,
  city text not null
);
