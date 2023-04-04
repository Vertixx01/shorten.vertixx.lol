import client from "..";

const genShorturl = async (url: string) => {
  const { data, error } = await client
    .from("urls")
    .insert([{ from: url, to: Math.random().toString(36).substr(2, 5) }])
    .select("to")
    .single();

  return { data, error };
};

export default genShorturl;
