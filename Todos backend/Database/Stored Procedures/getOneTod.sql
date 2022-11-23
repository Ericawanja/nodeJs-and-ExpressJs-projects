--getTodo
CREATE PROCEDURE getOneTodo (@id INT)
AS
BEGIN
SELECT * FROM todosTable WHERE @id = id
END

--EXEC getOneTodo 1