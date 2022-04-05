import axios from "axios";

const getData = async(number) => {
    const { data: users } = await axios(`https://jsonplaceholder.typicode.com/users/1`);
    const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=1`);

    return { "users": users, "posts": posts };

};

export default getData;