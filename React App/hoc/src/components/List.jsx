import React from "react";
//Loops through the repos to create a list
const List = (props) => {
    const { repos } = props
    if (!repos) return null;
    if (!repos.length) return <p>No repos, Sorry</p>

    return (
        <ul>
            {repos.map((repo) => {
                return <li key={repo.id}>{repo.full_name}</li>
            })}
        </ul>
    )
}
export default List