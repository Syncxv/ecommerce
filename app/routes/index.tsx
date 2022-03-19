import { useLoaderData } from "remix";
import { db } from "~/utils/db.server";

export const loader = async () => {
    console.log(db);
    const test = db.TEST.findMany();
    console.log(test);
    return { hi: "hehe", test: test || "bruh" };
};
export default function Index() {
    const hi = useLoaderData();
    console.log(hi);
    return (
        <div>
            <h1>hi</h1>
        </div>
    );
}
