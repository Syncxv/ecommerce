import { sign } from "jsonwebtoken";
import { Admin } from "../../types";

export const createAcessToken = (admin: Admin) => {
    return sign({ admin: { ...admin, password: undefined } }, process.env.ACCESS_TOKEN_SECRET!, {
        expiresIn: "10h",
    });
};

export const createRefreshToken = (admin: Admin) => {
    return sign({ admin: { ...admin, password: undefined } }, process.env.REFRESH_TOKEN_SECRET!, {
        expiresIn: "7d",
    });
};
