import axios from "axios";
export const getCategories = async () => {
  // console.log("IN login.js", authtoken);
  return await axios.get(`${process.env.REACT_APP_API}/categories`);
};

export const getCategory = async (slug) => {
  // console.log("IN login.js", authtoken);
  return await axios.get(`${process.env.REACT_APP_API}/category/${slug}`);
};

export const removeCategory = async (slug, authtoken) => {
  // console.log("IN login.js", authtoken);
  return await axios.delete(`${process.env.REACT_APP_API}/category/${slug}`, {
    headers: {
      authtoken,
    },
  });
};
export const updateCategory = async (slug, category, authtoken) => {
  // console.log("IN login.js", authtoken);
  return await axios.put(
    `${process.env.REACT_APP_API}/category/${slug}`,
    category,
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const createCategory = async (category, authtoken) => {
  // console.log("IN login.js", authtoken);
  return await axios.post(`${process.env.REACT_APP_API}/category`, category, {
    headers: {
      authtoken,
    },
  });
};

export const getCategorySubs = async (_id) => {
  // console.log("IN login.js", authtoken);
  return await axios.get(`${process.env.REACT_APP_API}/category/subs/${_id}`);
};
