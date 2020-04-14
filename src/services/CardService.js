const ENDPOINT = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/';

const fetchCard = () => fetch(ENDPOINT).then(response => response.json());

export { fetchCard };