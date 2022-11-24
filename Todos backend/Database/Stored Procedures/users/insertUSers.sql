CREATE OR ALTER PROCEDURE insertUser (
@name varchar(300), 
@username varchar(300), 
@email varchar(300), 
@password varchar(300)
)
AS
BEGIN
INSERT INTO usersTable VALUES(@name, @username, @email, @password)
end

go

