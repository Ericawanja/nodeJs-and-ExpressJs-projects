CREATE PROCEDURE insertTodos (@id INT, @title varchar(300), @description varchar(500), @date DATE)
AS
BEGIN
INSERT INTO todosTable VALUES (@id, @title, @description, @date)
END