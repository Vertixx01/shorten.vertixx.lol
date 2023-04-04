import client from "..";

const getRedirect = async (url: string) => {
    const { data, error } = await client
        .from("urls")
        .select("from")
        .eq("to", url)
        .single();
    return { data, error };
}

export default getRedirect;
