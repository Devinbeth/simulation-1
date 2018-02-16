create table bins (
    id serial primary key not null,
    shelf_id text not null,
    bin_id integer not null,
    name text,
    price decimal,
    image text
);

select * from bins;
