CREATE OR ALTER PROCEDURE insertUser (
@full_namevarchar(300), 
@username varchar(300), 
@email varchar(300), 
@password varchar(300)
)
AS
BEGIN
INSERT INTO usersTable VALUES(@full_name, @username, @email, @password)
end

go

