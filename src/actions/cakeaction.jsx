import { BUY_CAKE } from "../constants/constants";

export function buyCake(number) {
    return {
        type: BUY_CAKE,
        number: number
    }
}


