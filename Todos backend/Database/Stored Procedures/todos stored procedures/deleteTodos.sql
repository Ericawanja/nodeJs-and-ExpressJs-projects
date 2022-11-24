CREATE PROCEDURE deleteTodo(@id INT)
AS
BEGIN
DELETE FROM todostable where id = @id
END