create table bins (
    id serial primary key not null,
    shelf_id text not null,
    bin_id text not null,
    bin_name text,
    name text,
    price decimal,
    image text
);

select * from bins;
