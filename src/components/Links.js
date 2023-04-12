import React from "react";
import user from "../data/user";

let githubUrl=user.links.github
let linkedinUrl=user.links.linkedin

function Links() {
    return (
        <div>
            <h3>Links</h3>
            <a href={githubUrl}>{githubUrl}</a>
            <a href={linkedinUrl}>{linkedinUrl}</a>
        </div>
    )
}
export default Links;