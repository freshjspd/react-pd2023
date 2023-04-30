import config from "../config";

export async function load(page){
    await fetch(`https://randomuser.me/api/?results=${config.RESULTS}&seed=${config.KEY}&page={page}&inc=${config.PROP}`)
    .then((response) => response.json());
}
    