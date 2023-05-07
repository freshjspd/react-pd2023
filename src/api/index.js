import config from "../config";

export function load(page=1){
    fetch(`https://randomuser.me/api/?results=${config.RESULTS}&seed=${config.KEY}&page={page}&inc=${config.PROP}`).then((response) => response.json());
}
    