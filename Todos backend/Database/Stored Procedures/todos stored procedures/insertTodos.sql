-- insert todos
CREATE or ALTER PROCEDURE insertTodos( 
@todo_id varchar(300),
@title varchar(300), 
@description varchar(500), 
@date DATE)
AS
BEGIN
INSERT INTO todosTable VALUES (@todo_id,
@title, 
@description, 
@date 
)
END

exeC insertTodos 'wxk', 'study','assesment', '2022-09-10'


select * from todosTable
