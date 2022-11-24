--get user

CREATE OR ALTER PROCEDURE getUser (@email varchar(300))
AS
BEGIN
SELECT * FROM usersTable where email = @email
END
go
