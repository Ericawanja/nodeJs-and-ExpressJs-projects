CREATE PROCEDURE updateTodo (@id INT, @title varchar(300), @description varchar(500))
AS
BEGIN
UPDATE todosTable set id = @id, title=@title, description = @description
END