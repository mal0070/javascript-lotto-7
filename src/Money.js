import { Console } from "@woowacourse/mission-utils";

class Money {
    static async getMoney(){
        Console.print("구입금액을 입력해 주세요.");
        const money = Number(await Console.readLineAsync(''));
        this.validateMoney(money);
        return money;
    }

    static validateMoney(money){
        if(Number.isNaN(money) ||money % 1000 != 0 || money <= 0){
            throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
        }
    } 
}

export default Money;