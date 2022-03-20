import { db } from "../db.server";
import { commitSession, getSession } from "../session.server";
import argon from "argon2";
import { createAcessToken } from "./index.server";
import { redirect } from "remix";
interface LoginArgumnets {
    username: string;
    password: string;
    request: Request;
}
export const login = async ({ username, password, request }: LoginArgumnets) => {
    const admin = await db.admin.findFirst({
        where: { username },
    });
    if (!admin) return null;
    const valid = await argon.verify(admin.password, password);
    if (!valid) return null;
    const token = createAcessToken(admin);
    let session = await getSession(request.headers.get("Cookie"));
    session.set("token", token);
    return redirect("/admin/dashboard", {
        headers: {
            "Set-Cookie": await commitSession(session),
        },
    });
};
