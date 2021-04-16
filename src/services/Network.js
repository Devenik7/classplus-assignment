// Writing a basic GET for now. can be expanded as per use case

const GET = async url => {
    const response = await fetch(url);
    return response.json();
}

const Network = Object.freeze({
    GET
});

export default Network;