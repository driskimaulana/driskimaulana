import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "u6ao8uri",
    dataset: "production",
    useCdn: true,
});