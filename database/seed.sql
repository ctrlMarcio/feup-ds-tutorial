drop table if exists words;
create table words (
  id serial primary key,
  word text not null,
  count integer not null default 1
);
insert into words (word) values ('ola');