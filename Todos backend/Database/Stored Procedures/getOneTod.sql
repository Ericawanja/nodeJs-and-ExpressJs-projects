--getTodo
CREATE PROCEDURE getOneTodo (@id varchar(300)
AS
BEGIN
SELECT * FROM todosTable WHERE @id = todo_id
END

--EXEC getOneTodo 1